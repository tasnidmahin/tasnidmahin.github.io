import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';

@Component({
  standalone: true,
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  imports: [
    HomeComponent, 
    AboutMeComponent, 
    SkillsComponent, 
    ExperienceComponent,
    ProjectsComponent
  ]
})
export class MainLayoutComponent {

}
