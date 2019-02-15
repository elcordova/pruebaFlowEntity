import {DataFlowState} from "./stores/data-flow/data-flow.reducer";
import {FlowState} from "./stores/flows/flow.reducer";
import {WorkitemState} from "./stores/workitems/workitem.reducer";
import {DataKeyState} from "./stores/datakeys/datakey.reducer";


export interface State {
    dataflow: DataFlowState;
    flow: FlowState;
    workitem: WorkitemState;
    datakey: DataKeyState
}