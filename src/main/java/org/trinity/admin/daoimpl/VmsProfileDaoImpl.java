package org.trinity.admin.daoimpl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.hibernate.Session;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;
import com.trinity.common.dao.AbstractDao;
import org.trinity.admin.dao.vmsProfileDao;
//import org.trinity.admin.entity.iccc.adminiccc.Alarm;
//import org.trinity.admin.entity.iccc.device.DeviceDetailsCamera;
import org.trinity.admin.entity.iccc.device.VMSProfiles;

import com.fasterxml.jackson.databind.ObjectMapper;

@Repository
public class VmsProfileDaoImpl extends AbstractDao implements vmsProfileDao {

	private static final Logger LOGGER = Logger.getLogger(VmsProfileDaoImpl.class);

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Map<String, Object> getVmsConfigProfiles(Integer companyId) {

		Map<String, Object> result = new HashMap();
		Session session = null;
		try {
			
			session = getDcrmsSession();
			List<VMSProfiles> ranks = session.getNamedQuery("VMSProfiles.findByCompanyId")
					.setParameter("companyId", companyId).list();
			Map<Integer, VMSProfiles> map  = new HashMap<Integer, VMSProfiles> ();
			for (VMSProfiles rank : ranks) {
			  if (!map.containsKey(rank.getId()) ) {
			    map.put(rank.getId(), rank);
			  }
			}
			result.put("data", map);
			result.put("success", true);
		} catch (Exception e) {
			result.put("success", false);
			LOGGER.error("Error In Get VMS Profiles  By CompanyId ", e);
		} finally {
			if (session != null && session.isOpen()) {
				session.close();
			}
		}
		return result;
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Map<String, Object> getAllVmsConfigProfiles() {

		Map<String, Object> result = new HashMap();
		Session session = null;
		try {
			
			session = getDcrmsSession();
			List<VMSProfiles> ranks = session.getNamedQuery("VMSProfiles.findAll")
					.list();
		
			
			result.put("data", ranks);
			result.put("success", true);
		} catch (Exception e) {
			result.put("success", false);
			LOGGER.error("Error In Get VMS Profiles  By CompanyId ", e);
		} finally {
			if (session != null && session.isOpen()) {
				session.close();
			}
		}
		return result;
	}
/*
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
	public Map<String, Object> deleteVmsConfigProfiles(Integer id) {
		Map<String, Object> result = new HashMap();
		Session session = null;
		try {
			session = getDcrmsSessionFactory();

			List<DeviceDetailsCamera> event = session.getNamedQuery("DeviceDetailsCamera.findByProfileId")
					.setParameter("profileId", id).list();
			if (event.size() > 0) {
				result.put("success", true);
				result.put("message", "VMS Already Configured To Device");

			}

		} catch (Exception e) {
			result.put("success", false);
			result.put("message", "Error in Delete VMS Profiles");
			LOGGER.error("Error in Delete VMS Profiles", e);
		} finally {
			if (session != null && session.isOpen()) {
				session.close();
			}
		}
		return result;
	}
*/
	@SuppressWarnings("rawtypes")
	@Override
	public Map<String, Object> deleteVmsProfiles(Integer id) {
		System.out.println("idddd" + id);
		Map<String, Object> result = new HashMap();
		Session session = null;
		try {
			session = getDcrmsSession();
			session.getNamedQuery("VMSProfiles.deleteById").setParameter("id", id).executeUpdate();
			session.getTransaction().commit();
			System.out.println("inside delete" + id);
			result.put("success", true);
			result.put("message", "VMS Profiles  Deleted Successfully");
		} catch (Exception e) {
			result.put("success", false);
			result.put("message", "Error in Delete VMS Profiles");
			LOGGER.error("Error in Delete VMS Profiles", e);
		} finally {
			if (session != null && session.isOpen()) {
				session.close();
			}
		}
		return result;
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
	public Map<String, Object> configureVmsProfiles(VMSProfiles vmsProfiles) {
		System.out.println("vmsProfiles" + vmsProfiles);
		Map<String, Object> result = new HashMap();
		Session session = null;
		try {
			session = getDcrmsSession();
			ObjectMapper mapper = new ObjectMapper();
			VMSProfiles assetConfigObject = mapper.convertValue(vmsProfiles, VMSProfiles.class);
			session.saveOrUpdate(assetConfigObject);
			result.put("success", true);
			result.put("message", "Asset Data Updated Successfully");
			result.put("data", assetConfigObject);
			session.getTransaction().commit();
		} catch (Exception e) {
			result.put("success", false);
			result.put("message", "Asset not Updated");
			LOGGER.error("Error in Save or Update Template ", e);
		} finally {
			if (session != null && session.isOpen()) {
				session.close();
			}
		}
		return result;
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Map<String, Object> getVmsConfigProfilesByVendorId(Integer companyId, String vendorId) {

		Map<String, Object> result = new HashMap();
		Session session = null;
		try {
			session = getDcrmsSession();
			// List<VMSProfiles> vmsProfiles=
			// session.getNamedQuery("VMSProfiles.findByVendorId")
			// .setParameter("companyId", companyId)
			// .setParameter("vendorId", vendorId).list();
			List<VMSProfiles> vmsProfiles = session.createCriteria(VMSProfiles.class)
					.add(Restrictions.or(Restrictions.eq("companyId", companyId), Restrictions.eq("companyId", 0)))
					.add(Restrictions.or(Restrictions.eq("vendorId", Integer.parseInt(vendorId)), Restrictions.eq("vendorId", 0)))
					.list();

			System.out.println("vmsProfiles ->" + vmsProfiles.size());
			result.put("data", vmsProfiles);
			result.put("success", true);
		} catch (Exception e) {
			result.put("success", false);
			LOGGER.error("Error In Get VMS Profiles  By CompanyId ", e);
		} finally {
			if (session != null && session.isOpen()) {
				session.close();
			}
		}
		return result;
	}

	@SuppressWarnings("unchecked")
	@Override
	public Map<String, Object> getVmsConfigProfilesForDeviceOnBoard(Integer companyId, Integer vendorId) {

		Map<String, Object> result = new HashMap<String, Object>();
		Session session = null;
		try {
			session = getDcrmsSession();
			List<VMSProfiles> vmsProfiles = session.createCriteria(VMSProfiles.class)
					.add(Restrictions.or(Restrictions.eq("companyId", companyId)))
					.add(Restrictions.or(Restrictions.eq("vendorId", vendorId)))
					.list();

			System.out.println("vmsProfiles ->" + vmsProfiles.size());
			result.put("data", vmsProfiles);
			result.put("success", true);
		} catch (Exception e) {
			result.put("success", false);
			LOGGER.error("Error In Get VMS Profiles  By CompanyId ", e);
		} finally {
			if (session != null && session.isOpen()) {
				session.close();
			}
		}
		return result;
	}
	@Override
	public Map<String, Object> deleteVmsConfigProfiles(Integer id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Map<String, Object> getVMSProfileByID(Integer profileId) {
		Map<String, Object> result = new HashMap<String, Object>();
		Session session = null;
		try {
			session = getDcrmsSession();
			VMSProfiles profiles=(VMSProfiles) session.getNamedQuery("VMSProfiles.findById").setParameter("id", profileId).uniqueResult();
			result.put("profiledetails", profiles);
			result.put("success", true);
		} catch (Exception e) {
			result.put("success", false);
			LOGGER.error("Error In update vms profile details ", e);
			e.printStackTrace();
		} finally {
			if (session != null && session.isOpen()) {
				session.close();
			}
		}
		return result;
	}
}
