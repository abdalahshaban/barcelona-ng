import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobileApiService {
  private baseUrl : string = 'http://mazenebada-001-site1.itempurl.com/api/v1'
  private prefix : string = 'MobilePhone'
  constructor(private http:HttpClient) { }
  getAllMobilePhones(){
    return this.http.get(`${this.baseUrl}/${this.prefix}`)
  }

}
