import { Link, useNavigate, useParams } from "react-router-dom";
import classNames from "classnames/bind";
import styles from './Detail.module.scss'

import { useEffect, useState } from "react";

import axios from "axios";
import { MOVIES_API_URL } from "../../../../constants/constant";


const cx = classNames.bind(styles)

function Detail() {
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
    const handleClickDelete = ()=>{
        axios.delete(`${MOVIES_API_URL}videos/${movieId}`)
        .then(()=>{
            navigate('/admin')
        })
        .catch((err)=>{
            alert('xóa không thành công'+err)
        })
    }
    

    return ( <>

    <div className={cx('wrapper')}>
        <div className={cx('item')}>
            Movie ID: {data.id}
        </div>
        <div className={cx('item')}>
            Title: {data.title}
        </div>
        <div className={cx('item')}>
            description: {data.description}
        </div>
        <div className={cx('item')}>
            videoUrl: <a href={`${data.videoUrl}`}>{data.videoUrl}</a>
        </div>
        <div className={cx('item')}>
            thumbnailUrl: <a href={`${data.thumbnailUrl}`}>{data.thumbnailUrl}</a>
        </div>
        <div className={cx('item')}>
            genre: {data.genre}
        </div>
        <div className={cx('item')}>
            duration: {data.duration}
        </div>
        <div className={cx('btn-container')}>
            <button className={cx('btn','delete')} onClick={handleClickDelete}>
                Xóa Video Này
            </button>
            <button className={cx('btn','edit')}>
                <Link to={`edit`}>
                    Chỉnh sửa
                </Link>
            </button>
        </div>
    </div>
    

    </> );
}

export default Detail;