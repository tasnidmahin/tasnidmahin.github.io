import { Component } from '@angular/core';
import { TEXTS } from '../main.constants';

@Component({
  standalone: true,
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  public name:string = TEXTS.NAME;
  public title:string = TEXTS.FULL_STACK_DEVELOPER;
}
