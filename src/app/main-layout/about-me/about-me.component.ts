import { Component } from '@angular/core';
import { LANDING_TEXTS } from '../home.constants';

@Component({
  standalone: true,
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  public name:string = LANDING_TEXTS.NAME;
}
