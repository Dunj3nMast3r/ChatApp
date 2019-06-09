package com.chat;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class Controller {

	@MessageMapping("/hello")
	@SendTo("/topic/hi")
	public Hello greeting(Hello user) throws Exception {
		return new Hello(user.getmsg());
	}
}
