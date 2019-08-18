import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  title: string;
  message: string;
  now: Date;
  styleClass: string;
  count: number;
  input: string;
  visible: boolean;
  data: string[];
  switch: string;

  constructor() {
    setInterval(() => {
     this.now = new Date();
    }, 1000);

    setInterval(() => {
      this.styleClass = this.styleClass === 'red' ? '' : 'red';
     }, 1000);

  }

  ngOnInit() {
    this.title = 'hello-app';
    this.message = 'first component';
    this.styleClass = 'red';
    this.count = 0;
    this.visible = true;
    this.data = ['1', '2', '3'];
  }

  toDay() {
    return this.now.toLocaleString();
  }

  doClick() {
    this.message = ++this.count + '回、クリックしました。';
  }

  doType(val: string) {
    this.input = val;
    this.message = 'you type:' + this.input;
  }

  ngIfClick() {
    this.visible = !this.visible;
  }

  doSelect(val: string) {
    this.switch = val;
  }
}
