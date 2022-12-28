import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RdsLoginComponent } from './rds-comp-login/rds-comp-login.component';
import { RdsAddressInputComponent } from './rds-comp-address-input/rds-comp-address-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SharedModule, NgxTranslateModule, HttpLoaderFactory } from '@libs/shared';
// import { RdsDataTableComponent } from './rds-comp-data-table/rds-comp-data-table.component';
import { RdsTopNavigationComponent } from './rds-comp-top-navigation/rds-comp-top-navigation.component';
import { RdsAdminDashboardComponent } from './rds-comp-admin-dashboard/rds-comp-admin-dashboard.component';
import { RdsForgotPasswordComponent } from './rds-comp-forgot-password/rds-comp-forgot-password.component';
import { RdsNotificationComponent } from './rds-comp-notification/rds-comp-notification.component';

import { CommonModule } from '@angular/common';
import { RdsCompProfileComponent } from './rds-comp-profile/rds-comp-profile.component';
import { RdsOrganizationTreeComponent } from './rds-comp-organization-tree/rds-comp-organization-tree.component';
import { RdsCompEditionComponent } from './rds-comp-edition/rds-comp-edition.component';
import { NestGroupDirective } from './rds-comp-hierarchy/node-label.directive';
import { RdsCompHierarchyComponent } from './rds-comp-hierarchy/rds-comp-hierarchy.component';
import { RdsCompLoginAttemptsComponent } from './rds-comp-login-attempts/rds-comp-login-attempts.component';
import { RdsCompSubscriptionComponent } from './rds-comp-subscription/rds-comp-subscription.component';
import { RdsUserDelegationsComponent } from './rds-comp-user-delegations/rds-comp-user-delegations.component';
import { RdsMysettingsComponent } from './rds-comp-mysettings/rds-comp-mysettings.component';
import { RdsCompDownloadCollectionComponent } from './rds-comp-download-collection/rds-comp-download-collection.component';
// import { RdsCompAlertPopupComponent } from './rds-comp-alert-popup/rds-comp-alert-popup.component';
import { RdsLinkedAccountsComponent } from './rds-comp-linked-accounts/rds-comp-linked-accounts.component';
import { RdsCompAuditLogsComponent } from './rds-comp-audit-logs/rds-comp-audit-logs.component';
import { RdsCompTenantListComponent } from './rds-comp-tenant-list/rds-comp-tenant-list.component';
import { RdsCompTenantInformationComponent } from './rds-comp-tenant-information/rds-comp-tenant-information.component';
import { RdsCompTenantSettingsComponent } from './rds-comp-tenant-settings/rds-comp-tenant-settings.component';
import { RdsCompUserTableComponent } from './rds-comp-user-table/rds-comp-user-table.component';
import { RdsCompEditionTableComponent } from './rds-comp-edition-table/rds-comp-edition-table.component';
import { OrganizationTreeDirective } from './rds-comp-organization-tree/organizationTreeNodeModel.directive';
import {
  RdsButtonModule, RdsSearchInputModule, RdsSelectListModule, RdsInputModule, RdsPaginationModule, RdsCheckboxModule, RdsAvatarModule, RdsDropdownModule, RdsModalModule,
  RdsNavTabModule, RdsCardModule, RdsChartPieModule, RdsChartBarHorizontalModule, RdsChartBoolModule, RdsBadgeModule, RdsWidgetModule, RdsCheckboxGroupsModule, RdsCheckboxParentChildModule,
  RdsSideNavModule, RdsDatepickerModule, RdsBannerModule, RdsFileUploaderModule, RdsTextEditorModule, RdsOffcanvasModule, RdsTextareaModule, RdsRadioButtonModule,
  RdsColorPickerModule, RdsChartRadarModule, RdsChartLineModule, RdsBigNumberWidgetModule, RdsIconModule, RdsTableModule, RdsChartAreaModule, RdsDropdownlistModule,
  RdsInputGroupModule, RdsAccordionModule, RdsTagsModule, RdsAlertModule, RdsButtonGroupModule, RdsCollapseModule, RdsIllustrationModule, RdsListGroupModule, RdsPopoverModule,
  RdsSpinnerModule, RdsToastsModule, RdsChartBubbleModule, RdsChartDoughnutModule, RdsChartMixedModule, RdsChartPolarAreaModule, RdsChartScatterModule, RdsChartStackedModule,
  RdsProgressbarModule, RdsBreadcrumbModule, RdsCarouselModule, RdsDoubleRangeModule, RdsScrollspyModule, RdsCounterModule, RdsFabMenuModule, RdsLabelModule, RdsIconLabelModule,
  CalendarModule, adapterFactory, DateAdapter, RdsRatingModule, RdsLikeDislikeModule, RdsColorModule, RdsFeedModule, RdsVideoPlayerModule, RdsAppDetailsModule, RdsBenefitModule,
  RdsCardDetailModule, RdsSizeModule, RdsPriceModule, RdsFeatureListModule, RdsProductImageModule, RdsReviewCategoryModule, RdsTeamMemberModule,RdsAddressDetailModule,RdsWebsiteMetricModule,RdsTestimonialModule,
  RdsStepperModule
} from '@libs/rds-elements';
import { RdsCompDemouiComponent } from './rds-comp-demoui/rds-comp-demoui.component';
import { RdsCompTenantManagementComponent } from './rds-comp-tenant-management/rds-comp-tenant-management.component';
import { RdsCompUserManagementComponent } from './rds-comp-user-management/rds-comp-user-management.component';
import { RdsCompOtherSettingsComponent } from './rds-comp-other-settings/rds-comp-other-settings.component';
import { RdsCompInvoiceComponent } from './rds-comp-invoice/rds-comp-invoice.component';
import { RdsCompEmailComponent } from './rds-comp-email/rds-comp-email.component';
import { RdsSecurityComponent } from './rds-comp-security/rds-comp-security.component';
import { RdsCompFeaturesComponent } from './rds-comp-features/rds-comp-features.component';
import { RdsCompMemberActivityComponent } from './rds-comp-member-activity/rds-comp-member-activity.component';
import { RdsCompNewClaimTypeComponent } from './rds-comp-new-claim-type/rds-comp-new-claim-type.component';
// import { RdsCompBasicResourceComponent } from './rds-comp-basic-resource/rds-comp-basic-resource.component';
import { RdsCompWebhookSubscriptionComponent } from './rds-comp-webhook-subscription/rds-comp-webhook-subscription.component';
import { RdsCompEditLanguageTextComponent } from './rds-comp-edit-language-text/rds-comp-edit-language-text.component';
import { RdsCompNewLanguageComponent } from './rds-comp-new-language/rds-comp-new-language.component';
// import { RdsCompClaimsComponent } from './rds-comp-claims/rds-comp-claims.component';
// import { RdsCompPropertiesComponent } from './rds-comp-properties/rds-comp-properties.component';
import { RdsCompCacheComponent } from './rds-comp-cache/rds-comp-cache.component';
import { RdsCompWebsiteLogComponent } from './rds-comp-website-log/rds-comp-website-log.component';
// import { RdsCompSecretsComponent } from './rds-comp-secrets/rds-comp-secrets.component';
import { RdsCompClientBasicsComponent } from './rds-comp-client-basics/rds-comp-client-basics.component';
// import { RdsCompClientResourcesComponent } from './rds-comp-client-resources/rds-comp-client-resources.component';
import { RdsCompUserBasicsComponent } from './rds-comp-user-basics/rds-comp-user-basics.component';
import { RdsCompUserPermissionsComponent } from './rds-comp-user-permissions/rds-comp-user-permissions.component';
import { RdsCompsUserClaimsComponent } from './rds-comps-user-claims/rds-comps-user-claims.component';
import { RdsCompVisualSettingsComponent } from './rds-comp-visual-settings/rds-comp-visual-settings.component';
import { RdcCompApiScopeBasicsComponent } from './rdc-comp-api-scope-basics/rdc-comp-api-scope-basics.component';
import { RdcCompApiScopeResourcesComponent } from './rdc-comp-api-scope-resources/rdc-comp-api-scope-resources.component';
import { RdsCompNewRoleComponent } from './rds-comp-new-role/rds-comp-new-role.component';
// import { RdsCompPermissionTreeComponent } from './rds-comp-permission-tree/rds-comp-permission-tree.component';
import { RdsCompTenantDashboardComponent } from './rds-comp-tenant-dashboard/rds-comp-tenant-dashboard.component';
import { RdsCompAlertComponent } from './rds-comp-alert/rds-comp-alert.component';
import { RdsCompRoleListComponent } from './rds-comp-role-list/rds-comp-role-list.component';
import { RdsCompInformationComponent } from './rds-comp-information/rds-comp-information.component';
import { RdsCompNewDynamicEntityPropertyComponent } from './rds-comp-new-dynamic-entity-property/rds-comp-new-dynamic-entity-property.component';
import { RdsCompPlanInformationComponent } from './rds-comp-plan-information/rds-comp-plan-information.component';
import { RdsCompVisualSettingsShimmerComponent } from './rds-comp-visual-settings/rds-comp-visual-settings-shimmer/rds-comp-visual-settings-shimmer.component';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
import { RdsCompFeaturesEditShimmerComponent } from './rds-comp-features/rds-comp-features-edit-shimmer/rds-comp-features-edit-shimmer.component';
import { RdsCompNewRoleShimmerComponent } from './rds-comp-new-role/rds-comp-new-role-shimmer/rds-comp-new-role-shimmer.component';
import { RdsCompUserBasicsShimmerComponent } from './rds-comp-user-basics/rds-comp-user-basics-shimmer/rds-comp-user-basics-shimmer.component';
import { RdsCompsUserClaimsShimmerComponent } from './rds-comps-user-claims/rds-comps-user-claims-shimmer/rds-comps-user-claims-shimmer.component';
import { RdsCompUserManagementShimmerComponent } from './rds-comp-user-management/rds-comp-user-management-shimmer/rds-comp-user-management-shimmer.component';
import { RdsCompUserDelegationsShimmerComponent } from './rds-comp-user-delegations/rds-comp-user-delegations-shimmer/rds-comp-user-delegations-shimmer.component';
import { RdsCompTopNavigationShimmerComponent } from './rds-comp-top-navigation/rds-comp-top-navigation-shimmer/rds-comp-top-navigation-shimmer.component';
import { RdsCompTenantSettingsShimmerComponent } from './rds-comp-tenant-settings/rds-comp-tenant-settings-shimmer/rds-comp-tenant-settings-shimmer.component';
import { RdsCompTenantManagementShimmerComponent } from './rds-comp-tenant-management/rds-comp-tenant-management-shimmer/rds-comp-tenant-management-shimmer.component';
import { RdsCompTenantInformationShimmerComponent } from './rds-comp-tenant-information/rds-comp-tenant-information-shimmer/rds-comp-tenant-information-shimmer.component';
import { RdsCompSubscriptionShimmerComponent } from './rds-comp-subscription/rds-comp-subscription-shimmer/rds-comp-subscription-shimmer.component';
import { RdsCompSecurityShimmerComponent } from './rds-comp-security/rds-comp-security-shimmer/rds-comp-security-shimmer.component';
import { RdsCompOrganizationTreeShimmerComponent } from './rds-comp-organization-tree/rds-comp-organization-tree-shimmer/rds-comp-organization-tree-shimmer.component';
// import { RdsCompPropertiesShimmerComponent } from './rds-comp-properties/rds-comp-properties-shimmer/rds-comp-properties-shimmer.component';
import { RdsCompTableShimmerComponent } from './rds-comp-data-table/rds-comp-table-shimmer/rds-comp-table-shimmer.component';
import { RdsCompFeedsComponent } from './rds-comp-feeds/rds-comp-feeds.component';
import { RdsCompProductListComponent } from './rds-comp-product-list/rds-comp-product-list.component';
import { RdsCompPageNotFoundComponent } from './rds-comp-page-not-found/rds-comp-page-not-found.component';
import { RdsCompMarketingWebsiteNewsletterComponent } from './rds-comp-marketing-website-newsletter/rds-comp-marketing-website-newsletter.component';
import { RdsCompFaqComponent } from './rds-comp-faq/rds-comp-faq.component';
import { RdsCompCalendarComponent } from './rds-comp-calendar/rds-comp-calendar.component';
import { RdsCompContactInformationComponent } from './rds-comp-contact-information/rds-comp-contact-information.component';
import { RdsCompShippingAddressComponent } from './rds-comp-shipping-address/rds-comp-shipping-address.component';
import { RdsCompPaymentDetailsComponent } from './rds-comp-payment-details/rds-comp-payment-details.component';
import { RdsCompBillingAddressComponent } from './rds-comp-billing-address/rds-comp-billing-address.component';
import { RdsCompDeliveryMethodComponent } from './rds-comp-delivery-method/rds-comp-delivery-method.component';
import { RdsCompOrderSummaryComponent } from './rds-comp-order-summary/rds-comp-order-summary.component';
import { RdsCompShoppingCartProductComponent } from './rds-comp-shopping-cart-product/rds-comp-shopping-cart-product.component';
import { RdsCompApiScopeBasicShimmerComponent } from './rdc-comp-api-scope-basics/rds-comp-api-scope-basic-shimmer/rds-comp-api-scope-basic-shimmer.component';
import { RdsCompApiScopeResourcesShimmerComponent } from './rdc-comp-api-scope-resources/rds-comp-api-scope-resources-shimmer/rds-comp-api-scope-resources-shimmer.component';
import { RdsCompAddressInputShimmerComponent } from './rds-comp-address-input/rds-comp-address-input-shimmer/rds-comp-address-input-shimmer.component';
// import { RdsCompBasicResourceShimmerComponent } from './rds-comp-basic-resource/rds-comp-basic-resource-shimmer/rds-comp-basic-resource-shimmer.component';
import { RdsCompCacheShimmerComponent } from './rds-comp-cache/rds-comp-cache-shimmer/rds-comp-cache-shimmer.component';
import { RdsCompClaimsShimmerComponent } from './rds-comp-claims/rds-comp-claims-shimmer/rds-comp-claims-shimmer.component';
import { RdsCompEmailShimmerComponent } from './rds-comp-email/rds-comp-email-shimmer/rds-comp-email-shimmer.component';
import { RdsCompInformationShimmerComponent } from './rds-comp-information/rds-comp-information-shimmer/rds-comp-information-shimmer.component';
import { RdsCompInvoiceShimmerComponent } from './rds-comp-invoice/rds-comp-invoice-shimmer/rds-comp-invoice-shimmer.component';
import { RdsCompNewDynamicEntityShimmerComponent } from './rds-comp-new-dynamic-entity-property/rds-comp-new-dynamic-entity-shimmer/rds-comp-new-dynamic-entity-shimmer.component';
import { RdsCompOtherSettingsShimmerComponent } from './rds-comp-other-settings/rds-comp-other-settings-shimmer/rds-comp-other-settings-shimmer.component';
import { RdsCompNewLangShimmerComponent } from './rds-comp-new-language/rds-comp-new-lang-shimmer/rds-comp-new-lang-shimmer.component';
import { RdsCompBackgroundImageComponent } from './rds-comp-background-image/rds-comp-background-image.component';
import { RdsCompCardDetailListComponent } from './rds-comp-card-detail-list/rds-comp-card-detail-list.component';
import { RdsCompBenefitComponent } from './rds-comp-benefit/rds-comp-benefit.component';
import { RdsCompAppDetailsComponent } from './rds-comp-app-details/rds-comp-app-details.component';
import { RdsCompProductOverviewComponent } from './rds-comp-product-overview/rds-comp-product-overview.component';
import { BrowserModule } from '@angular/platform-browser';
import { RdsCompPersonalInfoComponent } from './rds-comp-personal-info/rds-comp-personal-info.component';
import { RdsCompPasswordSettingsComponent } from './rds-comp-password-settings/rds-comp-password-settings.component';
import { RdsCompEmailSettingsComponent } from './rds-comp-email-settings/rds-comp-email-settings.component';
import { RdsCompPricingTableComponent } from './rds-comp-pricing-table/rds-comp-pricing-table.component';
import { RdsCompReviewCategoryComponent } from './rds-comp-review-category/rds-comp-review-category.component';
import { RdsCompCustomerReviewsComponent } from './rds-comp-customer-reviews/rds-comp-customer-reviews.component';
import { RdsCompBillingComponent } from './rds-comp-billing/rds-comp-billing.component';
import { RdsCompIntegrationComponent } from './rds-comp-integration/rds-comp-integration.component';
import { RdsCompTestimonialsComponent } from './rds-comp-testimonials/rds-comp-testimonials.component';
// import { RdsCompTeamsComponent } from './rds-comp-teams/rds-comp-teams.component';

