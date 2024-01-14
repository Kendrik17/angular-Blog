import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './c/card/card.component';
import { BigCardComponent } from './c/big-card/big-card.component';
import { MenuBarComponent } from './c/menu-bar/menu-bar.component';
import { TitleComponent } from './c/title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    BigCardComponent,
    MenuBarComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
