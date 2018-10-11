import {Component} from '@angular/core';
import {Note} from '../domain/note';
import {NotesService} from './notes.service';

@Component({
  selector: 'notes',
  templateUrl: './notes.component.html'
})
export class NotesComponent {

  text: string;

  notes: Note[];

  constructor(private notesService: NotesService){
    this.notes = [];
    this.notesService.getNotes().subscribe(notes => this.notes = notes);
  }

  add(): void {
    if (!this.text) {
      return;
    }
    let text = this.text;
    this.notesService.addNote({text} as Note)
      .subscribe(note => {this.notes.push(note)
      });
    this.text = "";
  }
  remove(idx: number){
    let note = this.notes[idx];
    this.notes = this.notes.filter(n => n !== this.notes[idx]);
    this.notesService.deleteNote(note).subscribe();
  }

}


