import { useState } from 'react';
import { Provider } from 'react-redux';
import store  from './Store';
import { C1 } from './C1';
import { C2 } from './C2';
import { C3 } from './C3';
import { Home } from './Home';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'

export default function App3() {
  return (
    <>
    <Provider store={store}>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}>
                <Route path='C1' element={<C1/>}/>
                <Route path='C2' element={<C2/>}/>
                <Route path='C3' element={<C3/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
        {/* <C1/>
        <C2/>
        <C3/> */}
    </Provider>
    </>
  )
}