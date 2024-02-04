import './App.css';
import './assets/css/fonts.css';
import { RouterProvider } from 'react-router-dom';  
import mainRouter from './routes/mainRouter'

function App() {

  return (
    <>
      <RouterProvider router={mainRouter}/>
    </>
  );
}

export default App;
