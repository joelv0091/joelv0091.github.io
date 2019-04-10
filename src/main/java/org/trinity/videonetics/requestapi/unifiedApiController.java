package org.trinity.videonetics.requestapi;

// import java.awt.PageAttributes.MediaType;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.math.BigInteger;
import java.net.SocketTimeoutException;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.core.HttpHeaders;

import org.apache.commons.codec.binary.Base64;
import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.conn.HttpHostConnectException;
import org.apache.http.conn.ssl.NoopHostnameVerifier;
import org.apache.http.conn.ssl.SSLContextBuilder;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.impl.client.HttpClients;

import org.apache.log4j.Logger;
import org.json.JSONObject;
import org.springframework.http.MediaType;
import org.springframework.scheduling.annotation.Async;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.ClientResponse;
import com.sun.jersey.api.client.WebResource;
import com.trinity.util.LocalSettings;

@RestController
//@CrossOrigin
@RequestMapping(value = "/videonetcs/unified")
public class unifiedApiController {

	// public static String jSessionId = null;
	// public static String jSessionCookieValue = null;
	public static Map<String, Object> dataObject = new HashMap<String, Object>();
	public static Map<String, Object> videoenticsOb = new HashMap<String, Object>();
	public static Boolean racallboolean = false; // list
	public static String ErrorTextStack = "";
	public static String LogTextStackStack = "";

	Logger logger = Logger.getLogger(unifiedApiController.class);

	@RequestMapping(value = "session/reset", method = RequestMethod.GET, headers = "Accept=application/json")
	public boolean sessionReset() {
		Map<String, Object> responseData = new HashMap<>();
		/* logger.info */
		addLogTextStack("session/reset All");
		try {

			for (String key : videoenticsOb.keySet()) {
				videoenticsOb.put(key, null);
			}

			return true;
		} catch (Exception e) {
			responseData.put("mstatus", false);
			return false;
			// addErrorExceptnTextStack("Error in get response ", e);
		}

	}

	@RequestMapping(value = "startLive", method = RequestMethod.POST, headers = "Accept=application/json")
	public Map<String, Object> startLiveData(@RequestBody Map<String, Object> data) {
		Map<String, Object> responseData = new HashMap<>();
		/* logger.info */
		addLogTextStack("startLive");
		try {
			Map<String, Object> body = (Map<String, Object>) data.get("body");
			String baseUrl = (String) data.get("url");
			Integer serverId = (data.get("serverId") instanceof Integer) ? ((Integer) data.get("serverId"))
					: (Integer.parseInt((String) data.get("serverId")));

			addLogTextStack("baseUrl------->" + baseUrl);
			addLogTextStack("serverId---->" + serverId);
			if (baseUrl != null) {
				responseData = callApi(baseUrl, serverId, "/startlive", body, 1);
			}

		} catch (Exception e) {
			responseData.put("mstatus", false);
			addErrorExceptnTextStack("Error in get response ", e);
		}
		return responseData;
	}

	@RequestMapping(value = "encoded/startLive", method = RequestMethod.POST, headers = "Accept=application/json")
	public Map<String, Object> encodedStartLiveData(@RequestBody Map<String, Object> data) {
		Map<String, Object> responseData = new HashMap<>();
		/* logger.info */
		addLogTextStack("startLive");
		try {
			Map<String, Object> body = (Map<String, Object>) data.get("body");
			String baseUrl = (String) data.get("url");
			Integer serverId = (data.get("serverId") instanceof Integer) ? ((Integer) data.get("serverId"))
					: (Integer.parseInt((String) data.get("serverId")));

			addLogTextStack("baseUrl------->" + baseUrl);
			addLogTextStack("serverId---->" + serverId);
			if (baseUrl != null) {
				responseData = callApi(baseUrl, serverId, "/encoded/startlive", body, 1);
			}

		} catch (Exception e) {
			responseData.put("mstatus", false);
			addErrorExceptnTextStack("Error in get response ", e);
		}
		return responseData;
	}

