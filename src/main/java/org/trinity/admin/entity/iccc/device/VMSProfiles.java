package org.trinity.admin.entity.iccc.device;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;


import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.type.TypeReference;

import com.fasterxml.jackson.core.JsonProcessingException;


@Entity
@Table(name = "vms_profiles",schema="device")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "VMSProfiles.findByCompanyId", query = "SELECT v FROM VMSProfiles v where v.companyId=:companyId  "),
    @NamedQuery(name = "VMSProfiles.findAll", query = "SELECT v FROM VMSProfiles v "),
    @NamedQuery(name = "VMSProfiles.findById", query = "SELECT v FROM VMSProfiles v where v.id=:id  "),
    @NamedQuery(name = "VMSProfiles.deleteById", query = "DELETE FROM VMSProfiles v WHERE v.id = :id"),
    @NamedQuery(name = "VMSProfiles.findByVendorId", query = "SELECT v FROM VMSProfiles v where v.companyId=:companyId and v.vendorId=:vendorId"),

    })
public class VMSProfiles implements Serializable{
	
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Basic(optional = false)
	@Column(name = "id")
	private Integer id;

	@Column(name = "company_id")
	private Integer companyId;

	@Column(name = "profile_name")
	private String profileName;

	@Column(name = "profile_details")
	private String profileDetails;

	@Column(name = "vendor_id")
	private Integer vendorId;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getCompanyId() {
		return companyId;
	}

	public void setCompanyId(Integer companyId) {
		this.companyId = companyId;
	}

	public String getProfileName() {
		return profileName;
	}

	public void setProfileName(String profileName) {
		this.profileName = profileName;
	}

	public Map<String,Object> getProfileDetails() {
		ObjectMapper mapper=new ObjectMapper();
		Map<String, Object> profileData=new HashMap<String, Object>();
		try {
			profileData = (Map<String, Object>) (profileDetails != null?mapper.readValue(profileDetails, new TypeReference<Map<String, String>>(){}):profileData);
		}
		catch(JsonProcessingException e)
		{
			profileData=profileData;
			
		}
		catch (Exception e) {
			
			e.printStackTrace();
		}
		return profileData;
	}

	public void setProfileDetails(String profileDetails) {
		this.profileDetails = profileDetails;
	}

	

	public Integer getVendorId() {
		return vendorId;
	}

	public void setVendorId(Integer vendorId) {
		this.vendorId = vendorId;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	

}
