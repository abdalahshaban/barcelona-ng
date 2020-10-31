import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { RepairRequest, ResponseBody } from '../models/repair-request'

@Injectable({
  providedIn: 'root'
})
export class RepairRequestsService {

  constructor(private http: HttpClient) { }


  getlistRepairRequest({ pageNumber = 1, pageSize = 10 }) {
    return this.http.get(`${environment.api}/RepairRequest?PageNumber=${pageNumber}&PageSize=${pageSize}`)
      .pipe(
        map((listRepairRequest: RepairRequest) => {
          return listRepairRequest;
        })
      );


  }

  editRepairRequest() {

  }

  deleteRepairRequest({ itemId }) {
    return this.http.delete(`${environment.api}/RepairRequest/${itemId}`)
      .pipe(
        map((response: ResponseBody) => {
          return response;
        })
      );
  }

}
