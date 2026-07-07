import { TestBed } from '@angular/core/testing';
import { Landing } from './landing';

describe('Landing', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Landing],
    }).compileComponents();
  });

  function render(): HTMLElement {
    const fixture = TestBed.createComponent(Landing);
    fixture.detectChanges();
    return fixture.nativeElement as HTMLElement;
  }

  it('renders the hero headline', () => {
    const el = render();
    expect(el.querySelector('h1')?.textContent).toContain('Your work and your hours, in one place.');
  });

  it('sends every waitlist call to action to the app sign-up page', () => {
    const el = render();
    const waitlistLinks = Array.from(el.querySelectorAll<HTMLAnchorElement>('a')).filter((a) =>
      a.textContent?.includes('Join the waitlist'),
    );
    expect(waitlistLinks.length).toBeGreaterThanOrEqual(2);
    for (const link of waitlistLinks) {
      expect(link.getAttribute('href')).toBe('https://app.zii.software/sign-up');
    }
  });

  it('sends sign-in links to the app', () => {
    const el = render();
    const signInLinks = Array.from(el.querySelectorAll<HTMLAnchorElement>('a')).filter((a) =>
      a.textContent?.includes('Sign in'),
    );
    expect(signInLinks.length).toBeGreaterThanOrEqual(2);
    for (const link of signInLinks) {
      expect(link.getAttribute('href')).toBe('https://app.zii.software');
    }
  });

  it('introduces the four capability areas', () => {
    const el = render();
    const cards = el.querySelectorAll('article');
    expect(cards.length).toBe(4);
    expect(el.textContent).toContain('Plan your work');
    expect(el.textContent).toContain('Track your time');
    expect(el.textContent).toContain('See your progress');
    expect(el.textContent).toContain('Work as a team');
  });

  it('mentions AI without detailing the feature', () => {
    const el = render();
    expect(el.textContent).toContain('AI, built in');
    expect(el.textContent).toContain('ZII includes AI from day one.');
  });

  it('shows the coming-soon stamp on the hero card', () => {
    const el = render();
    expect(el.querySelector('.stamp')?.textContent?.trim()).toBe('Coming soon');
  });

  it('renders each capability icon on the same line as its title', () => {
    const el = render();
    for (const card of Array.from(el.querySelectorAll('article'))) {
      const row = card.querySelector('div.flex.items-center');
      expect(row, 'icon+title row exists').toBeTruthy();
      expect(row?.querySelector('lucide-icon'), 'icon in row').toBeTruthy();
      expect(row?.querySelector('h2'), 'title in row').toBeTruthy();
    }
  });
});
