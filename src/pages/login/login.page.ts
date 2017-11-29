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

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder,
    public loginService:LoginService) {

    this.formLogin = formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });

  }

  login(){
    //this.loginService.login();
    this.navCtrl.push('HistoricoGeralPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
