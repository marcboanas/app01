import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './header/header.component';

import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './pages/callback/callback.component';

import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './core/api.service';
import { LoadingComponent } from './core/loading.component';

import { UtilsService } from './core/utils.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CallbackComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
  	Title,
    AuthService,
    ApiService,
    UtilsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
