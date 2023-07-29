import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NotesEffects } from './store/notes.effects';
import { NotesFacade } from './store/notes.facade';
import { reducer as notesReducer } from './store/notes.reducer';
import { NotesPageComponent } from './pages/notes-page/notes-page.component';
import { NoteDetailsPageComponent } from './pages/note-details-page/note-details-page.component';
import { NotesHeaderComponent } from './components/header/notes-header.component';
import { NoteViewerComponent } from './components/note-viewer/note-viewer.component';
import { NotesSidebarComponent } from './components/notes-sidebar/notes-sidebar.component';
import { CreateNoteButtonComponent } from './components/create-note-button/create-note-button.component';

@NgModule({
  declarations: [
    NotesPageComponent,
    NoteDetailsPageComponent,
    NotesHeaderComponent,
    NoteViewerComponent,
    NotesSidebarComponent,
    CreateNoteButtonComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('notes', notesReducer),
    EffectsModule.forFeature([NotesEffects])
  ],
  providers: [NotesFacade],
})
export class NotesModule { }
