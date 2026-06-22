import { test, expect } from '@playwright/test';

test('Valida titulo da pagina', async ({ page }) => {
  await page.goto('https://playwright.dev/'); //abre a pagina
  await expect(page).toHaveTitle(/Playwright/); //verifica se o titulo da pagina contem a palavra Playwright
});

test('Valida abertura do link com a validação do titulo', async ({ page }) => {
  await page.goto('https://playwright.dev/');         //abre a pagina
  await page.getByRole('link', { name: 'Get started' }).click();    // clica no link
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();  // valida se o titulo está visivel
});
