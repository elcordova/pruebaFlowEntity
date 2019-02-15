import {DatakeyModel} from "../../../models/datakey.model";
import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {DataKeyActions, DataKeyActionTypes} from "./datakey.actions";

/**
 * state WorkItem
 */

export interface DataKeyState extends EntityState<DatakeyModel>{
}

/**
 * adapter WorkItem
 */
export const adapter : EntityAdapter<DatakeyModel> =
    createEntityAdapter<DatakeyModel>({});

/**
 * WorkItem initial state
 */
const initialDataKeyState= adapter.getInitialState();

/**
 * WorkItem Reducer
 */
export function dataKeyReducer(state = initialDataKeyState, action: DataKeyActions ): DataKeyState{
    switch(action.type){
        case DataKeyActionTypes.LoadDataKeys:
            return adapter.addAll(action.payload.datakeys,{...state});
        case DataKeyActionTypes.UpsertDataKeys:
            return adapter.addMany(action.payload.datakeys,{...state});
        default:
            return state;
    }
}