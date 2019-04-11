package com.joelv0091.util;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

import org.apache.log4j.Logger;


/**
 * @author JOEL
 *
 */
public class LocalSettings {
	
	private static  Logger logger=Logger.getLogger(LocalSettings.class);

	private static LocalSettings localSettings;
	private String apiUrl;
	private String userName;
	private String password;
	
	
	LocalSettings() throws IOException{
			
		
		/*
		
			Properties prop = new Properties();
//			InputStream file = getClass().getResourceAsStream("/Application.properties");
			InputStream file = new FileInputStream(new File("C:/ICCC_Configuration/LiveStream/Application.properties")); 
			prop.load(file);
			this.apiUrl=prop.getProperty("apiUrl");
			this.userName=prop.getProperty("userName");
			this.password=prop.getProperty("password");
			
			
			*/
	}
	


	public static LocalSettings getInstance() {
		if(localSettings==null){
			try {
				localSettings=new LocalSettings();
			} catch (IOException e) {
				logger.error("Error in creating localSettings Object:-",e);
			}
		}
		return localSettings;
	}



	public static Logger getLogger() {
		return logger;
	}



	public static void setLogger(Logger logger) {
		LocalSettings.logger = logger;
	}



	public static LocalSettings getLocalSettings() {
		return localSettings;
	}



	public static void setLocalSettings(LocalSettings localSettings) {
		LocalSettings.localSettings = localSettings;
	}



	public String getApiUrl() {
		return apiUrl;
	}



	public void setApiUrl(String apiUrl) {
		this.apiUrl = apiUrl;
	}



	public String getUserName() {
		return userName;
	}



	public void setUserName(String userName) {
		this.userName = userName;
	}



	public String getPassword() {
		return password;
	}



	public void setPassword(String password) {
		this.password = password;
	}

	
	

}
