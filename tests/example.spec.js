// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/gui-afsluttendeproject/);
});

test('go from home to productspage see if url match url is ProductsPage', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Click the "Products" link.
  await page.getByRole('link', { name: 'Products' }).click();

  // Expect URL to be the ProductsPage.
  await expect(page).toHaveURL('http://localhost:5173/ProductsPage');
});

test('go from home to tables see if url is correct', async({page}) => {
  await page.goto('http://localhost:5173/');

  await page.getByRole('link', { name: 'Tables'}).click();

  await expect(page).toHaveURL('http://localhost:5173/ProductsPage/category/2');
});

test('go from home to GPU see if url is GPU', async({page}) => {
  await page.goto('http://localhost:5173/');

  await page.getByRole('link', { name: 'GPU'}).click();

  await expect(page).toHaveURL('http://localhost:5173/ProductsPage/category/3');
});

test('go from home to chairs see if url is chairs', async({page}) => {
  await page.goto('http://localhost:5173/');

  await page.getByRole('link', {name: 'Chairs'}).click();

  await expect(page).toHaveURL('http://localhost:5173/ProductsPage/category/1');
});

