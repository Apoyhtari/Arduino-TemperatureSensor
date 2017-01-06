import {Routes, RouterModule} from "@angular/router";

import {HomeComponent} from "./home/home.component";
import {TempInComponent} from "./temp-in/temp-in.component";
const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'tempin', component: TempInComponent}
];


export const routing = RouterModule.forRoot(APP_ROUTES)
