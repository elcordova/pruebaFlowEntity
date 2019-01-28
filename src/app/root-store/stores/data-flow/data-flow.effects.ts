import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap,catchError } from 'rxjs/operators';
import { FlowService } from '../../../services/flow.service';
import { DataFlowActionTypes, ResquestingDataFlowAction, AddFlow } from './data-flow.actions';

 
@Injectable()
export class DataFlowEffects {
 
  @Effect()
  loadFlows$ = this.actions$
    .pipe(
      ofType(DataFlowActionTypes.RequestDataFlow),
      mergeMap((data: ResquestingDataFlowAction) => this.flowService.getFlows(data.payload.request)
        .pipe(
          map(response => new AddFlow({flow: response})),
          catchError(() => EMPTY)
        ))
      );

  constructor(
    private actions$: Actions,
    private flowService: FlowService
  ) {}
}