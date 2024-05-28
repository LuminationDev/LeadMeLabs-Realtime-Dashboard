import type { Station } from "@/types/Station.ts";
import type { Notification } from "@/interfaces/notification.ts";

//Lab data types
export type LabsData = {
    [labName: string]: StationList
}

type StationList = {
    [stationId: number]: Station
}
