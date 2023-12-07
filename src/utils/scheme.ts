import { type DynamicColor, type DynamicScheme, MaterialDynamicColors } from '@material/material-color-utilities'

export type Key = keyof Omit<
  typeof MaterialDynamicColors,
  'contentAccentToneDelta' |
  'highestSurface' |
  'neutralPaletteKeyColor' |
  'neutralVariantPaletteKeyColor' |
  'primaryPaletteKeyColor' |
  'prototype' |
  'secondaryPaletteKeyColor' |
  'tertiaryPaletteKeyColor'
>

export type Scheme = Record<Key, number>

/** @internal */
export const keys = Object.keys(MaterialDynamicColors)
  .filter(key => ![
    'contentAccentToneDelta',
    'highestSurface',
    'neutralPaletteKeyColor',
    'neutralVariantPaletteKeyColor',
    'primaryPaletteKeyColor',
    'prototype',
    'secondaryPaletteKeyColor',
    'tertiaryPaletteKeyColor',
  ].includes(key)) as Key[]

/** @beta */
export const scheme = (scheme: DynamicScheme) =>
  Object.fromEntries(keys.map(key =>
    [key, (MaterialDynamicColors[key] as DynamicColor).getArgb(scheme)],
  )) as unknown as Record<keyof typeof MaterialDynamicColors, number>
