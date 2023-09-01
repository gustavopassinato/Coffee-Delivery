import { BannerContainer, BannerIconsContainer, HomeContainer } from './style'

import homeBannerImage from '../../assets/home-banner-image.svg'
import { BorderedIcon } from '../../components/BorderedIcons/index'

export function Home() {
  return (
    <HomeContainer>
      <BannerContainer>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <BannerIconsContainer>
            <BorderedIcon type="cart" text="Compra simples e segura" />
            <BorderedIcon type="timer" text="Entrega rápida e rastreada" />

            <BorderedIcon
              type="package"
              text="Embalagem mantém o café intacto"
            />
            <BorderedIcon
              type="coffee"
              text="O café chega fresquinho até você"
            />
          </BannerIconsContainer>
        </div>
        <img src={homeBannerImage} alt="" />
      </BannerContainer>
    </HomeContainer>
  )
}