	@RequestMapping(value = "getCookie", method = RequestMethod.POST, headers = "Accept=application/json")
	public Map<String, Object> getCookie(@RequestBody Map<String, Object> data) {
		Map<String, Object> responseData = new HashMap<>();
		/* logger.info */
		addLogTextStack("startLive");
		try {
			Map<String, Object> body = (Map<String, Object>) data.get("body");
			String baseUrl = (String) data.get("url");
			Integer serverId = (data.get("serverId") instanceof Integer) ? ((Integer) data.get("serverId"))
					: (Integer.parseInt((String) data.get("serverId")));

			String userid = body.get("userid").toString();
			addLogTextStack("baseUrl------->" + baseUrl);
			addLogTextStack("serverId---->" + serverId);
			if (baseUrl != null) {
				responseData.put("data", videoenticsOb.get(userid));
			}

		} catch (Exception e) {
			responseData.put("mstatus", false);
			addErrorExceptnTextStack("Error in get response ", e);
		}
		return responseData;
	}

	@RequestMapping(value = "startArchive", method = RequestMethod.POST, headers = "Accept=application/json")
	public Map<String, Object> archiveLive(@RequestBody Map<String, Object> data) {
		Map<String, Object> responseData = new HashMap<>();
		/* logger.info */
		addLogTextStack("archiveLive");
		try {
			Map<String, Object> body = (Map<String, Object>) data.get("body");
			String baseUrl = (String) data.get("url");
			Integer serverId = (data.get("serverId") instanceof Integer) ? ((Integer) data.get("serverId"))
					: (Integer.parseInt((String) data.get("serverId")));

			addLogTextStack("baseUrl------->" + baseUrl);
			addLogTextStack("serverId---->" + serverId);
			if (baseUrl != null) {
				responseData = callApi(baseUrl, serverId, "/startarchive", body, 1);
			}

		} catch (Exception e) {
			responseData.put("mstatus", false);
			addErrorExceptnTextStack("Error in get response ", e);
		}
		return responseData;
	}

	/*
	 * 
	 * @RequestMapping(value = "getVideo", method = RequestMethod.POST, headers =
	 * "Accept=application/json") public @ResponseBody byte[] getImage() throws
	 * IOException { InputStream in = getClass()
	 * .getResourceAsStream("/com/baeldung/produceimage/image.jpg"); return
	 * IOUtils.toByteArray(in); }
	 * 
	 * http://192.168.1.173:7080/REST/5/startarchive/2/1024/720/1547806350000/0
	 * 
	 */

	@RequestMapping(value = "getVideo", method = RequestMethod.POST, headers = "Accept=application/json")
	public Map<String, Object> getVideo(@RequestBody Map<String, Object> data) {
		Map<String, Object> responseData = new HashMap<>();
		/* logger.info */
		addLogTextStack("getVideo");
		try {
			Map<String, Object> body = (Map<String, Object>) data.get("body");
			String baseUrl = (String) data.get("url");
			String base = ((String) data.get("url")).replace("/REST/", "");
			Integer serverId = (data.get("serverId") instanceof Integer) ? ((Integer) data.get("serverId"))
					: (Integer.parseInt((String) data.get("serverId")));

			// Integer serverId = (Integer) data.get("serverId");
			String from = (String) body.get("from");
			addLogTextStack("from " + from);
			String to = (String) body.get("to");
			addLogTextStack("to " + to);
			String channelid = (String) body.get("channelid");
			addLogTextStack("channelid " + channelid);
			if (baseUrl != null) {
				// http://192.168.1.173:7080/REST/1/channel/clip/2/1543314000000/1543314240000
				responseData = callApi(baseUrl, serverId, "/channel/clip/" + channelid + "/" + from + "/" + to, body,
						2);
				Map<String, Object> outputdata = (Map<String, Object>) responseData.get("data");
				addLogTextStack("path ---- " + base + outputdata.get("path"));
				outputdata.replace("path", base + outputdata.get("path"));
				responseData.replace("data", outputdata);

			}

		} catch (Exception e) {
			responseData.put("mstatus", false);
			e.printStackTrace();
			addErrorExceptnTextStack("", e);//
			// addErrorExceptnTextStack("Error in get response ", e);
		}
		return responseData;
	}

