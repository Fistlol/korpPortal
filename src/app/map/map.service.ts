import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) { }

  getMap(): Observable<any> {
    return this.http.get(`CorporateWebAPI/Stat/GetMapEmployeesQty`);
  }
}
