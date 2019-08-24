import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MycheckService } from '../mycheck.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  providers: [MycheckService]
})
export class MessageComponent implements OnInit {
  @Input() content: string;
  @Input() content2: string[];
  private _pContent: string[];
  @Output() action = new EventEmitter<MouseEvent>();
  @Input() content3: string[];
  @Input() sContent: string[];
  input: FormControl;
  httpMessage: string;

  constructor(private service: MycheckService, private route: ActivatedRoute) {
    this.sContent = [];
    service.pushData('hello data');
  }

  ngOnInit() {
    this.service.pushData(`params: ${JSON.stringify(this.route.snapshot.paramMap)}`);
    // this.sContent.push(this.service.hello());
    this.sContent = this.service.dataList;
    this.input = new FormControl('');
    this.httpMessage = 'mydata list';
  }

  @Input()
  set _content(msgs: string) {
    this._pContent = msgs.split(',');
  }

  get _content() {
    return this._pContent.join(',');
  }

  doClick() {
    this._pContent.pop();
  }

  doAction(event) {
    this.action.emit(event);
  }

  push(item: string) {
    this.content3.push(item);
  }

  pop() {
    this.content3.pop();
  }

  push2(item: string) {
    this.service.name = item;
    this.sContent.push(this.service.hello());
  }

  pop2() {
    this.sContent.pop();
  }

  getMyData() {
    return this.service.myData;
  }

  getMyDataList() {
    return this.service.myDataList;
  }

  doHttpAction() {
    const n = parseInt(this.input.value);
    const p = this.service.getMyData(n);
    this.httpMessage = JSON.stringify(p);
  }
}
