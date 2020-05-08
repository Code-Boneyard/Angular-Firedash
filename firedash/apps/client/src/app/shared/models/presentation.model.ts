export interface Presentation {    
    // Presentation References
    presentationId?: string;

    // Presentation State Tracking
    createdDate?: Date;
    createdBy?: string;
    lastModifiedDate?: Date;
    lastModifiedBy?: string;
    isActive?: boolean;

    // Presentation Properties
    name?: string;
    description?: string;
    startDate?: Date;
    endDate?: Date;
    systems?: Array<any>;


    // Presentation Management
    attachments?: Array<any>;
    modelUrl?: string;
}