import React from 'react'
// import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import Employee from './pages/Employee';
import Layout from './Layout';
import { ThemeProvider } from 'styled-components';
import { theme } from './style/theme';
import { Provider } from 'react-redux';
import store from './redux/store'; // Import your Redux store

const App = () => {
  return (
   <Provider store={store}>
    <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/employee/:id" element={<Employee />} />
        <Route element={<Layout />}>
         <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
      
    </Router>
  </ThemeProvider>
   </Provider>
  )
}

export default App