	@RequestMapping(value = "dummy/getVideo", method = RequestMethod.POST, headers = "Accept=application/json")
	public Map<String, Object> getDummyVideo(@RequestBody Map<String, Object> data) {
		Map<String, Object> responseData = new HashMap<>();
		/* logger.info */
		addLogTextStack("getDummyVideo");
		try {
			Map<String, Object> body = (Map<String, Object>) data.get("body");
			String baseUrl = (String) data.get("url");
			String base = ((String) data.get("url")).replace("/REST/", "");

			Integer serverId = (Integer) data.get("serverId");
			String from = (String) body.get("from");
			addLogTextStack("from " + from);
			String to = (String) body.get("to");
			addLogTextStack("to " + to);
			String channelid = (String) body.get("channelid");
			addLogTextStack("channelid " + channelid);
			if (baseUrl != null) {
				// http://192.168.1.173:7080/evidence/ivms/archiveclip/2_1543322135639_1543314000000_1543314240000.mp4
				String dummy = "{\"data\":{\"path\":\"http://192.168.1.173:7080/evidence/ivms/archiveclip/2_1543322135639_1543314000000_1543314240000.mp4\",\"code\":2000,\"message\":\"Successfully Retrieved!\",\"status\":200,\"description\":\"OK\",\"uri\":\"http://upstream_api/REST//1//channel/clip/2/1543381893000/1543381923000\"},\"statusCode\":200,\"status\":true}";
				responseData = new Gson().fromJson(dummy, new TypeToken<HashMap<String, Object>>() {
				}.getType());

			}

		} catch (Exception e) {
			responseData.put("mstatus", false);
			e.printStackTrace();
			addErrorExceptnTextStack("", e);// e.printStackTrace();
			// addErrorExceptnTextStack("Error in get response ", e);
		}
		return responseData;
	}

	@RequestMapping(value = "keepAlive", method = RequestMethod.POST, headers = "Accept=application/json")
	public Map<String, Object> keepAlive(@RequestBody Map<String, Object> data) {
		Map<String, Object> responseData = new HashMap<>();
		try {
			Map<String, Object> body = (Map<String, Object>) data.get("body");
			String baseUrl = (String) data.get("url");
			Integer serverId = (data.get("serverId") instanceof Integer) ? ((Integer) data.get("serverId"))
					: (Integer.parseInt((String) data.get("serverId")));

			// Integer serverId = (Integer) data.get("serverId");
			if (baseUrl != null) {
				responseData = callApi(baseUrl, serverId, "/live/keepalive", body, 1);
			}

		} catch (Exception e) {
			responseData.put("mstatus", false);
			addErrorExceptnTextStack("Error in get response ", e);
		}
		return responseData;
	}

	@RequestMapping(value = "ptzAction", method = RequestMethod.POST, headers = "Accept=application/json")
	public Map<String, Object> ptzAction(@RequestBody Map<String, Object> data) {
		Map<String, Object> responseData = new HashMap<>();
		try {
			Map<String, Object> body = (Map<String, Object>) data.get("body");
			String baseUrl = (String) data.get("url");
			Integer serverId = (data.get("serverId") instanceof Integer) ? ((Integer) data.get("serverId"))
					: (Integer.parseInt((String) data.get("serverId")));

			// Integer serverId = (Integer) data.get("serverId");
			if (baseUrl != null) {
				responseData = callApi(baseUrl, serverId, "/controlptz", body, 1);
			}

		} catch (Exception e) {
			addErrorExceptnTextStack("Error in get response ", e);
		}
		return responseData;
	}

