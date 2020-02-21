export interface Goal {    
    // Goal References
    goalId?: string;
    userId?: string;
    managerId?: string;
    teamId?: string;

    // Goal State Tracking
    createdDate?: Date;
    createdBy?: string;
    lastModifiedDate?: Date;
    lastModifiedBy?: string;
    isActive?: boolean;

    // Goal Properties
    name?: string;
    description?: string;
    priority?: string;
    actions?: Array<any>;

    // Goal Management

}