import { TestBed } from '@angular/core/testing';
import { TimerCard } from './timer-card';

describe('TimerCard', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimerCard],
    }).compileComponents();
  });

  function render(): HTMLElement {
    const fixture = TestBed.createComponent(TimerCard);
    fixture.detectChanges();
    return fixture.nativeElement as HTMLElement;
  }

  it('renders a countdown in days, hours, minutes and seconds', () => {
    const el = render();
    expect(el.textContent).toMatch(/\d+d \d{2}:\d{2}:\d{2}/);
  });

  it('counts down to the 20 July public release', () => {
    const el = render();
    expect(el.textContent).toContain('Public release');
    expect(el.textContent).toContain('20 July');

    const match = /(\d+)d /.exec(el.textContent ?? '');
    expect(match, 'day segment present').toBeTruthy();
    // Next 20 July is at most a year away.
    expect(Number(match![1])).toBeLessThan(366);
  });
});
