export interface Budget {    
    // Budget References
    budgetId?: string;

    // Budget State Tracking
    createdDate?: Date;
    createdBy?: string;
    lastModifiedDate?: Date;
    lastModifiedBy?: string;
    isActive?: boolean;

    // Budget Properties
    name?: string;
    description?: string;

    // Budget Management

}