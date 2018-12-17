package com.gpu.dao;

import java.util.List;

import javax.persistence.TypedQuery;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.gpu.entity.Account;

@Repository
public class AccountDAO extends CrudDAO<Account, Integer>{
	@Autowired
	SessionFactory factory;
	
	@Override
	public Account findById(Integer id) {
		Session session= factory.getCurrentSession();
		Account entity= (Account) session.get(Account.class, id);
		return entity;
	}
	
	@Override
	public List<Account> findAll() {
		List<Account> list= findBy("From Account", 0, 0);
		return list;
	}
	
	@Override
	public void create(Account entity) {
		Session session= factory.getCurrentSession();
		session.save(entity);
	}
	
	@Override
	public void update(Account entity) {
		Session session= factory.getCurrentSession();
		session.update(entity);
	}
	
	@Override
	public void delete(Integer... ids) {
		Session session= factory.getCurrentSession();
		
		for(Integer id:ids) {
			Account entity= findById(id);
			session.delete(entity);
		}
	}

	@Override
	public List<Account> findBy(String hql, int pageNo, int pageSize, Object... params) {
		Session session= factory.getCurrentSession();
		TypedQuery<Account> query= session.createQuery(hql, Account.class);
		if(pageNo >= 0 && pageSize > 0) {
			query.setFirstResult(pageNo*pageSize);
			query.setMaxResults(pageSize);
		}
		if(params.length>0) {
			for(int i=0;i<params.length;i++) {
				query.setParameter(i, params[i]);
			}
		}
		List<Account> list= query.getResultList();
		return list;
	}
}
