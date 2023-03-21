import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Studies } from '../model/studies';

@Injectable({
  providedIn: 'root'
})
export class StudiesService {
studiesURL = 'http://localhost:8080/studies/'

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Studies[]>{
    return this.httpClient.get<Studies[]>(this.studiesURL + 'list');
  }

  public detail(id: number): Observable<Studies>{
    return this.httpClient.get<Studies>(this.studiesURL + `detail/${id}`);
  }

  public save(studies: Studies): Observable<any>{
    return this.httpClient.post<any>(this.studiesURL + 'create', studies);
  }

  public update(id: number, studies: Studies): Observable<any>{
      return this.httpClient.put<any>(this.studiesURL + `update/${id}`, studies);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.studiesURL + `delete/${id}`);
  }
}
