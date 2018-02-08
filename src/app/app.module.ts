import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UniversalMairieSdkModule } from './modules/universal-mairie-sdk/universal-mairie-sdk.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UniversalMairieSdkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
