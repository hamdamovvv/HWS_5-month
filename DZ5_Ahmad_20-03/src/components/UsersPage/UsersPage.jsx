import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createUser} from "../../redux/actions.jsx";





const UsersPage = () => {
    const message = useSelector(state => state.userReducer.message)

    const dispatch = useDispatch()
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [website, setWebsite] = useState("");
    const [mail, setMail] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {name, userName, mail, website}
        dispatch(createUser(user))
    }
    return <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={name} onChange={({target}) => setName(target.value)}/>
                <br/>
                <label htmlFor="username">User name</label>
                <input type="text" id="mail" value={userName} onChange={({target}) => setUserName(target.value)}/>
                <br/>
                <label htmlFor="mail">Email</label>
                <input type="text" id="mail" value={mail} onChange={({target}) => setMail(target.value)}/>
                <br/>
                <label htmlFor="website">Website</label>
                <input type="text" id="website" value={website} onChange={({target}) => setWebsite(target.value)}/>
                <br/>
                <input type="submit" value='click'/>
            </form>
            {
                message === 'Success'
                &&
               <h2 style={{color: 'green'}}>Success</h2>
            }

        </>
};

export default UsersPage;
