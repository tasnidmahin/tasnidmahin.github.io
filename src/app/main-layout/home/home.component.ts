import { Component, ElementRef, ViewChild } from '@angular/core';
import { LANDING_TEXTS } from '../home.constants';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public name:string = LANDING_TEXTS.NAME;
  public title:string = '';
  private all_title:string[][] = [
    [LANDING_TEXTS.SOFTWARE_ENGINEER],
    [LANDING_TEXTS.FULL_STACK_DEVELOPER],
    [LANDING_TEXTS.FRONT_END_DEVELOPER]
  ];
  private current_title = this.all_title[0][0];
  private x_index:number = 0;
  private y_index:number = 0;
  private isDeleting:boolean = false;


  @ViewChild('backgroundVideo') backgroundVideo!: ElementRef<HTMLVideoElement>;

  ngOnInit(): void {
    this.typeWriterEffect();
  }

  typeWriterEffect(): void {
    const typingSpeed = this.isDeleting ? 50 : 150;
    const delayBetweenLoops = 1000;
    

    if(!this.isDeleting && this.x_index < this.current_title.length) {
      this.title += this.current_title.charAt(this.x_index);
      this.x_index++;
    } else if(this.isDeleting && this.x_index > 0) {
      this.title = this.title.slice(0, -1);
      this.x_index--;
    } else if(this.x_index == 0) {
      this.isDeleting = false;
      this.y_index++;
      this.y_index%=3;
      this.current_title = this.all_title[this.y_index][0];      
    } else if(this.x_index == this.current_title.length) {
      this.isDeleting = true;
      setTimeout(() => this.typeWriterEffect(), delayBetweenLoops);
  
      return;
    }

    setTimeout(() => this.typeWriterEffect(), typingSpeed);
  }

}
