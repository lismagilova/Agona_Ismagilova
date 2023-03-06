import React, {ReactElement, FC} from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/layout'
import { Main } from './components/main/main'
import { Points } from './components/points/points'
import { Ecomarket } from './components/ecomarket/ecomarket'
import { About } from './components/about/about'


const App: FC<any> = (): ReactElement => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/main' element={<Main />}/>
                    <Route path='/points' element={<Points />}/>
                    <Route path='/ecomarket' element={<Ecomarket />}/>
                    <Route path='/about' element={<About />}/>
                </Route>
            </Routes>
        </>
    )
}

export default App