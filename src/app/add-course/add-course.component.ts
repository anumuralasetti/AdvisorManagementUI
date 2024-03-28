import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css'
})
export class AddCourseComponent {
  courseForm: FormGroup;
  @ViewChild('f') myNgForm: { resetForm: () => void; } | undefined;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.courseForm = this.formBuilder.group({
      course_Name: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.courseForm.valid) {
      this.http.post("http://localhost:8080/courses", this.courseForm.value).subscribe((res) => {
        if(res){
          this.myNgForm?.resetForm();
          this.courseForm.reset();
          alert('New course added successfully.');
        }  
      });
    } 
  }

}
