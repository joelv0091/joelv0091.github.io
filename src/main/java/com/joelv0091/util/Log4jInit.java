package com.joelv0091.util;


import org.apache.log4j.PropertyConfigurator;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.PrintWriter;
import java.util.Properties;
import java.io.FileInputStream;
import java.io.IOException;

public class Log4jInit extends HttpServlet {

  public
  void init() {
    String prefix =  getServletContext().getRealPath("/");
    String file = getInitParameter("log4j-init-file");
    // if the log4j-init-file is not set, then no point in trying
    
    
    Properties p = new Properties();

    if(file != null) {

        try {
            p.load(new FileInputStream(file));
            PropertyConfigurator.configure(p);
           // PropertyConfigurator.configure(prefix+file);
        } catch (IOException e) {
            //DAMN! I'm not....
System.out.println("ERORRRRRRRRRRRRRRR WHILE load log4j config File");
        
    }
        
        catch (Exception e) {
        //DAMN! I'm not....

    }
     
    }
    
    
    /*
   
      String prefix =  getServletContext().getRealPath("/");
    String file = getInitParameter("log4j-init-file");
    // if the log4j-init-file is not set, then no point in trying
    
    
   // Properties p = new Properties();

    if(file != null) {

        try {
         //   p.load(new FileInputStream(file));
            PropertyConfigurator.configure(file);
           // PropertyConfigurator.configure(prefix+file);
        } catch (Exception e) {
        //DAMN! I'm not....

    }
     
    }
  
     */
  }

  public
  void doGet(HttpServletRequest req, HttpServletResponse res) {
  }
}
