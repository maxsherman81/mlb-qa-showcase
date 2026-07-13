import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://www.mlb.com', { waitUntil: 'domcontentloaded' });
  }

  async getTitle() {
    return this.page.title();
  }

  get newsLink(): Locator {
    return this.page.getByRole('link', { name: 'News', exact: true });
  }

  get watchLink(): Locator {
    return this.page.getByRole('link', { name: 'Watch', exact: true });
  }

  get scoresLink(): Locator {
    return this.page.getByRole('link', { name: 'Scores', exact: true });
  }

  get scheduleLink(): Locator {
    return this.page.getByRole('link', { name: 'Schedule', exact: true });
  }

  get statsLink(): Locator {
    return this.page.getByRole('link', { name: 'Stats', exact: true });
  }

  get standingsLink(): Locator {
    return this.page.getByRole('link', { name: 'Standings', exact: true });
  }

  get mlbTvLink(): Locator {
    return this.page.getByRole('link', { name: 'MLB.TV', exact: true });
  }

  get ticketsLink(): Locator {
    return this.page.getByRole('link', { name: 'Tickets', exact: true });
  }

  get shopLink(): Locator {
    return this.page.getByRole('link', { name: 'Shop', exact: true });
  }

  get teamsLink(): Locator {
    return this.page.getByRole('link', { name: 'Teams', exact: true });
  }
}