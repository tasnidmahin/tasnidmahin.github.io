import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LANDING_TEXTS } from '../main.constants';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  public skills:string = LANDING_TEXTS.MY_SKILLS;
  public frontend_development:string = LANDING_TEXTS.FRONTEND_DEVELOPMENT;
  public backend_development:string = LANDING_TEXTS.BACKEND_DEVELOPMENT;
  public angular:string = LANDING_TEXTS.ANGULAR;
}
