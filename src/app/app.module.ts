import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { MessageComponent } from './message/message.component';
import { MystyleDirective } from './mystyle.directive';
import { MycheckService } from './mycheck.service';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    MessageComponent,
    MystyleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [HelloComponent]
})
export class AppModule {
  constructor(private service: MycheckService) {
    service.name = 'fuga';
  }
}
