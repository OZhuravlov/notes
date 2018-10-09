import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'notes',
  templateUrl: './notes.component.html'
})
export class NotesComponent {

  text: string;

  notes: Note[];

  constructor(private httpClient: HttpClient){
    this.notes = [];
    this.getData().subscribe(notes => this.notes = notes);
  }

  ngOnInit(){

  }

  add(){
    let note = {text: this.text};
    this.notes.push(note);
    this.text = "";
  }
  remove(idx: number){
    this.notes.splice(idx, 1);
  }

  getData(): Observable<Note[]>{
    return this.httpClient.get<Note[]>('assets/note-data.json')
  }

}

interface Note {
  text: string;
}

