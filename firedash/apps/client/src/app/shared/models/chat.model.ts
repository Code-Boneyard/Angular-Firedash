export interface ChatModel {    
    // Chat References
    chatId?: string;
    userId?: Array<any>;

    // Chat State Tracking
    createdDate?: Date;
    createdBy?: string;
    lastModifiedDate?: Date;
    lastModifiedBy?: string;
    isActive?: boolean;

    // Chat Properties
    description?: string;

    // Chat Management

}