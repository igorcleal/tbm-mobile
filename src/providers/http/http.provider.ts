import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { Constants } from '../../utils/constants';

@Injectable()
export class HttpProvider {

  constructor(public http: Http, public storage: Storage) {
    console.log('Hello HttpProvider Provider');
  }

  getHeaders(authorization) {
    return {
      // 'Accept': 'application/json',
      // 'Content-Type': 'application/json',
      'Authorization': 'Basic ' + authorization
    }
  }

  get(url: string) {
    return this.storage.get('usuario').then((usuario) => {
      const h = this.getHeaders(btoa(usuario.login + ':' + usuario.password));
      let headers = new Headers(h);
      let options = new RequestOptions({ 'headers': headers });
      return this.http.get(url, options)
    })
  }

}
