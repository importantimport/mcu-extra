import { Scheme as MCUScheme } from '@material/material-color-utilities'

import { CorePalette } from './core-palette'

type SchemeProperties = {
  // primary
  primary: number,
  onPrimary: number,
  primaryContainer: number,
  onPrimaryContainer: number,
  inversePrimary: number,
  // secondary
  secondary: number,
  onSecondary: number,
  secondaryContainer: number,
  onSecondaryContainer: number,
  // tertiary
  tertiary: number,
  onTertiary: number,
  tertiaryContainer: number,
  onTertiaryContainer: number,
  // error
  error: number,
  onError: number,
  errorContainer: number,
  onErrorContainer: number,
  // surface
  background: number,
  onBackground: number,
  surface: number,
  onSurface: number,
  surfaceVariant: number,
  onSurfaceVariant: number,
  inverseSurface: number,
  inverseOnSurface: number,
  // misc
  outline: number,
  outlineVariant: number,
  shadow: number,
  scrim: number,
  // surface container & dim & bright & tint (extra)
  surfaceDim: number,
  surfaceBright: number,
  surfaceContainerLowest: number,
  surfaceContainerLow: number,
  surfaceContainer: number,
  surfaceContainerHigh: number,
  surfaceContainerHighest: number,
  surfaceTint: number
}

export class Scheme implements Pick<MCUScheme, keyof MCUScheme> {
  get primary(): number {
    return this.props.primary
  }

  get onPrimary(): number {
    return this.props.onPrimary
  }

  get primaryContainer(): number {
    return this.props.primaryContainer
  }

  get onPrimaryContainer(): number {
    return this.props.onPrimaryContainer
  }

  get secondary(): number {
    return this.props.secondary
  }

  get onSecondary(): number {
    return this.props.onSecondary
  }

  get secondaryContainer(): number {
    return this.props.secondaryContainer
  }

  get onSecondaryContainer(): number {
    return this.props.onSecondaryContainer
  }

  get tertiary(): number {
    return this.props.tertiary
  }

  get onTertiary(): number {
    return this.props.onTertiary
  }

  get tertiaryContainer(): number {
    return this.props.tertiaryContainer
  }

  get onTertiaryContainer(): number {
    return this.props.onTertiaryContainer
  }

  get error(): number {
    return this.props.error
  }

  get onError(): number {
    return this.props.onError
  }

  get errorContainer(): number {
    return this.props.errorContainer
  }

  get onErrorContainer(): number {
    return this.props.onErrorContainer
  }

  get background(): number {
    return this.props.background
  }

  get onBackground(): number {
    return this.props.onBackground
  }

  get surface(): number {
    return this.props.surface
  }

  get onSurface(): number {
    return this.props.onSurface
  }

  get surfaceVariant(): number {
    return this.props.surfaceVariant
  }

  get onSurfaceVariant(): number {
    return this.props.onSurfaceVariant
  }

  get outline(): number {
    return this.props.outline
  }

  get outlineVariant(): number {
    return this.props.outlineVariant
  }

  get shadow(): number {
    return this.props.shadow
  }

  get scrim(): number {
    return this.props.scrim
  }

  get inverseSurface(): number {
    return this.props.inverseSurface
  }

  get inverseOnSurface(): number {
    return this.props.inverseOnSurface
  }

  get inversePrimary(): number {
    return this.props.inversePrimary
  }

  /** extra */
  get surfaceBright(): number {
    return this.props.surfaceBright
  }

  /** extra */
  get surfaceContainer(): number {
    return this.props.surfaceContainer
  }

  /** extra */
  get surfaceContainerHigh(): number {
    return this.props.surfaceContainerHigh
  }

  /** extra */
  get surfaceContainerHighest(): number {
    return this.props.surfaceContainerHighest
  }

  /** extra */
  get surfaceContainerLow(): number {
    return this.props.surfaceContainerLow
  }

  /** extra */
  get surfaceContainerLowest(): number {
    return this.props.surfaceContainerLowest
  }

  /** extra */
  get surfaceTint(): number {
    return this.props.surfaceTint
  }

  static light(argb: number): Scheme {
    return Scheme.lightFromCorePalette(CorePalette.of(argb))
  }

  static dark(argb: number) {
    return Scheme.darkFromCorePalette(CorePalette.of(argb))
  }

  static lightContent(argb: number): Scheme {
    return Scheme.lightFromCorePalette(CorePalette.contentOf(argb))
  }

  static darkContent(argb: number): Scheme {
    return Scheme.darkFromCorePalette(CorePalette.contentOf(argb))
  }

  static lightFromCorePalette(core: CorePalette): Scheme {
    return new Scheme({
      ...MCUScheme.lightFromCorePalette(core).toJSON(),
      /**
       * The default light theme surface role from tone 99 to tone 98
       * @see {@link https://material.io/blog/tone-based-surface-color-m3}
       * @see {@link https://m3.material.io/styles/color/the-color-system/tokens}
       */
      background: core.n1.tone(98),
      /**
       * The default light theme surface role from tone 99 to tone 98
       * @see {@link https://material.io/blog/tone-based-surface-color-m3}
       * @see {@link https://m3.material.io/styles/color/the-color-system/tokens}
       */
      surface: core.n1.tone(98),
      surfaceBright: core.n1.tone(98),
      surfaceContainer: core.n1.tone(94),
      surfaceContainerHigh: core.n1.tone(92),
      surfaceContainerHighest: core.n1.tone(90),
      surfaceContainerLow: core.n1.tone(96),
      surfaceContainerLowest: core.n1.tone(100),
      surfaceDim: core.n1.tone(87),
      /**
       * Equal to Primary
       * @see {@link https://m3.material.io/styles/color/the-color-system/tokens}
       */
      surfaceTint: core.a1.tone(40),
    })
  }

  static darkFromCorePalette(core: CorePalette): Scheme {
    return new Scheme({
      ...MCUScheme.darkFromCorePalette(core).toJSON(),
      /**
       * @see {@link https://github.com/material-foundation/material-color-utilities/issues/62}
       */
      onErrorContainer: core.error.tone(90),
      /**
       * Surface roles in dark theme are slightly darkened
       * @see {@link https://material.io/blog/tone-based-surface-color-m3}
       * @see {@link https://m3.material.io/styles/color/the-color-system/tokens}
       */
      surface: core.n1.tone(6),
      surfaceBright: core.n1.tone(24),
      surfaceContainer: core.n1.tone(12),
      surfaceContainerHigh: core.n1.tone(17),
      surfaceContainerHighest: core.n1.tone(22),
      surfaceContainerLow: core.n1.tone(10),
      surfaceContainerLowest: core.n1.tone(4),
      surfaceDim: core.n1.tone(6),
      /**
       * Equal to Primary
       * @see {@link https://m3.material.io/styles/color/the-color-system/tokens}
       */
      surfaceTint: core.a1.tone(80),
    })
  }

  // eslint-disable-next-line no-useless-constructor, unicorn/prevent-abbreviations
  private constructor(private readonly props: SchemeProperties) {}

  toJSON() {
    return this.props
  }
}
