import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-advisor',
  templateUrl: './add-advisor.component.html',
  styleUrl: './add-advisor.component.css'
})
export class AddAdvisorComponent {
  @ViewChild('f') myNgForm: { resetForm: () => void; } | undefined;
  advisorForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.advisorForm = this.formBuilder.group({
      Name: ['', Validators.required],
      SIN: ['', Validators.required],
      Address: ['', Validators.required],
      Phone: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.advisorForm.valid) {
      this.http.post("http://localhost:8080/students", this.advisorForm.value).subscribe((res) => {
        if(res){
          this.myNgForm?.resetForm();
          this.advisorForm.reset();
          alert('New Advisor added successfully.');
        }
      });
    } 
  }

}
