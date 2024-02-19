import React from 'react'
// import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import Employee from './pages/Employee';
import Employees from './pages/Employees';
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
    {/* <Navbar /> */}
    <Routes>
      <Route path="/" element={<Homepage/>} />
     
      <Route element={<Layout />}>
      <Route path="/login" element={<LoginPage />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/employees/:id" element={<Employee />} />
          {/* Add more routes as needed */}
        </Route>
      <Route path="/employees" element={<Employees />} />
      <Route path="/employees/:id" element={<Employee />} />
      {/* Add more routes as needed */}
    </Routes>
  </Router>
  </ThemeProvider>
   </Provider>
  )
}

export default App