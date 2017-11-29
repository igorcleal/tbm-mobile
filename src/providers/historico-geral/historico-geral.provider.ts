import { NavParams } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Constants } from '../../utils/constants';

@Injectable()
export class HistoricoGeralProvider {

  constructor(public http: Http) {
    console.log('Hello HistoricoGeralProvider Provider');
    
  }

  volumeFaturadoUltimosSeisMeses(cliente:string, item:string) {
    return this.http.get(`${Constants.urlWs}/historicoGeral/volumeFaturado?cliente=${cliente}&item=${item}`)
      .map(result => {
        console.log(result);
       return  result.json()
      });
  }

  ultimosPedidos(cliente:string, item:string) {
    return this.http.get(`${Constants.urlWs}/historicoGeral/ultimosPedidos?cliente=${cliente}&item=${item}`)
      .map(result => {
        console.log(result);
       return  result.json()
      });
  }

  pedidosAbertos(cliente:string, item:string) {
    return this.http.get(`${Constants.urlWs}/historicoGeral/pedidosAbertos?cliente=${cliente}&item=${item}`)
      .map(result => {
        console.log(result);
       return  result.json()
      });
  }

}
