import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdvisorService } from '../../services/advisor.service';
import { Observable } from 'rxjs/internal/Observable';
import { Advisor } from '../../Model/commom';

@Component({
  selector: 'app-view-advisor',
  templateUrl: './view-advisor.component.html',
  styleUrl: './view-advisor.component.css'
})
export class ViewAdvisorComponent {
  constructor(private router: Router,
    private advisorService: AdvisorService
  ) { }
  advisors!: Observable<Advisor[]>;
  advisor!:Observable<Advisor>;
  displayedColumns: string[] = ['Name', 'SIN', 'Address','Phone','Update','Delete'];


  ngOnInit():void{
    this.advisors! = this.advisorService.getAllAdvisors();
  }

  onAdvisorSelection(advisorId: number): void {
    this.advisor! = this.advisorService.getAdvisorById(advisorId);
    }

  updateAdvisor(){
    this.router.navigateByUrl('/update-advisor');
  }

  deleteAdvisor(){
    
  }
}
