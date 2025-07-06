import { Component, Input } from '@angular/core';
import { Project } from '../projects.model'; // Adjust path as necessary
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-project-card',
  standalone: true,
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  imports: [CommonModule] // Add CommonModule here
})
export class ProjectCardComponent {
  @Input() project: Project | undefined;
}
