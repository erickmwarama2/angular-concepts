import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<string>();
  @Input() childMessage: string = "";
  message: string = 'Message from the child!';
  counter: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage() {
    this.messageEvent.emit('This is a message from the child');
    this.message = `New message from the child ${this.counter++}`
  }

}
