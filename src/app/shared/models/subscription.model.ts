export interface Subscription {
    // Subscription References
    subscriptionId?: string;
    tenantId?: string;

    // Subscription State Tracking
    createdDate?: Date;
    createdBy?: string;
    lastModifiedDate?: Date;
    lastModifiedBy?: string;
    isActive?: boolean;

    // Subscription Properties
    name?: string;
    description?: string;

    // Subscription Management

}