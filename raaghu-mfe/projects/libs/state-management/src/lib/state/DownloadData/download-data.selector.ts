import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../../app.interface';


export const DownloadSelector = createFeatureSelector<AppState>('download');


// export const selectAllEditions = createSelector(
//     DownloadSelector,
//     (state: AppState) => state.download
// );