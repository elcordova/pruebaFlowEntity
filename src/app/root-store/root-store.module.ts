import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

/**
 * store
 */
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {DataFlowModule} from "./stores/data-flow/data-flow.module";
import {FlowModule} from "./stores/flows/flow.module";
import {WorkitemModule} from "./stores/workitems/workitem.module";
import {DatakeyModule} from "./stores/datakeys/datakey.module";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        DataFlowModule,
        FlowModule,
        WorkitemModule,
        DatakeyModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
        }),
    ]
})
export class RootStoreModule {
}
