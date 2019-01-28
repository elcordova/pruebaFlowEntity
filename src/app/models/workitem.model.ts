export interface WorkitemModel {
  id: number;
  holdWorkitem: boolean;
  relatedParticipantUserName: string;
  endDate: number;
  subject: string;
  activityTypeValueId: number;
  ownerId: string;
  dataKeys: any[];
}