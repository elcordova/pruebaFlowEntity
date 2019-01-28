export interface RequestFlowModel{
  filter: any;
  sort: number;
  tab: number;
  flowIds: Array<number>;
  maxResults: number;
  type: number;
  excludeWorkItems?: Array<{ workItemId: number, dateTime: number }>;
  excludeProcessCodes?: Array<string>;
}