import { Component, OnInit ,Input , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() myProps: any;

  @Output() parentFunc:EventEmitter<any>= new EventEmitter()

  constructor() { }

  ngOnInit(): void {

    this.parentFunc.emit("onload child component")
  }

}
