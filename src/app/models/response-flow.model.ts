export interface ResponseFlowModel {
  newCases?: Array<any>;
  managed?: Array<{ processCode: string, id: number }>;
  modified?: Array<any>;
}