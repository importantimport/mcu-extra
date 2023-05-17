import { type CustomColor, customColor, type CustomColorGroup, sourceColorFromImage, type TonalPalette } from '@material/material-color-utilities'

import { CorePalette } from './core-palette'
import { Scheme } from './scheme'

/** @beta */
export type Theme = {
  source: number
  schemes: {
      light: Scheme
      dark: Scheme
  }
  palettes: {
      primary: TonalPalette
      secondary: TonalPalette
      tertiary: TonalPalette
      neutral: TonalPalette
      neutralVariant: TonalPalette
      error: TonalPalette
  }
  customColors: CustomColorGroup[]
}

/** @public */
export const themeFromSourceColor = (source: number, customColors: CustomColor[] = []): Theme => {
  const palette = CorePalette.of(source)
  return {
    customColors: customColors.map(color => customColor(source, color)),
    palettes: {
      error: palette.error,
      neutral: palette.n1,
      neutralVariant: palette.n2,
      primary: palette.a1,
      secondary: palette.a2,
      tertiary: palette.a3,
    },
    schemes: {
      dark: Scheme.dark(source),
      light: Scheme.light(source),
    },
    source,
  }
}

/** @public */
export const themeFromImage = async (image: HTMLImageElement, customColors: CustomColor[] = []) =>
  await sourceColorFromImage(image)
    .then(source => themeFromSourceColor(source, customColors))
