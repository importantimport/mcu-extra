import { argbFromHex } from '@material/material-color-utilities'
import { expect, test } from 'vitest'

import { themeFromSourceColor } from '../src/index'

test('Baseline color scheme tokens', () => {
  const theme = themeFromSourceColor(argbFromHex('#6750a4'))

  // background equal surface
  expect(theme.schemes.light.background).toBe(theme.schemes.light.surface)
  expect(theme.schemes.dark.background).toBe(theme.schemes.dark.surface)
  // surface tint equal primary
  expect(theme.schemes.light.surfaceTint).toBe(theme.schemes.light.primary)
  expect(theme.schemes.dark.surfaceTint).toBe(theme.schemes.dark.primary)
})
