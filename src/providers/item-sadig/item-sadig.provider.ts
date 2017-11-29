import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Constants } from '../../utils/constants';

@Injectable()
export class ItemSadigProvider {

  constructor(public http: Http) {
    console.log('Hello ItemSadigProvider Provider');
  }

  consultar() {
    return this.http.get(`${Constants.urlWs}/itemSadig`)
      .map(result => {
        console.log(result);
       return  result.json()
      });
  }

}
