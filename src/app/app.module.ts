import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { NotesPageComponent } from './pages/notes-page/notes-page.component';
import { NavBarContainerComponent } from './features/nav-bar/nav-bar-container/nav-bar-container.component';
import { NavBarUiComponent } from './features/nav-bar/nav-bar-ui/nav-bar-ui.component';
import { NoteViewerComponent } from './features/note-view/note-viewer/note-viewer.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotesPageComponent,
    NavBarContainerComponent,
    NavBarUiComponent,
    NoteViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }