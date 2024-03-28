import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { ViewStudentsComponent } from './view-students/view-students.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { ViewCoursesComponent } from './view-courses/view-courses.component';
import { AddResultComponent } from './add-result/add-result.component';
import { ViewResultsComponent } from './view-results/view-results.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-students', component: AddStudentComponent },
  {path: 'view-students', component: ViewStudentsComponent },
  {path: 'add-course', component: AddCourseComponent },
  {path: 'view-courses', component: ViewCoursesComponent },
  {path: 'add-result', component: AddResultComponent },
  {path: 'view-results', component: ViewResultsComponent }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
