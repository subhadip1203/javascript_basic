import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { IfelseComponent } from './ifelse/ifelse.component';
import { SwitchComponent } from './switch/switch.component';
import { LoopComponent } from './loop/loop.component';
import { DataTransferComponent } from './data-transfer/data-transfer.component';
import { ChildComponent } from './data-transfer/child/child.component';


@NgModule({
  declarations: [
    AuthComponent,
    IfelseComponent,
    SwitchComponent,
    LoopComponent,
    DataTransferComponent,
    ChildComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AuthComponent,
    IfelseComponent,
    SwitchComponent,
    LoopComponent,
    DataTransferComponent,
  ],
})
export class UserModule { }
