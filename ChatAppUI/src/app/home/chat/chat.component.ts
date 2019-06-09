import { Component, OnInit } from '@angular/core';
import * as Stomp from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import * as Socket from 'socket.io-client';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit {
  public show_dialog_msg: boolean = false;
  serverUrl(serverUrl: any): any {
    throw new Error("Method not implemented.");
  }
  public show_dialog : boolean = false;
  isCollapsed : boolean = true;
  user:IUser={
    username:"",
    password:"",
    topic:""
  };
  topicList:any[]=[{"name":"Lifestyle","value":"Lifestyle"},{"name":"Travel","value":"Travel"},{"name":"Career","value":"Career"}]
  message:string='';
  textmessage:string = '';
  content: string[] = ["Hello", "Hi"];
  private stompClient = null;
  disabled = true;
  iResponse : IResponse;

  constructor() { }

  ngOnInit() {
  }
  toggle() {
    this.show_dialog = !this.show_dialog;
  }
  setConnected(connected: boolean) {
    this.disabled = !connected;
    if (connected) {
      this.content = [];
    }
  }

connect(){
  if(this.user.username && this.user.password && this.user.topic ){
    this.show_dialog_msg = !this.show_dialog_msg;
    console.log("HIiii >>>>>>>"+ this.user.topic);
    let topic = this.user.topic;
    let username = this.user.username;
    this.message="";
      const socket = new SockJS('http://localhost:8080/chat-app');
      this.stompClient = Stomp.over(socket);

      const _this = this;
      this.stompClient.connect({}, function (frame) {
      _this.setConnected(true);
      console.log('Connected: ' + frame);

      _this.stompClient.subscribe('/topic/hi', function (hello) {
        console.log("tatatata ::" + JSON.parse(hello.body))
        _this.showGreeting(JSON.parse(hello.body).msg);
      });
    });
  } else{
  this.message="Please enter all field"
  }
}

disconnect() {
  if (this.stompClient != null) {
    this.stompClient.disconnect();
  }
  this.setConnected(false);
  console.log('Disconnected!');
}

sendName() {
  this.stompClient.send(
    '/chat/hello',
    {},
    JSON.stringify({ 'msg': this.textmessage })
  );
  this.textmessage = '';
}

showGreeting(messages) {
  this.content.push(messages);
}

}
export interface IUser{
  username:string;
  password:string;
  topic:string;
}
export interface IResponse{
  from:string;
  message:string;
  topic?:string;
  time?: Date;
}