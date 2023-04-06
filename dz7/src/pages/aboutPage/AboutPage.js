import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPhoto, photoSelect} from "../../redux/PhotoSlice";
import {useParams} from "react-router-dom";
import {CircularProgress} from "@mui/material";

const AboutPage = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    const {photo, load} = useSelector(photoSelect)

    useEffect(() => {
        dispatch(getPhoto(id))
    }, [dispatch, id])
    return (
        <div>
            <h2>AboutPage</h2>
            {
                !load
                ?
                <div>
                    <img src={photo?.url} alt=''/>
                    <h2>{photo?.title}</h2>
                </div>
                :
                <div>
                    <CircularProgress color='primary'/>
                </div>
            }
        </div>
    );
};

export default AboutPage;
