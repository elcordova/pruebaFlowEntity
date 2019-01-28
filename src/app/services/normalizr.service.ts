import {Injectable} from '@angular/core';
import {normalize, schema} from 'normalizr';

@Injectable({
    providedIn: 'root'
})
export class NormalizrService {

    normalizedFlow(unormalizeData:): { flows: any[], workitem: any[], datakeys: any[] } {



        return {flows: [], workitem: [], datakeys: []};
    }
}
