import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Advisor } from '../Model/commom';

@Injectable({
  providedIn: 'root'
})
export class AdvisorService {
  private baseUrl = 'http://localhost:5079/api/advisor';

  constructor(private http: HttpClient) { }

  getAllAdvisors(): Observable<Advisor[]> {
    return this.http.get<Advisor[]>(this.baseUrl);
  }

  getAdvisorById(id: number): Observable<Advisor> {
    return this.http.get<Advisor>(`${this.baseUrl}/${id}`);
  }

  createAdvisor(advisor: Advisor): Observable<Advisor> {
    return this.http.post<Advisor>(this.baseUrl, advisor);
  }

  updateAdvisor(id: number, advisor: Advisor): Observable<string> {
    return this.http.put<string>(`${this.baseUrl}/${id}`, advisor);
  }

  deleteAdvisor(id: number): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}/${id}`);
  }
}
