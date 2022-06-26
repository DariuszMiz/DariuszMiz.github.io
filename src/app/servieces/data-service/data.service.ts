import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  public getFile(path: string): Observable<any> {
    return this.http.get<any>(path);
  }

  public getProjects(): Observable<any> {
    return this.getFile('assets/data/projects.json');
  }
}
