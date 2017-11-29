import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Constants } from '../../utils/constants';

@Injectable()
export class ClienteSadigProvider {

  constructor(public http: Http) {

  }

  consultar() {
    return this.http.get(`${Constants.urlWs}/clienteSadig`)
      .map(result => {
        console.log(result);
       return  result.json()
      });
  }

}
