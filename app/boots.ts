import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {HTTP_PROVIDERS} from 'angular2/http';

boostrap(AppComponent, [HTTP_PROVIDERS]);