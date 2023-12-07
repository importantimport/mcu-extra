# MCU Extra

[![npm](https://img.shields.io/npm/v/mcu-extra)](https://www.npmjs.com/package/mcu-extra)
![minified size](https://img.shields.io/bundlephobia/min/mcu-extra)
![downloads](https://img.shields.io/npm/dt/mcu-extra)

Additional packages to add new features and bug fixes to [Material Color Utilities](https://github.com/material-foundation/material-color-utilities).

## Install

> `@material/material-color-utilites` is the peer dependency for this package.

```bash
pnpm add mcu-extra @material/material-color-utilities # pnpm
yarn add mcu-extra @material/material-color-utilities # yarn
npm i mcu-extra @material/material-color-utilities # npm
```

## Usage

Just use it as usual, but import the [available utils](/src/index.ts) from `mcu-extra`.

### Theming

```ts
import { argbFromHex } from '@material/material-color-utilities'
import { applyTheme, themeFromSourceColor } from 'mcu-extra'

// Get the theme from a hex color
const theme = themeFromSourceColor(argbFromHex('#f82506'), [
  {
    name: "custom-1",
    value: argbFromHex("#ff0000"),
    blend: true,
  },
])

// Print out the theme as JSON
console.log(JSON.stringify(theme, null, 2))

// Check if the user has dark mode turned on
const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches

// Apply the theme to the body by updating custom properties for material tokens
applyTheme(theme, {target: document.body, dark: systemDark})
```

### Documentation

View the documentation here: [https://importantimport.github.io/mcu-extra/](https://importantimport.github.io/mcu-extra/)

It is automatically generated on update using `api-extractor` and `api-documenter`.

## Comparison

### `@material/material-color-utilities`

#### Features

<!-- - `Scheme & CorePalette`: Tone-based Surfaces (https://github.com/material-foundation/material-color-utilities/issues/98) -->
- `themeFromSourceColor & themeFromImage`:
  - Migrated to the new `DynamicScheme` with support for Tone-based Surfaces (`surface-container-*`) and Add-ons (`*-fixed, *-fixed-variant, *-fixed-dim`).
  - Selectable variants and contrast level
- `applyTheme`: Selectable color formats

#### Changes

- `applyTheme`: Set without suffix variables only when `brightnessSuffix` is `false`

#### Bug fixes

<!-- - `Scheme`: Fix onErrorContainer in dark scheme (https://github.com/material-foundation/material-color-utilities/issues/62) -->
- `applyTheme`: Remove unwanted additional paletteKey property from color token with paletteTones (https://github.com/material-foundation/material-color-utilities/pull/93)

### `@importantimport/material-color-utilities`

Since upstream was completely unavailable at the time, I created and maintained `@importantimport/material-color-utilities`.

But it was always a pain to keep the fork updated with the upstream, so now that importing is no longer an issue I recreated an additional package `mcu-extra`.

You can get new Tone-based Surfaces, but they are no longer exported as CommonJS.

## Contributing

Welcome to contribute! For major improvements, please open an issue for discussion first.
