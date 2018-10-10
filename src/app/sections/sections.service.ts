import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Section} from '../../domain/section';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectionsService {
  private sectionUrl = 'api/sections';

  constructor(private http: HttpClient) { }

  getSections(): Observable<Section[]> {
    return this.http.get<Section[]>(this.sectionUrl);
  }

  addSection()
}
