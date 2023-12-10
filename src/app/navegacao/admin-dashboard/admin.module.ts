import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminDashboardComponent } from "./admin-dashboard.component";
import { AdminRoutingModule } from "./admin-route.module";


@NgModule({
  declarations: [
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  providers: [

  ],
  exports: []
})
export class AdminModule{}
