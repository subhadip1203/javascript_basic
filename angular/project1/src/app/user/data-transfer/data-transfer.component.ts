import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-transfer',
  templateUrl: './data-transfer.component.html',
  styleUrls: ['./data-transfer.component.css']
})
export class DataTransferComponent implements OnInit {
  myProperty = {
    name: 'subhadip'
  }

  myFunc(input: any ){
    console.log(input)
  }

  myfunc2(input: any){
    console.log(input)
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
