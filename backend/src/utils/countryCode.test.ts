import { describe, it, expect } from 'vitest'
import { isValidCountryCode, normalizeCountryCode } from './countryCode'

describe('normalizeCountryCode', () => {
  it('should trim and uppercase the code', () => {
    expect(normalizeCountryCode(' us ')).toBe('US')
    expect(normalizeCountryCode('fr')).toBe('FR')
  })
})

describe('isValidCountryCode', () => {
  it('should accept empty or missing values', () => {
    expect(isValidCountryCode(undefined)).toBe(true)
    expect(isValidCountryCode(null)).toBe(true)
    expect(isValidCountryCode('')).toBe(true)
    expect(isValidCountryCode('   ')).toBe(true)
  })

  it('should accept valid ISO 3166-1 alpha-2 codes', () => {
    expect(isValidCountryCode('US')).toBe(true)
    expect(isValidCountryCode('es')).toBe(true)
    expect(isValidCountryCode(' FR ')).toBe(true)
  })

  it('should reject invalid country codes', () => {
    expect(isValidCountryCode('XXX')).toBe(false)
    expect(isValidCountryCode('12')).toBe(false)
    expect(isValidCountryCode('USA')).toBe(false)
  })
})
