import { Component } from '@angular/core';
import { NotesFacade } from '../../store/notes.facade';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-details-page',
  templateUrl: './note-details-page.component.html',
  styleUrls: ['./note-details-page.component.scss']
})
export class NoteDetailsPageComponent {

  public readonly currentNote$ = this.facade.noteForDetailsPage$;
  public readonly status$ = this.facade.status$;

  constructor(private facade: NotesFacade,
    private router: Router) { }

  redirectToNotes() {
    this.router.navigate(['/notes']);
  }
}