	@RequestMapping(value = "ptzPresetAction", method = RequestMethod.POST, headers = "Accept=application/json")
	public Map<String, Object> ptzPresetAction(@RequestBody Map<String, Object> data) {
		Map<String, Object> responseData = new HashMap<>();
		try {
			Map<String, Object> body = (Map<String, Object>) data.get("body");
			String baseUrl = (String) data.get("url");
			Integer serverId = (data.get("serverId") instanceof Integer) ? ((Integer) data.get("serverId"))
					: (Integer.parseInt((String) data.get("serverId")));

			// Integer serverId = (Integer) data.get("serverId");

			if (baseUrl != null) {
				responseData = callApi(baseUrl, serverId, "/gotopreset", body, 1);
			}

		} catch (Exception e) {
			responseData.put("mstatus", false);
			addErrorExceptnTextStack("Error in get response ", e);
		}
		return responseData;
	}
//BYPASS TO GET REQUEST
	@RequestMapping(value = "getPrestslists", method = RequestMethod.POST, headers = "Accept=application/json")
	public Map<String, Object> getPrestslists(@RequestBody Map<String, Object> data) {
		Map<String, Object> responseData = new HashMap<>();
		addLogTextStack("getpresets entered");
		try {
			Map<String, Object> body = (Map<String, Object>) data.get("body");
			String baseUrl = (String) data.get("url");
			Integer serverId = (data.get("serverId") instanceof Integer) ? ((Integer) data.get("serverId"))
					: (Integer.parseInt((String) data.get("serverId")));

			// Integer serverId = (Integer) data.get("serverId");
			addLogTextStack("serverId " + serverId);
			String channelid = (String) body.get("channelid");
			addLogTextStack("channelid " + channelid);

			if (baseUrl != null) {
				responseData = callApi(baseUrl, serverId, "/channel/" + channelid + "/getpresets", body, 2);
			}

		} catch (Exception e) {
			addLogTextStack("getpresets error");
			responseData.put("mstatus", false);
			addErrorExceptnTextStack("Error in get getPrestslists response ", e);
		}
		return responseData;
	}


	@RequestMapping(value = "getImageStream", method = RequestMethod.POST, headers = "Accept=application/json")
	public Map<String, Object> getImageStream(@RequestBody Map<String, Object> data) {
		Map<String, Object> responseData = new HashMap<>();
		addLogTextStack("getImageStream entered");
		try {
			Map<String, Object> body = (Map<String, Object>) data.get("body");
			String baseUrl = (String) data.get("url");
			Integer serverId = (data.get("serverId") instanceof Integer) ? ((Integer) data.get("serverId"))
					: (Integer.parseInt((String) data.get("serverId")));

			// Integer serverId = (Integer) data.get("serverId");
			addLogTextStack("serverId " + serverId);
			String channelid = (String) body.get("channelid");
			addLogTextStack("channelid " + channelid);

			if (baseUrl != null) {
				//http://vapiserver.videonetics.com:7080//REST/1/encoded/stream/8
				responseData = callApi(baseUrl, serverId, "/encoded/stream/" + channelid , body, 2);
			}

		} catch (Exception e) {
			addLogTextStack("getpresets error");
			responseData.put("mstatus", false);
			addErrorExceptnTextStack("Error in get getImageStream response ", e);
		}
		return responseData;
	}
	
	@RequestMapping(value = "getCurrentSnap", method = RequestMethod.POST, headers = "Accept=application/json")
	public Map<String, Object> getCurrentSnap(@RequestBody Map<String, Object> data) {
		Map<String, Object> responseData = new HashMap<>();
		addLogTextStack("getCurrentSnap entered");
		try {
			Map<String, Object> body = (Map<String, Object>) data.get("body");
			String baseUrl = (String) data.get("url");
			Integer serverId = (data.get("serverId") instanceof Integer) ? ((Integer) data.get("serverId"))
					: (Integer.parseInt((String) data.get("serverId")));

			// Integer serverId = (Integer) data.get("serverId");
			addLogTextStack("serverId " + serverId);
			String channelid = (String) body.get("channelid");
			addLogTextStack("channelid " + channelid);

			if (baseUrl != null) {
				responseData = callApi(baseUrl, serverId, "/channel/" + channelid + "/snap", body, 3);
			}

		} catch (Exception e) {
			addLogTextStack("getCurrentSnap error");
			responseData.put("mstatus", false);
			addErrorExceptnTextStack("Error in get getCurrentSnap response ", e);
		}
		return responseData;
	}

