import Moon from 'components/icons/Moon'
import Sun from 'components/icons/Sun'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { IconButton } from '../ui/IconButton'

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  const onChangeTheme = () => {
    if (theme === 'dark') return setTheme('light')
    return setTheme('dark')
  }

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <IconButton onClick={onChangeTheme}>
      {theme === 'dark' ? <Moon /> : <Sun />}
    </IconButton>
  )
}

export default ThemeChanger
