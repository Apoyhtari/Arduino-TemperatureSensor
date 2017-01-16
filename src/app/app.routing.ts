import {Routes, RouterModule} from "@angular/router";

import {HomeComponent} from "./home/home.component";
import {TempInComponent} from "./temp-in/temp-in.component";
import {ChartsComponent} from "./charts/charts.component";

const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'tempin', component: TempInComponent},
  {path: 'charts', component: ChartsComponent}
];


export const routing = RouterModule.forRoot(APP_ROUTES)
