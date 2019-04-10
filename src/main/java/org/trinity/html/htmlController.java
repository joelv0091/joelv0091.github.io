package org.trinity.html;


import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.conn.ssl.NoopHostnameVerifier;
import org.apache.http.conn.ssl.SSLContextBuilder;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.HttpClients;
import org.apache.log4j.Logger;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.trinity.html.SessionManager;

import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
//@CrossOrigin
@RequestMapping(value = "/html")
public class htmlController {

	
Logger logger=Logger.getLogger(htmlController.class);



@RequestMapping(value = "checkLogin")
public @ResponseBody Map<String, Object> login(@RequestParam Integer company, @RequestParam String username,
		@RequestParam String password,@RequestParam String lat,@RequestParam String lng,
		HttpServletRequest request, HttpServletResponse response) {

	Map<String, Object> result = new HashMap<>();
System.out.println("Datsa"+lat);
	try {
		if (username.equals("admin") && password.equals("123456")) {
			HttpSession session = request.getSession(true);
			session.setAttribute(SessionManager.SESSION_COMPANY, company);
			session.setAttribute(SessionManager.SESSION_LAT, lat);
			session.setAttribute(SessionManager.SESSION_LNG, lng);
			result.put("login", "success");
		} else {
			result.put("loginErrorMessage", "Wrong username or password");
		}
	} catch (Exception e) {
		e.printStackTrace();
	}
	return result;
}

@RequestMapping(value = "honeywell")
public @ResponseBody Map<String, Object> honeywell(
		HttpServletRequest request, HttpServletResponse response) {

	Map<String, Object> result = new HashMap<>();
System.out.println("http://dvmservera/hwdvswebserver/videoplayerhost.asp?cameranumber=0&siteid=1");

	try {
		
		if(true)
		{
			result.put("login", "success");
		} else {
			result.put("loginErrorMessage", "Wrong username or password");
		}
	} catch (Exception e) {
		e.printStackTrace();
	}
	return result;
}


public Map<String,Object> callApi(String apiUrl,String bodyData){
	Map<String,Object> result=new HashMap<>();
	


		try {
			 Map<String,Object> headderData=new HashMap<>();
			 headderData.put("Content-type", "application/json");
			// logger.info("accessToken in api call is "+accessToken);
			// headderData.put("Authorization", "Bearer "+accessToken);
			 ObjectMapper mapper=new ObjectMapper();
			 HttpResponse response = getPostRequestData(apiUrl,
					 bodyData,headderData);
			/* BufferedReader rd = new BufferedReader(new InputStreamReader(response.getEntity().getContent()));
			 String responseData=rd.readLine();*/
			 int statusCode=response.getStatusLine().getStatusCode();
			 result.put("statusCode",statusCode);
			 result.put("data",mapper.readValue(response.getEntity().getContent(), Object.class));
			 result.put("bodyPart",bodyData);
			// result.put("accesstoken",accessToken);
			 if(statusCode == 200){
				 result.put("status",true);
				 logger.info(" Rest call successfull ");
			}else{
				result.put("status",false);
				logger.info(" Rest call failed ");
			}
		} catch (Exception e) {
			result.put("status",false);
			result.put("message","Error in api call");
			logger.error("Error in api call ",e);
		}
		
	
	return result;
}

private HttpResponse getPostRequestData(String url,String bodyData,Map<String,Object> headerDatas){
	 HttpResponse response =null;
	try {
		HttpClient client = HttpClients.custom().setSSLHostnameVerifier(new NoopHostnameVerifier())
		      //   .setSslcontext(new SSLContextBuilder().loadTrustMaterial(null, (x509Certificates, s) -> true).build())
		         .build();
		 HttpPost post = new HttpPost(url);
		 Set<String> keys= headerDatas.keySet();
		 for(String key:keys){
			 post.setHeader(key, headerDatas.get(key).toString());	
		 }	
		 StringEntity postingString = new StringEntity(bodyData);	
		 post.setEntity(postingString);
		 response = client.execute(post);
		
	} catch (Exception e) {
		logger.error("Error in post Requset :-",e);
	}
	return response;
}
@RequestMapping(value = "/data", method = RequestMethod.POST,consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
public @ResponseBody List<Object> getPatientDetails(
		Object name) {


    List<Object> list = new ArrayList<Object>();
 //   list = service.getPatient(name);
    list.add(1);
    list.add("Fghajaks");
    return list;
}

}
