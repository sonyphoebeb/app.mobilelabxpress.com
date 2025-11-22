import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientDirectoryService {
  private readonly apiBaseUrl = `${environment.apiUrl}/patients`;

  constructor(private http: HttpClient) {}

  getAllPatients(pageNumber: number, pageSize: number): Observable<any> {
    const url = `${this.apiBaseUrl}/getAllPatients?pageNumber=${pageNumber}&pageSize=${pageSize}`;
    return this.http.get<any>(url);
  }
  
  
}


