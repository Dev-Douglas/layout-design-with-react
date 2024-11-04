import styled from 'styled-components'

import theme from '../../style/Theme'

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${theme.heightHeader};
  padding: 0.75rem 4rem;
`

export const Nav = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const LogoLink = styled.a`
  font-size: 1.25rem;
  font-weight: 600;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: white;
`

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const NavItem = styled.li`
  position: relative;
`

export const Link = styled.a`
  font-size: 1rem;
  font-weight: 500;
  padding: 0.75rem 0.5rem;
  transition: all 0.2s ease-in-out;
  color: white;

  &:hover {
    color: ${theme.colors.primary};
  }
`

export const Toggle = styled.button`
  width: 2.25rem;
  height: 2.25rem;
`
