
package org.joelv0091.html;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * Servlet Filter implementation class LoginFilter
 */
public class SessionManager implements Filter {

	public static final String SESSION_COMPANY = "company";
	public static final String SESSION_LAT = "lat";
	public static final String SESSION_LNG = "lng";

	public SessionManager() {

	}

	/**
	 * @see Filter#init(FilterConfig)
	 */
	public void init(FilterConfig fConfig) throws ServletException {
	}

	/**
	 * @see Filter#doFilter(ServletRequest, ServletResponse, FilterChain)
	 */
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		Map<String, Object> result = new HashMap<String, Object>();
		HttpServletRequest httpRequest = (HttpServletRequest) request;
		HttpServletResponse httpResponse = (HttpServletResponse) response;
		HttpSession session = httpRequest.getSession();
		boolean isAjax = "XMLHttpRequest".equals(((HttpServletRequest) request).getHeader("X-Requested-With"));

		boolean authenticated = false;
		Object res = session.getAttribute(SessionManager.SESSION_COMPANY);
		if (res != null) {
			authenticated = true;
		}

		int studyCase = isAjax ? authenticated ? 1 : 2 : authenticated ? 3 : 4;

		if (httpRequest.getRequestURI().toLowerCase().contains("login")) {
			studyCase = 5;
		}
		if (httpRequest.getRequestURL().toString().contains("css")
				|| httpRequest.getRequestURL().toString().endsWith("js")) {
			studyCase = 6;
		}
		if (httpRequest.getRequestURL().toString().contains("fonts")
				|| httpRequest.getRequestURL().toString().endsWith("img")) {
			studyCase = 7;
		}
		if (httpRequest.getRequestURL().toString().contains("img")
				|| httpRequest.getRequestURL().toString().endsWith("png")
				|| httpRequest.getRequestURL().toString().endsWith("jpg")
				|| httpRequest.getRequestURL().toString().endsWith("gif")) {
			studyCase = 8;
		}
		if (httpRequest.getRequestURI().toString().equals("/" + httpRequest.getContextPath())) {
			studyCase = 9;
		}

		System.out.println("Study case-" + studyCase + ":httpRequest.getRequestURL():" + httpRequest.getRequestURL()
				+ " & httpRequest.getRequestURI()  :" + httpRequest.getRequestURI());
		switch (studyCase) {
		case 1:
			// result.put("sessionvalid",true);
			break;
		case 2:
			result.put("sessionvalid", false);
			result.put("message", "Session has been expired.");
			httpResponse.setStatus(401);
			break;
		case 3:
			break;
		case 4:
			httpResponse.sendRedirect(httpRequest.getContextPath() + "/login?sessionTerminate=success");
			return;
		default:
		}
		if (result.size() > 0) {
			ObjectMapper mapper = new ObjectMapper();
			byte[] b = mapper.writeValueAsString(result).getBytes();
			httpResponse.getOutputStream().write(b, 0, b.length);
		} else {
			chain.doFilter(request, response);
		}
	}

	/**
	 * @see Filter#destroy()
	 */
	public void destroy() {

	}

}
