import { importProvidersFrom, Provider, EnvironmentProviders } from '@angular/core';
import { provideRouter } from '@angular/router';
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

/**
 * TestBed providers (wired via the unit-test builder's `providersFile`). Mirrors
 * the lucide icon registration in app.config.ts so component specs that render
 * <lucide-icon> resolve their icons exactly as production does.
 */
const providers: (Provider | EnvironmentProviders)[] = [
  provideRouter([]),
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
];

export default providers;
