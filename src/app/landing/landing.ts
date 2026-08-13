import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

interface Capability {
  icon: string;
  title: string;
  body: string;
}

interface DayStep {
  when: string;
  body: string;
}

interface Assurance {
  icon: string;
  text: string;
}

interface AgentPoint {
  icon: string;
  text: string;
}

@Component({
  selector: 'zii-landing',
  imports: [LucideAngularModule],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {
  protected readonly appUrl = 'https://app.zii.software';
  protected readonly signUpUrl = 'https://app.zii.software/sign-up';

  protected readonly agentPoints: AgentPoint[] = [
    { icon: 'cloud', text: 'Runs on the repository, not on your laptop' },
    { icon: 'git-branch', text: 'Connects through GitHub and Bitbucket' },
    { icon: 'check', text: 'Comes back as a branch you review' },
  ];

  protected readonly capabilities: Capability[] = [
    {
      icon: 'layout-grid',
      title: 'Project boards',
      body: 'One board per project, with columns you name yourself. Priorities, comments, and filters to cut a long column down to what you want to see.',
    },
    {
      icon: 'list-checks',
      title: 'A list for today',
      body: 'Add the tasks you plan to do today to one short list. Marking one done can move it on the board too, so you’re not updating two places.',
    },
    {
      icon: 'play',
      title: 'A timer',
      body: 'Start, pause, resume, stop. Set a countdown for a fixed length, or an alarm to stop you at a set time.',
    },
    {
      icon: 'timer',
      title: 'Time added later',
      body: 'Enter hours after the fact, and split one session across the tasks it covered. Days you didn’t run the timer still get counted.',
    },
    {
      icon: 'target',
      title: 'Weekly goals',
      body: 'A weekly goal per project, and the days you’re off. ZII works out today’s target from what’s left, so a light Monday raises Tuesday.',
    },
    {
      icon: 'chart-column',
      title: 'Statistics',
      body: 'Totals for any range of days, your daily average, your best day, and where each project stands against its goal.',
    },
  ];

  protected readonly dayFlow: DayStep[] = [
    { when: 'Morning', body: 'Add today’s tasks to Today.' },
    { when: 'While you work', body: 'Run the timer, and split the session if it covered more than one task.' },
    { when: 'End of the week', body: 'The hours are already there, per project, against the goal.' },
  ];

  protected readonly assurances: Assurance[] = [
    {
      icon: 'users',
      text: 'Share projects with your team. When someone moves a task or logs time, you see it without refreshing.',
    },
    {
      icon: 'cloud-off',
      text: 'Keep working when the connection drops. Anything you did offline is saved once you’re back.',
    },
    {
      icon: 'bell',
      text: 'You get told when a countdown finishes, including when the tab is closed.',
    },
  ];
}
