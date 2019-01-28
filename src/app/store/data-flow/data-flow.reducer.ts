import { DataFlowsTypes } from './data-flow.actions';

export interface DataFlowState{
  loadingFlows: boolean;
  errorFlows: any[];
}

const initialFlowsState:DataFlowState={
  loadingFlows: false,
  errorFlows: []
}

export function dataFlowReducer(state=initialFlowsState,action:DataFlowsTypes): DataFlowState{
  return state;
}