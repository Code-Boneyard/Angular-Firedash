export interface CostModel {    
    // Cost Model References
    modelId?: string;

    // Cost Model State Tracking
    createdDate?: Date;
    createdBy?: string;
    lastModifiedDate?: Date;
    lastModifiedBy?: string;
    isActive?: boolean;

    // Cost Model Properties
    name?: string;
    description?: string;

    // Cost Model Management

}