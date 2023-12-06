import { hexFromArgb, rgbaFromArgb } from '@material/material-color-utilities'

import type { Theme } from './theme'

import { Scheme } from './scheme'

const setSchemeProperties = (
  target: HTMLElement,
  scheme: Scheme,
  suffix = '',
  colorFormat?: 'hex' | 'rgb',
) => {
  for (const [key, value] of Object.entries(scheme.toJSON())) {
    const token = key.replaceAll(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
    const color = colorFormat === 'rgb' ? Object.values(rgbaFromArgb(value)).slice(0, -1).join(' ') : hexFromArgb(value)
    target.style.setProperty(`--md-sys-color-${token}${suffix}`, color)
  }
}

/** @beta */
export const applyTheme = (theme: Theme, options?: {
  brightnessSuffix?: boolean,
  colorFormat?: 'hex' | 'rgb'
  dark?: boolean,
  paletteTones?: number[],
  target?: HTMLElement,
}) => {
  const target = options?.target || document.body
  const isDark = options?.dark ?? false
  const scheme = isDark ? theme.schemes.dark : theme.schemes.light
  if (options?.brightnessSuffix) {
    setSchemeProperties(target, theme.schemes.dark, '-dark', options?.colorFormat)
    setSchemeProperties(target, theme.schemes.light, '-light', options?.colorFormat)
  } /** set no suffix variables only when `brightnessSuffix` is `false` */
  else {
    setSchemeProperties(target, scheme, '', options?.colorFormat)
  }
  if (options?.paletteTones) {
    const tones = options?.paletteTones ?? []
    for (const [key, palette] of Object.entries(theme.palettes)) {
      const paletteKey = key.replaceAll(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
      for (const tone of tones) {
        /**
         * Remove unwanted additional paletteKey property from color token with paletteTones
         * @see {@link https://github.com/material-foundation/material-color-utilities/pull/93}
         */
        const token = `--md-ref-palette-${paletteKey}${tone}`
        const color = options?.colorFormat === 'rgb' ? Object.values(rgbaFromArgb(palette.tone(tone))).slice(0, -1).join(' ') : hexFromArgb(palette.tone(tone))
        target.style.setProperty(token, color)
      }
    }
  }
}
