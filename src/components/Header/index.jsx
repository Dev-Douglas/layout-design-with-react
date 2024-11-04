import { FaRegImage } from 'react-icons/fa'

import * as S from './style'

function Header() {
  return (
    <S.Header>
      <S.Nav className='container'>
        <S.LogoLink href='/'>
          <FaRegImage size='1.5rem' />
          Logo
        </S.LogoLink>

        <S.Menu>
          <S.NavItem>
            <S.Link href='/'>Home</S.Link>
          </S.NavItem>
          <S.NavItem>
            <S.Link href='/'>About</S.Link>
          </S.NavItem>
          <S.NavItem>
            <S.Link href='/'>Posts</S.Link>
          </S.NavItem>
          <S.NavItem>
            <S.Link href='/'>Steps</S.Link>
          </S.NavItem>
          <S.NavItem>
            <S.Link href='/'>Advantages</S.Link>
          </S.NavItem>
          <S.NavItem>
            <S.Link href='/'>Testimonials</S.Link>
          </S.NavItem>
          <S.NavItem>
            <S.Link href='/'>Contact</S.Link>
          </S.NavItem>
        </S.Menu>

        <S.Toggle hidden />
      </S.Nav>
    </S.Header>
  )
}

export default Header
