export interface Expense {    
    // Expense References
    expenseId?: string;

    // Expense State Tracking
    createdDate?: Date;
    createdBy?: string;
    lastModifiedDate?: Date;
    lastModifiedBy?: string;
    isActive?: boolean;

    // Expense Properties
    name?: string;
    description?: string;

    // Expense Management
    attachments?: Array<any>;
}