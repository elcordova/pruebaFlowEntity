import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { FlowModel } from '../../models/flow.model';

export enum FlowActionTypes {
  LoadFlows = '[Flow] Load Flows',
  AddFlow = '[Flow] Add Flow',
  UpsertFlow = '[Flow] Upsert Flow',
  AddFlows = '[Flow] Add Flows',
  UpsertFlows = '[Flow] Upsert Flows',
  UpdateFlow = '[Flow] Update Flow',
  UpdateFlows = '[Flow] Update Flows',
  DeleteFlow = '[Flow] Delete Flow',
  DeleteFlows = '[Flow] Delete Flows',
  ClearFlows = '[Flow] Clear Flows'
}

export class LoadFlows implements Action {
  readonly type = FlowActionTypes.LoadFlows;

  constructor(public payload: { flows: FlowModel[] }) {}
}

export class AddFlow implements Action {
  readonly type = FlowActionTypes.AddFlow;

  constructor(public payload: { flow: FlowModel }) {}
}

export class UpsertFlow implements Action {
  readonly type = FlowActionTypes.UpsertFlow;

  constructor(public payload: { flow: FlowModel }) {}
}

export class AddFlows implements Action {
  readonly type = FlowActionTypes.AddFlows;

  constructor(public payload: { flows: FlowModel[] }) {}
}

export class UpsertFlows implements Action {
  readonly type = FlowActionTypes.UpsertFlows;

  constructor(public payload: { flows: FlowModel[] }) {}
}

export class UpdateFlow implements Action {
  readonly type = FlowActionTypes.UpdateFlow;

  constructor(public payload: { flow: Update<FlowModel> }) {}
}

export class UpdateFlows implements Action {
  readonly type = FlowActionTypes.UpdateFlows;

  constructor(public payload: { flows: Update<FlowModel>[] }) {}
}

export class DeleteFlow implements Action {
  readonly type = FlowActionTypes.DeleteFlow;

  constructor(public payload: { id: string }) {}
}

export class DeleteFlows implements Action {
  readonly type = FlowActionTypes.DeleteFlows;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearFlows implements Action {
  readonly type = FlowActionTypes.ClearFlows;
}

export type FlowActions =
 LoadFlows
 | AddFlow
 | UpsertFlow
 | AddFlows
 | UpsertFlows
 | UpdateFlow
 | UpdateFlows
 | DeleteFlow
 | DeleteFlows
 | ClearFlows;
