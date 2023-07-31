import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesPageComponent } from './notes/pages/notes-page/notes-page.component';
import { NoteDetailsPageComponent } from './notes/pages/note-details-page/note-details-page.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'notes',
    pathMatch: 'full'
  },
  {
    path: "notes",
    component: NotesPageComponent
  },
  {
    path: 'notes/:id',
    component: NoteDetailsPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
