import { Component } from '@angular/core';
import { ProjectCardComponent } from './project-card/project-card.component';
import { Project } from './projects.model';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [
    CommonModule, // Add CommonModule here for *ngFor
    ProjectCardComponent
  ]
})
export class ProjectsComponent {
  public projects: Project[] = [
    {
      image: 'assets/project-1-image.png',
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my skills and projects.',
      tags: ['Angular', 'TypeScript', 'SCSS', 'Tailwind'],
      codeUrl: 'https://github.com/tasnidmahin/tasnidmahin.github.io',
      liveUrl: 'https://tasnidmahin.github.io/'
    },
    {
      image: 'assets/project-2-image.jpg',
      title: 'MaidEasy',
      description: 'A Maid hiring online platform that connects customers with professional maids.',
      tags: ['C#', 'Javascript', 'MySQL', 'Firebase'],
      codeUrl: 'https://github.com/tasnidmahin/MaidEasy'
    }
  ];
}
