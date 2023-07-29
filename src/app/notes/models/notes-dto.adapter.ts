import { NoteDTO } from "./note-dto.model"
import { NoteEntity } from "./note-entity.model"

type NoteDTOAdapter = {
  DTOtoEntity(dto: NoteDTO): NoteEntity
}

export const noteDtoAdapter: NoteDTOAdapter = {
  DTOtoEntity(dto) {
    const { created_at, ...otherFields } = dto

    return {
      ...otherFields
    }
  }
}
