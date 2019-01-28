import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { FlowModel } from '../../../models/flow.model';
import { FlowActions, FlowActionTypes } from './flow.actions';


/**
 * state Flow
 */
export interface FlowState extends EntityState<FlowModel>{

}
/**
 * adapter Flow
 */
export const adapter : EntityAdapter<FlowModel> = 
   createEntityAdapter<FlowModel>({});


/**
 * flow initial state
 */
const initialFlowState= adapter.getInitialState();

/**
 * flow Reducer
 */
export function flowReducer(state = initialFlowState, action: FlowActions ): FlowState{
  switch(action.type){
    case FlowActionTypes.LoadFlows:
      return adapter.addAll(action.payload.flows,{...state});
    case FlowActionTypes.AddFlows:
      return adapter.addMany(action.payload.flows,{...state});
      default:
      return state;
  }
}