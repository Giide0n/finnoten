import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseGuard } from './base/base-guard';
import { BaseComponent } from './base/components/base/base.component';
import { HeaderComponent } from './header/components/header/header.component';
import { LoginComponent } from './login/components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [BaseGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
