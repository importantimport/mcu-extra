import {
  CorePalette as MCUCorePalette,
  CorePaletteColors,
  Hct,
  TonalPalette,
} from '@material/material-color-utilities'

export class CorePalette implements MCUCorePalette {
  /** primary */
  a1: TonalPalette
  /** secondary */
  a2: TonalPalette
  /** tertiary */
  a3: TonalPalette
  /** neutral */
  n1: TonalPalette
  /** neutralVariant */
  n2: TonalPalette
  /** error */
  error: TonalPalette

  static of(argb: number): CorePalette {
    return new CorePalette(argb, false)
  }

  static contentOf(argb: number): CorePalette {
    return new CorePalette(argb, true)
  }

  static fromColors(colors: CorePaletteColors): CorePalette {
    return CorePalette.createPaletteFromColors(false, colors)
  }

  static contentFromColors(colors: CorePaletteColors): CorePalette {
    return CorePalette.createPaletteFromColors(true, colors)
  }

  private static createPaletteFromColors(
    content: boolean,
    colors: CorePaletteColors,
  ): CorePalette {
    const palette = new CorePalette(colors.primary, content)
    if (colors.secondary) {
      const p = new CorePalette(colors.secondary, content)
      palette.a2 = p.a1
    }
    if (colors.tertiary) {
      const p = new CorePalette(colors.tertiary, content)
      palette.a3 = p.a1
    }
    if (colors.error) {
      const p = new CorePalette(colors.error, content)
      palette.error = p.a1
    }
    if (colors.neutral) {
      const p = new CorePalette(colors.neutral, content)
      palette.n1 = p.n1
    }
    if (colors.neutralVariant) {
      const p = new CorePalette(colors.neutralVariant, content)
      palette.n2 = p.n2
    }
    return palette
  }

  private constructor(argb: number, isContent: boolean) {
    const { hue, chroma } = Hct.fromInt(argb)
    if (isContent) {
      this.a1 = TonalPalette.fromHueAndChroma(hue, chroma)
      this.a2 = TonalPalette.fromHueAndChroma(hue, chroma / 3)
      this.a3 = TonalPalette.fromHueAndChroma(hue + 60, chroma / 2)
      this.n1 = TonalPalette.fromHueAndChroma(hue, Math.min(chroma / 12, 4))
      this.n2 = TonalPalette.fromHueAndChroma(hue, Math.min(chroma / 6, 8))
    }
    else {
      this.a1 = TonalPalette.fromHueAndChroma(hue, Math.max(48, chroma))
      this.a2 = TonalPalette.fromHueAndChroma(hue, 16)
      this.a3 = TonalPalette.fromHueAndChroma(hue + 60, 24)
      /**
       * The chroma for the neutral palette is increased from 4 to 6
       * @see {@link https://material.io/blog/tone-based-surface-color-m3}
       */
      this.n1 = TonalPalette.fromHueAndChroma(hue, 6)
      this.n2 = TonalPalette.fromHueAndChroma(hue, 8)
    }
    this.error = TonalPalette.fromHueAndChroma(25, 84)
  }
}
