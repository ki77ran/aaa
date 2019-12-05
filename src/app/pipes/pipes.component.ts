import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent  {
 name="angular";

  date=new Date();

  emp=[
    {id:1,name:"Mayank",age:23,gender:"Male"},
    {id:2,name:"kiran",age:28,gender:"Male"},
    {id:3,name:"mehboob",age:29,gender:"Male"},
    {id:4,name:"prithviraj",age:30,gender:"Male"}
  ]

}
