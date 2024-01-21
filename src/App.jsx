import { ToastContainer } from "react-toastify"
import Page from "./Page"
import { MovieContext, ThemeContext } from "./context"
import 'react-toastify/dist/ReactToastify.css';
function App() {
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
