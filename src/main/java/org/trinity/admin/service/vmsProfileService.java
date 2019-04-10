package org.trinity.admin.service;

import java.util.Map;

import org.trinity.admin.entity.iccc.device.VMSProfiles;

public interface vmsProfileService {
	Map<String, Object> getVmsConfigProfiles(Integer companyId);

	Map<String, Object> deleteVmsConfigProfiles(Integer id);

	Map<String, Object> configureVmsProfiles(VMSProfiles vmsProfiles);

	Map<String, Object> getVmsConfigProfilesByVendorId(Integer companyId, String vendorId);

	Map<String, Object> deleteVmsProfiles(Integer id);

	Map<String, Object> getVmsConfigProfilesForDeviceOnBoard(Integer companyId,Integer vendorId);
	
	Map<String, Object> getVMSProfileByID(Integer profileId);
}
