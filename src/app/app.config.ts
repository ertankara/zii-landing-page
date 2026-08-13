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
  Bell,
  ChartColumn,
  Check,
  Circle,
  Cloud,
  CloudOff,
  GitBranch,
  LayoutGrid,
  ListChecks,
  Pause,
  Play,
  Sparkles,
  Target,
  Timer,
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
        Bell,
        ChartColumn,
        Check,
        Circle,
        Cloud,
        CloudOff,
        GitBranch,
        LayoutGrid,
        ListChecks,
        Pause,
        Play,
        Sparkles,
        Target,
        Timer,
        Users,
      }),
    ),
  ],
};
