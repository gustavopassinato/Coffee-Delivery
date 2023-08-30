import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { ChartButton, HeaderContainer, LocationButton } from './style'

import igniteCoffeeLogo from '../../assets/ignite-coffee-logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={igniteCoffeeLogo} alt="" />
      <div>
        <LocationButton>
          <MapPin weight="fill" />
          Porto Alegre, RS
        </LocationButton>
        <ChartButton>
          <ShoppingCart size={22} weight="fill" />
        </ChartButton>
      </div>
    </HeaderContainer>
  )
}
