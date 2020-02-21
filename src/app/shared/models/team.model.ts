export interface Team {
    // Team References
    teamId?: string;

    // Team State Tracking
    createdDate?: Date;
    createdBy?: string;
    lastModifiedDate?: Date;
    lastModifiedBy?: string;
    isActive?: boolean;

    // Team Properties
    name?: string;
    description?: string;

    // Team Management

}