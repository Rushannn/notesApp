import { createAction, props } from "@ngrx/store";
import { Note } from "./notes.reducer";
import { NoteEntity } from "../models/note-entity.model";

export const loadNotes = createAction('[Notes] Load');
export const loadNoteSuccess = createAction('[Notes] Load Success', props<{ notes: NoteEntity[] }>());
export const loadNotesFailed = createAction('[Notes] Failed');
