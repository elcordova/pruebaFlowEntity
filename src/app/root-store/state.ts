import {DataFlowState} from "./stores/data-flow/data-flow.reducer";
import {FlowState} from "./stores/flows/flow.reducer";


export interface State {
    dataflow: DataFlowState;
    flow: FlowState;
}