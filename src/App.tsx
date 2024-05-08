import { Fragment } from 'react/jsx-runtime'
import GlobalStyle from './styles/globalStyles'
import MainRouter from './routes'
function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <MainRouter />
    </Fragment>
  )
}

export default App
