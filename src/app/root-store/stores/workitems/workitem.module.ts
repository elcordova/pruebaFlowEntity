import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {workItemReducer} from "./workitem.reducer";

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('workitem', workItemReducer),
        EffectsModule.forFeature([])
    ]
})
export class WorkitemModule {
}
