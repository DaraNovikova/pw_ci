import { test, expect } from '@playwright/test';

// test('homepage has title and links to intro page', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);

//   // create a locator
//   const getStarted = page.getByRole('link', { name: 'Get started' });

//   // Expect an attribute "to be strictly equal" to the value.
//   await expect(getStarted).toHaveAttribute('href', '/docs/intro');

//   // Click the get started link.
//   await getStarted.click();

//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro/);
// });

const searchField = '[name="q"]';

test.describe('GitHub - Search Result', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://github.com/');
  });

  test('should verify search result with valid repository name', async ({ page }) => {
    // Selectors
    const firstSearchResultLink = '.repo-list li a';

    // Test data
    const keyword = 'playwright';
    const expectedLink = 'microsoft/playwright';

    await page.fill(searchField, keyword);
    await page.press(searchField, 'Enter');

    expect(await page.textContent(firstSearchResultLink)).toBe(expectedLink);
  });

  test('second try', async ({ page }) => {
    // Selectors
    const firstSearchResultLink = '.repo-list li a';

    // Test data
    const keyword = 'playwright';
    const expectedLink = 'microsoft/playwright';

    await page.fill(searchField, keyword);
    await page.press(searchField, 'Enter');

    expect(await page.textContent(firstSearchResultLink)).toBe(expectedLink);
  });

  test('third try', async ({ page }) => {
    // Selectors
    const firstSearchResultLink = '.repo-list li a';

    // Test data
    const keyword = 'playwright';
    const expectedLink = 'microsoft/playwright';

    await page.fill(searchField, keyword);
    await page.press(searchField, 'Enter');

    expect(await page.textContent(firstSearchResultLink)).toBe(expectedLink);
  });

  test('fourth try', async ({ page }) => {
    // Selectors
    const firstSearchResultLink = '.repo-list li a';

    // Test data
    const keyword = 'playwright';
    const expectedLink = 'microsoft/playwright';

    await page.fill(searchField, keyword);
    await page.press(searchField, 'Enter');

    expect(await page.textContent(firstSearchResultLink)).toBe(expectedLink);
  });
});
