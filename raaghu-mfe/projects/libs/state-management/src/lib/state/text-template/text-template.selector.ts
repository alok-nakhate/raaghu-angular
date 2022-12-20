import { createSelector } from '@ngrx/store';
import { AppState } from '../../app.interface';
import { TextTemplateState } from './text-template.reducer';
//import { TextTemplateState } from '../user/user.reducer';



export const selectApiResources = (state: AppState) => state.textTemplate;

// export const satt = createSelector(
//     selectApiResources,
//     (state: TextTemplateState) => state.allTextTemplate
// );
// export const selectTextContent = createSelector(
//     selectApiResources,
//     (state: TextTemplateState) => state.templateContent
// );
