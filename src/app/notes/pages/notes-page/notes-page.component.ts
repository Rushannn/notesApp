import { Component } from '@angular/core';
import { NotesFacade } from '../../store/notes.facade';
import { MatDialog } from '@angular/material/dialog';
import { CreateNoteDialogComponent } from '../../components/create-note-dialog/create-note-dialog.component';

@Component({
  selector: 'app-notes-page',
  templateUrl: './notes-page.component.html',
  styleUrls: ['./notes-page.component.scss']
})
export class NotesPageComponent {

  public readonly status$ = this.facade.status$;

  constructor(private facade: NotesFacade, private dialog: MatDialog) {
    this.facade.init();
  }

  onClickCreateNoteButton() {
    const dialogRef = this.dialog.open(CreateNoteDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Created note:', result);
        this.facade.postNote(result)
      }
    });
  }

}
