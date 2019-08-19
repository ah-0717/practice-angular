import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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

  text1: string;
  myControl: FormControl;
  myFormGroupMsg: string;
  myFormGroup: FormGroup;
  myFormGroupMsg2: string;
  myFormGroup2: FormGroup;

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
    };

    // 双方向
    this.text1 = '';
    this.myControl = new FormControl('ok.');
    this.myFormGroupMsg = 'FormGroupMsg';
    this.myFormGroup = new FormGroup({
      name: new FormControl(''),
      mail: new FormControl(''),
      age: new FormControl(0),
    });
    this.myFormGroupMsg2 = 'myFormGroupMsg2';
    this.myFormGroup2 = new FormGroup({
      control: new FormControl()
    });
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

  doFormControlClick() {
    this.message = `「${this.myControl.value}」と書きました。`;
  }

  onSubmit() {
    const result = this.myFormGroup.value;
    this.myFormGroupMsg = JSON.stringify(result);
    const result2 = this.myFormGroup2.value;
    this.myFormGroupMsg2 = JSON.stringify(result2);
  }
}
