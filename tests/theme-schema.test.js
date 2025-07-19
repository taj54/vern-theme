
import { expect, test, describe } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const themePaths = [
  path.resolve(__dirname, '../themes/Varna Dark-color-theme.json'),
  path.resolve(__dirname, '../themes/Vern Dark-color-theme.json'),
];

describe('Theme files', () => {
  for (const themePath of themePaths) {
    const themeName = path.basename(themePath);

    test(`${themeName} should have a valid structure`, () => {
      const themeContent = fs.readFileSync(themePath, 'utf-8');
      const theme = JSON.parse(themeContent);

      expect(theme).toHaveProperty('name');
      expect(typeof theme.name).toBe('string');

      expect(theme).toHaveProperty('colors');
      expect(typeof theme.colors).toBe('object');

      expect(theme).toHaveProperty('tokenColors');
      expect(Array.isArray(theme.tokenColors)).toBe(true);

      for (const tokenColor of theme.tokenColors) {
        expect(tokenColor).toHaveProperty('name');
        expect(typeof tokenColor.name).toBe('string');

        expect(tokenColor).toHaveProperty('scope');
        expect(Array.isArray(tokenColor.scope) || typeof tokenColor.scope === 'string').toBe(true);

        expect(tokenColor).toHaveProperty('settings');
        expect(typeof tokenColor.settings).toBe('object');
      }
    });
  }
});
