import {Injectable} from '@angular/core';
import {normalize, schema} from 'normalizr';
import {FlowModel} from "../models/flow.model";

@Injectable({
    providedIn: 'root'
})
export class NormalizerService {

    normalizedFlow(unormalizeData: any, folderId: number): { flows: FlowModel[], workitems: any[], datakeys: any[] } {
        let dataNormalized = {flows: [], workitems: [], datakeys: []};


        if (unormalizeData) {

            // define a datakey schema
            const dataKey = new schema.Entity('datakeys', {}, {
                processStrategy: (value, parent, key) => {
                    value.id = value.dataKeyValueId + '-' + parent.id;
                    return value
                }
            });


            // Define a workitem schema
            const workitem = new schema.Entity('workitems', {
                dataKeys: [dataKey],
            });


            // Define your flow schema
            const flow = new schema.Entity('flow', {
                worklist: [workitem],
            }, {
                processStrategy: (value) => {
                    value.id = `${folderId}-${value.processCode}`;
                    return value;
                }
            });
            const normalizedData = normalize(unormalizeData, [flow]);
            dataNormalized = this.splitObjectArray(normalizedData);
        }


        return dataNormalized;
    }

    private splitObjectArray(objNorm: { result: any[], entities: { datakeys: any, flow: any, workitems: any } }): { flows: FlowModel[], workitems: any[], datakeys: any[] } {
        const flowArray = Object.keys(objNorm.entities.flow).map(id => objNorm.entities.flow[id]);
        const workItemArray = Object.keys(objNorm.entities.workitems).map(id => objNorm.entities.workitems[id]);
        const datakeyArray = Object.keys(objNorm.entities.datakeys).map(id => objNorm.entities.datakeys[id]);
        return {flows: flowArray, datakeys: datakeyArray, workitems: workItemArray};
    }


}
