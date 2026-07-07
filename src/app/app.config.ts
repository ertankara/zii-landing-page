import {
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {
  LucideAngularModule,
  ArrowRight,
  ChartColumn,
  Check,
  Circle,
  LayoutGrid,
  Pause,
  Play,
  Sparkles,
  Users,
} from 'lucide-angular';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    importProvidersFrom(
      LucideAngularModule.pick({
        ArrowRight,
        ChartColumn,
        Check,
        Circle,
        LayoutGrid,
        Pause,
        Play,
        Sparkles,
        Users,
      }),
    ),
  ],
};
