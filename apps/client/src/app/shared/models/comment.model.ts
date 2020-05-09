export interface Comment {    
    // Comment References
    commentId?: string;

    // Comment State Tracking
    createdDate?: Date;
    createdBy?: string;
    lastModifiedDate?: Date;
    lastModifiedBy?: string;
    isActive?: boolean;

    // Comment Properties
    name?: string;
    description?: string;

    // Comment Management

}