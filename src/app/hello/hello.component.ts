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
  ngClassMsg: string;
  nowClass: any;
  ngStyleMsg: string;
  nowStyle: any;

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
    this.ngClassMsg = 'false,false,false';
    this.nowClass = {
      thin: false,
      large: false,
      frame: false
    };
    this.ngStyleMsg = 'false,false,false';
    this.nowStyle = {
      'border-style': '',
      'border-width': '',
      'border-color': ''
    }
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

  check(c1: boolean, c2: boolean, c3: boolean) {
    this.nowClass.thin = c1;
    this.nowClass.large = c2;
    this.nowClass.frame = c3;
    this.ngClassMsg = `${c1},${c2},${c3}`
  }

  checkStyle(in1: string, in2: string, in3: string) {
    this.nowStyle['border-style'] = in1;
    this.nowStyle['border-width'] = in2 + 'px';
    this.nowStyle['border-color'] = in3;
    this.ngStyleMsg = JSON.stringify(this.nowStyle);
  }
}
