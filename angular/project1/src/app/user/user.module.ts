import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { IfelseComponent } from './ifelse/ifelse.component';
import { SwitchComponent } from './switch/switch.component';
import { LoopComponent } from './loop/loop.component';


@NgModule({
  declarations: [
    AuthComponent,
    IfelseComponent,
    SwitchComponent,
    LoopComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AuthComponent,
    IfelseComponent,
    SwitchComponent,
    LoopComponent,
  ],
})
export class UserModule { }
