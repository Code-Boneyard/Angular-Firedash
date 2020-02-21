export interface Inventory {    
    // Inventory References
    inventoryId?: string;
    projectId?: string;

    // Inventory State Tracking
    createdDate?: Date;
    createdBy?: string;
    lastModifiedDate?: Date;
    lastModifiedBy?: string;
    isActive?: boolean;

    // Inventory Properties
    name?: string;
    description?: string;

    // Inventory Management

}