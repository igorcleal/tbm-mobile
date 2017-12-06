import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Constants } from '../../utils/constants';

@Injectable()
export class LoginService {

  constructor(public http: Http) {

  }

  login(login: string, password: string) {

    const h = this.getHeaders(btoa(login+':'+password));
    let headers = new Headers(h);
    let optionss = new RequestOptions({ 'headers': headers });
    return this.http.get(`${Constants.urlWs}itemSadig`, optionss);
  }

  getHeaders(authorization) {
    return {
      // 'Accept': 'application/json',
      // 'Content-Type': 'application/json',
      'Authorization': 'Basic ' + authorization
    }
  }

}