	public Map<String, Object> callApi(String BaseUrl, int serverId, String apiUrl, Map<String, Object> bodyData,
			int Identifier) {
		/* logger.info */
		addLogTextStack("callApi-" + apiUrl);
		Map<String, Object> result = new HashMap<>();
		Map<String, Object> loginBody = new HashMap<String, Object>();
		String userid = bodyData.get("userid").toString();
		loginBody.put("userid", userid);
		loginBody.put("password", bodyData.get("password"));
		try {
			if (getSession(BaseUrl, loginBody).get("jsessionid") == null) {
				result = getSession(BaseUrl, loginBody); // log4
				/* logger.info */
				addLogTextStack(apiUrl + "@@" + "JSession #####" + result.get("jsessionid"));
				/* logger.info */
				addLogTextStack(apiUrl + "@@" + "userid #####" + bodyData.get("userid").toString());
				videoenticsOb.put(userid, result.get("jsessionid"));

				/* logger.info */
				// addLogTextStack(apiUrl + "@@" + "JSession Id generated" + (boolean)
				// result.get("status"));
			} else {
				/* logger.info */
				addLogTextStack(apiUrl + "@@" + "skiped login");
			}
		} catch (InterruptedException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
			addErrorExceptnTextStack("", e1);
		}
		
		if(videoenticsOb.get(userid) == null )
		{
			return result;
		}
			
			
		String ssessionValue = videoenticsOb.get(userid).toString();

		try {
			ObjectMapper mapper = new ObjectMapper();
			bodyData.put("jsessionid", ssessionValue);
result.put("jsessionid",ssessionValue);
			addLogTextStack(apiUrl + "@@" + "JSession Id  in videoenticsOb  is " + ssessionValue);
			String jsonResp = mapper.writeValueAsString(bodyData);
			/* logger.info */
			// addLogTextStack(apiUrl + "@@" + "Call api Body is--- " + jsonResp);

			Map<String, Object> headderData = new HashMap<>();
			headderData.put("Content-type", "application/json");
			headderData.put(HttpHeaders.COOKIE, "VSESSIONID=" + ssessionValue);

			HttpResponse response = null;

			if (Identifier == 1) {
				response = getPostRequestData(BaseUrl + "/" + serverId + "/" + apiUrl, jsonResp, headderData);
			} else if (Identifier == 2) {
				response = getGetRequestData(BaseUrl + "/" + serverId + "/" + apiUrl, headderData);
			} else if (Identifier == 3) {
				result = getGetImageResponse(BaseUrl + "/" + serverId + "/" + apiUrl, headderData);
				return result;
			}
			/* logger.info */
			addLogTextStack(apiUrl + "@@" + "Call  api call is--- " + BaseUrl + "/" + serverId + "/" + apiUrl);

			int statusCode = response.getStatusLine().getStatusCode();
			result.put("statusCode", statusCode);
			// /*logger.info*/ addLogTextStack("response data "
			// +response.getEntity().toString());
			Map<String, Object> datares = (Map<String, Object>) mapper.readValue(response.getEntity().getContent(),
					Object.class);
			result.put("data", datares);
			if (statusCode == 200) {
				result.put("status", true);
				racallboolean = false;
				/* logger.info */
				addLogTextStack(apiUrl + "@@" + " Rest call successfull ");
			} else if (statusCode == 401) {

				if (racallboolean == false) {
					/* logger.info */
					addLogTextStack(apiUrl + "@@" + " $$$$$$$$$$$$$--------racallboolean----False ");
					racallboolean = true;
					try {
						// jSessionId = null;
						videoenticsOb.put(userid, null);

						callApi(BaseUrl, serverId, apiUrl, bodyData, Identifier);

					} catch (Exception e) {

						addErrorExceptnTextStack("Error in   call callApi-----", e);
					}
				}

			} else if (statusCode == 400) {
				// BAD REQUEST
				// Could not take any action on streaming. Invalid streaming session.
				racallboolean = false;
				/* logger.info */
				addLogTextStack(" BAD REQUEST");
			} else {
				result.put("status", false);
				/* logger.info */
				addLogTextStack(" Rest call failed ");
			}
		} catch (Exception e) {
			result.put("status", false);
			result.put("message", "Error in api call");
			addErrorExceptnTextStack("Error in api call ", e);
		}

		return result;
	}

