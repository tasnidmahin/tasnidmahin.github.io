import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public title:string = '';
  private full_title:string = 'A Software Engineer';
  private index:number = 0;
  private isDeleting:boolean = false;


  @ViewChild('backgroundVideo') backgroundVideo!: ElementRef<HTMLVideoElement>;

  ngOnInit(): void {
    this.typeWriterEffect();
  }

  typeWriterEffect(): void {
    const typingSpeed = this.isDeleting ? 50 : 150;
    const delayBetweenLoops = 1000;
    

    if(!this.isDeleting && this.index < this.full_title.length) {
      this.title += this.full_title.charAt(this.index);
      this.index++;

      console.log("A");
    } else if(this.isDeleting && this.index > 0) {
      this.title = this.title.slice(0, -1);
      this.index--;
      console.log("B");
    } else if(this.index == 0) {
      this.isDeleting = false;
      console.log("C");
      
    } else if(this.index == this.full_title.length) {
      this.isDeleting = true;
      setTimeout(() => this.typeWriterEffect(), delayBetweenLoops);
      console.log("D");
      
      return;
    }

    setTimeout(() => this.typeWriterEffect(), typingSpeed);
  }

}
