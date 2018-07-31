# What 

this is an angular component to generate qrcode for wechat,
it also use in login that use wechat to your site

# How to use


## install

```ts
install: npm install ngx-wechat-qrcode --save
```

## import 

```ts
@NgModule({
  imports: [
    NgxWechatQrcodeModule 
  ],
  declarations: [
    ...
  ],
  exports: [
    ...
  ],
})

```

## use in template

```angular2html
<ngx-wechat-qrcode [width]="'300'" [height]="'400'" [config]="wechatConfig"></ngx-wechat-qrcode>
```

## use in ts

```ts
  wechatConfig:WechatConfig;
  
  wechatInit(): void {
    this.wechatConfig = new WechatConfig(false, 'qrcode_wechat', environment.Wechat.appid, environment.Wechat.redirect_url, null, 'black', null);
  }
  
```

## WechatConfig

see <a href="https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1419316505&token=&lang=zh_CN">wechat api</a>

```ts
    self_redirect: boolean;
    id: string;
    appid: string;
    scope: string;
    redirect_uri: string;
    state: any;
    style: 'black' | 'white';
    href: string;
    constructor(self_redirect: boolean, id: string, appid: string, redirect_uri: string, state: any, style: "black" | "white", href: string);
    getUrl(): string;
```

