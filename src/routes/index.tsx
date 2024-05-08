import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/layout'
import Page404 from '../pages/404'
import Home from '../pages/home'
const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MainRouter