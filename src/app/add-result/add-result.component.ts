import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Course, Student } from '../Model/commom';

@Component({
  selector: 'app-add-result',
  templateUrl: './add-result.component.html',
  styleUrl: './add-result.component.css'
})

export class AddResultComponent {
  @ViewChild('f') myNgForm: { resetForm: () => void; } | undefined;
  resultForm: FormGroup;
  courses: Course[] = [];
  students: Student[]=[];
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.resultForm = this.formBuilder.group({
      course: ['', Validators.required],
      student: ['', Validators.required],
      score: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.http.get<Course[]>("http://localhost:8080/courses").subscribe((res: Course[]) => {
      this.courses = res;
    });
    this.http.get<Student[]>("http://localhost:8080/students").subscribe((res: Student[]) => {
      this.students = res;
    });
  }

  onSubmit() {
    if (this.resultForm.valid) {
      this.http.post("http://localhost:8080/results", this.resultForm.value).subscribe((res) => {
        if(res){
          this.myNgForm?.resetForm();
          this.resultForm.reset();
          alert('New result added successfully.');
        }
      });
    }
  }

}
