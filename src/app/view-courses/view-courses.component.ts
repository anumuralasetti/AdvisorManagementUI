import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-view-courses',
  templateUrl: './view-courses.component.html',
  styleUrl: './view-courses.component.css'
})
export class ViewCoursesComponent {
  constructor( private http: HttpClient) {
  }
   courses: any = [];
  displayedColumns: string[] = ['Name', 'Delete'];

  ngOnInit():void{
      this.http.get("http://localhost:8080/courses").subscribe((res) => {
        this.courses=res;
      });
  }

  deletecourse(course: any) {
    this.http.put("http://localhost:8080/courseDelete", course).subscribe((res) => {
        alert('course Deleted successfully.');
        this.http.get("http://localhost:8080/courses").subscribe((res) => {
        this.courses=res;
      });
      });
    }
}