import { RdsCompOrderDetailsComponent } from './rds-comp-order-details/rds-comp-order-details.component';
import { RdsCompTeamsComponent } from './rds-comp-teams/rds-comp-teams.component';
import { RdsCompContactUsComponent } from './rds-comp-contact-us/rds-comp-contact-us.component';
import { RdsCompTimelineComponent } from './rds-comp-timeline/rds-comp-timeline.component';
import { RdsCompApplyForPositionComponent } from './rds-comp-apply-for-position/rds-comp-apply-for-position.component';
import { RdsCompOpenPositionComponent } from './rds-comp-open-position/rds-comp-open-position.component';
import { RdsCompNotificationSettingsComponent } from './rds-comp-notification-settings/rds-comp-notification-settings.component';
import { RdsCompTenantBasicProfileRightComponent } from './rds-comp-tenant-basic-profile-right/rds-comp-tenant-basic-profile-right.component';
import { RdsCompTenantListNewComponent } from './rds-comp-tenant-list-new/rds-comp-tenant-list-new.component';
import { RdsCompTenantFeaturesComponent } from './rds-comp-tenant-features/rds-comp-tenant-features.component';
import { RdsCompUserBasicProfileRightComponent } from './rds-comp-user-basic-profile-right/rds-comp-user-basic-profile-right.component';
import { RdsCompUserPermissionsNewComponent } from './rds-comp-user-permissions-new/rds-comp-user-permissions-new.component';
import { RdsCompAuditLogsNewComponent } from './rds-comp-audit-logs-new/rds-comp-audit-logs-new.component';
import { RdsCompFeaturesListNewComponent } from './rds-comp-features-list-new/rds-comp-features-list-new.component';
import { RdsCompEditionNewBasicComponent } from './rds-comp-edition-new-basic/rds-comp-edition-new-basic.component';
import { RdsCompEditionNewFeaturesComponent } from './rds-comp-edition-new-features/rds-comp-edition-new-features.component';
import { RdsCompEmailSettingsNewComponent } from './rds-comp-email-settings-new/rds-comp-email-settings-new.component';
import { RdsCompIdentityManagementNewComponent } from './rds-comp-identity-management-new/rds-comp-identity-management-new.component';
import { RdsCompThemeNewComponent } from './rds-comp-theme-new/rds-comp-theme-new.component';
import { RdsCompAccountNewComponent } from './rds-comp-account-new/rds-comp-account-new.component';
import { RdsCompSettingsNewComponent } from './rds-comp-settings-new/rds-comp-settings-new.component';
import { RdsCompLanguageNewComponent } from './rds-comp-language-new/rds-comp-language-new.component';
import { RdsCompLanguageTextListComponent } from './rds-comp-language-text-list/rds-comp-language-text-list.component';
import { RdsCompClaimTypeRoleComponent } from './rds-comp-claim-type-role/rds-comp-claim-type-role.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { RdsCompClientAdvancedComponent } from './rds-comp-client-advanced/rds-comp-client-advanced.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
// import { RdsCompClientAdvancedComponent } from './rds-comp-client-advanced/rds-comp-client-advanced.component';


