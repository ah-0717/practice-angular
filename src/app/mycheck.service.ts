import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MycheckService {
  private _name: string;

  constructor() {
   this._name = '(no-name)';
  }

  get name() {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  hello() {
    return 'Hello, ' + this._name;
  }
}
