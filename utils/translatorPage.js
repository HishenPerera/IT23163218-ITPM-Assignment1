class TranslatorPage {
  constructor(page) {
    this.page = page;

    // Strict + reliable selectors (based on your error)
    this.input = page.getByPlaceholder('Type your English text here…');
    this.output = page.getByPlaceholder('Transliterated Sinhala will appear here…');
  }

  async open() {
    await this.page.goto('https://www.pixelssuite.com/chat-translator');
    await this.page.waitForLoadState('networkidle');
  }

  async translate(text) {
  await this.input.fill('');
  await this.input.fill(text);

  // Wait for UI reaction (simple + stable)
  await this.page.waitForTimeout(2000);

  // Read value directly (no strict waiting)
  return await this.output.inputValue();
}
}

module.exports = { TranslatorPage };