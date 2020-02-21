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
    email?: string;
    firstName?: string;
    lastName?: string;
    location?: string;
    officeNumber?: string;
    mobileNumber?: string;

    // Account Management
    emailSignature?: any;
    theme?: any;
    calendarView?: string;
    smsTextNotifications?: boolean;
    emailNotifications?: boolean;
    favProjects?: Array<string>;
    photoUrl?: string;
}