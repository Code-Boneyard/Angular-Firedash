export interface System {    
    // System References
    systemId?: string;

    // System State Tracking
    createdDate?: Date;
    createdBy?: string;
    lastModifiedDate?: Date;
    lastModifiedBy?: string;
    isActive?: boolean;

    // System Properties
    name?: string;
    description?: string;

    // System Management

}