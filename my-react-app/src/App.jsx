import { Route, Routes } from 'react-router-dom'
import { Home } from './components/home'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<home/>} />
    </Routes>
    </>
  )
}

export default App