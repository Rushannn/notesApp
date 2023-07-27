import { NoteDTO } from "./note-dto.model";

export type NoteEntity = Omit<NoteDTO, 'created_at'>