	private HttpResponse getPostRequestData(String url, String bodyData, Map<String, Object> headerDatas) {
		HttpResponse response = null;
		try {
			RequestConfig requestConfig = RequestConfig.custom().setConnectTimeout(30 * 1000).build();
			HttpClient client = HttpClients.custom().setSSLHostnameVerifier(new NoopHostnameVerifier())
					// .setSslcontext(new SSLContextBuilder().loadTrustMaterial(null,
					// (x509Certificates, s) -> true).build())
					.setDefaultRequestConfig(requestConfig).build();
			/*
			 * RequestConfig requestConfig = RequestConfig.custom().setConnectTimeout(30 *
			 * 1000).build(); HttpClient httpClient =
			 * HttpClientBuilder.create().setDefaultRequestConfig(requestConfig).build();
			 */
			addLogTextStack(" url " + url);
			HttpPost post = new HttpPost(url);
			Set<String> keys = headerDatas.keySet();
			for (String key : keys) {
				post.setHeader(key, headerDatas.get(key).toString());
			}
			addLogTextStack(" bodyData " + bodyData.toString());
			StringEntity postingString = new StringEntity(bodyData);
			post.setEntity(postingString);
			
			
			 try {
				 response = client.execute(post);
			    } catch (SocketTimeoutException ste) {
			        throw new RuntimeException("Socket timeout: " + ste.getMessage(), ste);
			    } catch (HttpHostConnectException connectEx) {
			        throw new RuntimeException("Connection error: " + connectEx.getMessage(), connectEx);
			    } catch (IOException e) {
			        throw new RuntimeException("Error while executing http request: " + e.getMessage(), e);
			    }
			 finally
		        { 
				 	System.out.println(url+" - Request finally block executed"); 
		           
		        } 
		} catch (Exception e) {
			addErrorExceptnTextStack("Error in post Requset :-", e);
		}
		return response;
	}

	@RequestMapping(value = "testURL", method = RequestMethod.GET, produces = MediaType.IMAGE_JPEG_VALUE)
	public HttpResponse callingGetRequset2(@RequestParam("user") String user) {
		Map<String, Object> headderData = new HashMap<>();
		headderData.put("Content-type", "application/json");
		System.out.println("Sess->" + videoenticsOb.get(user).toString());
		headderData.put(HttpHeaders.COOKIE, "VSESSIONID=" + videoenticsOb.get(user).toString());
		return getGetRequestData("http://192.168.1.173:7080/REST/5/channel/2/snap", headderData);
	}

	@RequestMapping(value = "/foo", method = RequestMethod.GET, produces = MediaType.IMAGE_JPEG_VALUE)
	void handleFoo(HttpServletResponse response, @RequestParam("session") String session) throws IOException {
		// Map < String,Object > headderData = new HashMap < >();
		// headderData.put("Content-type", "application/json");
		System.out.println("Sess->" + session);
		// headderData.put(HttpHeaders.COOKIE, "VSESSIONID=" +
		// videoenticsOb.get(("joel")).toString() ) ;
		Cookie cookie = new Cookie("VSESSIONID", session);
		cookie.setHttpOnly(true);
		response.addCookie(cookie);

		// response.addHeader("Content-type", "application/json");
		// response.addHeader("Cookie", "VSESSIONID=" +session);

		/*
		 * 
		 * header("HTTP/1.1 200 OK"); header("Pragma: public");
		 * header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
		 * 
		 * // The optional second 'replace' parameter indicates whether the header //
		 * should replace a previous similar header, or add a second header of // the
		 * same type. By default it will replace, but if you pass in FALSE // as the
		 * second argument you can force multiple headers of the same type.
		 * header("Cache-Control: private", false);
		 * 
		 * header("Content-type: " . $mimeType);
		 * 
		 * // $strFileName is, of course, the filename of the file being downloaded. //
		 * This won't have to be the same name as the actual file.
		 * header("Content-Disposition: attachment; filename=\"{$strFileName}\"");
		 * 
		 * header("Content-Transfer-Encoding: binary"); header("Content-Length: " .
		 * mb_strlen($strFile));
		 */
		response.sendRedirect(("http://192.168.1.173:7080/REST/5/channel/2/snap"));
	}

