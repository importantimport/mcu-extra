import { Hct, SchemeTonalSpot, argbFromHex, hexFromArgb } from '@material/material-color-utilities'
import { expect, test } from 'vitest'

import { scheme } from '../src/utils/scheme'

test('Baseline color scheme tokens', () => {
  const source = argbFromHex('#6750a4')

  const { primary, secondary, surface, tertiary } = scheme(new SchemeTonalSpot(Hct.fromInt(source), false, 0))

  /**
   * @see {@link https://github.com/material-foundation/material-color-utilities/blob/main/make_schemes.md#swift}
   * Due to an update in the specification,
   * the values of many color roles have changed between `Scheme`,
   * and the new dynamic schemes `SchemeTonalSpot` and `SchemeContent`.
   * After migrating, you may need to update your tests.
   */
  expect(hexFromArgb(primary)).toBe('#65558f')
  expect(hexFromArgb(surface)).toBe('#fdf7ff')
  // from baseline color tokens
  // https://m3.material.io/styles/color/static/baseline#d3170e61-484c-4c35-a847-2aae11803ccb
  expect(hexFromArgb(secondary)).toBe('#625b71')
  // expect(hexFromArgb(tertiary)).toBe('#7d5260')
  expect(hexFromArgb(tertiary)).toBe('#7e5260')
})
