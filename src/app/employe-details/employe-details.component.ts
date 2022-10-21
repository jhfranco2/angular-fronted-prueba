import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employe-details',
  templateUrl: './employe-details.component.html',
  styleUrls: ['./employe-details.component.css']
})
export class EmployeDetailsComponent implements OnInit {

  id!:number;
  employee!: Employee
  constructor(private router:ActivatedRoute,private employService:EmployeeService) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];

    this.employee = new Employee();
    this.employService.getEmployeeById(this.id).subscribe(data=>{
      this.employee = data;
    });

  }

}
