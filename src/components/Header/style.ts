import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  flex: 1;
  padding: 2rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    gap: 0.75rem;
  }
`

export const LocationButton = styled.button`
  display: flex;
  gap: 0.25rem;
  height: 2.375rem;

  background-color: ${(props) => props.theme.primary_300};
  color: ${(props) => props.theme.primary_500};

  border: none;
  border-radius: 6px;

  padding: 0.5rem;

  &:hover {
    background-color: ${(props) => props.theme.primary_500};
    color: ${(props) => props.theme.white};
  }
`

export const ChartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.375rem;
  width: 2.375rem;

  border: none;
  border-radius: 6px;

  padding: 0.5rem;

  background-color: ${(props) => props.theme.secondary_300};
  color: ${(props) => props.theme.secondary_700};

  &:hover {
    background-color: ${(props) => props.theme.secondary_700};
    color: ${(props) => props.theme.white};
  }
`
