export interface Message {    
    // Message References
    messageId?: string;
    userId?: Array<any>;

    // Message State Tracking
    createdDate?: Date;
    createdBy?: string;
    lastModifiedDate?: Date;
    lastModifiedBy?: string;
    isActive?: boolean;
    isRead?: boolean;

    // Message Properties
    name?: string;
    description?: string;

    // Message Management
    attachments?: Array<any>;
}