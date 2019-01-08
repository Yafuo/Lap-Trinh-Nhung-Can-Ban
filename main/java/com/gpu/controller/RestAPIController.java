package com.gpu.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.gpu.hello.HelloMessage;
import com.gpu.hello.Position;

@RestController
public class RestAPIController {
	
	@Autowired
	HttpSession ses;
	
	@Autowired
	SimpMessagingTemplate simpMessTemp;

//	@RequestMapping(value="/api/test", method=RequestMethod.GET)
//	public int handle(@RequestBody Position pos) {
//		ses.setAttribute("identity", pos.getPos());
//		return pos.getPos();
//	}
	
	@RequestMapping(value="/api/handle-position", method=RequestMethod.GET)
	@ResponseBody
	public int handle(Position po) {
		simpMessTemp.convertAndSend("/topic/greetings", new HelloMessage(po.getPos()));
		return po.getPos();
	}
}
