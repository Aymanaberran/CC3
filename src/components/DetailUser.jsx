import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import '../App.css'


function DetailUser() {
    const { id } = useParams()
    const { data } = useSelector(state => state.user)
    const selectedUser = data.users.filter(user => user.id === id)
    return (
        <div>
            {
                selectedUser.map(user => <div className='det' key={user.id}>
                    <div className='image'>
                        <img src={user.image} alt="Profile" />
                    </div>
                    <div>
                        <div className='dets'>
                            <label>Name: </label>
                            <span>{`${user.firstName} ${user.lastName}`}</span>
                        </div>
                        <div className='dets'>
                            <label>Age: </label>
                            <span>{user.age}</span>
                        </div>
                        <div className='dets'>
                            <label>gender: </label>
                            <span>{user.gender}</span>
                        </div>
                        <div className='dets'>
                            <label>Email: </label>
                            <span>{user.email}</span>
                        </div>
                        <div className='dets'>
                            <label>phone : </label>
                            <span>{user.phone}</span>
                        </div>
                        <div className='dets'>
                            <label>poids : </label>
                            <span>{user.weight}</span>
                        </div>
                        <div className='dets'>
                            <label>hauteur : </label>
                            <span>{user.height}</span>
                        </div>
                        <div className='dets'>
                            <label>date naissance : </label>
                            <span>{user.birthDate}</span>
                        </div>
                        <div className='dets'>
                            <label>groupe sanguin : </label>
                            <span>{user.bloodGroup}</span>
                        </div>
                        <div className='dets'>
                            <label>couleur de l'œil : </label>
                            <span>{user.eyeColor}</span>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
};


export default DetailUser;
