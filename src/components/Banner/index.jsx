import Input from '../Input'
import Button from '../Button'

import * as S from './style'

function Banner() {
  return (
    <S.Section>
      <div className='container'>
        <S.Content>
          <S.Title>
            Practicing React js, <br /> landing page
          </S.Title>
          <S.Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            aut labore minus itaque nulla nemo natus eveniet error maiores quod,
            placeat distinctio tenetur iure mollitia nesciunt officiis magnam
            voluptas molestias! Omnis maxime debitis aliquam laboriosam fugiat
            quo cupiditate quisquam tenetur.
          </S.Paragraph>

          <S.Newsletter>
            <Input type='text' name='name' id='name' label='Nome' />
            <Input type='text' name='email' id='email' label='E-mail' />

            <Button type='submit' value='ENVIAR' />
          </S.Newsletter>
        </S.Content>
      </div>
    </S.Section>
  )
}

export default Banner
