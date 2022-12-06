import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';



import { AppComponent } from './app.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { BotonLoginComponent } from './componentes/boton-login/boton-login.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { SeccPresentacionComponent } from './componentes/secc-presentacion/secc-presentacion.component';
import { SeccExperComponent } from './componentes/secc-exper/secc-exper.component';
import { SeccEstudioComponent } from './componentes/secc-estudio/secc-estudio.component';
import { SeccHabiliComponent } from './componentes/secc-habili/secc-habili.component';
import { SeccProyComponent } from './componentes/secc-proy/secc-proy.component';
import { LoginComponent } from './componentes/login/login.component';
import { ModalRedesComponent } from './modales/modal-redes/modal-redes.component';
import { ModalBannerComponent } from './modales/modal-banner/modal-banner.component';
import { ModalInfoComponent } from './modales/modal-info/modal-info.component';
import { ModalExperComponent } from './modales/modal-exper/modal-exper.component';
import { ModalEstudiComponent } from './modales/modal-estudi/modal-estudi.component';
import { ModalHabilComponent } from './modales/modal-habil/modal-habil.component';
import { ModalProyComponent } from './modales/modal-proy/modal-proy.component';
import { RegistroComponent } from './registro/registro/registro.component';
import { PaneldashComponent } from './panel/paneldash/paneldash.component';
import { IndexComponent } from './index/index.component';
import { Page404Component } from './page404/page404.component';
import { BotonLogoutComponent } from './componentes/boton-logout/boton-logout.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    BotonLoginComponent,
    BannerComponent,
    SeccPresentacionComponent,
    SeccExperComponent,
    SeccEstudioComponent,
    SeccHabiliComponent,
    SeccProyComponent,
    LoginComponent,
    ModalRedesComponent,
    ModalBannerComponent,
    ModalInfoComponent,
    ModalExperComponent,
    ModalEstudiComponent,
    ModalHabilComponent,
    ModalProyComponent,
    RegistroComponent,
    PaneldashComponent,
    IndexComponent,
    Page404Component,
    BotonLogoutComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
