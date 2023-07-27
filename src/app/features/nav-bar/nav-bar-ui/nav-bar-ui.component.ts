import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar-ui',
  templateUrl: './nav-bar-ui.component.html',
  styleUrls: ['./nav-bar-ui.component.scss']
})
export class NavBarUiComponent implements OnInit {
  @Input() items: any[];
  @Input() selectedNoteId: number;
  @Output() selectItem = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectItem(id) {
    this.selectItem.emit(id);
    console.log('id',id)
  }
}
