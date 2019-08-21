import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() content: string;
  @Input() content2: string[];
  private _pContent: string[];

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
}
