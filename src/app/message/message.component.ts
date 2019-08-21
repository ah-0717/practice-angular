import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() content: string;
  @Input() content2: string[];
  private _pContent: string[];
  @Output() action = new EventEmitter<MouseEvent>();
  @Input() content3: string[];

  constructor() { }

  ngOnInit() {
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
}
