import { Component, OnInit } from '@angular/core';
import {Section} from '../../domain/section';
import {SectionsService} from './sections.service';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  sections: Section[];
  private activeSection: string;

  constructor(private sectionsService: SectionsService) { }

  ngOnInit() {
  }

  readSections(){
    this.sectionsService.getSections().subscribe(sections => {
      this.sections = sections;
      if (this.activeSection==null && this.sections.length>0){
        this.showSection(this.sections[0]);
      }
    });
  }

  showSection(section: Section) {
     this.activeSection = section.title;
  }
}
