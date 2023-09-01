import { styled } from 'styled-components'

export type variantType = 'orange' | 'yellow' | 'gray' | 'purple'

interface BorderedIconProps {
  variant: variantType
}

const variantMap = {
  orange: 'secondary_700',
  yellow: 'secondary_500',
  gray: 'base_text',
  purple: 'primary_500',
}

export const BorderedIconContainer = styled.span<BorderedIconProps>`
  width: 32px;
  height: 32px;

  border-radius: 50%;
  background-color: ${(props) => props.theme[variantMap[props.variant]]};
  color: ${(props) => props.theme.background};

  display: flex;
  align-items: center;
  justify-content: center;
`

export const IconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  p {
    color: ${(props) => props.theme.base_text};
  }
`
