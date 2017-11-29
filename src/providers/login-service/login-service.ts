import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  constructor(public http: Http) {

  }

  login() {

    const h = this.getHeaders(btoa('user:pass'));
    let headers = new Headers(h);
    let optionss = new RequestOptions({ 'headers': headers });
    this.http.get('http://localhost:8100/api/ws-tbmmobile/rest/library/books', optionss).subscribe((data) => {
      console.log(data);
    })
  }

  getHeaders(authorization) {
    return {
      // 'Accept': 'application/json',
      // 'Content-Type': 'application/json',
      'Authorization': authorization
    }
  }

}
