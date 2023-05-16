import { argbFromHex, hexFromArgb } from '@material/material-color-utilities'
import { expect, test } from 'vitest'

import { themeFromSourceColor } from '../src/index'

test('Baseline color scheme tokens', () => {
  const theme = themeFromSourceColor(argbFromHex('#6750a4'))
  // light
  // https://github.com/material-foundation/material-color-utilities/blob/4ca0b54fd522534fa7e697b89bc3012792775695/typescript/scheme/scheme_test.ts#L40-L47
  expect(hexFromArgb(theme.schemes.light.primary)).toBe('#6750a4')
  expect(hexFromArgb(theme.schemes.light.secondary)).toBe('#625b71')
  expect(hexFromArgb(theme.schemes.light.tertiary)).toBe('#7e5260')
  // dark
  // https://github.com/material-foundation/material-color-utilities/blob/4ca0b54fd522534fa7e697b89bc3012792775695/typescript/scheme/scheme_test.ts#L49-L56
  expect(hexFromArgb(theme.schemes.dark.primary)).toBe('#cfbcff')
  expect(hexFromArgb(theme.schemes.dark.secondary)).toBe('#cbc2db')
  expect(hexFromArgb(theme.schemes.dark.tertiary)).toBe('#efb8c8')
  // on-error-container fix
  expect(hexFromArgb(theme.schemes.dark.onErrorContainer)).toBe('#ffdad6')
  // surface 98
  expect(hexFromArgb(theme.schemes.light.surface)).toBe('#fdf7ff')
  // tone-based surfaces
  expect(hexFromArgb(theme.schemes.light.surfaceContainer)).toBe('#f2ecf4')
  expect(hexFromArgb(theme.schemes.light.surfaceContainerLow)).toBe('#f8f2fa')
  expect(hexFromArgb(theme.schemes.light.surfaceContainerLowest)).toBe('#ffffff')
  expect(hexFromArgb(theme.schemes.light.surfaceContainerHigh)).toBe('#ece6ee')
  expect(hexFromArgb(theme.schemes.light.surfaceContainerHighest)).toBe('#e6e0e9')
  // surface tint
  expect(hexFromArgb(theme.schemes.light.surfaceTint)).toBe('#6750a4')
  expect(hexFromArgb(theme.schemes.dark.surfaceTint)).toBe('#cfbcff')
})
