import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyDataServiceService {

  constructor() { }

  getData(){
    return {
      name: 'subhadip',
      age: 20,
    }
  }
}
