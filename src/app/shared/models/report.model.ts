export interface Report {    
    // Report References
    reportId?: string;

    // Report State Tracking
    createdDate?: Date;
    createdBy?: string;
    lastModifiedDate?: Date;
    lastModifiedBy?: string;
    isActive?: boolean;

    // Report Properties
    name?: string;
    description?: string;

    // Report Management
    attachments?: Array<any>;
}