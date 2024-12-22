import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';

@Component({
  standalone: true,
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  imports: [HomeComponent, AboutMeComponent]
})
export class MainLayoutComponent {

}
