import {DataFlowActionTypes, DataFlowsTypes} from './data-flow.actions';

export interface DataFlowState {
    loadingFlows: boolean;
    errorFlows: any[];
}

const initialFlowsState: DataFlowState = {
    loadingFlows: false,
    errorFlows: []
};

export function dataFlowReducer(state = initialFlowsState, action: DataFlowsTypes): DataFlowState {
    switch (action.type) {
        case DataFlowActionTypes.RequestDataFlow:
            return {
                ...state,loadingFlows:true,errorFlows:[]
            };
        case DataFlowActionTypes.AddDataFlow:
            return {
                ...state,loadingFlows:false
            };
        default:
            return {
                ...state
            };

    }
    return state;
}