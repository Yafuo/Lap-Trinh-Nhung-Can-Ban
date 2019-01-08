package com.gpu.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.util.HtmlUtils;

import com.gpu.hello.Greeting;
import com.gpu.hello.HelloMessage;
import com.gpu.hello.PassInfo;

@Controller
public class GreetingController {

	@RequestMapping(value="/hello", method=RequestMethod.POST)
	@MessageMapping(value="/hello")
	@SendTo("/topic/greetings")
	public HelloMessage greeting(HelloMessage message) throws Exception{
		return new HelloMessage(message.getNum());
	}
	
	@RequestMapping(value="/room1", method=RequestMethod.POST)
	@MessageMapping("/room1")
	@SendTo("/topic/greetings1")
	public PassInfo room1(PassInfo info) throws Exception {
		Thread.sleep(1000);
		return new PassInfo(info.getLocation(), info.getColor(), info.getTurn(), info.getWinner());
	}
	@MessageMapping("/room2")
	@SendTo("/topic/greetings2")
	public PassInfo room2(PassInfo info) throws Exception {
		Thread.sleep(1000);
		return new PassInfo(info.getLocation(), info.getColor(), info.getTurn(), info.getWinner());
	}
	@MessageMapping("/room3")
	@SendTo("/topic/greetings3")
	public PassInfo room3(PassInfo info) throws Exception {
		Thread.sleep(1000);
		return new PassInfo(info.getLocation(), info.getColor(), info.getTurn(), info.getWinner());
	}
}
