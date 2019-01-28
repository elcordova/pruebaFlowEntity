import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {flowReducer} from "./flow.reducer";

@NgModule({
  imports: [
    CommonModule,
      StoreModule.forFeature('flow', flowReducer),
      EffectsModule.forFeature([])
  ]
})
export class FlowModule { }
