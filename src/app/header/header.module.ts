import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header.component';
import {SignUpComponent} from '../auth/sign-up/sign-up.component';
import {SignInComponent} from '../auth/sign-in/sign-in.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';

const headerRoutes:Routes=[
  {path: 'sign-up' , component:SignUpComponent},
  {path: 'sign-in' , component:SignInComponent}
];

@NgModule({
  declarations:[
    HeaderComponent,
    SignUpComponent,
    SignInComponent
  ],
  imports:[
    CommonModule,
    RouterModule.forChild(headerRoutes),
    FormsModule
  ],
  exports: [
    RouterModule,
    HeaderComponent
  ]
})

export class HeaderModule {

}
