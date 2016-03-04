import {bootstrap}    from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ListsService} from './services/lists-service';
import {App} from './app';

bootstrap(App, [ListsService, ROUTER_PROVIDERS, HTTP_PROVIDERS])
    .catch(err => console.error(err));
