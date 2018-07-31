import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'ngx-wechat-qrcode',
  template: `
    <p>
      ngx-wechat-qrcode works!
    </p>
  `,
  styles: []
})
export class NgxWechatQrcodeComponent implements OnInit {

  constructor(private domSanitizer: DomSanitizer) {
  }

  ngOnInit() {
  }

}
