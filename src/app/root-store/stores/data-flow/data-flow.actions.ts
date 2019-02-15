import { Action } from '@ngrx/store';
import { RequestFlowModel } from '../../../models/request-flow.model';
import { ResponseFlowModel } from '../../../models/response-flow.model';

export enum DataFlowActionTypes {
  RequestDataFlow = '[Api] requesting DataFlow',
  AddDataFlow = '[Flow] Add DataFlow',
  UpdatedFlows = '[Flow] Update DataFlow',
  ClearDataFlows = '[Flow] Clear DataFlows'
}

export class ResquestingDataFlowAction implements Action{
  readonly type = DataFlowActionTypes.RequestDataFlow;

  constructor(public payload:{ request: RequestFlowModel, folderId:number}){
  }
}



export class AddFlow implements Action {
  readonly type = DataFlowActionTypes.AddDataFlow;

  constructor(public payload: { flows: ResponseFlowModel,folderId:number }) {}
}

export type DataFlowsTypes = ResquestingDataFlowAction|AddFlow;