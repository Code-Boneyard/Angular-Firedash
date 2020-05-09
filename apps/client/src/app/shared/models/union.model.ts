export interface union {    
    // Union References
    unionId?: string;

    // Union State Tracking
    createdDate?: Date;
    createdBy?: string;
    lastModifiedDate?: Date;
    lastModifiedBy?: string;
    isActive?: boolean;

    // Union Properties
    name?: string;
    description?: string;

    // Union Management
    unionUrl?: string;

}