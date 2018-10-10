import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Note} from '../domain/note';
import {Section} from '../domain/section';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let notes = [
      {id: 1, text: 'Note one'},
      {id: 2, text: 'Note two'},
      {id: 3, text: 'Note three'},
      {id: 4, text: 'Note four'},
      {id: 5, text: 'Note five'}
    ];

    let sections = [
      {id: 1, tittle: 'Work'},
      {id: 2, tittle: 'Vacations'},
      {id: 3, tittle: 'Children'}
    ];

    return {notes, sections};
  }
  genId(items: any[]): number {
    if (typeof items[0] == "Note") {

    }
    return notes.length > 0 ? Math.max(...notes.map(note => note.id)) + 1 : 11;
  }
  genId(sections: Section[]): number {
    return sections.length > 0 ? Math.max(...sections.map(section => section.id)) + 1 : 11;
  }
}
