import {Injectable, Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {State} from "./root-store/state";
import {ResquestingDataFlowAction} from "./root-store/stores/data-flow/data-flow.actions";


@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    name = 'Angular';

    constructor(private store: Store<State>) {

    }

    ngOnInit(): void {
        this.store.dispatch(new ResquestingDataFlowAction({
            request: {
                excludeProcessCodes: [],
                excludeWorkItems: [],
                filter: 1,
                flowIds: [12, 10],
                maxResults: 60,
                sort: 1,
                tab: 1,
                type: 1
            }
        }))




    }
}
