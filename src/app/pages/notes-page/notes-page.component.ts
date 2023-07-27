import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

export interface Note {
  id: number
  title: string
  content: string
}

@Component({
  selector: 'app-notes-page',
  templateUrl: './notes-page.component.html',
  styleUrls: ['./notes-page.component.scss']
})
export class NotesPageComponent implements OnInit {
  public notes: Note[];
  public isLoading: boolean = true;
  public selectedNoteId: number;
  public selectedItem: Note;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.get('notes').subscribe(
      (data) => {
        this.notes = data;
        this.isLoading = false;
        this.selectedNoteId = this.notes.length > 0 ? this.notes[0].id : null;
        this.selectedItem = this.findNoteById(this.selectedNoteId);
      },
      (error) => {
        console.error(error);
        this.isLoading = false;
      }
    )
  }

  onSelectItem(id:number) {
    this.selectedNoteId = id;
    this.selectedItem = this.findNoteById(id);
  }

  private findNoteById(id: number): Note {
    return this.notes.find(note => note.id === id);
  }
}
