import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MycheckService {
  private _name: string;
  private data: string[];

  constructor() {
   this._name = '(no-name)';
   this.data = [];
  }

  get name() {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  pushData(item: string) {
    this.data.push(item);
  }

  popData() {
    this.data.pop();
  }

  getData(n: number) {
    return this.data[n];
  }

  get dataSize() {
    return this.data.length;
  }

  get dataJson() {
    return JSON.stringify(this.data);
  }

  get dataList() {
    return JSON.parse(JSON.stringify(this.data));
  }

  hello() {
    return 'Hello, ' + this._name;
  }
}
