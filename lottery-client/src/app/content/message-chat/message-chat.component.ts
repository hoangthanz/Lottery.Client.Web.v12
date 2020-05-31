import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-chat',
  templateUrl: './message-chat.component.html',
  styleUrls: ['./message-chat.component.css']
})
export class MessageChatComponent implements OnInit {

  messageColumns: string[] = ['from', 'to', 'content'];
  messageSource = [];

  constructor() { }

  ngOnInit() {
  }

}
