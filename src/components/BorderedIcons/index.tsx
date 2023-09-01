import {
  Coffee,
  CurrencyDollar,
  MapPin,
  Package,
  ShoppingCart,
  Timer,
} from '@phosphor-icons/react'
import { BorderedIconContainer, IconContainer, variantType } from './style'

interface DefaultIconsMapProps {
  cart: {
    component: React.JSX.Element
    borderColor: variantType
  }

  timer: {
    component: React.JSX.Element
    borderColor: variantType
  }
  package: {
    component: React.JSX.Element
    borderColor: variantType
  }
  coffee: {
    component: React.JSX.Element
    borderColor: variantType
  }
  mapPin: {
    component: React.JSX.Element
    borderColor: variantType
  }
  currencyDollar: {
    component: React.JSX.Element
    borderColor: variantType
  }
}

const defaultIconsMap: DefaultIconsMapProps = {
  cart: {
    component: <ShoppingCart size={16} weight="fill" />,
    borderColor: 'orange',
  },
  timer: {
    component: <Timer size={16} weight="fill" />,
    borderColor: 'yellow',
  },
  package: {
    component: <Package size={16} weight="fill" />,
    borderColor: 'gray',
  },
  coffee: {
    component: <Coffee size={16} weight="fill" />,
    borderColor: 'purple',
  },
  mapPin: {
    component: <MapPin size={16} weight="fill" />,
    borderColor: 'purple',
  },
  currencyDollar: {
    component: <CurrencyDollar size={16} weight="fill" />,
    borderColor: 'orange',
  },
}

interface BorderedIconsProps {
  type: 'cart' | 'timer' | 'package' | 'coffee' | 'mapPin' | 'currencyDollar'
  text: string
}

export function BorderedIcon({ type, text }: BorderedIconsProps) {
  const icon = defaultIconsMap[type]
  return (
    <IconContainer>
      <BorderedIconContainer variant={icon.borderColor}>
        {icon.component}
      </BorderedIconContainer>
      <p>{text}</p>
    </IconContainer>
  )
}
