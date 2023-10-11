
import {  Routes, Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard';
import Posts from './Components/Posts';
import Link from './Components/Link';
import Header from './Components/Header';

function App() {
  return (
   <>
    <Header/>
    <div className='bg-gray-200 h-full'>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/link" element={<Link />}></Route>
          <Route path="/posts" element={<Posts />}></Route>
         
        </Routes>
     
    </div>
   </>
  );
}

export default App;
//b037f761aef8ac162bafec57b2