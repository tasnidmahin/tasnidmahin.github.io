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
      image: 'assets/project-image-1.png', // Placeholder image
      title: 'Project Alpha',
      description: 'This is a description for Project Alpha. It involved building a cool feature using modern technologies.',
      tags: ['Angular', 'TypeScript', 'SCSS', 'Node.js'],
      codeUrl: 'https://github.com/user/project-alpha',
      liveUrl: 'https://project-alpha.example.com'
    },
    {
      image: 'assets/project-image-2.jpg', // Placeholder image
      title: 'Project Beta',
      description: 'Project Beta focused on creating a scalable backend system with a robust API.',
      tags: ['Java', 'Spring Boot', 'MySQL', 'Docker'],
      codeUrl: 'https://github.com/user/project-beta'
      // liveUrl is optional, so it can be omitted
    }
    // Add more sample projects if you like
  ];
}
