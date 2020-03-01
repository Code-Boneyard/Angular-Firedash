export interface User {
    // References
    uid?: string;
    tenantId?: string;
    subscriptionId?: string;
    roleId?: string;
    companyId?: string;

    // State Tracking
    lastLogin?: Date;
    connectionStatus?: string;
    showTutorial?: boolean;
    emailVerified?: boolean;
    isActive?: boolean;
    userSince?: Date;

    // User Properties
    displayName?: string;
    initials?: string;
    title?: string;
    department?: string;
    organziation?: string;
    workEmail?: string;
    firstName?: string;
    lastName?: string;
    location?: string;
    workPhone?: string;
    mobilePhone?: string;

    // Account Management
    emailSignature?: any;
    theme?: any;
    calendarView?: string;
    smsTextNotifications?: boolean;
    emailNotifications?: boolean;
    favProjects?: Array<string>;
    photoUrl?: string;
}
