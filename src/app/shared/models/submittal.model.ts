export interface Submittal {    
    // Submittal References
    submittalId?: string;

    // Submittal State Tracking
    createdDate?: Date;
    createdBy?: string;
    lastModifiedDate?: Date;
    lastModifiedBy?: string;
    isActive?: boolean;

    // Submittal Properties
    name?: string;
    description?: string;

    // Submittal Management
    submittalUrl?: string;
}