@NgModule({
  declarations: [	
    AppComponent,
    RdsLoginComponent,
    RdsAddressInputComponent,
    // RdsDataTableComponent,
    RdsTopNavigationComponent,
    RdsAdminDashboardComponent,
    RdsCompProfileComponent,
    RdsForgotPasswordComponent,
    RdsNotificationComponent,
    RdsSecurityComponent,
    RdsUserDelegationsComponent,
    RdsMysettingsComponent,
    RdsCompLoginAttemptsComponent,
    RdsCompEditionComponent,
    NestGroupDirective,
    RdsCompSubscriptionComponent,
    RdsCompHierarchyComponent,
    RdsCompDownloadCollectionComponent,
    // RdsCompAlertPopupComponent,
    RdsLinkedAccountsComponent,
    RdsCompAuditLogsComponent,
    RdsCompTenantListComponent,
    RdsCompTenantInformationComponent,
    RdsCompTenantSettingsComponent,
    RdsOrganizationTreeComponent,
    OrganizationTreeDirective,
    RdsCompTenantManagementComponent,
    RdsCompUserManagementComponent,
    RdsCompEmailComponent,
    RdsCompInvoiceComponent,
    RdsCompOtherSettingsComponent,
    RdsCompDemouiComponent,
    RdsCompUserTableComponent,
    RdsCompEditionTableComponent,
    RdsCompFeaturesComponent,
    RdsCompMemberActivityComponent,
    RdsCompNewClaimTypeComponent,
    // RdsCompBasicResourceComponent,
    RdsCompWebhookSubscriptionComponent,
    RdsCompEditLanguageTextComponent,
    RdsCompNewLanguageComponent,
    // RdsCompClaimsComponent,
    // RdsCompPropertiesComponent,
    RdsCompCacheComponent,
    RdsCompWebsiteLogComponent,
    // RdsCompSecretsComponent,
    RdsCompClientBasicsComponent,
    // RdsCompClientResourcesComponent,
    RdsCompUserBasicsComponent,
    RdsCompUserPermissionsComponent,
    RdsCompsUserClaimsComponent,
    RdsCompVisualSettingsComponent,
    RdsCompNewRoleComponent,
    RdcCompApiScopeBasicsComponent,
    RdcCompApiScopeResourcesComponent,
    // RdsCompPermissionTreeComponent,
    RdsCompTenantDashboardComponent,
    RdsCompAlertComponent,
    RdsCompRoleListComponent,
    RdsCompInformationComponent,
    RdsCompNewDynamicEntityPropertyComponent,
    RdsCompPlanInformationComponent,
    RdsCompVisualSettingsShimmerComponent,
    RdsCompFeaturesEditShimmerComponent,
    RdsCompNewRoleShimmerComponent,
    RdsCompUserBasicsShimmerComponent,
    RdsCompsUserClaimsShimmerComponent,
    RdsCompUserManagementShimmerComponent,
    RdsCompUserDelegationsShimmerComponent,
    RdsCompTopNavigationShimmerComponent,
    RdsCompTenantSettingsShimmerComponent,
    RdsCompTenantManagementShimmerComponent,
    RdsCompTenantInformationShimmerComponent,
    RdsCompSubscriptionShimmerComponent,
    RdsCompSecurityShimmerComponent,
    RdsCompOrganizationTreeShimmerComponent,
    // RdsCompPropertiesShimmerComponent,
    RdsCompTableShimmerComponent,
    RdsCompPageNotFoundComponent,
    RdsCompFeedsComponent,
    RdsCompMarketingWebsiteNewsletterComponent,
    RdsCompFaqComponent,
    RdsCompFeedsComponent,
    RdsCompOrderSummaryComponent,
    RdsCompShoppingCartProductComponent,
    RdsCompCalendarComponent,
    RdsCompProductListComponent,
    RdsCompCardDetailListComponent,
    RdsCompApiScopeBasicShimmerComponent,
    RdsCompApiScopeResourcesShimmerComponent,
    RdsCompAddressInputShimmerComponent,
    // RdsCompBasicResourceShimmerComponent,
    RdsCompCacheShimmerComponent,
    RdsCompClaimsShimmerComponent,
    RdsCompEmailShimmerComponent,
    RdsCompInformationShimmerComponent,
    RdsCompInvoiceShimmerComponent,
    RdsCompNewDynamicEntityShimmerComponent,
    RdsCompOtherSettingsShimmerComponent,
    RdsCompNewLangShimmerComponent,
    RdsCompBackgroundImageComponent,
    RdsCompBenefitComponent,
    RdsCompProductListComponent,
    RdsCompAppDetailsComponent,
    RdsCompProductOverviewComponent,
    RdsCompReviewCategoryComponent,
    RdsCompCustomerReviewsComponent,
    RdsCompPricingTableComponent,
    RdsCompOrderDetailsComponent,
    RdsCompLanguageTextListComponent,
    RdsCompContactInformationComponent,
    RdsCompShippingAddressComponent,
    RdsCompPaymentDetailsComponent,
    RdsCompBillingAddressComponent,
    RdsCompDeliveryMethodComponent,
    RdsCompProductOverviewComponent,
    RdsCompPricingTableComponent,
    RdsCompProductOverviewComponent,
    RdsCompPersonalInfoComponent,
    RdsCompPasswordSettingsComponent,
    RdsCompEmailSettingsComponent,
    RdsCompBillingComponent,
    RdsCompIntegrationComponent,
    RdsCompTestimonialsComponent,
    RdsCompIntegrationComponent,
    RdsCompTeamsComponent,
    RdsCompContactUsComponent,
    RdsCompTimelineComponent,
    RdsCompApplyForPositionComponent,
    RdsCompOpenPositionComponent,
    RdsCompNotificationSettingsComponent,

    RdsCompTenantBasicProfileRightComponent,
    RdsCompTenantListNewComponent,
    RdsCompTenantFeaturesComponent,

    RdsCompFeaturesListNewComponent,
    RdsCompEditionNewBasicComponent,
    RdsCompEditionNewFeaturesComponent,
    
    RdsCompUserBasicProfileRightComponent,
    RdsCompUserPermissionsNewComponent,
    RdsCompAuditLogsNewComponent,
    RdsCompEmailSettingsNewComponent,
    RdsCompIdentityManagementNewComponent,
    RdsCompThemeNewComponent,
    RdsCompAccountNewComponent,
    RdsCompSettingsNewComponent,
    RdsCompLanguageNewComponent,
    RdsCompClaimTypeRoleComponent  
  ],
  imports: [
    StoreModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    NgxTranslateModule.forRoot(),
    RdsButtonModule,
    RdsInputModule,
    RdsPaginationModule,
    RdsCheckboxModule,
    RdsRadioButtonModule,
    RdsAvatarModule,
    RdsDropdownModule,
    RdsModalModule,
    RdsNavTabModule,
    RdsDropdownlistModule,
    RdsInputGroupModule,
    RdsCardModule,
    RdsChartPieModule,
    RdsChartBarHorizontalModule,
    RdsChartBoolModule,
    RdsBadgeModule,
    RdsSideNavModule,
    RdsDatepickerModule,
    RdsOffcanvasModule,
    RdsSelectListModule,
    RdsSearchInputModule,
    RdsBannerModule,
    RdsFileUploaderModule,
    RdsTextareaModule,
    RdsChartRadarModule,
    RdsBigNumberWidgetModule,
    RdsTableModule,
    RdsChartAreaModule,
    RdsAccordionModule,
    RdsTagsModule,
    RdsAlertModule,
    RdsButtonGroupModule,
    RdsCheckboxGroupsModule,
    RdsCheckboxParentChildModule,
    RdsCollapseModule,
    RdsIllustrationModule,
    RdsListGroupModule,
    RdsPopoverModule,
    RdsSpinnerModule,
    RdsToastsModule,
    RdsWidgetModule,
    RdsChartBubbleModule,
    RdsChartDoughnutModule,
    RdsChartLineModule,
    RdsChartMixedModule,
    RdsChartPolarAreaModule,
    RdsChartScatterModule,
    RdsChartStackedModule,
    RdsProgressbarModule,
    RdsBreadcrumbModule,
    RdsCarouselModule,
    RdsColorPickerModule,
    RdsDoubleRangeModule,
    RdsIconModule,
    RdsScrollspyModule,
    RdsCounterModule,
    RdsTextEditorModule,
    RdsFabMenuModule,
    RdsLabelModule,
    RdsFeedModule,
    RdsLikeDislikeModule,
    NgxShimmerLoadingModule,
    RdsColorModule,
    RdsRatingModule,
    RdsBenefitModule,
    RdsAppDetailsModule,
    RdsCardDetailModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    RdsIconLabelModule,
    RdsVideoPlayerModule,
    RdsPriceModule,
    RdsFeatureListModule,
    RdsProductImageModule,
    RdsSizeModule,
    RdsAddressDetailModule,
    RdsStepperModule,
    RdsReviewCategoryModule,
    RdsTeamMemberModule,
    RdsWebsiteMetricModule,
    RdsTestimonialModule,
    BrowserAnimationsModule,
    RdsTestimonialModule,
    InfiniteScrollModule,
    RdsTeamMemberModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
