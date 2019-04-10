package com.trinity.common.dao;


import org.apache.log4j.Logger;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
//import org.trinity.webservice.entity.dcrms.ConfigurationSettings;


public abstract class AbstractDao {

	protected Logger logger = Logger.getLogger(AbstractDao.class);

	//@Autowired
//	private SessionFactory dcrmsSessionFactory;

/*	@Autowired
	private SessionFactory fleetSessionFactory;*/
	
	//@Autowired
	//private SessionFactory integrationSessionFactory;

/*	public SessionFactory getFleetSessionFactory() {
		return fleetSessionFactory;
	}*/

/*	public void setFleetSessionFactory(SessionFactory fleetSessionFactory) {
		this.fleetSessionFactory = fleetSessionFactory;
	}

	public void setDcrmsSessionFactory(SessionFactory dcrmsSessionFactory) {
		this.dcrmsSessionFactory = dcrmsSessionFactory;
	}
	public   SessionFactory getDcrmsSessionFactory() {
		return dcrmsSessionFactory;
	}


	public SessionFactory getIntegrationSessionFactory() {
		return integrationSessionFactory;
	}

	public void setIntegrationSessionFactory(SessionFactory integrationSessionFactory) {
		this.integrationSessionFactory = integrationSessionFactory;
	}

*/
	protected Session getDcrmsSession() {
		Session dcrmsSession = null;
		/*
		try {
			logger.info("getDcrmsSession started.. ");

			try {
				dcrmsSession = getDcrmsSessionFactory().getCurrentSession();
				if (!dcrmsSession.getTransaction().isActive()) {
					dcrmsSession.beginTransaction();
				} else {

				}
				logger.info("aquired existing dcrms database Session.. ");
			} catch (HibernateException he) {
				he.printStackTrace();
			}
			if (dcrmsSession == null ? true : !(dcrmsSession.isOpen() && dcrmsSession.isConnected())) {
				dcrmsSession = getDcrmsSessionFactory().openSession();
				dcrmsSession.beginTransaction();
				logger.info("aquired new dcrms database Session.. ");
			}

		} catch (Exception e) {
			e.printStackTrace();
		}
		*/
		return dcrmsSession;
	}

	protected Session getFleetSession() {
		Session fleetSession = null;
/*		try {
			try {
				fleetSession = getFleetSessionFactory().getCurrentSession();
				fleetSession.beginTransaction();
				logger.info("aquired existing fleet database Session.. ");
			} catch (HibernateException he) {
				he.printStackTrace();
			}
			if (fleetSession == null ? true : !(fleetSession.isOpen() && fleetSession.isConnected())) {
				fleetSession = getFleetSessionFactory().openSession();
				fleetSession.beginTransaction();
				logger.info("aquired new fleet database Session.. ");
			}

		} catch (Exception e) {
			e.printStackTrace();
		}*/
		return fleetSession;
	}

	protected Session getIotDcrmsSession() {
		Session iotDcrmsSessionFactory = null;
		/*
		try {
			try {
				iotDcrmsSessionFactory = getDcrmsSessionFactory().getCurrentSession();
				if (!iotDcrmsSessionFactory.getTransaction().isActive()) {
					iotDcrmsSessionFactory.beginTransaction();
				} else {

				}
				logger.info("aquired existing iot_admin dcrms v2 database Session.. ");
			} catch (HibernateException he) {
				he.printStackTrace();
			}
			if (iotDcrmsSessionFactory == null ? true : !(iotDcrmsSessionFactory.isOpen() && iotDcrmsSessionFactory.isConnected())) {
				iotDcrmsSessionFactory = getDcrmsSessionFactory().openSession();
				iotDcrmsSessionFactory.beginTransaction();
				logger.info("aquired new iot_admin database Session.. ");
			}

		} catch (Exception e) {
			e.printStackTrace();
		}
		*/
		return iotDcrmsSessionFactory;
	}


}