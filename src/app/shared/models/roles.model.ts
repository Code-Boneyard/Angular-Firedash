export interface Role {    
    // Role References
    roleId?: string;

    // Role State Tracking
    createdDate?: Date;
    createdBy?: string;
    lastModifiedDate?: Date;
    lastModifiedBy?: string;
    isActive?: boolean;

    // Role Properties
    name?: string;
    description?: string;

    // Role Management

}