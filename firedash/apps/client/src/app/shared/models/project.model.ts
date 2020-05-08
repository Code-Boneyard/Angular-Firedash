export interface Project {    
    // Project References
    projectId?: string;
    tenantId?: string;
    teamId?: string;


    // Project State Tracking
    createdDate?: Date;
    createdBy?: string;
    lastModifiedDate?: Date;
    lastModifiedBy?: string;
    isActive?: boolean;

    // Project Properties
    name?: string;
    description?: string;
    squareFootage?: number;
    projectType?: string;


    // Project Management
    projectUrl?: string;
    files?: Array<any>;
}