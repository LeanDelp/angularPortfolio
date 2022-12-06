import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { Page404Component } from './page404/page404.component';
import { PaneldashComponent } from './panel/paneldash/paneldash.component';
import { RegistroComponent } from './registro/registro/registro.component';



const routes: Routes = [
  {path: '' , component: IndexComponent },
  {path: 'panel', component: PaneldashComponent},
  {path: 'registro', component: RegistroComponent},
  {path: '**', component: Page404Component},
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
