import styled from 'styled-components';
import { variant, Space, space } from 'styled-system';

interface Props extends Space {
  layout?: 'primary' | 'secondary';
}

const layoutVariant = variant({
  prop: 'layout',
  variants: {
    primary: {
      bg: 'primary',
      color: 'white',
    },
    secondary: {
      backgroundColor: 'blue',
      color: 'white'
    }
  }
})

export const Container = styled.button.attrs<Props, Props>({
  p: 'medium',
  layout: 'primary',
})`
  ${space};
  ${layoutVariant};
`;