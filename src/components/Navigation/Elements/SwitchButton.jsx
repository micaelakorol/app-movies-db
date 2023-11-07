import { Switch } from '@mui/material'
import React from 'react'

const SwitchButton = ({theme,setTheme}) => {
  return (
    <Switch
    onClick={() => setTheme(!theme)}
    defaultChecked
    color="default"
    aria-pressed={theme}
    aria-describedby="Theme light-dark"
  />
  )
}

export default SwitchButton