export class PermissionNode {
    public displayName: string;
    public name: string;
    public permissions: Permission[]
}

export class Permission {
    public name: string;
    public displayName: string;
    public parentName: string;
    public isGranted: boolean;
    public allowedProviders: string[];
    public grantedProviders: Provider[];
}

export class Provider {
    public providerName!: string;
    public providerKey!: string;
}
export class TreeType {
    public IconLabel: boolean;
    public Normal: boolean;
    public checkbox: boolean;
}