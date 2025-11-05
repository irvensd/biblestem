/**
 * Encryption Utilities for Sensitive Data
 * Encrypts/decrypts sensitive data before storing in localStorage
 */

/**
 * Generate a key from a password using PBKDF2
 */
async function deriveKey(password: string, salt: Uint8Array): Promise<CryptoKey> {
  const encoder = new TextEncoder()
  const keyMaterial = await window.crypto.subtle.importKey(
    'raw',
    encoder.encode(password),
    'PBKDF2',
    false,
    ['deriveKey']
  )

  return window.crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt,
      iterations: 100000,
      hash: 'SHA-256'
    },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  )
}

/**
 * Get or create encryption key
 * Generates a unique key per device
 */
async function getEncryptionKey(): Promise<CryptoKey> {
  const encoder = new TextEncoder()
  
  // Use a combination of device-specific data as password
  const password = [
    navigator.userAgent,
    navigator.language,
    window.screen.width.toString(),
    window.screen.height.toString(),
    'biblestem-encryption-v1'
  ].join('|')

  // Generate or retrieve salt
  let saltHex = localStorage.getItem('biblestem_salt')
  let salt: Uint8Array

  if (!saltHex) {
    salt = window.crypto.getRandomValues(new Uint8Array(16))
    saltHex = Array.from(salt)
      .map(b => b.toString(16).padStart(2, '0'))
      .join('')
    localStorage.setItem('biblestem_salt', saltHex)
  } else {
    salt = new Uint8Array(
      saltHex.match(/.{2}/g)!.map(byte => parseInt(byte, 16))
    )
  }

  return deriveKey(password, salt)
}

/**
 * Encrypt data
 */
export async function encrypt(data: string): Promise<string> {
  try {
    const encoder = new TextEncoder()
    const key = await getEncryptionKey()
    
    // Generate random IV
    const iv = window.crypto.getRandomValues(new Uint8Array(12))
    
    // Encrypt data
    const encryptedData = await window.crypto.subtle.encrypt(
      {
        name: 'AES-GCM',
        iv
      },
      key,
      encoder.encode(data)
    )

    // Combine IV and encrypted data
    const combined = new Uint8Array(iv.length + encryptedData.byteLength)
    combined.set(iv, 0)
    combined.set(new Uint8Array(encryptedData), iv.length)

    // Convert to base64
    return btoa(String.fromCharCode(...combined))
  } catch (error) {
    console.error('Encryption failed:', error)
    throw new Error('Failed to encrypt data')
  }
}

/**
 * Decrypt data
 */
export async function decrypt(encryptedData: string): Promise<string> {
  try {
    const decoder = new TextDecoder()
    const key = await getEncryptionKey()

    // Decode from base64
    const combined = new Uint8Array(
      atob(encryptedData)
        .split('')
        .map(c => c.charCodeAt(0))
    )

    // Extract IV and encrypted data
    const iv = combined.slice(0, 12)
    const data = combined.slice(12)

    // Decrypt
    const decryptedData = await window.crypto.subtle.decrypt(
      {
        name: 'AES-GCM',
        iv
      },
      key,
      data
    )

    return decoder.decode(decryptedData)
  } catch (error) {
    console.error('Decryption failed:', error)
    throw new Error('Failed to decrypt data')
  }
}

/**
 * Secure localStorage wrapper
 */
export class SecureStorage {
  /**
   * Set encrypted item in localStorage
   */
  static async setItem(key: string, value: string): Promise<void> {
    try {
      const encrypted = await encrypt(value)
      localStorage.setItem(`secure_${key}`, encrypted)
    } catch (error) {
      console.error('Failed to set secure item:', error)
      throw error
    }
  }

  /**
   * Get and decrypt item from localStorage
   */
  static async getItem(key: string): Promise<string | null> {
    try {
      const encrypted = localStorage.getItem(`secure_${key}`)
      if (!encrypted) {
        return null
      }
      return await decrypt(encrypted)
    } catch (error) {
      console.error('Failed to get secure item:', error)
      return null
    }
  }

  /**
   * Remove item from localStorage
   */
  static removeItem(key: string): void {
    localStorage.removeItem(`secure_${key}`)
  }

  /**
   * Clear all secure items
   */
  static clear(): void {
    const keys = Object.keys(localStorage)
    keys.forEach(key => {
      if (key.startsWith('secure_')) {
        localStorage.removeItem(key)
      }
    })
  }

  /**
   * Store object as encrypted JSON
   */
  static async setObject(key: string, value: unknown): Promise<void> {
    const json = JSON.stringify(value)
    await this.setItem(key, json)
  }

  /**
   * Retrieve and parse encrypted JSON object
   */
  static async getObject<T>(key: string): Promise<T | null> {
    const json = await this.getItem(key)
    if (!json) {
      return null
    }
    try {
      return JSON.parse(json) as T
    } catch (error) {
      console.error('Failed to parse secure object:', error)
      return null
    }
  }
}

/**
 * Hash sensitive data (one-way)
 */
export async function hash(data: string): Promise<string> {
  const encoder = new TextEncoder()
  const dataBuffer = encoder.encode(data)
  const hashBuffer = await window.crypto.subtle.digest('SHA-256', dataBuffer)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
}

/**
 * Generate secure random string
 */
export function generateSecureRandom(length: number = 32): string {
  const array = new Uint8Array(length)
  window.crypto.getRandomValues(array)
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('')
}

/**
 * Check if Web Crypto API is available
 */
export function isEncryptionAvailable(): boolean {
  return !!(window.crypto && window.crypto.subtle)
}

