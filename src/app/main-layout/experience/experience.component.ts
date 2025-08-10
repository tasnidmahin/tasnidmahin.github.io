import { animate, style, transition, trigger } from '@angular/animations';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { TEXTS, SE_EXPERIENCE_TEXTS, SSE_EXPERIENCE_TEXTS } from '../main.constants';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [TimelineModule, ChipModule, CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
  // animations: [
  //   trigger('fadeInUp', [
  //     transition(':enter', [
  //       style({ opacity: 0, transform: 'translateY(20px)' }),
  //       animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
  //     ])
  //   ])
  // ]
})
export class ExperienceComponent {
  public experiences = [
    {
      year: TEXTS.YEAR_2024_PRESENT,
      position: TEXTS.SENIOR_SOFTWARE_ENGINEER,
      company: TEXTS.ENOSIS_SOLUTIONS,
      description: SSE_EXPERIENCE_TEXTS,
      stack: [TEXTS.JAVA, TEXTS.SPRING_BOOT, TEXTS.KAFKA, TEXTS.REDIS, TEXTS.AWS],
      icon: 'pi pi-briefcase'
    },
    {
      year: TEXTS.YEAR_2022_2023,
      position: TEXTS.SOFTWARE_ENGINEER,
      company: TEXTS.ENOSIS_SOLUTIONS,
      description: SE_EXPERIENCE_TEXTS,
      stack: [TEXTS.ANGULAR, TEXTS.TYPESCRIPT, TEXTS.JAVASCRIPT, TEXTS.JAVA, TEXTS.MYSQL],
      icon: 'pi pi-cog'
    }
  ];

  public my_experiences = TEXTS.MY_EXPERIENCES;

  public isEven(index: number): boolean {
    return index % 2 === 0;
  };

  public getIndex(experience: any): number {
    return this.experiences.indexOf(experience);
  }  

}
