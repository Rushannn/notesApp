import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { NoteViewerComponent } from './notes/components/note-viewer/note-viewer.component';
import { NotesSidebarComponent } from './notes/components/notes-sidebar/notes-sidebar.component';
import { NotesPageComponent } from './notes/pages/notes-page/notes-page.component';
import { StoreModule } from '@ngrx/store';
import { reducer as notesReducer } from './notes/store/notes.reducer'
import { NotesEffects } from './notes/store/notes.effects';
import { NotesFacade } from './notes/store/notes.facade';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NoteViewerComponent,
    NotesSidebarComponent,
    NotesPageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ notes: notesReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([NotesEffects]),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [NotesFacade],
  bootstrap: [AppComponent]
})
export class AppModule { }
