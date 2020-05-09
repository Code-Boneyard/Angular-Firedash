export interface Agreement {    
    // Agreement References
    agreementId?: string;

    // Agreement State Tracking
    createdDate?: Date;
    createdBy?: string;
    lastModifiedDate?: Date;
    lastModifiedBy?: string;
    isActive?: boolean;

    // Agreement Properties
    name?: string;
    description?: string;

    // Agreement Management
    attachmentUrl?: Array<any>;
}