import {Action} from "@ngrx/store";
import {Update} from "@ngrx/entity";
import {DatakeyModel} from "../../../models/datakey.model";

export enum DataKeyActionTypes {
    LoadDataKeys = '[DataKey] Load DataKeys',
    AddDataKey = '[DataKey] Add DataKey',
    UpsertDataKey = '[DataKey] Upsert DataKey',
    AddDataKeys = '[DataKey] Add DataKeys',
    UpsertDataKeys = '[DataKey] Upsert DataKeys',
    UpdateDataKey = '[DataKey] Update DataKey',
    UpdateDataKeys = '[DataKey] Update DataKeys',
    DeleteDataKey = '[DataKey] Delete DataKey',
    DeleteDataKeys = '[DataKey] Delete DataKeys',
    ClearDataKeys = '[DataKey] Clear DataKeys'
}

export class LoadDataKeys implements Action {
    readonly type = DataKeyActionTypes.LoadDataKeys;

    constructor(public payload: { datakeys: DatakeyModel[] }) {
    }
}

export class AddDataKey implements Action {
    readonly type = DataKeyActionTypes.AddDataKey;

    constructor(public payload: { datakey: DatakeyModel }) {
    }
}

export class UpsertDataKey implements Action {
    readonly type = DataKeyActionTypes.UpsertDataKey;

    constructor(public payload: { datakey: DatakeyModel }) {
    }
}

export class AddDataKeys implements Action {
    readonly type = DataKeyActionTypes.AddDataKeys;

    constructor(public payload: { datakeys: DatakeyModel[] }) {
    }
}

export class UpsertDataKeys implements Action {
    readonly type = DataKeyActionTypes.UpsertDataKeys;

    constructor(public payload: { datakeys: DatakeyModel[] }) {
    }
}

export class UpdateDataKey implements Action {
    readonly type = DataKeyActionTypes.UpdateDataKey;

    constructor(public payload: { datakey: Update<DatakeyModel> }) {
    }
}

export class UpdateDataKeys implements Action {
    readonly type = DataKeyActionTypes.UpdateDataKeys;

    constructor(public payload: { datakeys: Update<DatakeyModel>[] }) {
    }
}

export class DeleteDataKey implements Action {
    readonly type = DataKeyActionTypes.DeleteDataKey;

    constructor(public payload: { id: string }) {
    }
}

export class DeleteDataKeys implements Action {
    readonly type = DataKeyActionTypes.DeleteDataKeys;

    constructor(public payload: { ids: string[] }) {
    }
}

export class ClearDataKeys implements Action {
    readonly type = DataKeyActionTypes.ClearDataKeys;
}

export type DataKeyActions =
    LoadDataKeys
    | AddDataKey
    | UpsertDataKey
    | AddDataKeys
    | UpsertDataKeys
    | UpdateDataKey
    | UpdateDataKeys
    | DeleteDataKey
    | DeleteDataKeys
    | ClearDataKeys;