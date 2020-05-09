export interface Punchlist {    
    // Punchlist References
    punchlistId?: string;

    // Punchlist State Tracking
    createdDate?: Date;
    createdBy?: string;
    lastModifiedDate?: Date;
    lastModifiedBy?: string;
    isActive?: boolean;

    // Punchlist Properties
    name?: string;
    description?: string;

    // Punchlist Management

}