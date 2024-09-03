import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { GaugeModule } from 'angular-gauge';


import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { httpErrorsInterceptor } from './_interceptors/http-errors.interceptor';
import { httpHeaderInterceptor } from './_interceptors/http-header.interceptor';
import { httpLoggingInterceptor } from './_interceptors/http-logging.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync(),
              provideHttpClient(withInterceptors([httpErrorsInterceptor,httpHeaderInterceptor, httpLoggingInterceptor])),
              importProvidersFrom(GaugeModule.forRoot()),
            ]
};