import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { TimerCard } from './timer-card';

interface Capability {
  icon: string;
  title: string;
  body: string;
}

@Component({
  selector: 'zii-landing',
  imports: [LucideAngularModule, TimerCard],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {
  protected readonly appUrl = 'https://app.zii.software';
  protected readonly waitlistUrl = 'https://app.zii.software/sign-up';

  protected readonly capabilities: Capability[] = [
    {
      icon: 'layout-grid',
      title: 'Plan your work',
      body: 'Organize your projects and lay out your day.',
    },
    {
      icon: 'play',
      title: 'Track your time',
      body: 'Start a timer while you work and keep a record of your hours.',
    },
    {
      icon: 'chart-column',
      title: 'See your progress',
      body: 'Set daily and weekly goals and see how you’re doing against them.',
    },
    {
      icon: 'users',
      title: 'Work as a team',
      body: 'Share projects with your team and stay in sync as things change.',
    },
  ];
}
