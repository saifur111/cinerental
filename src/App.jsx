import { ToastContainer } from "react-toastify"
import Page from "./Page"
import { MovieContext, ThemeContext } from "./context"
import 'react-toastify/dist/ReactToastify.css';
import { useReducer, useState } from "react";
import { cartReducer, initialState } from "./reducers/CartReducer";
function App() {
  const [state,dispatch]=useReducer(cartReducer,initialState)
  const [darkMode,setDarkMode]=useState(false);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <MovieContext.Provider value={{ state, dispatch }}>
        <Page />
        <ToastContainer />
      </MovieContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App
