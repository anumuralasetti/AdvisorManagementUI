import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdvisorService } from '../../services/advisor.service';
import { Advisor } from '../../Model/commom';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-view-all-advisors',
  templateUrl: './view-all-advisors.component.html',
  styleUrl: './view-all-advisors.component.css'
})
export class ViewAllAdvisorsComponent {
  constructor(private router: Router,
    private advisorService: AdvisorService
  ){
    
  }
  advisors!: Observable<Advisor[]>;
  // [{name: 'Jhon', SIN: "231456789", address: 'H',phone:"1234567890"},
  // {name: 'Lee', SIN: "231456789", address: 'H',phone:"1234567890"}];
  displayedColumns: string[] = ['Name', 'SIN', 'Address','Phone','Update','Delete'];

  ngOnInit():void{
    this.advisors! = this.advisorService.getAllAdvisors();
    console.log(this.advisors!);
  }

  updateAdvisor(){
    this.router.navigateByUrl('/update-advisor');
  }

  deleteAdvisor(){
    
  }

}
