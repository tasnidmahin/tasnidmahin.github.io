import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { HomeComponent } from './home/home.component';
import { CommonModule } from "@angular/common";
import { MainLayoutRoutingModule } from "./main-layout-routing.module";
import { MainLayoutComponent } from "./main-layout.component";

@NgModule({
    // schemas: [CUSTOM_ELEMENTS_SCHEMA],
    declarations: [
    HomeComponent, MainLayoutComponent
  ],
    imports: [CommonModule, MainLayoutRoutingModule],
    exports: []
})
export class MainLayoutModule {};