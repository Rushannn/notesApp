import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NoteEntity } from '../../models/note-entity.model';

@Component({
  selector: 'app-create-note-dialog',
  templateUrl: './create-note-dialog.component.html',
  styleUrls: ['./create-note-dialog.component.scss']
})
export class CreateNoteDialogComponent implements OnInit {

  title: string = '';
  content: string = '';

  constructor(public dialogRef: MatDialogRef<CreateNoteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: NoteEntity) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (!this.isCreateButtonDisabled()) {
      this.dialogRef.close({ title: this.title.trim(), content: this.content.trim() });
    }
  }

  isCreateButtonDisabled(): boolean {
    return !this.title.trim() || !this.content.trim();
  }
}
