export interface Assembly {    
    
    // References
    assemblyId?: string;

    // State Tracking
    createdDate?: Date;
    createdBy?: string;
    lastModifiedDate?: Date;
    lastModifiedBy?: string;
    isActive?: boolean;

    // Assembly Properties
    name?: string;
    description?: string;
    code?: string;
    items?: Array<any>;

    // Assembly Management
    photoUrl?: string;
    cadUrl?: string;

}