	@RequestMapping(value = "testImage", method = RequestMethod.GET, produces = MediaType.IMAGE_JPEG_VALUE)
	public HttpResponse testImage(@RequestParam("user") String user) {
		Map<String, Object> headderData = new HashMap<>();
		headderData.put("Content-type", "application/json");
		System.out.println("Sess->" + videoenticsOb.get(user).toString());
		headderData.put(HttpHeaders.COOKIE, "VSESSIONID=" + videoenticsOb.get(user).toString());
		HttpResponse resp = getGetRequestData("http://192.168.1.173:7080/REST/5/channel/2/snap", headderData);
		// resp.sendRedirect("http://jenkov.com");

		return resp;

	}

	private HttpResponse getGetRequestData(String url, Map<String, Object> headerDatas) {
		HttpResponse response = null;
		try {
			RequestConfig requestConfig = RequestConfig.custom().setConnectTimeout(30 * 1000).build();
			HttpClient client = HttpClients.custom().setSSLHostnameVerifier(new NoopHostnameVerifier())
					// .setSslcontext(new SSLContextBuilder().loadTrustMaterial(null,
					// (x509Certificates, s) -> true).build())
					.setDefaultRequestConfig(requestConfig).build();
			/*
			 * RequestConfig requestConfig = RequestConfig.custom().setConnectTimeout(30 *
			 * 1000).build(); HttpClient httpClient =
			 * HttpClientBuilder.create().setDefaultRequestConfig(requestConfig).build();
			 */
			addLogTextStack(" url " + url);
			HttpGet GetRqst = new HttpGet(url);
			Set<String> keys = headerDatas.keySet();
			for (String key : keys) {
				GetRqst.setHeader(key, headerDatas.get(key).toString());
			}
			// addLogTextStack(" bodyData "+bodyData.toString());
			// StringEntity postingString = new StringEntity(bodyData);
			// GetRqst.setEntity(postingString);
			response = client.execute(GetRqst);

		} catch (Exception e) {
			addErrorExceptnTextStack("Error in post Requset :-", e);
		}
		return response;
	}

	private Map<String, Object> getGetImageResponse(String url, Map<String, Object> headerDatas) {
		HttpResponse response = null;
		Map<String, Object> result = new HashMap<>();

		try {
			DefaultHttpClient httpClient = new DefaultHttpClient();// settimout
			System.out.println(url + "----URL");
			HttpGet getRequest = new HttpGet(url);
			// HttpGet getRequest = new
			// HttpGet("http://192.168.1.173:7080/REST/5/channel/2/snap");
			// getRequest.addHeader("accept", "application/json");
			// getRequest.addHeader("Cookie",
			// "VSESSIONID=444f65bd5f0b1c14698bead61fe9e083");
			Set<String> keys = headerDatas.keySet();
			for (String key : keys) {
				getRequest.addHeader(key, headerDatas.get(key).toString());
			}
			response = httpClient.execute(getRequest);

			if (response.getStatusLine().getStatusCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + response.getStatusLine().getStatusCode());
			}
			InputStream finput = response.getEntity().getContent();
			byte[] imageBytes = new byte[737280 * 50];
			finput.read(imageBytes, 0, imageBytes.length);
			finput.close();
			String imageStr = Base64.encodeBase64String(imageBytes);
			// System.out.println(imageStr);
			result.put("mstatus", true);
			result.put("data", imageStr);
			httpClient.getConnectionManager().shutdown();
		} catch (ClientProtocolException e) {
			result.put("mstatus", false);
			e.printStackTrace();
		} catch (IOException e) {
			result.put("mstatus", false);
			e.printStackTrace();
		}

