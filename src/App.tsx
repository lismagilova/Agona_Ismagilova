import React, { ReactElement } from 'react'
import { Provider } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { Points } from './pages/Points/Points'
import { Layout } from './components/Layout/Layout'
import { Ecomarket } from './pages/Ecomarket/Ecomarket'
import { Main } from './pages/Main/Main'
import { About } from './pages/About/About'
import { store } from "./store";


const App = (): ReactElement => {
    return (
        <Provider store={store}>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/main' element={<Main />}/>
                    <Route path='/points' element={<Points />}/>
                    <Route path='/ecomarket' element={<Ecomarket />}/>
                    <Route path='/about' element={<About />}/>
                </Route>
            </Routes>
        </Provider>
    )
}

export default App