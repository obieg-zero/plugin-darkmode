import type { PluginFactory } from '@obieg-zero/sdk'

const plugin: PluginFactory = ({ React, ui, icons, sdk }) => {
  const { useState, useEffect } = React
  const { Sun, Moon } = icons
  const KEY = 'ph-theme'

  function ThemeToggle() {
    const [dark, setDark] = useState(() => localStorage.getItem(KEY) !== 'light')
    useEffect(() => {
      const theme = dark ? 'dark' : 'light'
      document.documentElement.setAttribute('data-theme', theme)
      localStorage.setItem(KEY, theme)
    }, [dark])
    return <ui.Cell onClick={() => setDark(d => !d)}>{dark ? <Sun size={16} /> : <Moon size={16} />}</ui.Cell>
  }

  sdk.registerAction('darkmode.toggle', { node: <ThemeToggle /> })

  return { id: 'darkmode', label: 'Dark mode', version: '0.2.0' }
}

export default plugin
