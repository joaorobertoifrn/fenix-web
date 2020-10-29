import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}


const color =
  (environment.isMultiColorActive || environment.isDarkSwitchActive) && localStorage.getItem(environment.themeColorStorageKey)
    ? localStorage.getItem(environment.themeColorStorageKey)
    : environment.defaultColor;

platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));
