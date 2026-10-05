import { useState } from 'react'

export function useCopy() {
  const [copied, setCopied] = useState(false)

  function copy(text) {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 3000)
  }

  return { copied, copy }
}