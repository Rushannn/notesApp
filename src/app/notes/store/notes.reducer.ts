import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import * as NotesActions from './notes.actions'

export interface Note {
  id: number;
  title: string;
  content: string
}

export type LoadingStatus = 'init' | 'loading' | 'loaded' | 'error'

export interface State extends EntityState<Note> {
  selectedNoteId: number | null;
  status: LoadingStatus
}

export const notesAdapter: EntityAdapter<Note> = createEntityAdapter<Note>();

export const initialState: State = notesAdapter.getInitialState({
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
    return notesAdapter.setAll(notes, { ...state, status: 'loaded'})
  })

);

export function reducer(state: State | undefined, action: Action) {
  return notesReducer(state, action);
}
