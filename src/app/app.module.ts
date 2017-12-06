import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, LOCALE_ID } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from "@angular/http";
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginService } from '../providers/login-service/login-service';
import { HttpProvider } from '../providers/http/http.provider';
import { ClienteSadigProvider } from '../providers/cliente-sadig/cliente-sadig.provider';
import { UtilsProvider } from '../providers/utils/utils.provider';
import { ItemSadigProvider } from '../providers/item-sadig/item-sadig.provider';
import { HistoricoGeralProvider } from '../providers/historico-geral/historico-geral.provider';
import { TabelaPrecosProvider } from '../providers/tabela-precos/tabela-precos.provider';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    LoginService,
    HttpProvider,
    ClienteSadigProvider,
    UtilsProvider,
    ItemSadigProvider,
    HistoricoGeralProvider,
    TabelaPrecosProvider,
    HttpProvider
  ]
})
export class AppModule {}
