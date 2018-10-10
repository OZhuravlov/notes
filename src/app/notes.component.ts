import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
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

  ngOnInit(){}

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
    this.notes = this.notes.filter(n => n !== this.notes[idx]);
    this.notesService.deleteNote(this.notes[idx]).subscribe();
  }

}


