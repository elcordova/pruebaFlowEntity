import { Injectable,Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { RequestFlowModel } from '../models/request-flow.model';
import { ResponseFlowModel } from '../models/response-flow.model';

@Injectable({
  providedIn: 'root',
})
export class FlowService {

  constructor(private http: HttpClient) { }

  public getFlows(request:RequestFlowModel): Observable<ResponseFlowModel>{
    return this.http.get('./assets/flows.json');
  }
}