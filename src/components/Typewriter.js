'use client'

import { useEffect, useRef, useState } from 'react'

export default function Typewriter({
  text = '',
  texts,
  speed = 90,
  deleteSpeed = 50,
  pause = 1800,
  loop,
  className = '',
  highlightWords = [],
  onComplete,
  showCursor = true,
}) {
  const phrases = (texts?.length ? texts : [text]).filter(Boolean)
  const shouldLoop = Boolean(texts?.length && loop !== false)
  const phrasesKey = phrases.join('|')

  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)
  const onCompleteRef = useRef(onComplete)
  onCompleteRef.current = onComplete
  const timeoutRef = useRef(null)

  useEffect(() => {
    if (!phrases.length) return undefined

    setDisplayed('')
    setDone(false)

    let phraseIndex = 0
    let charIndex = 0
    let deleting = false
    let finishedFirst = false

    const clearTimer = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
    }

    const step = () => {
      const current = phrases[phraseIndex]
      if (!current) return

      if (!deleting) {
        charIndex += 1
        setDisplayed(current.slice(0, charIndex))

        if (charIndex >= current.length) {
          if (!finishedFirst) {
            finishedFirst = true
            onCompleteRef.current?.()
          }

          if (!shouldLoop && phraseIndex === phrases.length - 1) {
            setDone(true)
            return
          }

          timeoutRef.current = setTimeout(() => {
            deleting = true
            step()
          }, pause)
          return
        }

        timeoutRef.current = setTimeout(step, speed)
        return
      }

      charIndex -= 1
      setDisplayed(current.slice(0, Math.max(charIndex, 0)))

      if (charIndex <= 0) {
        deleting = false
        phraseIndex = (phraseIndex + 1) % phrases.length
        timeoutRef.current = setTimeout(step, speed)
        return
      }

      timeoutRef.current = setTimeout(step, deleteSpeed)
    }

    timeoutRef.current = setTimeout(step, 400)

    return () => clearTimer()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phrasesKey, speed, deleteSpeed, pause, shouldLoop])

  const renderText = () => {
    if (!highlightWords.length) return displayed

    const pattern = new RegExp(`(${highlightWords.map(escapeRegExp).join('|')})`, 'gi')
    const parts = displayed.split(pattern)

    return parts.map((part, index) => {
      const isHighlight = highlightWords.some(
        (word) => word.toLowerCase() === part.toLowerCase()
      )
      return isHighlight ? (
        <span key={index} className="text-gold italic">
          {part}
        </span>
      ) : (
        <span key={index}>{part}</span>
      )
    })
  }

  return (
    <span className={className}>
      {renderText()}
      {showCursor && !done && <span className="type-cursor" aria-hidden="true" />}
    </span>
  )
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}
