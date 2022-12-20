import { createReducer, on } from "@ngrx/store";
import {   restoreToDefault, restoreToDefaultSucess, saveTextTemplateContent, saveTextTemplateContentFailure, saveTextTemplateContentSuccess } from "./text-template.actions";

export interface TextTemplateState {
    allTextTemplate:any;
    templateContent:any;
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}


export const TextTemplateInitialState: TextTemplateState = {
    allTextTemplate:null,
    templateContent:null,
    error: null,
    status: 'pending',
};

export const TextTemplateReducer = createReducer(
    // Supply the initial state
    TextTemplateInitialState,
    // on(getTemplateDefinition, (state) => ({ ...state, status: 'loading' })),
    // // Handle successfully loaded todos
    // on(getTemplateDefinitionSuccess, (state,  allTextTemplate ) => ({
    //     ...state,
    //     allTextTemplate: allTextTemplate,   
    //     error: null,
    //     status: 'success',
    // })),
    // // Handle todos load failure
    // on(getTemplateDefinitionFailure, (state, { error }) => ({
    //     ...state,
    //     error: error,
    //     status: 'error',
    // })),
   
    // on(getTemplateContent, (state) => ({ ...state, status: 'loading' })),
    // // Handle successfully loaded todos
    // on(getTemplateContentSuccess, (state, { templateContent}) => ({
    //     ...state,
    //     templateContent: templateContent,   
    //     error: null,
    //     status: 'success',
    // })),
    // // Handle todos load failure
    // on(getTemplateContentFailure, (state, { error }) => ({
    //     ...state,
    //     error: error,
    //     status: 'error',
    // })),

    on(saveTextTemplateContent, (state) => ({ ...state, status: 'loading' })),
    on(saveTextTemplateContentSuccess, (state) => ({
        ...state,
        error: null,
        status: 'success',
    })),
    on(saveTextTemplateContentFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),

    on(restoreToDefault, (state) => ({ ...state, status: 'loading' })),
    on(restoreToDefaultSucess, (state) => ({
        ...state,
        error: null,
        status: 'success',
    })),
   
)
