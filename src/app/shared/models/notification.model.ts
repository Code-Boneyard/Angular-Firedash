export interface Notification {    
    // Notification References
    notiticationId?: string;
    userId?: string;

    // Notification State Tracking
    createdDate?: Date;
    createdBy?: string;
    lastModifiedDate?: Date;
    lastModifiedBy?: string;
    isActive?: boolean;
    isRead?: boolean;

    // Notification Properties
    name?: string;
    description?: string;

    // Notification Management

}