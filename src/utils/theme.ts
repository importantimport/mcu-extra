import {
  type CustomColor,
  type CustomColorGroup,
  Hct,
  SchemeContent,
  SchemeExpressive,
  SchemeFidelity,
  SchemeMonochrome,
  SchemeNeutral,
  SchemeTonalSpot,
  SchemeVibrant,
  type TonalPalette,
  customColor,
  sourceColorFromImage,
} from '@material/material-color-utilities'

import { type Scheme, scheme } from './scheme'

/** @beta */
export type Theme = {
  customColors: CustomColorGroup[]
  palettes: {
      error: TonalPalette
      neutral: TonalPalette
      neutralVariant: TonalPalette
      primary: TonalPalette
      secondary: TonalPalette
      tertiary: TonalPalette
  }
  schemes: {
    dark: Scheme
    light: Scheme
  }
  source: number
}

/** @beta */
export type ExtraThemeOptions = {
  /** @defaultValue `0` */
  contrastLevel?: number
  /**
   * Available scheme variants.
   * @defaultValue `TonalSpot`
   * @see {@link https://github.com/material-foundation/material-color-utilities/blob/main/make_schemes.md#swift-1}
   */
  variant?: 'Content' | 'Expressive' | 'Fidelity' | 'Monochrome' | 'Neutral' | 'TonalSpot' | 'Vibrant'
}

/** @internal */
export const schemes = {
  Content: SchemeContent,
  Expressive: SchemeExpressive,
  Fidelity: SchemeFidelity,
  Monochrome: SchemeMonochrome,
  Neutral: SchemeNeutral,
  TonalSpot: SchemeTonalSpot,
  Vibrant: SchemeVibrant,
} as const

/** @public */
export const themeFromSourceColor = (source: number, customColors: CustomColor[] = [], options: ExtraThemeOptions = {}): Theme => {
  const light = new schemes[options.variant ?? 'TonalSpot'](Hct.fromInt(source), false, options.contrastLevel ?? 0)
  const dark = new schemes[options.variant ?? 'TonalSpot'](Hct.fromInt(source), true, options.contrastLevel ?? 0)
  return {
    customColors: customColors.map(color => customColor(source, color)),
    palettes: {
      error: light.errorPalette,
      neutral: light.neutralPalette,
      neutralVariant: light.neutralVariantPalette,
      primary: light.primaryPalette,
      secondary: light.secondaryPalette,
      tertiary: light.tertiaryPalette,
    },
    schemes: {
      dark: scheme(dark),
      light: scheme(light),
    },
    source,
  }
}

/** @public */
export const themeFromImage = async (image: HTMLImageElement, customColors: CustomColor[] = [], options: ExtraThemeOptions = {}) => await sourceColorFromImage(image)
  .then(source => themeFromSourceColor(source, customColors, options))
