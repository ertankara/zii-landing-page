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

  it('leads with the coding agent, framed as coming rather than shipped', () => {
    const el = render();
    expect(el.querySelector('h1')?.textContent).toContain('AI that works on your codebase.');
    expect(el.textContent).toContain('Coming next');
    expect(el.textContent).toContain('GitHub');
    expect(el.textContent).toContain('Bitbucket');
    expect(el.textContent).toContain('We’re building this now.');
  });

  it('sends every sign-up call to action to the app sign-up page', () => {
    const el = render();
    const signUpLinks = Array.from(el.querySelectorAll<HTMLAnchorElement>('a')).filter((a) =>
      a.textContent?.includes('Sign up'),
    );
    expect(signUpLinks.length).toBeGreaterThanOrEqual(2);
    for (const link of signUpLinks) {
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

  it('lists what the app already does, separately from the agent', () => {
    const el = render();
    const cards = el.querySelectorAll('article');
    expect(cards.length).toBe(6);
    expect(el.textContent).toContain('In the app today');
    expect(el.textContent).toContain('Project boards');
    expect(el.textContent).toContain('A list for today');
    expect(el.textContent).toContain('A timer');
    expect(el.textContent).toContain('Time added later');
    expect(el.textContent).toContain('Weekly goals');
    expect(el.textContent).toContain('Statistics');
  });

  it('sketches the day in three steps', () => {
    const el = render();
    const steps = el.querySelectorAll('ol li');
    expect(steps.length).toBe(3);
    expect(el.textContent).toContain('Morning');
    expect(el.textContent).toContain('While you work');
    expect(el.textContent).toContain('End of the week');
  });

  it('renders each capability icon on the same line as its title', () => {
    const el = render();
    for (const card of Array.from(el.querySelectorAll('article'))) {
      const row = card.querySelector('div.flex.items-center');
      expect(row, 'icon+title row exists').toBeTruthy();
      expect(row?.querySelector('lucide-icon'), 'icon in row').toBeTruthy();
      expect(row?.querySelector('h3'), 'title in row').toBeTruthy();
    }
  });
});
