import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-view-results',
  templateUrl: './view-results.component.html',
  styleUrl: './view-results.component.css'
})
export class ViewResultsComponent {

  constructor( private http: HttpClient) {
  }
   results: any = [];
  displayedColumns: string[] = ['Course', 'Student', 'score'];

  ngOnInit():void{
      this.http.get("http://localhost:8080/results").subscribe((res) => {
        this.results=res;
      });
  }

  deleteresult(result: any) {
    this.http.put("http://localhost:8080/delete", result).subscribe((res) => {
        alert('result Deleted successfully.');
        this.http.get("http://localhost:8080/results").subscribe((res) => {
        this.results=res;
      });
      });
    }

}
