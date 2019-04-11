package org.trinity.joelv0091.requestapi;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.conn.ssl.NoopHostnameVerifier;
import org.apache.http.conn.ssl.SSLContextBuilder;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.HttpClients;




import org.apache.log4j.Logger;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.joelv0091.util.LocalSettings;
import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.ClientResponse;
import com.sun.jersey.api.client.WebResource;

@RestController
//@CrossOrigin
@RequestMapping(value = "/streamController")
public class RequestController {

 public static String jSessionId = null;
 public static String jSessionCookieValue = null;
 public static Map < String, Object > videoenticsOb = new HashMap < String, Object > ();
 public static Boolean racallboolean = false; // list

 Logger logger = Logger.getLogger(RequestController.class);
 @RequestMapping(value = "getCookie", method = RequestMethod.POST, headers = "Accept=application/json")
 public Map < String, Object > toLogin(@RequestBody Map < String, Object > data) {
  Map < String, Object > responseData = null;
  try {
   Map < String, Object > body = (Map < String, Object > ) data.get("body");
   String baseUrl = (String) data.get("url");
   Boolean retry = (Boolean) data.get("retry");
   if (baseUrl != null && retry != false && jSessionCookieValue != null) {
    System.out.println();
    /*logger.info*/
    System.out.println("current CookieValue----" + jSessionCookieValue + " ***** Retry value---- " + retry);

    responseData = getJSessionCookieValue(baseUrl, body);

   } else {
    /*logger.info*/
    System.out.println("ELSE ");
    /*logger.info*/
    System.out.println("current CookieValue----" + jSessionCookieValue + "---***--retry value---- " + retry);
    responseData.put("VSESSIONID", jSessionCookieValue);
   }


  } catch (Exception e) {
   logger.error("Error in get response ", e);
  }
  return responseData;
 }



 @RequestMapping(value = "startLive", method = RequestMethod.POST, headers = "Accept=application/json")
 public Map < String, Object > startLiveData(@RequestBody Map < String, Object > data) {
  Map < String, Object > responseData = null;
  /*logger.info*/
  System.out.println("startLive");
  try {
   Map < String, Object > body = (Map < String, Object > ) data.get("body");
   String baseUrl = (String) data.get("url");
   if (baseUrl != null) {
    responseData = callApi(baseUrl, "/startlive", body);
   }


  } catch (Exception e) {
   logger.error("Error in get response ", e);
  }
  return responseData;
 }

 @RequestMapping(value = "keepAlive", method = RequestMethod.POST, headers = "Accept=application/json")
 public Map < String, Object > keepAlive(@RequestBody Map < String, Object > data) {
  Map < String, Object > responseData = null;
  try {
   Map < String, Object > body = (Map < String, Object > ) data.get("body");
   String baseUrl = (String) data.get("url");
   if (baseUrl != null) {
    responseData = callApi(baseUrl, "/live/keepalive", body);
   }


  } catch (Exception e) {
   logger.error("Error in get response ", e);
  }
  return responseData;
 }


