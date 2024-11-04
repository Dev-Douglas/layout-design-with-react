import { BrowserRouter } from 'react-router-dom'
import MainRoutes from './routes'

import { GlobalStyle } from './style/Global.jsx'
import { Normalize } from 'styled-normalize'

function App() {
  return (
    <BrowserRouter>
      <MainRoutes />
      <GlobalStyle />
      <Normalize />
    </BrowserRouter>
  )
}

export default App
