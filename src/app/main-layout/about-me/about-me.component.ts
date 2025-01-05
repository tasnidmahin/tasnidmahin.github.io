import { Component } from '@angular/core';
import { LANDING_TEXTS } from '../main.constants';

@Component({
  standalone: true,
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  public name:string = LANDING_TEXTS.NAME;
  public title:string = LANDING_TEXTS.FULL_STACK_DEVELOPER;
}
