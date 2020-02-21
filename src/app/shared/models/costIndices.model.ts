export interface CostIndices {    
    // Cost Index References
    indexId?: string;

    // Index State Tracking
    createdDate?: Date;
    createdBy?: string;
    lastModifiedDate?: Date;
    lastModifiedBy?: string;
    isActive?: boolean;


    // Index Properties
    name?: string;
    description?: string;

    // Index Management
    apiKey?: string;
}