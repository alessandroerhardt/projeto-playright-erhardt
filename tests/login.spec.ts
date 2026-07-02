import { test, expect } from '@playwright/test';
import { LoginPage } from './page-objects/LoginPage';

test.describe('Login - the-internet.herokuapp.com', () => {
  test('Login com credenciais válidas exibe mensagem de sucesso', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('tomsmith', 'SuperSecretPassword!');

    await expect(loginPage.flashMessage).toContainText('You logged into a secure area!');
  });

  test('Login com credenciais inválidas exibe mensagem de erro', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('usuario_invalido', 'senha_invalida');

    await expect(loginPage.flashMessage).toContainText('Your username is invalid!');
  });
});
