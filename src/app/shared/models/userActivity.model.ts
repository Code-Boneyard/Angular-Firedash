export interface UserActivity {    
    // User Activity References
    userActivityId?: string;

    // User Activity State Tracking
    createdDate?: Date;
    createdBy?: string;
    lastModifiedDate?: Date;
    lastModifiedBy?: string;
    isActive?: boolean;

    // User Activity Properties
    name?: string;
    description?: string;

    // User Activity Management

}