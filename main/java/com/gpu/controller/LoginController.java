package com.gpu.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.gpu.dao.AccountDAO;
import com.gpu.entity.Account;
import com.gpu.object.Location;

@Controller
public class LoginController {
	@Autowired
	HttpServletRequest req;
	
	@Autowired
	HttpSession ses;
	
	@Autowired
	AccountDAO dao;
	
	@RequestMapping("")
	public String index() {
		System.out.println("This is the index");
		return "redirect:/login";
	}
	
	@RequestMapping("login")
	public String login() {
		System.out.println("This is login");
		return "login";
	}
	
	@RequestMapping("logout")
	public String logout() {
		System.out.println("This is logout");
		return "redirect:/login";
	}
	
	@PostMapping("sign-up")
	public String signUp() {
		System.out.println("This is signup");
		String strId= req.getParameter("id");
		Integer id= Integer.parseInt(strId);
		String name= req.getParameter("username");
		String pwd= req.getParameter("pwd");
		
		Account entity= new Account();
		entity.setId(id);
		entity.setUserName(name);
		entity.setPwd(pwd);
		System.out.println(entity.getId() + " " +entity.getUserName() + " " + entity.getPwd());
		dao.create(entity);
		
		return "redirect:/login";
	}
	
	@PostMapping("check-account")
	public String checkAccount() {
		System.out.println("This is check-account");
		String strId= req.getParameter("id");
		Integer id= Integer.parseInt(strId);
		String pwd= req.getParameter("pwd");
		List<Account> list= dao.findAll();
		for(Account acc: list) {
			if(id.equals(acc.getId())&& pwd.equals(acc.getPwd())) {
				ses.setAttribute("username", acc.getUserName());
				ses.setAttribute("id", acc.getId());
				return "redirect:/room";
			}
		}
		return "redirect:/login";
	}
	
	@RequestMapping("room")
	public String room() {
		return "room";
	}
	
	@RequestMapping("home1")
	public String home1() {
		ses.setAttribute("room", "room1");
		return "home";
	}
	
	@RequestMapping("home2")
	public String home2() {
		ses.setAttribute("room", "room2");
		return "home";
	}
	
	@RequestMapping("home3")
	public String home3() {
		ses.setAttribute("room", "room3");
		return "home";
	}
	
	public List<Location> createMap() {
		List<Location> list= new ArrayList<Location>();
		for(int i=0;i<20;i++) {
			int xRand= (int) (Math.random()*7 +1);
			int yRand= (int) (Math.random()*7 +1);
			list.add(new Location(xRand, yRand));
		}
		for(int i=0;i<list.size();i++) {
			for(int j= i+1; j< list.size();j++) {
				if(list.get(i).getX() ==list.get(j).getX()&& list.get(i).getY()== list.get(j).getY()) {
					list.remove(list.get(j));
				}
			}
		}
		return list;
	}
}
