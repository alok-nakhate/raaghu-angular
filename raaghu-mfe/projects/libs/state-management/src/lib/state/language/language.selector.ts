import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../../app.interface';
import { LanguagesState } from './language.reducer';

export const selectLanguages = (state: AppState) => state.languages;

export const selectAllLanguages = createSelector(
    selectLanguages,
    (state: LanguagesState) => state.languages
);

export const selectCultureList = createSelector(
    selectLanguages,
    (state: LanguagesState) => state.cultureList
);

export const selectLanguageInfo = createSelector(
    selectLanguages,
    (state: LanguagesState) => state.languageInfo
);