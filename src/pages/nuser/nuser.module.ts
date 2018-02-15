import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuserPage } from './nuser';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';



@NgModule({
  declarations: [
    NuserPage,
  ],
  imports: [
    IonicPageModule.forChild(NuserPage),
  ],
})
export class NuserPageModule {
  
  
  constructor(public navCtrl: NavController,public alertCtrl: AlertController)
  {
   
}




}
