import { Component, OnInit} from '@angular/core';
import {Project} from '../../../../models/project';
import {fromEvent, Observable} from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
  projects: Project[] = [
    { id: 0, projectName: "Spotify infographic", projectContent: "I made an infographic of sorts" },
    { id: 1, projectName: "Thuisbezorgd random food", projectContent: "I made an application which lets you order random food from thuisbezorgd" },
    { id: 2, projectName: "This portfolio website", projectContent: "This website!" }
  ];
  selectedProject: Project;
  index: number;
  /*  nextButton = document.querySelector(".next");
  nextClickStream = fromEvent(this.nextButton, 'click' );
  previousButton = document.querySelector("btn previous");
  previousClickStream = fromEvent(this.previousButton, 'click' );*/

  constructor() {
    this.index = 0;
  }

  ngOnInit() {
  }

  onSelect(project: Project) {
    this.selectedProject = project;
  }

  navigateCarousel(index: number) {
    this.index += index;
    if (this.index === -1) this.index = this.projects.length -1;
    if (this.index % this.projects.length === 0) this.index = 0;
  }
}
