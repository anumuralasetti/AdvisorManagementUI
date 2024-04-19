import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddAdvisorComponent } from './components/add-advisor/add-advisor.component';
import { ViewAdvisorComponent } from './components/view-advisor/view-advisor.component';
import { ViewAllAdvisorsComponent } from './components/view-all-advisors/view-all-advisors.component';
import { UpdateAdvisorComponent } from './components/update-advisor/update-advisor.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-advisor', component: AddAdvisorComponent },
  {path: 'view-advisor', component: ViewAdvisorComponent },
  {path: 'view-alladvisors', component: ViewAllAdvisorsComponent },
  {path: 'update-advisor', component: UpdateAdvisorComponent }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
