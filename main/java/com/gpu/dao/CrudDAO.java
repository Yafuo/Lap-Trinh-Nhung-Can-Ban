package com.gpu.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;

@Transactional
public abstract class CrudDAO<E,K> {
	
	@Autowired
	protected SessionFactory factory;
	
	public abstract E findById(K id);
	public abstract List<E> findAll();
	public abstract void create(E entity);
	public abstract void update(E entity);
	public abstract void delete(K... ids);
	public abstract List<E> findBy(String hql, int pageNo, int pageSize, Object... params);
}