		return result;
	}

	@Async
	public Map<String, Object> getSession(String apiUrl, Map<String, Object> body) throws InterruptedException {
		Map<String, Object> result = new HashMap<>();
		String userid = (String) body.get("userid");
		/* logger.info */
		addLogTextStack("Generating calling jsessionId first time");

		if ((String) videoenticsOb.get(userid) != null) {
//			result.put("jsessionid", vsessionValue);
			result.put("jsessionid", (String) videoenticsOb.get(userid));
			result.put("status", true);

		} else {

			try {
				// Map<String ,Object> requestData=new HashMap<String ,Object>();

				String jsonObject = new JSONObject(body).toString();
				Map<String, Object> headderData = new HashMap<>();
				headderData.put("Content-type", "application/json");

				/*
				 * addLogTextStack("WSO2"+ LocalSettings.getInstance().getApiUrl());
				 * HttpResponse response =
				 * getPostRequestData(LocalSettings.getInstance().getApiUrl()+"/user/login",
				 * jsonObject,headderData);
				 */
				/* logger.info */
				addLogTextStack("Login api URL----" + apiUrl + "user/login");
				/* logger.info */
				addLogTextStack("jsonObject ----" + jsonObject);
				HttpResponse response = getPostRequestData(apiUrl + "user/login", jsonObject, headderData);
				ObjectMapper mapper = new ObjectMapper();
				Map<String, Object> res = null;
				if (response != null) {
					int statusCode = response.getStatusLine().getStatusCode();
					res = (Map<String, Object>) mapper.readValue(response.getEntity().getContent(), Object.class);
					/* logger.info */
					addLogTextStack("login @@@@@" + "statusCode ---" + statusCode);
					// String responseJSON = EntityUtils.toString(response.getEntity(),
					// UTF8_CHARSET);
					// /*logger.info*/ addLogTextStack("response ---"+responseJSON);
					if (statusCode == 200) {
						JSONObject responseJsonData = new JSONObject(response);

						if (res.get("code") != null && ((Integer) res.get("code") == 2002)
								&& (Integer) res.get("status") == 200) { // data.result[0].VSESSIONID;
							List<Object> response_result = (List<Object>) res.get("result");
							Map<String, Object> responseJsonData2 = (Map<String, Object>) response_result.get(0);
							String vsessionValue = (String) responseJsonData2.get("VSESSIONID");
							// jSessionId = vsessionValue;
							/* logger.info */
							// addLogTextStack("login @@@@@" + "jSessionId 200---" + jSessionId);
							result.put("jsessionid", vsessionValue);
							result.put("status", true);
						}

					} else {
						result.put("status", false);
						result.put("statusCode", statusCode);
						BufferedReader rd = new BufferedReader(
								new InputStreamReader(response.getEntity().getContent()));
						result.put("message", rd.readLine());
					}
				} else {
					/* logger.info */
					addLogTextStack("response NULL---");
				}

				videoenticsOb.put(userid, result.get("jsessionid")); // new

			} catch (Exception e) {
				result.put("status", false);
				result.put("message", "Error in get New Access Token");
				addErrorExceptnTextStack("Error in get Access token:-", e);
			}

		}

		/* logger.info */
		result.put("jsessionid", result.get("jsessionid"));
		addLogTextStack("return value: " + result.get("jsessionid"));
		return result;
	}

	@RequestMapping(value = "errors", method = RequestMethod.GET, headers = "Accept=application/json")
	public String printErrors() {
		return ErrorTextStack;
	}

	@RequestMapping(value = "logs", method = RequestMethod.GET, headers = "Accept=application/json")
	public String printLogs() {
		return LogTextStackStack;
	}

	private boolean addErrorExceptnTextStack(String s, Exception ex) {
		StringWriter errors = new StringWriter();
		ex.printStackTrace(new PrintWriter(errors));
		logger.error(s, ex);
		ex.printStackTrace();
		ErrorTextStack += "\n" + "\n" + s + "\n" + errors.toString();
		return true;

	}

	private boolean addLogTextStack(String s) {

		LogTextStackStack += "\n" + "\n" + s;
		System.out.println(s);
		return true;

	}

}