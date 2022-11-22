import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { BotonLoginComponent } from './componentes/boton-login/boton-login.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { SeccPresentacionComponent } from './componentes/secc-presentacion/secc-presentacion.component';
import { SeccExperComponent } from './componentes/secc-exper/secc-exper.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    BotonLoginComponent,
    BannerComponent,
    SeccPresentacionComponent,
    SeccExperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
