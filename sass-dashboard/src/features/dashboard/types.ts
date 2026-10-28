export type LeadStatus = 'new' | 'contacted' | 'qualified'

export type Lead = {
    id: string;
    name: string;
    email: string;
    status: LeadStatus;
};