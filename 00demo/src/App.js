import './App.css';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
// import Home from './components/Home/Home'

function App() {
  return (
   <Routes>
    <Route path="/" element={<Layout />} />
    {/* <Routes index element={<Home />} /> */}
   </Routes>
  );
}

export default App;
