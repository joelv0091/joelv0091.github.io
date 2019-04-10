package org.trinity.admin.controller;

import java.util.HashMap;
import java.util.Map;

import org.codehaus.jackson.map.annotate.JsonSerialize;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.trinity.admin.entity.iccc.device.VMSProfiles;
import org.trinity.admin.serviceimpl.VmsProfileServiceImpl;

@RestController
@CrossOrigin
@RequestMapping("/vmsProfile")
public class VmsProfileController {

	@Autowired
	private VmsProfileServiceImpl vmsProfileServiceImpl;

	public static  Map<Integer, Object> allprofiles  = new HashMap<Integer, Object> ();
	
	
	
	private Map<String, Object> SetProfiles(Integer CompId, Boolean refresh) {
		Map<Integer, VMSProfiles> profiles  = new HashMap<Integer, VMSProfiles> ();
		Map<String, Object>  output = new HashMap<String, Object> ();
		if(refresh ==true || allprofiles == null || allprofiles.isEmpty()  || !allprofiles.containsKey(CompId))
		{
				System.out.println("Connectind DB");
				output =vmsProfileServiceImpl.getVmsConfigProfiles(CompId);
				output.put("cache", false);
				allprofiles.remove(CompId);
				allprofiles.put(CompId, (Map<Integer, VMSProfiles>) output.get("data"));
	
		}
		else
		{
			System.out.println("profiles"+allprofiles.containsKey(CompId));
			profiles=(Map<Integer, VMSProfiles>) allprofiles.get(CompId);
			System.out.println("profiles"+profiles);
			output.put("data", profiles);
			output.put("success", true);
			output.put("cache", true);

		}
		return output;
	}
	
	@RequestMapping(value = "/get/VmsConfigProfiles", method = RequestMethod.GET)
	private Map<String, Object> getVmsConfigProfiles(@RequestParam Integer companyId) {
		
		Map<String, Object>  output = new HashMap<String, Object> ();
		output= SetProfiles(companyId,false);
		return output;
	}
	
	@RequestMapping(value = "/get/VmsConfigProfiles/All", method = RequestMethod.GET)
	private Map<String, Object> getAllVmsConfigProfiles() {
		Map<String, Object>  output = new HashMap<String, Object> ();
		output =vmsProfileServiceImpl.getAllVmsConfigProfiles();
		return output;
	}
	
	@RequestMapping(value = "/updateVMSProfile", method = RequestMethod.GET)
	private Map<String, Object> updateVMSProfile(@RequestParam Integer profileId,@RequestParam Integer companyId) {
		Map<String, Object> result=vmsProfileServiceImpl.getVMSProfileByID(profileId);
		Boolean success=(Boolean) result.get("success");
		if(success) {
			VMSProfiles VMSProfiles=(org.trinity.admin.entity.iccc.device.VMSProfiles) result.get("profiledetails");
			Map<Integer, VMSProfiles> profileByCompany=(Map<Integer, org.trinity.admin.entity.iccc.device.VMSProfiles>) allprofiles.get(companyId);
			if(VMSProfiles!=null) {
				
				profileByCompany.put(VMSProfiles.getId(), VMSProfiles);
			}else {
				profileByCompany.remove(profileId);
			}
		}
		
		return result;
	}
	
	
	@RequestMapping(value = "/get/VmsConfigProfile", method = RequestMethod.GET)  // not implimented in client side
	private Map<String, Object> getVmsConfigProfile(@RequestParam Integer companyId,@RequestParam Integer profileId) {
		System.out.println("profileId:"+profileId+", companyId:"+companyId);
		Map<Integer, VMSProfiles> profiles  = new HashMap<Integer, VMSProfiles> ();
		VMSProfiles profile  = new VMSProfiles();
		Map<String, Object>  rdata = new HashMap<String, Object> ();
		Map<String, Object>  output = new HashMap<String, Object> ();
		rdata= SetProfiles(companyId,false);
				
		profiles=(Map<Integer, VMSProfiles>) rdata.get("data");
		if( !profiles.containsKey(profileId)  )
		{// reload required // requested data not avilable, May be added recently, So Checking DB
			System.out.println("Refreshed due to input not available in data");
			
			rdata.clear();
			rdata= SetProfiles(companyId,true);
			profiles=(Map<Integer, VMSProfiles>) rdata.get("data");
		}
		
	
		if( profiles.containsKey(profileId) )
		{ // user error Handler
		System.out.println("@profileId#"+ profiles.containsKey(profileId) );
		profile=profiles.get(profileId) ;
		 output.put("data",profile);
		 output.put("availablity",true);
		 
		}
		else {output.put("availablity",false);}
		
		return output;
	}


	
	@RequestMapping(value = "/refresh/VmsConfigProfiles", method = RequestMethod.GET)
	private boolean refreshVmsConfigProfile(@RequestParam Integer companyId) {
	
			System.out.println("Server Trigger for refresh VMS Configuration");
			SetProfiles(companyId,true);
		return allprofiles.containsKey(companyId);
	}
	

	
	@RequestMapping(value = "/deleteVmsConfigProfiles", method = RequestMethod.GET)
	private Map<String, Object> deleteVmsConfigProfiles(@RequestParam Integer id) {
		return vmsProfileServiceImpl.deleteVmsConfigProfiles(id);
	}

	@RequestMapping(value = "/configureVmsProfiles", method = RequestMethod.POST)
	private Map<String, Object> configureVmsProfiles(@RequestBody VMSProfiles vmsProfiles) {
		return vmsProfileServiceImpl.configureVmsProfiles(vmsProfiles);
	}

	@RequestMapping(value = "/getVmsConfigProfilesByVendorId", method = RequestMethod.GET)
	private Map<String, Object> getVmsConfigProfilesByVendorId(@RequestParam Integer companyId,
			@RequestParam String vendorId) {
		return vmsProfileServiceImpl.getVmsConfigProfilesByVendorId(companyId, vendorId);
	}

	@RequestMapping(value = "/deleteVmsProfiles", method = RequestMethod.GET)
	private Map<String, Object> deleteVmsProfiles(@RequestParam Integer id) {
		return vmsProfileServiceImpl.deleteVmsProfiles(id);
	}

	@RequestMapping(value = "/getVmsConfigProfilesForDeviceOnBoard", method = RequestMethod.GET)
	private Map<String, Object> getVmsConfigProfilesForDeviceOnBoard(@RequestParam Integer companyId,
			@RequestParam Integer vendorId) {
		return vmsProfileServiceImpl.getVmsConfigProfilesForDeviceOnBoard(companyId, vendorId);
	}
}
