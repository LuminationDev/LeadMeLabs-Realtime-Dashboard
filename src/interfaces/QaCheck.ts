type CheckStatus = "passed" | "failed" | "detail" | "warning";

export interface Check {
    _id: string;
    _message?: string;
    _passedStatus: CheckStatus;
}

export interface Category {
    [key: string]: Check;
}

export interface Device {
    [key: string]: Category;
}

export interface Version {
    [key: string]: Device;
}

export interface Lab {
    [key: string]: Version;
}

export interface QaChecks {
    [key: string]: Lab;
}