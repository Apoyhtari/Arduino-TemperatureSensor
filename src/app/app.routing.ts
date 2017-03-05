import {Routes, RouterModule} from "@angular/router";

import {HomeComponent} from "./home/home.component";
import {TempInComponent} from "./temp-in/temp-in.component";
import {ChartsComponent} from "./charts/charts.component";
import {SomeComponent} from "./some/some.component";
import {NewsComponent} from "./news/news.component";
import {MessengersComponent} from "./messengers/messengers.component";
import {SettingsComponent} from "./settings/settings.component";

const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'tempin', component: TempInComponent},
  {path: 'charts', component: ChartsComponent},
  {path: 'some', component: SomeComponent},
  {path: 'news', component: NewsComponent},
  {path: 'messengers', component: MessengersComponent},
  {path: 'settings', component: SettingsComponent}
];


export const routing = RouterModule.forRoot(APP_ROUTES)
