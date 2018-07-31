export class WechatConfig {
  self_redirect: boolean;
  id: string;
  appid: string;
  scope = 'snsapi_login';
  redirect_uri: string;
  state;
  style: 'black' | 'white';
  href: string;


  constructor(self_redirect: boolean, id: string, appid: string, redirect_uri: string, state, style: "black" | "white", href: string) {
    this.self_redirect = self_redirect;
    this.id = id;
    this.appid = appid;
    this.redirect_uri = encodeURI(redirect_uri);
    this.state = state;
    this.style = style;
    this.href = href;
  }

  public getUrl(): string {
    let url = "https://open.weixin.qq.com/connect/qrconnect?appid=" + this.appid + "&scope=" + this.scope + "&redirect_uri=" + this.redirect_uri + "&state=" + this.state + "&login_type=jssdk&self_redirect=" + this.self_redirect;
    url += this.style ? "&style=" + this.style : "";
    url += this.href ? "&href=" + this.href : "";
    return url;
  };
}
