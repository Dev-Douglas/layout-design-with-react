const theme = {
  heightHeader: '3.5rem',
  colors: {
    black: '#0C0D0F',
    white: '#FFFFFF',

    primary: '#9694af',
    secondary: '#FE8C00',
    background: '#191919',
    inputBackground: '#353434'
  },

  font: {
    fontFamily: [
      'system-ui',
      '-apple-system',
      'Segoe UI',
      'Roboto',
      'Helvetica Neue',
      'Noto Sans',
      'Liberation Sans',
      'Arial',
      'sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      'Noto Color Emoji'
    ].join(','),
    fontSize: {
      biggest: '2rem',
      bigger: '1.25rem',
      normal: '1rem',
      small: '.983rem',
      smaller: '.873rem'
    }
  },

  radius: {
    small: '4px',
    medium: '8px',
    large: '16px'
  },

  shadow: {
    large: '0 10px 20px rgba(0, 0, 0, 0.19)',
    medium: '0 6px 10px rgba(0, 0, 0, 0.19)',
    small: '0 4px 8px rgba(0, 0, 0, 0.23)'
  },

  breakpoint: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px'
  }
}

export default theme
