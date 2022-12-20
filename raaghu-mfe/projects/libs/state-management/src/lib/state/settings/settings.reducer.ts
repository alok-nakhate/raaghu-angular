import { createReducer, on } from "@ngrx/store";
import { getAccountCaptchaSettings, getAccountCaptchaSettingsFailure, getAccountCaptchaSettingsSuccess, getAccountGenaralSettingsSuccess, getAccountGeneralSettings, getAccountGeneralSettingsFailure, getAccountTwoFactorSettings, getAccountTwoFactorSettingsFailure, getAccountTwoFactorSettingsSuccess, getEmailSettings, getEmailSettingsFailure, getEmailSettingsSuccess, getExternalProviderSettings, getExternalProviderSettingsFailure, getExternalProviderSettingsSuccess, getIdentityManagementSettings, getIdentityManagementSettingsFailure, getIdentityManagementSettingsSuccess, getThemeSettings, getThemeSettingsFailure, getThemeSettingsSuccess, saveAccountCapchaSettingsFailure, saveAccountCaptchaSettings, saveAccountGeneralSettings, saveAccountGeneralSettingsFailure, saveAccountTwoFactorSettings, saveAccountTwoFactorSettingsFailure, saveEmailSettings, saveExternalProviderSettings, saveExternalProviderSettingsFailure, saveIdentityManagementSettings, saveThemeSettings } from "./settings.actions";


export interface SettingsState {
    emailsettings: any;
    identityManagementSettings:any;
    themeSettings: any;
    twoFactorSettings: any;
    captchaSettings: any;
    generalSettings:any;
    externalProviderSettings:any;
    error: string;
    // errorPassword:string;
    // errorCaptcha:string;
    // errorTwoFactor:string;
    // errorExternalProvider:string;
    status: 'pending' | 'loading' | 'error' | 'success';
}

export const settingsInitialState: SettingsState = {
    emailsettings: null,
    identityManagementSettings:null,
    themeSettings: null,
    twoFactorSettings: null,
    captchaSettings: null,
    generalSettings:null,
    externalProviderSettings:null,
    error: null,
    // errorPassword:null,
    // errorCaptcha:null,
    // errorTwoFactor:null,
    // errorExternalProvider:null,
    status: 'pending',
};
export const settingReducer = createReducer(
    // Supply the initial state
    settingsInitialState,
    on(getEmailSettings, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getEmailSettingsSuccess, (state, { emailSettings }) => ({
        ...state,
        emailsettings: emailSettings,
        error: null,
        status: 'success',
    })),
    // Handle todos load failure
    on(getEmailSettingsFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),
    // on(saveEmailSettings, (state, { error }) => ({
    //     ...state,
    //     error: null,
    //     status: 'success',
    // })),
    
    on(getIdentityManagementSettings, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getIdentityManagementSettingsSuccess, (state, { identityManagementSettings }) => ({
        ...state,
        identityManagementSettings: identityManagementSettings,
        error: null,
        status: 'success',
    })),
    // Handle todos load failure
    on(getIdentityManagementSettingsFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),
    // on(saveIdentityManagementSettings, (state, { error }) => ({
    //     ...state,
    //     error: null,
    //     status: 'success',
    // })),
    
    on(getThemeSettings, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getThemeSettingsSuccess, (state, themeSettings) => ({
        ...state,
        themeSettings: themeSettings,
        error: null,
        status: 'success',
    })),
    // Handle todos load failure
    on(getThemeSettingsFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),
    // on(saveThemeSettings, (state, { error }) => ({
    //     ...state,
    //     error: null,
    //     status: 'success',
    // })),
    
    on(getAccountTwoFactorSettings, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getAccountTwoFactorSettingsSuccess, (state,twoFactorSettings) => ({
        ...state,
        twoFactorSettings: twoFactorSettings,
        error: null,
        status: 'success',
    })),
    // Handle todos load failure
    on(getAccountTwoFactorSettingsFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),
    
    on(getAccountCaptchaSettings, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getAccountCaptchaSettingsSuccess, (state, { captchaSettings }) => ({
        ...state,
        captchaSettings: captchaSettings,
        error: null,
        status: 'success',
    })),
    // Handle todos load failure
    on(getAccountCaptchaSettingsFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),
    
    on(getAccountGeneralSettings, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getAccountGenaralSettingsSuccess, (state, { generalSettings }) => ({
        ...state,
        generalSettings: generalSettings,
        error: null,
        status: 'success',
    })),
    // Handle todos load failure
    on(getAccountGeneralSettingsFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),
    on(saveAccountGeneralSettings, (state, { error }) => ({
        ...state,
        error: null,
        status: 'success',

    })),
    

    on(getExternalProviderSettings, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getExternalProviderSettingsSuccess, (state, { externalProviderSettings }) => ({
        ...state,
        externalProviderSettings: externalProviderSettings,
        error: null,
        status: 'success',
    })),
    // Handle todos load failure
    on(getExternalProviderSettingsFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),
    
)

