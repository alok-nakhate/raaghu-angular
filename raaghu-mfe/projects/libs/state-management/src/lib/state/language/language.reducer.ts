import { createReducer, on } from "@ngrx/store";
import { getCultureList, getCultureListFailure, getCultureListSuccess, getLanguageFailure, getLanguageForEdit, getLanguageForEditFailure, getLanguageForEditSuccess, getLanguages, getLanguageSuccess } from "./language.actions";
import { Countries, Language } from "./language.models";

export interface LanguagesState {
    languages: any;
    cultureList: any;
    languageInfo:any;
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}

export const languageInitialState: LanguagesState = {
    languages: null,
    cultureList: null,
    languageInfo:null,
    error: null,
    status: 'pending',
};


export const LanguageReducer = createReducer(
    // Supply the initial state
    languageInitialState,
    on(getLanguages, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getLanguageSuccess, (state, { languages }) => ({
        ...state,
        languages: languages,
        error: null,
        status: 'success',
    })),
    
    on(getLanguageForEdit, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getLanguageForEditSuccess, (state, { languageInfo }) => ({
        ...state,
        languageInfo: languageInfo,
        error: null,
        status: 'success',
    })),
    // Handle todos load failure
    on(getLanguageForEditFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),
    on(getCultureList, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getCultureListSuccess, (state, { cultureList }) => ({
        ...state,
        cultureList: cultureList,
        error: null,
        status: 'success',
    })),
    on(getCultureListFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    }))
)


