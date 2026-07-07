import { afterNextRender, Component, computed, OnDestroy, signal } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

/** Public release date: 20 July (next occurrence, so the countdown never goes negative). */
function nextRelease(from: Date): Date {
  const thisYear = new Date(from.getFullYear(), 6, 20);
  return from.getTime() < thisYear.getTime() ? thisYear : new Date(from.getFullYear() + 1, 6, 20);
}

function pad(value: number): string {
  return value.toString().padStart(2, '0');
}

@Component({
  selector: 'zii-timer-card',
  imports: [LucideAngularModule],
  templateUrl: './timer-card.html',
  host: { class: 'block' },
})
export class TimerCard implements OnDestroy {
  private intervalId: ReturnType<typeof setInterval> | undefined;
  private readonly target = nextRelease(new Date());

  protected readonly remainingSeconds = signal(this.calcRemaining());

  protected readonly countdown = computed(() => {
    const total = this.remainingSeconds();
    const days = Math.floor(total / 86400);
    const hours = Math.floor((total % 86400) / 3600);
    const minutes = Math.floor((total % 3600) / 60);
    return `${days}d ${pad(hours)}:${pad(minutes)}:${pad(total % 60)}`;
  });

  constructor() {
    afterNextRender(() => {
      this.intervalId = setInterval(() => this.remainingSeconds.set(this.calcRemaining()), 1000);
    });
  }

  ngOnDestroy(): void {
    if (this.intervalId !== undefined) {
      clearInterval(this.intervalId);
    }
  }

  private calcRemaining(): number {
    return Math.max(0, Math.floor((this.target.getTime() - Date.now()) / 1000));
  }
}
