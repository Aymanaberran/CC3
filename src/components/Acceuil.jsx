import React from 'react'
import '../App.css'
import { Routes, Route } from 'react-router-dom'
import ListUser from './ListeUser';
import DetailUser from './DetailUser';
import ListePosts from './ListePosts';
function Accueil() {
    return (
        <div>
            <div className='Head'>Gestion des taches</div>
            <Routes>
                <Route exact path="/" element={<ListUser />} />
                <Route path='/DetailUser/:id' element={<DetailUser />} />
                <Route path='/ListePosts/:id' element={<ListePosts/>} />
            </Routes>
        </div>
    )
}
export default Accueil ;