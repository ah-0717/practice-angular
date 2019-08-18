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
  }

  toDay() {
    return this.now.toLocaleString();
  }

}
