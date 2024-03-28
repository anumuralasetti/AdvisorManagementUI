import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  @ViewChild('f') myNgForm: { resetForm: () => void; } | undefined;
  studentForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.studentForm = this.formBuilder.group({
      first_Name: ['', Validators.required],
      family_Name: ['', Validators.required],
      dob: ['', [Validators.required, this.ageValidator]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$')]]
    });
  }

  ageValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value) {
      const dob = new Date(control.value);
      const today = new Date();
      const diff = today.getFullYear() - dob.getFullYear();
      if (diff < 10) {
        return { 'ageInvalid': true };
      }
    }
    return null;
  }
  onSubmit() {
    if (this.studentForm.valid) {
      this.http.post("http://localhost:8080/students", this.studentForm.value).subscribe((res) => {
        if(res){
          this.myNgForm?.resetForm();
          this.studentForm.reset();
          alert('New student added successfully.');
        }
      });
    } 
  }
}
