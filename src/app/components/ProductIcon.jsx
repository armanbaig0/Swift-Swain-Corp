import { Box } from '@mui/material'
import {
  Settings,
  ElectricBolt,
  FilterAlt,
  Engineering,
  Lightbulb,
  Battery3Bar,
  DirectionsCar,
  Air
} from '@mui/icons-material'

const iconMap = {
  disc: Settings,
  brake: Settings,
  plug: ElectricBolt,
  spark: ElectricBolt,
  filter: FilterAlt,
  shock: Engineering,
  absorber: Engineering,
  bulb: Lightbulb,
  battery: Battery3Bar,
  bumper: DirectionsCar,
  air: Air,
  default: Settings
}

export default function ProductIcon({ type, size = 64, color = 'text.secondary' }) {
  const IconComponent = iconMap[type] || iconMap.default
  
  return (
    <Box
      sx={{
        width: size,
        height: size,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: color,
      }}
    >
      <IconComponent sx={{ fontSize: size * 0.6 }} />
    </Box>
  )
}