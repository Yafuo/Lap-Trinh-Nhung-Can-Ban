package com.gpu;

import java.io.IOException;
import java.util.Properties;

import javax.sql.DataSource;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.hibernate5.HibernateTransactionManager;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;

@Configuration
public class HibernateConfig {
	@Bean("dataSource")
	public DataSource getDataSource() {
		DriverManagerDataSource ds= new DriverManagerDataSource();
		ds.setDriverClassName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
//		ds.setUrl("jdbc:sqlserver://simpledb.ctml0tf2h1mr.us-east-2.rds.amazonaws.com:1433;database=NUC");
//		ds.setUsername("yasuoGankTeam");
//		ds.setPassword("Long1311");
		ds.setUrl("jdbc:sqlserver://localhost;database=NUC");
		ds.setUsername("sa");
		ds.setPassword("phuanhdai");
		return ds;
	}
	
	@Autowired
	@Bean("sessionFactory")
	public SessionFactory getSessionFactory(DataSource dataSource) throws IOException{
		Properties props= new Properties();
		props.put("hibernate.dialect", "org.hibernate.dialect.SQLServer2008Dialect");
		props.put("show_sql", "true");
		props.put("current_session_context_class", "org.springframework.orm.hibernate5.SpringSessionContext");
		
		LocalSessionFactoryBean sf= new LocalSessionFactoryBean();
		sf.setDataSource(dataSource);
		sf.setHibernateProperties(props);
		sf.setPackagesToScan("com.gpu.entity");
		sf.afterPropertiesSet();
		return sf.getObject();
	}
	
	@Autowired
	@Bean("transactionManager")
	public HibernateTransactionManager getTransactionManager(SessionFactory sessionFactory) {
		return new HibernateTransactionManager(sessionFactory);
	}
}
