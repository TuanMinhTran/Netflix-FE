import {  useNavigate, useParams } from "react-router-dom";
import classNames from "classnames/bind";
import styles from '../Detail/Detail.module.scss'

import { useEffect, useState } from "react";

import axios from "axios";
import { MOVIES_API_URL } from "../../../../constants/constant";


const cx = classNames.bind(styles)

function EditMovie() {
    const {movieId} =useParams()
    const [data, setData] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get(`${MOVIES_API_URL}videos/${movieId}`)
        .then(function (response) {
            setData(response.data)
        })
        .catch(function (error) {
            alert(error)
        })
    },[])
    
    

    return ( <>

    <div className={cx('wrapper')}>
        <div className={cx('item')}>
            Movie ID: {data.id}
        </div>
        <div className={cx('item')}>
            Title: <input value={data.title}/>
        </div>
        <div className={cx('item')}>
            description: <input value={data.description}/>
        </div>
        <div className={cx('item')}>
            
            videoUrl: <input value={data.videoUrl}/>
        </div>
        <div className={cx('item')}>
            thumbnailUrl: <input value={data.thumbnailUrl}/>
        </div>
        <div className={cx('item')}>
            
            genre: <input value={data.genre}/>
        </div>
        <div className={cx('item')}>
            
            duration: <input value={data.duration}/>
        </div>
        <div className={cx('btn-container')}>
            <button className={cx('btn','edit')}>
                Xác nhận
            </button>
        </div>
    </div>
    

    </> );
}

export default EditMovie;