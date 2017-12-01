import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Constants } from '../../utils/constants';

@Injectable()
export class TabelaPrecosProvider {

  constructor(public http: Http) {
    
  }

  getFiosTabelaPreco() {
    return this.http.get(`${Constants.urlWs}historicoGeral/tabelaPrecos`)
      .map(result => {
        console.log(result);
       return  result.json()
      });
  }

  obtemDadosItem(idTabelaPreco:number){
    return this.http.get(`${Constants.urlWs}historicoGeral/tabelaPrecos/detalheItem/${idTabelaPreco}`)
    .map(result => {
     return  result.json()
    });
  }

}
