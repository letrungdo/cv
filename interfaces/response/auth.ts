interface StaffId {
    amis_id: string;
    is_send: boolean;
    status: number;
    _id: string;
    code: string;
    deleted_at?: any;
    __v: number;
    branch: string;
    name: string;
    team: string;
    team_id: string;
    updated_at: Date;
    address: string;
    bod: Date;
    email: string;
    phone: string;
    official_date: Date;
    position_id: number;
    trial_date: Date;
    updated_by: string;
    approved_by: string;
    avatar: string;
}

interface Data {
    _id: string;
    username: string;
    name: string;
    role: number;
    branch: string;
    staff_id: StaffId;
    email_approved_by: string;
    name_approved_by: string;
}

export interface AuthLoginRes {
    success: boolean;
    status: number;
    message: string;
    data: Data;
    token: string;
}
