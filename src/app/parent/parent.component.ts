import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, AfterViewInit {

  @ViewChild(ChildComponent) child: any;
  childMessage: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  receiveMessage(msg: string) {
    // alert(msg);
    this.childMessage = this.child.message;
  }

  ngAfterViewInit() {
    this.childMessage = this.child.message;
  }

}
