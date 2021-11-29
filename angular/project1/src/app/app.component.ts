import { Component } from '@angular/core';
import {MyDataServiceService} from './my-data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project1';
  name = ''
  constructor(private user: MyDataServiceService ){
    const data = this.user.getData()
    this.name = data.name
  }

  

}
