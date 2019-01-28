import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {dataFlowReducer} from "./data-flow.reducer";
import {DataFlowEffects} from "./data-flow.effects";

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('dataflow', dataFlowReducer),
        EffectsModule.forFeature([DataFlowEffects])
    ],
    providers: [DataFlowEffects]
})
export class DataFlowModule {
}
