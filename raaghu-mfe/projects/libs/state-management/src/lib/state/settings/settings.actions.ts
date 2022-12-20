
import { createAction, props } from "@ngrx/store";
import { Setting } from "./settings.models";

export const getEmailSettings = createAction('[Setting Page] Get Email Setting');

export const getEmailSettingsSuccess = createAction(
    '[Setting Page] Get Email Success',
    props<{ emailSettings : any }>()
);

export const getEmailSettingsFailure = createAction(
    '[Settings Page] Get Email Failure',
    props<{ error: string }>()
);

export const saveEmailSettings = createAction('[Setting Page] Save Email Setting',
(data:any) => ( {data} ));




export const getIdentityManagementSettings = createAction('[Setting Page] Get Identity Management Setting');

export const getIdentityManagementSettingsSuccess = createAction(
    '[Setting Page] Get Identity Management Settings Success',
    props<{ identityManagementSettings : any }>()
);

export const getIdentityManagementSettingsFailure = createAction(
    '[Settings Page] Get Identity Management Settings Failure',
    props<{ error: string }>()
);
export const saveIdentityManagementSettings = createAction('[Setting Page] Save Identity Management Setting',
(data:any) => ({ data }));

;

export const getThemeSettings = createAction('[Setting Page] Get Theme Settings Setting');

export const getThemeSettingsSuccess = createAction(
    '[Setting Page] Get Theme Settings Success',
    props<{ themeSettings : any }>()
);

export const getThemeSettingsFailure = createAction(
    '[Settings Page] Get Theme Settings Failure',
    props<{ error: string }>()
);
export const saveThemeSettings = createAction('[Setting Page] Save Theme Settings Setting',
(data:any) => ( { data }));



export const getAccountTwoFactorSettings = createAction('[Setting Page] Get Email Setting');

export const getAccountTwoFactorSettingsSuccess = createAction(
    '[Setting Page] Get Account Two Factor Success',
    props<{ twoFactorSettings : any }>()
);

export const getAccountTwoFactorSettingsFailure = createAction(
    '[Settings Page] Get Account Two Factor Failure',
    props<{ error: string }>()
);
export const saveAccountTwoFactorSettings = createAction('[Setting Page] Save Email Setting',
(data:any) => ( {data} ));

export const saveAccountTwoFactorSettingsFailure = createAction('[Setting Page] Two Factor Setting Failure',
props<{ error: string }>()
)



export const getAccountCaptchaSettings = createAction('[Setting Page] Get Account Captcha Setting');

export const getAccountCaptchaSettingsSuccess = createAction(
    '[Setting Page] Get Account Captcha Success',
    props<{ captchaSettings : any }>()
);

export const getAccountCaptchaSettingsFailure = createAction(
    '[Settings Page] Get Account Captcha Failure',
    props<{ error: string }>()
);
export const saveAccountCaptchaSettings = createAction('[Setting Page] Save Account Captcha Setting',
(data:any) => ( {data} ));
export const saveAccountCapchaSettingsFailure = createAction('[Setting Page]Captcha Setting Failure',
props<{ error: string }>()
)


export const getAccountGeneralSettings = createAction('[Setting Page] Get Account General Setting');

export const getAccountGenaralSettingsSuccess = createAction(
    '[Setting Page] Get Account General Success',
    props<{ generalSettings : any }>()
);

export const getAccountGeneralSettingsFailure = createAction(
    '[Settings Page] Get Account General Failure',
    props<{ error: string }>()
);
export const saveAccountGeneralSettings = createAction('[Setting Page] Save Account General Setting',
(data:any) => ( data ));
export const saveAccountGeneralSettingsFailure = createAction('[Setting Page] General Setting Setting Failure',
props<{ error: string }>()
)
export const getExternalProviderSettings = createAction('[Setting Page] Get getExternalProvider Setting');

export const getExternalProviderSettingsSuccess = createAction(
    '[Setting Page] Get getExternalProvider Settings Success',
    props<{ externalProviderSettings : any }>()
);

export const getExternalProviderSettingsFailure = createAction(
    '[Settings Page] Get getExternalProvider Failure',
    props<{ error: string }>()
);


export const saveExternalProviderSettings = createAction('[Setting Page] Save External Providers Setting',
(data:any) => ( {data} ));
export const saveExternalProviderSettingsFailure = createAction('[Setting Page] External Provider Setting Failure',
props<{ error: string }>()
)