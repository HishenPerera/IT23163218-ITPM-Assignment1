const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  reporter: [
    ['html', { open: 'always' }], 
    ['list']
  ],

  use: {
    browserName: 'chromium',
    headless: false,
    screenshot: 'only-on-failure'
  }
});