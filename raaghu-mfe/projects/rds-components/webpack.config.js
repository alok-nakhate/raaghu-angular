const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  ['@libs/rds-elements', '@libs/shared', '@libs/state-management']);

module.exports = {
  output: {
    uniqueName: "product",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
      library: { type: "module" },
      name: "rds-components",
      filename: "remoteEntry.js",
      exposes: {
        './RdsLogin': './projects/rds-components/src/app/rds-comp-login/rds-comp-login.component.ts',
        './RdsAddressInput': './projects/rds-components/src/app/rds-comp-address-input/rds-comp-address-input.component.ts',
        './RdsDataTable': './projects/rds-components/src/app/rds-comp-data-table/rds-comp-data-table.component.ts',
        './RdsTopNavigation': './projects/rds-components/src/app/rds-comp-top-navigation/rds-comp-top-navigation.component.ts',
        './RdsAdminDashboard': './projects/rds-components/src/app/rds-comp-admin-dashboard/rds-comp-admin-dashboard.component.ts',
        './RdsForgotPassword': './projects/rds-components/src/app/rds-comp-forgot-password/rds-comp-forgot-password.component.ts',
        './RdsNotification': './projects/rds-components/src/app/rds-comp-notification/rds-comp-notification.component.ts',
        './RdsSecurity': './projects/rds-components/src/app/rds-comp-security/rds-comp-security.component.ts',
        './RdsUserDelegations': './projects/rds-components/src/app/rds-comp-user-delegations/rds-comp-user-delegations.component.ts',
        './RdsCompProfile': './projects/rds-components/src/app/rds-comp-profile/rds-comp-profile.component.ts',
        './RdsMysettings': './projects/rds-components/src/app/rds-comp-mysettings/rds-comp-mysettings.component.ts',
        './RdsCompLoginAttempts': './projects/rds-components/src/app/rds-comp-login-attempts/rds-comp-login-attempts.component.ts',
        './RdsCompEdition': './projects/rds-components/src/app/rds-comp-edition/rds-comp-edition.component.ts',
        './RdsCompSubscription': './projects/rds-components/src/app/rds-comp-subscription/rds-comp-subscription.component.ts',
        './RdsCompHierarchy': './projects/rds-components/src/app/rds-comp-hierarchy/rds-comp-hierarchy.component.ts',
        './RdsCompAlertPopup': './projects/rds-components/src/app/rds-comp-alert-popup/rds-comp-alert-popup.component.ts',
        './RdsCompAuditLogs': './projects/rds-components/src/app/rds-comp-audit-logs/rds-comp-audit-logs.component.ts',
        './RdsCompTenantList': './projects/rds-components/src/app/rds-comp-tenant-list/rds-comp-tenant-list.component.ts',
        './RdsOrganizationTree': './projects/rds-components/src/app/rds-comp-organization-tree/rds-comp-organization-tree.component.ts',
        './RdsCompFeatures': './projects/rds-components/src/app/rds-comp-features/rds-comp-features.component.ts',
        './RdsCompTenantManagement': './projects/rds-components/src/app/rds-comp-tenant-management/rds-comp-tenant-management.component.ts',
        './RdsCompUserManagement': './projects/rds-components/src/app/rds-comp-user-management/rds-comp-user-management.component.ts',
        './RdsCompEmail': './projects/rds-components/src/app/rds-comp-email/rds-comp-email.component.ts',
        './RdsCompInvoice': './projects/rds-components/src/app/rds-comp-invoice/rds-comp-invoice.component.ts',
        './RdsCompOtherSettings': './projects/rds-components/src/app/rds-comp-other-settings/rds-comp-other-settings.component.ts',
        './RdsCompTenantInformation': './projects/rds-components/src/app/rds-comp-tenant-information/rds-comp-tenant-information.component.ts',
        './RdsCompTenantSettings': './projects/rds-components/src/app/rds-comp-tenant-settings/rds-comp-tenant-settings.component.ts',
        './RdsCompDemoui': './projects/rds-components/src/app/rds-comp-demoui/rds-comp-demoui.component.ts',
        './RdsCompNewClaimType': './projects/rds-components/src/app/rds-comp-new-claim-type/rds-comp-new-claim-type.component.ts',
        './RdsCompBasicResource': './projects/rds-components/src/app/rds-comp-basic-resource/rds-comp-basic-resource.component.ts',
        './RdsCompWebhookSubscription': './projects/rds-components/src/app/rds-comp-webhook-subscription/rds-comp-webhook-subscription.component.ts',
        './RdsCompEditLanguageText': './projects/rds-components/src/app/rds-comp-edit-language-text/rds-comp-edit-language-text.component.ts',
        './RdsCompNewLanguage': './projects/rds-components/src/app/rds-comp-new-language/rds-comp-new-language.component.ts',
        './RdsCompClaims': './projects/rds-components/src/app/rds-comp-claims/rds-comp-claims.component.ts',
        './RdsCompProperties': './projects/rds-components/src/app/rds-comp-properties/rds-comp-properties.component.ts',
        './RdsCompWebsiteLog': './projects/rds-components/src/app/rds-comp-website-log/rds-comp-website-log.component.ts',
        './RdsCompCache': './projects/rds-components/src/app/rds-comp-cache/rds-comp-cache.component.ts',
        './RdsCompSecrets': './projects/rds-components/src/app/rds-comp-secrets/rds-comp-secrets.component.ts',
        './RdsCompMemberActivity': './projects/rds-components/src/app/rds-comp-member-activity/rds-comp-member-activity.component.ts',
        './RdsCompClientResources': './projects/rds-components/src/app/rds-comp-client-resources/rds-comp-client-resources.component',
        './RdsCompClientBasics': './projects/rds-components/src/app/rds-comp-client-basics/rds-comp-client-basics.component.ts',
        './RdsCompUserPermissions': './projects/rds-components/src/app/rds-comp-user-permissions/rds-comp-user-permissions.component.ts',
        './RdsCompNewRole': './projects/rds-components/src/app/rds-comp-new-role/rds-comp-new-role.component.ts',
        './RdsCompVisualSettings': './projects/rds-components/src/app/rds-comp-visual-settings/rds-comp-visual-settings.component.ts',
        './RdsCompPermissionTree': './projects/rds-components/src/app/rds-comp-permission-tree/rds-comp-permission-tree.component.ts',
        './RdsCompTenantDashboard': './projects/rds-components/src/app/rds-comp-tenant-dashboard/rds-comp-tenant-dashboard.component.ts',
        './RdsCompAlert': './projects/rds-components/src/app/rds-comp-alert/rds-comp-alert.component.ts',
        './RdsCompRoleList': './projects/rds-components/src/app/rds-comp-role-list/rds-comp-role-list.component.ts',
        './RdsCompDynamicProperties': './projects/rds-components/src/app/rds-comp-dynamic-properties/rds-comp-dynamic-properties.component.ts',
        './RdsCompInformation': './projects/rds-components/src/app/rds-comp-information/rds-comp-information.component.ts',
        './RdsCompDynamicEnityProperties': './projects/rds-components/src/app/rds-comp-dynamic-enity-properties/rds-comp-dynamic-enity-properties.component.ts',
        './RdsCompNewDynamicEntityProperty': './projects/rds-components/src/app/rds-comp-new-dynamic-entity-property/rds-comp-new-dynamic-entity-property.component.ts',
        './RdsCompPlanInformation': './projects/rds-components/src/app/rds-comp-plan-information/rds-comp-plan-information.component.ts',
        './RdsCompPageNotFound': './projects/rds-components/src/app/rds-comp-page-not-found/rds-comp-page-not-found.component.ts',
        './RdsCompFaqComponent': './projects/rds-components/src/app/rds-comp-faq/rds-comp-faq.component.ts',
        './RdsCompCalendar': './projects/rds-components/src/app/rds-comp-calendar/rds-comp-calendar.component.ts',
        './RdsCompOrderSummary': './projects/rds-components/src/app/rds-comp-order-summary/rds-comp-order-summary.component.ts',
        './RdsCompShoppingCartProduct': './projects/rds-components/src/app/rds-comp-shopping-cart-product/rds-comp-shopping-cart-product.component.ts',
        './RdsCompPersonalInfo': './projects/rds-components/src/app/rds-comp-personal-info/rds-comp-personal-info.component.ts',
        './RdsCompBackgroundImage': './projects/rds-components/src/app/rds-comp-background-image/rds-comp-background-image.component.ts',
        './RdsCompProductList': './projects/rds-components/src/app/rds-comp-product-list/rds-comp-product-list.component.ts',
        './RdsCompPasswordSettings': './projects/rds-components/src/app/rds-comp-password-settings/rds-comp-password-settings.component.ts',
        './RdsCompEmailSettings': './projects/rds-components/src/app/rds-comp-email-settings/rds-comp-email-settings.component.ts',
        './RdsCompCustomerReviewsComponent': './projects/rds-components/src/app/rds-comp-customer-reviews/rds-comp-customer-reviews.component.ts',
        './RdsCompBenefit': './projects/rds-components/src/app/rds-comp-benefit/rds-comp-benefit.component.ts',
        './RdsCompProductOverview': './projects/rds-components/src/app/rds-comp-product-overview/rds-comp-product-overview.component.ts',
        './RdsCompReviewCategory': './projects/rds-components/src/app/rds-comp-review-category/rds-comp-review-category.component.ts',
        './RdsCompBilling': './projects/rds-components/src/app/rds-comp-billing/rds-comp-billing.component.ts',
        './RdsCompOrderDetails': './projects/rds-components/src/app/rds-comp-order-details/rds-comp-order-details.component.ts',
        './RdsCompCardDetailList': './projects/rds-components/src/app/rds-comp-card-detail-list/rds-comp-card-detail-list.component.ts',
        './RdsCompIntegration': './projects/rds-components/src/app/rds-comp-integration/rds-comp-integration.component.ts',
        './RdsCompContactUs': './projects/rds-components/src/app/rds-comp-contact-us/rds-comp-contact-us.component.ts',
        './RdsCompTenantListNew': './projects/rds-components/src/app/rds-comp-tenant-list-new/rds-comp-tenant-list-new.component.ts',       
        './RdsCompEditionNewBasic': './projects/rds-components/src/app/rds-comp-edition-new-basic/rds-comp-edition-new-basic.component.ts',
        './RdsCompEditionNewFeatures': './projects/rds-components/src/app/rds-comp-edition-new-features/rds-comp-edition-new-features.component.ts',
        './RdsCompFeaturesListNew': './projects/rds-components/src/app/rds-comp-features-list-new/rds-comp-features-list-new.component.ts',
        './RdsCompUserPermissionsNew': './projects/rds-components/src/app/rds-comp-user-permissions-new/rds-comp-user-permissions-new.component.ts',
       './RdsCompOpenPosition': './projects/rds-components/src/app/rds-comp-open-position/rds-comp-open-position.component.ts',
        './RdsCompApplyForPosition': './projects/rds-components/src/app/rds-comp-apply-for-position/rds-comp-apply-for-position.component.ts',
        './RdsCompApplyForPosition': './projects/rds-components/src/app/rds-comp-apply-for-position/rds-comp-apply-for-position.component.ts',
        './RdsCompProductList': './projects/rds-components/src/app/rds-comp-product-list/rds-comp-product-list.component.ts'
      },


      shared: share({
        "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/forms": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@ngrx/store": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@ngrx/store-devtools": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@ngrx/effects": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@ngx-translate/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@ngx-translate/http-loader": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "rxjs": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        ...sharedMappings.getDescriptors()
      })


    }),
    sharedMappings.getPlugin()
  ],
};
