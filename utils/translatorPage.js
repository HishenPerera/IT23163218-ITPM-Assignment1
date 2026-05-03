class TranslatorPage {
  constructor(page) {
    this.page = page;

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

    await this.page.waitForTimeout(3000);

    return (await this.output.inputValue())?.trim();
  }
}

module.exports = { TranslatorPage };