import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {WorkitemModel} from "../../../models/workitem.model";
import {WorkItemActions, WorkitemActionTypes} from "./workitem.actions";

/**
 * state WorkItem
 */
export interface WorkitemState extends EntityState<WorkitemModel>{
}

/**
 * adapter WorkItem
 */
export const adapter : EntityAdapter<WorkitemModel> =
    createEntityAdapter<WorkitemModel>({});

/**
 * WorkItem initial state
 */
const initialFlowState= adapter.getInitialState();

/**
 * WorkItem Reducer
 */
export function workItemReducer(state = initialFlowState, action: WorkItemActions ): WorkitemState{
    switch(action.type){
        case WorkitemActionTypes.LoadWorkItems:
            return adapter.addAll(action.payload.workitems,{...state});
        case WorkitemActionTypes.UpsertWorkItems:
            return adapter.addMany(action.payload.workitems,{...state});
        default:
            return state;
    }
}