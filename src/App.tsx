import React, {ReactElement, FC} from 'react'
import { Provider } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { Points } from './components/points/points'
import { Layout } from './components/layout/layout'
import { Ecomarket } from './components/ecomarket/ecomarket'
import { Main } from './components/main/main'
import { About } from './components/about/About'
import { store } from "./store";


const App: FC<any> = (): ReactElement => {
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