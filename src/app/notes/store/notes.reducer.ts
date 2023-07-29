import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity";
import { Action, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import * as NotesActions from './notes.actions'
import { NoteEntity } from "../models/note-entity.model";

export type LoadingStatus = 'init' | 'loading' | 'loaded' | 'error'

export interface NotesState extends EntityState<NoteEntity> {
  selectedNoteId: number | null;
  status: LoadingStatus
}

export const notesAdapter: EntityAdapter<NoteEntity> = createEntityAdapter<NoteEntity>();

export const initialState: NotesState = notesAdapter.getInitialState({
  selectedNoteId: null,
  status: 'init'
});

const notesReducer = createReducer(
  initialState,
  on(NotesActions.loadNotes,
    (state) => ({
      ...state,
      status: 'loading'
    })
  ),
  on(NotesActions.loadNoteSuccess, (state, { notes }) => {
    return notesAdapter.setAll(notes, { ...state, status: 'loaded' });
  }),

  on(NotesActions.selectNote, (state, { noteId }) => {
    return { ...state, selectedNoteId: noteId };
  }),

  on(NotesActions.loadNotesFailed, (state) => {
    return { ...state, status: 'error' };
  }),

  on(NotesActions.selectNote, (state, { noteId }) => {
    return { ...state, selectedUserId: noteId };
  }),

);

export function reducer(state: NotesState | undefined, action: Action) {
  return notesReducer(state, action);
}

export const getSelectedNoteId = (state: NotesState) => state.selectedNoteId;

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = notesAdapter.getSelectors();

export const NOTES_FEATURE_KEY = 'notes';

export const selectNotesState =
  createFeatureSelector<NotesState>(NOTES_FEATURE_KEY);

export const selectAllNotes = createSelector(
  selectNotesState,
  (state: NotesState) => selectAll(state)
);

export const selectNotesStatus = createSelector(
  selectNotesState,
  (state: NotesState) => state.status
);

export const selectNoteIds = createSelector(
  selectNotesState,
  (state:NotesState) => selectIds(state)
);

export const selectNoteEntities = createSelector(
  selectNotesState,
  (state:NotesState) => selectEntities(state)
);

export const selectSelectedNoteId = createSelector(
  selectNotesState,
  (state: NotesState) => state.selectedNoteId
);
