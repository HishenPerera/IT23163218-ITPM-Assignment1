const { test } = require('@playwright/test');
const { TranslatorPage } = require('../utils/translatorPage');

const TEST_DATA = [
  {
    tcId: 'Neg_001',
    input: 'mataa gedhara yanvaa',
    expected: 'මට ගෙදර යනවා',
    type: 'Spelling Variant'
  }
];

test.describe('Translator Testing', () => {
  let translator;

  test.beforeEach(async ({ page }) => {
    translator = new TranslatorPage(page);
    await translator.open();
  });

  for (const tc of TEST_DATA) {
    test(tc.tcId, async () => {
      const actual = await translator.translate(tc.input);

      const status = actual === tc.expected ? 'Pass' : 'Fail';

      console.log('----------------');
      console.log('TC:', tc.tcId);
      console.log('Input:', tc.input);
      console.log('Expected:', tc.expected);
      console.log('Actual:', actual);
      console.log('Status:', status);
      console.log('Type:', tc.type);
    });
  }
});