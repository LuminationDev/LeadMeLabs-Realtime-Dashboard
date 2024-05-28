export interface Notification {
    key?: string,
    title: string,
    messages: string[],
    urgency: string,
    _timeStamp: string,
    photoLinks?: string[],
    videoLink?: string
}

export type NotificationData = {
    [NotificationName: string]: Notification
}

export interface PreviewImage {
    url: string;
    file: any;
}

export interface AcknowledgementEntry {
    _timeStamp: string,
    acknowledged: boolean,
}

export type Acknowledgement = {
    [AcknowledgementId: string]: AcknowledgementEntry
}

export type AcknowledgementData = {
    [LabLocation: string]: Acknowledgement
}

export interface ResultEntry {
    title: string;
    entries: LabEntry[];
}

export interface LabEntry {
    labName: string;
}
