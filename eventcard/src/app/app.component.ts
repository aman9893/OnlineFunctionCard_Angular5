import { Component, OnInit } from '@angular/core';
import { MyServiceService } from './service/my-service.service';
import { NgForm, FormGroup, FormArray, FormsModule, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private _demoService: MyServiceService,
    private formBuilder: FormBuilder) { }
  peoples = [];
  demoForm: FormGroup;

  ngOnInit() {
   this.getPeopleData();
    console.log('aman');
    this.createForm();
    }

  getPeopleData(): void {
    this._demoService.getPeople()
    .subscribe(
    data  => this.getPeopleList(data),
    error => this.getPeopleList(error)
    );
    }
    getPeopleList(data) {

      console.log(data);
        this.peoples = data;
        console.log(data);
        console.log(this.peoples);

  }

createForm() {

  this.demoForm = this.formBuilder.group({

    task : new FormControl('', {}),
    address : new FormControl('', {}),

    password : new FormControl('', {}),
  });
}
  onSubmit() {

      console.log(this.demoForm.value);

      const demoFormData = {

        employee_name : this.demoForm.controls['task'].value,
        employee_salary: this.demoForm.controls['address'].value,
        employee_age: this.demoForm.controls['password'].value
      };

      console.log(demoFormData);

      this._demoService.postPeople(demoFormData).subscribe(
      data => this.closeDialog(data),

      );

  }
  closeDialog(data): void {
    console.log(data);
    }
  }
