import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxWechatQrcodeModule} from '../../projects/ngx-wechat-qrcode/src/lib/ngx-wechat-qrcode.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxWechatQrcodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
