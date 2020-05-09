export interface File {    
    // File References
    fileId?: string;
    teamId?: string;
    projectId?: string;

    // File State Tracking
    createdDate?: Date;
    createdBy?: string;
    lastModifiedDate?: Date;
    lastModifiedBy?: string;
    isActive?: boolean;

    // File Properties
    filename?: string;
    type?: string;
    description?: string;

    // File Management
    alerts?: string;
}