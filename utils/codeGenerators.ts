import { v4 as uuidv4 } from "uuid"

// In-memory store for generated codes
const generatedCodes = new Set<string>()

export function generateQRCode(): string {
  const uniqueId = uuidv4()
  return `https://example.com/verify/${uniqueId}`
}

export function generateVerificationCode(): string {
  let code: string
  do {
    code = Math.floor(10000 + Math.random() * 90000).toString()
  } while (generatedCodes.has(code))

  generatedCodes.add(code)
  return code
}

export function validateCode(code: string): boolean {
  if (generatedCodes.has(code)) {
    generatedCodes.delete(code)
    return true
  }
  return false
}

// Simple in-memory rate limiting
const rateLimitStore: { [key: string]: number } = {}

export function rateLimit(key: string, limit: number, interval: number): boolean {
  const now = Date.now()
  const windowStart = now - interval

  if (!rateLimitStore[key]) {
    rateLimitStore[key] = now
    return true
  }

  if (rateLimitStore[key] < windowStart) {
    rateLimitStore[key] = now
    return true
  }

  if (rateLimitStore[key] > limit) {
    return false
  }

  rateLimitStore[key]++
  return true
}

