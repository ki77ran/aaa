import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent  {

  employees: any[];

  constructor(){
    this.employees=[
      {code:101,name:"Kiran",gender:'Male',annualSalary:55000,dateOfBirth:'06/10/1990'},
      {code:102,name:"Pruthvi",gender:'Male',annualSalary:45000,dateOfBirth:'07/11/1991'},
      {code:103,name:"Roja",gender:'Female',annualSalary:65000,dateOfBirth:'08/12/1991'},
      {code:104,name:"Ramesh",gender:'Male',annualSalary:75000,dateOfBirth:'09/09/1992'},
      {code:105,name:"Rani",gender:'Female',annualSalary:85000,dateOfBirth:'10/08/1993'}
    ]
   }

  ngOnInit() {
  }

}
