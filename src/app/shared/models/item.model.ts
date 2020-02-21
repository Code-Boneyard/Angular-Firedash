export interface Item {    
    // Item References
    itemId?: string;
    systemId?: Array<any>;

    // Item State Tracking
    createdDate?: Date;
    createdBy?: string;
    lastModifiedDate?: Date;
    lastModifiedBy?: string;
    isActive?: boolean;

    // Item Properties
    name?: string;
    description?: string;
    code?: string;
    tenantCode?: string;
    csiDivision?: string;
    baseMaterial?: string;
    materialUnit?: string;
    materialSource?: string;
    defaultMatDiscount?: string
    baseProductivity?: string;
    productivityUnit?: string;
    productivitySource?: string;
    defaultProdDiscount?: string;
    manufacturer?: string;
    modelNumber?: string;
    materialCondition?: string;
    laborCondition?: string;
    sku?: string;

    // Item Management
    itemUrl?: string;
    cadUrl?: string;
    manufacturerUrl?: string;
    cutsheetUrl?: string;
    costTrendUrl?: string;
}