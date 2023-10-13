import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DLoginComponent } from './d-login/d-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';




@NgModule({
  declarations: [
    DLoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DineshModule { }
