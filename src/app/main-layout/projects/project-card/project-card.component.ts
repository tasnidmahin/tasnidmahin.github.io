import { Component, Input } from '@angular/core';
import { Project } from '../projects.model'; 
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-project-card',
  standalone: true,
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  imports: [CommonModule]
})
export class ProjectCardComponent {
  @Input() project: Project | undefined;
}