 public Map < String, Object > callApi(String BaseUrl, String apiUrl, Map < String, Object > bodyData) {
  /*logger.info*/
  System.out.println("callApi");
  Map < String, Object > result = new HashMap < > ();
  Map < String, Object > loginBody = new HashMap < String, Object > ();
  String loginid = bodyData.get("loginid").toString();
  loginBody.put("loginid", loginid);
  loginBody.put("pass", bodyData.get("pass"));
  if (videoenticsOb == null || videoenticsOb.isEmpty() || videoenticsOb.get(loginid) == null) {
   result = getJSessionId(BaseUrl, loginBody); //log4
   /*logger.info*/
   System.out.println(apiUrl + "@@" + "JSession #####" + result.get("jsessionid"));
   /*logger.info*/
   System.out.println(apiUrl + "@@" + "loginid #####" + bodyData.get("loginid").toString());
   videoenticsOb.put(loginid, result.get("jsessionid"));

   /*logger.info*/
   System.out.println(apiUrl + "@@" + "JSession Id  generated" + (boolean) result.get("status"));
  } else {
   /*logger.info*/
   System.out.println(apiUrl + "@@" + "skiped login");
  }
  String ssessionValue = videoenticsOb.get(loginid).toString();

  try {
   ObjectMapper mapper = new ObjectMapper();
   bodyData.put("jsessionid", ssessionValue);
   /*logger.info*/
   System.out.println(apiUrl + "@@" + "JSession Id  in api call is " + jSessionId);
   /*logger.info*/
   System.out.println(apiUrl + "@@" + "JSession Id  in videoenticsOb  is " + ssessionValue);
   String jsonResp = mapper.writeValueAsString(bodyData);
   /*logger.info*/
   System.out.println(apiUrl + "@@" + "Call  api Body is--- " + jsonResp);
   
   
   Map < String, Object > headderData = new HashMap < > ();
   headderData.put("Content-type", "application/json");

   HttpResponse response = getPostRequestData(BaseUrl + apiUrl,
    jsonResp, headderData);
   /*logger.info*/
   System.out.println(apiUrl + "@@" + "Call  api call is--- " + BaseUrl + apiUrl);

   int statusCode = response.getStatusLine().getStatusCode();
   result.put("statusCode", statusCode);
   // /*logger.info*/ System.out.println("response data " +response.getEntity().toString());
   Map < String, Object > datares = (Map < String, Object > ) mapper.readValue(response.getEntity().getContent(), Object.class);
   result.put("data", datares);
   int ResponseStatusStatus =0;
	 ResponseStatusStatus =  ( datares.get("status") instanceof Integer)? ( (Integer) datares.get("status") ) :
		( Integer.parseInt( (String)  datares.get("status") ) );
 
   
   if (statusCode == 200) {
    result.put("status", true);
    racallboolean = false;
    /*logger.info*/
    System.out.println(apiUrl + "@@" + " Rest call successfull ");
   } else if (statusCode == 401 || ResponseStatusStatus == 401) {

    if (racallboolean == false) {
     /*logger.info*/
     System.out.println(apiUrl + "@@" + " $$$$$$$$$$$$$--------racallboolean----False ");
     racallboolean = true;
     try {
      jSessionId = null;
      videoenticsOb.put(loginid, null);

      callApi(BaseUrl, apiUrl, bodyData);


     } catch (Exception e) {

      logger.error("Error in   call callApi-----", e);
     }
    }



   } else if (statusCode == 400) {
    // BAD REQUEST
    //Could not take any action on streaming. Invalid streaming session.
    racallboolean = false;
    /*logger.info*/
    System.out.println(" BAD REQUEST");
   } else {
    result.put("status", false);
    /*logger.info*/
    System.out.println(" Rest call failed ");
   }
  } catch (Exception e) {
   result.put("status", false);
   result.put("message", "Error in api call");
   logger.error("Error in api call ", e);
  }


  return result;
 }

 private HttpResponse getPostRequestData(String url, String bodyData, Map < String, Object > headerDatas) {
  HttpResponse response = null;
  try {
   RequestConfig requestConfig = RequestConfig.custom().setConnectTimeout(30 * 1000).build();
   HttpClient client = HttpClients.custom().setSSLHostnameVerifier(new NoopHostnameVerifier())
    //.setSslcontext(new SSLContextBuilder().loadTrustMaterial(null, (x509Certificates, s) -> true).build())
    .setDefaultRequestConfig(requestConfig)
    .build();
   /*
    RequestConfig requestConfig = RequestConfig.custom().setConnectTimeout(30 * 1000).build();
   HttpClient httpClient = HttpClientBuilder.create().setDefaultRequestConfig(requestConfig).build();
    */
   HttpPost post = new HttpPost(url);
   Set < String > keys = headerDatas.keySet();
   for (String key: keys) {
    post.setHeader(key, headerDatas.get(key).toString());
   }
   StringEntity postingString = new StringEntity(bodyData);
   post.setEntity(postingString);
   response = client.execute(post);

  } catch (Exception e) {
   logger.error("Error in post Requset :-", e);
  }
  return response;
 }

