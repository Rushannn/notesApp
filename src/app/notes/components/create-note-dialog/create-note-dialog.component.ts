import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  title: string;
  description: string;
}

@Component({
  selector: 'app-create-note-dialog',
  templateUrl: './create-note-dialog.component.html',
  styleUrls: ['./create-note-dialog.component.scss']
})
export class CreateNoteDialogComponent implements OnInit {

  title: string = '';
  description: string = '';

  constructor(public dialogRef: MatDialogRef<CreateNoteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (!this.isCreateButtonDisabled()) {
      this.dialogRef.close({ title: this.title.trim(), description: this.description.trim() });
    }
  }

  isCreateButtonDisabled(): boolean {
    return !this.title.trim() || !this.description.trim();
  }

  isInvalid(fieldName: string): boolean {
    if (fieldName === 'title') {
      return !this.title.trim();
    } else if (fieldName === 'description') {
      return !this.description.trim();
    }
    return false;
  }

}
