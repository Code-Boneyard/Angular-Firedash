export interface TimeEntry {    
    // TimeEntry References
    timeEntryId?: string;

    // TimeEntry State Tracking
    createdDate?: Date;
    createdBy?: string;
    lastModifiedDate?: Date;
    lastModifiedBy?: string;
    isActive?: boolean;

    // TimeEntry Properties
    name?: string;
    description?: string;

    // TimeEntry Management

}