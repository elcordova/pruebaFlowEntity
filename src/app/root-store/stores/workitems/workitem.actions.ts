import {Action} from "@ngrx/store";
import {Update} from "@ngrx/entity";
import {WorkitemModel} from "../../../models/workitem.model";

export enum WorkitemActionTypes {
    LoadWorkItems = '[WorkItem] Load WorkItems',
    AddWorkItem = '[WorkItem] Add WorkItem',
    UpsertWorkItem = '[WorkItem] Upsert WorkItem',
    AddWorkItems = '[WorkItem] Add WorkItems',
    UpsertWorkItems = '[WorkItem] Upsert WorkItems',
    UpdateWorkItem = '[WorkItem] Update WorkItem',
    UpdateWorkItems = '[WorkItem] Update WorkItems',
    DeleteWorkItem = '[WorkItem] Delete WorkItem',
    DeleteWorkItems = '[WorkItem] Delete WorkItems',
    ClearWorkItems = '[WorkItem] Clear WorkItems'
}

export class LoadWorkItems implements Action {
    readonly type = WorkitemActionTypes.LoadWorkItems;

    constructor(public payload: { workitems: WorkitemModel[] }) {}
}

export class AddWorkItem implements Action {
    readonly type = WorkitemActionTypes.AddWorkItem;

    constructor(public payload: { workitem: WorkitemModel }) {}
}

export class UpsertWorkItem implements Action {
    readonly type = WorkitemActionTypes.UpsertWorkItem;

    constructor(public payload: { workitem: WorkitemModel }) {}
}

export class AddWorkItems implements Action {
    readonly type = WorkitemActionTypes.AddWorkItems;

    constructor(public payload: { workitems: WorkitemModel[] }) {}
}

export class UpsertWorkItems implements Action {
    readonly type = WorkitemActionTypes.UpsertWorkItems;

    constructor(public payload: { workitems: WorkitemModel[] }) {}
}

export class UpdateWorkItem implements Action {
    readonly type = WorkitemActionTypes.UpdateWorkItem;

    constructor(public payload: { workitem: Update<WorkitemModel> }) {}
}

export class UpdateWorkItems implements Action {
    readonly type = WorkitemActionTypes.UpdateWorkItems;

    constructor(public payload: { workitems: Update<WorkitemModel>[] }) {}
}

export class DeleteWorkItem implements Action {
    readonly type = WorkitemActionTypes.DeleteWorkItem;

    constructor(public payload: { id: string }) {}
}

export class DeleteWorkItems implements Action {
    readonly type = WorkitemActionTypes.DeleteWorkItems;

    constructor(public payload: { ids: string[] }) {}
}

export class ClearWorkItems implements Action {
    readonly type = WorkitemActionTypes.ClearWorkItems;
}

export type WorkItemActions =
    LoadWorkItems
    | AddWorkItem
    | UpsertWorkItem
    | AddWorkItems
    | UpsertWorkItems
    | UpdateWorkItem
    | UpdateWorkItems
    | DeleteWorkItem
    | DeleteWorkItems
    | ClearWorkItems;