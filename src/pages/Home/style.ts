import { styled } from 'styled-components'

import homeBannerBackground from '../../assets/home-banner-background.svg'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const BannerContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap-reverse;
  gap: 3.5rem;

  width: 100%;
  padding: 5.75rem 10rem;

  background-image: url(${homeBannerBackground});

  & > div {
    max-width: 52.5%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 1rem;

    h1 {
      font-family: 'Baloo 2', monospace;
      font-size: 3rem;
      font-weight: 800;
      line-height: 1.3;
      color: ${(props) => props.theme.base_title};
    }

    p {
      font-size: 1.25rem;
      line-height: 1.3;
      color: ${(props) => props.theme.base_subtitle};
    }
  }

  img {
    width: 29.75rem;
  }
`

export const BannerIconsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 0.45fr 0.55fr;
  column-gap: 2.5rem;
  row-gap: 1.25rem;
  margin-top: 4.125rem;

  & > div {
    justify-self: start;
  }
`
