import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRoutes, useNavigate, Routes, Route } from "react-router-dom";
import Themeroutes from "./routes/Router";
import Login from './auth/login';
import { authCheckState } from './store/actions/actions'


const App = () => {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.shop.userId);
  const navigate = useNavigate();
  
  const routing = useRoutes(Themeroutes);


  useEffect(()=>{
    dispatch(authCheckState())
     if (!userId){
        navigate('/login') 
     } 

  },[dispatch , userId])

  return <div className="dark">
    <Routes>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    {routing}
    
    </div>;
};

export default App;
