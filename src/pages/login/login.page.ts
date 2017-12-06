import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from "@angular/forms";
import { LoginService } from "../../providers/login-service/login-service";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.page.html',
})
export class LoginPage {

  formLogin: any;
  login:string;
  password:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder,
    public loginService:LoginService) {

    this.formLogin = formBuilder.group({
      login: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });

  }

  logar(){
    this.loginService.login(this.login, this.password).subscribe((response)=>{
      console.log('success');
      console.log(response);
    },(error)=>{
      console.error(error);
      console.error('error');
    })
    //this.navCtrl.push('HistoricoGeralPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
