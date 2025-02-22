import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TEXTS } from '../main.constants';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  public frontend_development_skills:string = TEXTS.FRONTEND_DEVELOPMENT_SKILLS;
  public backend_development_skills:string = TEXTS.BACKEND_DEVELOPMENT_SKILLS;
  public tools_others:string = TEXTS.TOOLS_OTHERS;
  public angular:string = TEXTS.ANGULAR;
  public typescript:string = TEXTS.TYPESCRIPT;
  public javascript:string = TEXTS.JAVASCRIPT;
  public ngxs:string = TEXTS.NGXS;
  public scss:string = TEXTS.SCSS;
  public tailwind:string = TEXTS.TAILWIND;
  public jest:string = TEXTS.JEST;
  public figma:string = TEXTS.FIGMA;
  public primeng:string = TEXTS.PRIMENG;
  public java:string = TEXTS.JAVA;
  public spring_boot:string = TEXTS.SPRING_BOOT;
  public mysql:string = TEXTS.MYSQL;
  public aws:string = TEXTS.AWS;
  public kafka:string = TEXTS.KAFKA;
  public redis:string = TEXTS.REDIS;
  public junit:string = TEXTS.JUNIT;
  public mockito:string = TEXTS.MOCKITO;
  public postman:string = TEXTS.POSTMAN;
  public git:string = TEXTS.GIT;
  public sonarqube:string = TEXTS.SONARQUBE;
  public grafana:string = TEXTS.GRAFANA;
}
