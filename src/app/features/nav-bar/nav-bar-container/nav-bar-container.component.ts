import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from 'src/app/pages/notes-page/notes-page.component';

@Component({
  selector: 'app-nav-bar-container',
  templateUrl: './nav-bar-container.component.html',
  styleUrls: ['./nav-bar-container.component.scss']
})
export class NavBarContainerComponent implements OnInit {
  @Input() items: Note[];
  @Input() selectedNoteId: number;
  @Output() selectItem = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectItem(id: number) {
    this.selectItem.emit(id);
    console.log('1')
  }
}
