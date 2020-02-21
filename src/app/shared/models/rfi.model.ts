export interface Rfi {    
    // RFI References
    rfiId?: string;

    // RFI State Tracking
    createdDate?: Date;
    createdBy?: string;
    lastModifiedDate?: Date;
    lastModifiedBy?: string;
    isActive?: boolean;

    // RFI Properties
    name?: string;
    description?: string;

    // RFI Management
    attachments?: Array<any>;
}