import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {WechatConfig} from './wechat.config';

@Component({
  selector: 'ngx-wechat-qrcode',
  template: `
    <iframe [src]="url" [width]="width" [height]="height" scrolling="no" [attr.frameborder]="0"></iframe>
  `,
  styles: []
})
export class NgxWechatQrcodeComponent implements OnInit {

  @Input()
  height: number;
  @Input()
  width: number;
  @Input()
  config: WechatConfig;
  url: any;


  constructor(private domSanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.wechatInit();
  }

  wechatInit(): void {
    this.url = this.domSanitizer.bypassSecurityTrustResourceUrl(this.config.getUrl());
  }
}
