import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {EMPTY, of} from 'rxjs';
import {map, mergeMap, catchError, switchMap} from 'rxjs/operators';
import {FlowService} from '../../../services/flow.service';
import {DataFlowActionTypes, ResquestingDataFlowAction, AddFlow} from './data-flow.actions';
import {NormalizerService} from "../../../services/normalizr.service";
import {Action} from "@ngrx/store";
import {AddFlows, UpsertFlows} from "../flows/flow.actions";
import {UpsertWorkItems} from "../workitems/workitem.actions";
import {UpsertDataKeys} from "../datakeys/datakey.actions";


@Injectable()
export class DataFlowEffects {

    @Effect()
    loadFlows$ = this.actions$
        .pipe(
            ofType(DataFlowActionTypes.RequestDataFlow),
            mergeMap((data: ResquestingDataFlowAction) => this.flowService.getFlows(data.payload.request)
                .pipe(
                    map(response => new AddFlow({flows: response, folderId: data.payload.folderId})),
                    catchError(() => EMPTY)
                ))
        );

    @Effect()
    addFlows$ = this.actions$
        .pipe(
            ofType(DataFlowActionTypes.AddDataFlow),
            switchMap((data: AddFlow) => {
                const resp = data.payload.flows;
                const newCases = this.normalizeService.normalizedFlow(resp.newCases, data.payload.folderId);
                const modifyCases = this.normalizeService.normalizedFlow(resp.modified, data.payload.folderId);
                /**
                 * action add
                 */
                    // add flow
                    // add workitem
                    // add datakey
                const addActions: Action[] = [
                        new UpsertFlows({flows: newCases.flows}),
                        new UpsertWorkItems({workitems: newCases.workitems}),
                        new UpsertDataKeys({datakeys: newCases.datakeys})
                    ];
                /**
                 * action edit
                 */
                    // edit flow
                    // edit workitem
                    // edit datakey
                const editActions: Action[] = [
                        new UpsertFlows({flows: modifyCases.flows}),
                        new UpsertWorkItems({workitems: modifyCases.workitems}),
                        new UpsertDataKeys({datakeys: newCases.datakeys})
                    ];

                return [...addActions, ...editActions]
            })
        );

    constructor(
        private actions$: Actions,
        private flowService: FlowService,
        private normalizeService: NormalizerService
    ) {
    }
}