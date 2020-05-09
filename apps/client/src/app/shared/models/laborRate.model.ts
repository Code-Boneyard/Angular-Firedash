export interface LaborRate {    
    // Labor Rate References
    rateId?: string;
    agreementId?: string;
    unionId?: string;

    // Labor Rate State Tracking
    createdDate?: Date;
    createdBy?: string;
    lastModifiedDate?: Date;
    lastModifiedBy?: string;
    isActive?: boolean;

    // Labor Rate Properties
    name?: string;
    description?: string;
    rate?: Array<any>;

    // Labor Rate Management
}