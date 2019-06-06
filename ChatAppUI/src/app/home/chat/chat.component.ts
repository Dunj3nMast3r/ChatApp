import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit {
  public show_dialog : boolean = false;
  public button_name : any = 'Show Login Form!';
  isCollapsed : boolean = true;
  constructor() { }

  toggleCollapse(){
    this.isCollapsed = !this.isCollapsed;
  }
  toggle() {
    this.show_dialog = !this.show_dialog;

    // CHANGE THE TEXT OF THE BUTTON.
    if(this.show_dialog) 
      this.button_name = "Hide";
    else
      this.button_name = "Show";
  }
  ngOnInit() {
  }

}