 public Map < String, Object > getJSessionId(String apiUrl, Map < String, Object > body) {
  Map < String, Object > result = new HashMap < > ();
  /*logger.info*/
  System.out.println("Generating calling jsessionId first time");
  try {
   //	Map<String ,Object> requestData=new HashMap<String ,Object>();			 
   body.put("deviceimei", "");
   String jsonObject = new JSONObject(body).toString();
   Map < String, Object > headderData = new HashMap < > ();
   headderData.put("Content-type", "application/json");
   /*System.out.println("WSO2"+ LocalSettings.getInstance().getApiUrl());
		 HttpResponse response = getPostRequestData(LocalSettings.getInstance().getApiUrl()+"/user/login",
				 jsonObject,headderData);*/
   /*logger.info*/
   System.out.println("Login api----" + apiUrl + "/user/login");
   /*logger.info*/
   System.out.println("jsonObject ----" + jsonObject);
   HttpResponse response = getPostRequestData(apiUrl + "/user/login",
    jsonObject, headderData);
   ObjectMapper mapper = new ObjectMapper();
   Map < String, Object > res = null;
   if (response != null) {
    int statusCode = response.getStatusLine().getStatusCode();
    res = (Map < String, Object > ) mapper.readValue(response.getEntity().getContent(), Object.class);
    /*logger.info*/
    System.out.println("login @@@@@" + "jSessionId ---" + statusCode);
    //  String responseJSON = EntityUtils.toString(response.getEntity(), UTF8_CHARSET);
    // /*logger.info*/ System.out.println("response ---"+responseJSON);
    if (statusCode == 200) {
     JSONObject responseJsonData = new JSONObject(response);

     if ((Integer) res.get("code") == 200) {
      List < Object > response_result = (List < Object > ) res.get("result");
      Map < String, Object > responseJsonData2 = (Map < String, Object > ) response_result.get(0);
      jSessionId = (String) responseJsonData2.get("jsessionid");
      /*logger.info*/
      System.out.println("login @@@@@" + "jSessionId 200---" + jSessionId);
      result.put("jsessionid", (String) responseJsonData2.get("jsessionid"));
      result.put("status", true);
     }



    } else {
     result.put("status", false);
     result.put("statusCode", statusCode);
     BufferedReader rd = new BufferedReader(new InputStreamReader(response.getEntity().getContent()));
     result.put("message", rd.readLine());
    }
   } else {
    /*logger.info*/
    System.out.println("response NULL---");
   }



  } catch (Exception e) {
   result.put("status", false);
   result.put("message", "Error in get New Access Token");
   logger.error("Error in get Access token:-", e);
  }
  /*logger.info*/
  System.out.println(".get(jsessionid)--=====" + result.get("jsessionid"));
  return result;
 }




 public Map < String, Object > getJSessionCookieValue(String apiUrl, Map < String, Object > body) {
  Map < String, Object > result = new HashMap < > ();
  /*logger.info*/
  System.out.println("Generating calling jsessionId first time");
  try {
   //	Map<String ,Object> requestData=new HashMap<String ,Object>();			 

   String jsonObject = new JSONObject(body).toString();
   Map < String, Object > headderData = new HashMap < > ();
   headderData.put("Content-type", "application/json");
   /*logger.info*/
   System.out.println("Login api----" + apiUrl + "/user/login");
   /*logger.info*/
   System.out.println("jsonObject ----" + jsonObject);
   HttpResponse response = getPostRequestData(apiUrl + "/user/login",
    jsonObject, headderData);
   ObjectMapper mapper = new ObjectMapper();
   Map < String, Object > res = null;
   if (response != null) {
    int statusCode = response.getStatusLine().getStatusCode();
    res = (Map < String, Object > ) mapper.readValue(response.getEntity().getContent(), Object.class);
    /*logger.info*/
    System.out.println("login @@@@@" + "statusCode ---" + statusCode);
    //  String responseJSON = EntityUtils.toString(response.getEntity(), UTF8_CHARSET);
    // /*logger.info*/ System.out.println("response ---"+responseJSON);
    if (statusCode == 200) {
     JSONObject responseJsonData = new JSONObject(response);

     if ((Integer) res.get("code") == 200) {
      List < Object > response_result = (List < Object > ) res.get("result");

      Map < String, Object > responseJsonData2 = (Map < String, Object > ) response_result.get(0);
      jSessionCookieValue = (String) responseJsonData2.get("VSESSIONID");
      /*logger.info*/
      System.out.println("login @@@@@" + "jSessionId 200---" + jSessionCookieValue);
      result.put("VSESSIONID", jSessionCookieValue);
      result.put("status", true);
     }



    } else {
     result.put("status", false);
     result.put("statusCode", statusCode);
     BufferedReader rd = new BufferedReader(new InputStreamReader(response.getEntity().getContent()));
     result.put("message", rd.readLine());
    }
   } else {
    /*logger.info*/
    System.out.println("response NULL---");
   }



  } catch (Exception e) {
   result.put("status", false);
   result.put("message", "Error in get New Access Token");
   logger.error("Error in get Access token:-", e);
  }
  /*logger.info*/
  System.out.println(".get(jsessionid)--=====" + result.get("jsessionid"));
  return result;
 }

}