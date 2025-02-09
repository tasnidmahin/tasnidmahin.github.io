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
  public frontend_development_skills:string = LANDING_TEXTS.FRONTEND_DEVELOPMENT_SKILLS;
  public backend_development_skills:string = LANDING_TEXTS.BACKEND_DEVELOPMENT_SKILLS;
  public tools_others:string = LANDING_TEXTS.TOOLS_OTHERS;
  public angular:string = LANDING_TEXTS.ANGULAR;
  public typescript:string = LANDING_TEXTS.TYPESCRIPT;
  public javascript:string = LANDING_TEXTS.JAVASCRIPT;
  public ngxs:string = LANDING_TEXTS.NGXS;
  public scss:string = LANDING_TEXTS.SCSS;
  public tailwind:string = LANDING_TEXTS.TAILWIND;
  public jest:string = LANDING_TEXTS.JEST;
  public figma:string = LANDING_TEXTS.FIGMA;
  public primeng:string = LANDING_TEXTS.PRIMENG;
  public java:string = LANDING_TEXTS.JAVA;
  public spring_boot:string = LANDING_TEXTS.SPRING_BOOT;
  public mysql:string = LANDING_TEXTS.MYSQL;
  public aws:string = LANDING_TEXTS.AWS;
  public kafka:string = LANDING_TEXTS.KAFKA;
  public redis:string = LANDING_TEXTS.REDIS;
  public junit:string = LANDING_TEXTS.JUNIT;
  public mockito:string = LANDING_TEXTS.MOCKITO;
  public postman:string = LANDING_TEXTS.POSTMAN;
  public git:string = LANDING_TEXTS.GIT;
  public sonarqube:string = LANDING_TEXTS.SONARQUBE;
  public grafana:string = LANDING_TEXTS.GRAFANA;
}
