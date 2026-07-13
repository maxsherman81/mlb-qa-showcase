import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('MLB homepage loads', async ({ page }) => {
  const homePage = new HomePage(page);
  
  await homePage.navigate();
  
  const title = await homePage.getTitle();
  expect(title).toContain('MLB');
});

test('primary nav links are all visible', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigate();
  await expect.soft(homePage.newsLink).toBeVisible();
  await expect.soft(homePage.watchLink).toBeVisible();
  await expect.soft(homePage.scoresLink).toBeVisible();
  await expect.soft(homePage.scheduleLink).toBeVisible();
  await expect.soft(homePage.statsLink).toBeVisible();
  await expect.soft(homePage.standingsLink).toBeVisible();
  await expect.soft(homePage.mlbTvLink).toBeVisible();
  await expect.soft(homePage.ticketsLink).toBeVisible();
  await expect.soft(homePage.shopLink).toBeVisible();
  await expect.soft(homePage.teamsLink).toBeVisible();
});

test('clicking Scores navigates to scores page', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigate();
  await homePage.scoresLink.click();
  await expect(page).toHaveURL(/scores/);
});
