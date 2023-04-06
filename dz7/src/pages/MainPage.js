import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPhotos, photosSelect} from "../redux/PhotosSlice";
import {CircularProgress} from "@mui/material";
import {Link} from "react-router-dom";

const MainPage = () => {
    const dispatch = useDispatch()
    const {photos,loader} = useSelector(photosSelect)

    useEffect(() => {
        dispatch(getPhotos())
    }, [dispatch])
    return (
        <div>
            {
                !loader
                ?
                photos.map(i => <div style={{width: '300px', height: '250px', marginTop: 50, padding: '10px', border: '1px solid black'}} key={i.id}>
                    <Link to={`/about/${i.id}`} style={{textDecoration: 'none'}}>
                    <img style={{width: '200px', height: 200}} src={i.url} alt=""/>
                    <p>{i.title}</p>
                    </Link>
                </div>)
                :
                <div>
                <CircularProgress color='primary'/>
                </div>
            }
        </div>
    );
};

export default MainPage;
