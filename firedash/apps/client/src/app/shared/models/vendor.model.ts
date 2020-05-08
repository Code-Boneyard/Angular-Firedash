export interface Vendor {    
    // Vendor References
    vendorId?: string;

    // Vendor State Tracking
    createdDate?: Date;
    createdBy?: string;
    lastModifiedDate?: Date;
    lastModifiedBy?: string;
    isActive?: boolean;

    // Vendor Properties
    name?: string;
    description?: string;

    // Vendor Management

}