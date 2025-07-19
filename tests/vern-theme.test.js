import { expect, test } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';

test('Vern Dark color theme file should exist', () => {
  const themePath = path.resolve(__dirname, '../themes/Vern Dark-color-theme.json');
  const themeExists = fs.existsSync(themePath);
  expect(themeExists).toBe(true);
});
