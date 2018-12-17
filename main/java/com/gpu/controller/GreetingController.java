package com.gpu.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

import com.gpu.hello.Greeting;
import com.gpu.hello.HelloMessage;
import com.gpu.hello.PassInfo;

@Controller
public class GreetingController {

	@MessageMapping("/hello")
	@SendTo("/topic/greetings")
	public HelloMessage greeting(HelloMessage message) throws Exception{
		return new HelloMessage(message.getNum());
	}
	
	@MessageMapping("/room1")
	@SendTo("/topic/greetings1")
	public PassInfo room1(PassInfo info) throws Exception {
		Thread.sleep(1000);
		return new PassInfo(info.getLocation(), info.getColor(), info.getTurn());
	}
	@MessageMapping("/room2")
	@SendTo("/topic/greetings2")
	public PassInfo room2(PassInfo info) throws Exception {
		Thread.sleep(1000);
		return new PassInfo(info.getLocation(), info.getColor(), info.getTurn());
	}
	@MessageMapping("/room3")
	@SendTo("/topic/greetings3")
	public PassInfo room3(PassInfo info) throws Exception {
		Thread.sleep(1000);
		return new PassInfo(info.getLocation(), info.getColor(), info.getTurn());
	}
}
