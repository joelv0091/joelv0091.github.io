package org.trinity.admin.serviceimpl;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.trinity.admin.daoimpl.VmsProfileDaoImpl;
import org.trinity.admin.entity.iccc.device.VMSProfiles;
import org.trinity.admin.service.vmsProfileService;

@Service
public class VmsProfileServiceImpl implements vmsProfileService {
	@Autowired
	VmsProfileDaoImpl vmsProfileDaoImpl;

	@Override
	public Map<String, Object> getVmsConfigProfiles(Integer companyId) {
		return vmsProfileDaoImpl.getVmsConfigProfiles(companyId);
	}

	@Override
	public Map<String, Object> deleteVmsConfigProfiles(Integer id) {
		return vmsProfileDaoImpl.deleteVmsConfigProfiles(id);
	}

	@Override
	public Map<String, Object> configureVmsProfiles(VMSProfiles vmsProfiles) {
		return vmsProfileDaoImpl.configureVmsProfiles(vmsProfiles);
	}

	@Override
	public Map<String, Object> getVmsConfigProfilesByVendorId(Integer companyId, String vendorId) {
		return vmsProfileDaoImpl.getVmsConfigProfilesByVendorId(companyId, vendorId);
	}

	@Override
	public Map<String, Object> deleteVmsProfiles(Integer id) {
		return vmsProfileDaoImpl.deleteVmsProfiles(id);
	}

	@Override
	public Map<String, Object> getVmsConfigProfilesForDeviceOnBoard(Integer companyId, Integer vendorId) {
		return vmsProfileDaoImpl.getVmsConfigProfilesForDeviceOnBoard(companyId,vendorId);
	}
	
	@Override
	public Map<String, Object> getVMSProfileByID(Integer profileId){
		return vmsProfileDaoImpl.getVMSProfileByID(profileId);
	}

	public Map<String, Object> getAllVmsConfigProfiles() {
		// TODO Auto-generated method stub
		return vmsProfileDaoImpl.getAllVmsConfigProfiles();
	}
}
