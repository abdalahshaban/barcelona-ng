export interface RepairRequest {
  count: number;
  data: RepairRequestData[];
  errors: string;
  filterArray: object;
  filterRange: object;
  filterSearch: object;
  filterValue: object;
  message: string;
  pageNumber: number;
  pageSize: number;
  sortBy: string;
  sortType: string;
  succeeded: boolean;
}


export interface RepairRequestData {
  "id": number;
  "userId": string;
  "branchId": number;
  "appointment": string;
  "status": number;
  "deviceProblemClassificationId": number;
  "amount": number;
  "requestNumber": number
}

export interface ResponseBody {
  "succeeded": boolean;
  "message": string;
  "errors": string;
  "data": number
}