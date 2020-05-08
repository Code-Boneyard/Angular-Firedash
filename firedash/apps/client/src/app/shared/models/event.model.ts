export interface Event {    
    // Event References
    eventId?: string;

    // Event State Tracking
    createdDate?: Date;
    createdBy?: string;
    lastModifiedDate?: Date;
    lastModifiedBy?: string;
    isActive?: boolean;

    // Event Properties
    name?: string;
    description?: string;
    status?: string;
    location?: string;

    startDate?: Date;
    endDate?: Date;

    // Event Management
    meetingUrl?: string;
    reminder?: boolean;
    smsNotification?: boolean;
}