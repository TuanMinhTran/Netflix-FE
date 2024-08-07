import classNames from "classnames/bind";
import styles from '../Detail/Detail.module.scss'
import { useState } from "react";
import axios from "axios";
import { MOVIES_API_URL } from "../../../../constants/constant";
import { useNavigate } from "react-router-dom";


const cx = classNames.bind(styles)


function AddMovie() {
    const [data,setData] = useState({id:'',title:'',description:'',videoUrl:'',thumbnailUrl:'',genre:'',duration:''})
    const navigate = useNavigate()
    const handleChange =(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const handleSubmit= ()=>{
        axios.post(`${MOVIES_API_URL}videos`, data)
        .then(response => {
            navigate('/admin')
        })
        .catch(error => {
        // Xử lý lỗi
    });
    }
    return ( <>
        <div className={cx('wrapper')}>
            <div className={cx('item')}>
                ID: <input placeholder="Nhập id" value={data.id} name='id'onChange={handleChange}/>
            </div>
            <div className={cx('item')}>
                Title: <input placeholder="Nhập title" value={data.title} name='title'onChange={handleChange}/>
            </div>
            <div className={cx('item')}>
                description: <input placeholder="Nhập mô tả" value={data.description} name='description' onChange={handleChange}/>
            </div>
            <div className={cx('item')}>
                
                videoUrl: <input placeholder="Nhập video url" value={data.videoUrl} name="videoUrl" onChange={handleChange}/>
            </div>
            <div className={cx('item')}>
                thumbnailUrl: <input placeholder="Nhập thumbnail url" value={data.thumbnailUrl} name="thumbnailUrl" onChange={handleChange}/>
            </div>
            <div className={cx('item')}>
                genre: <input placeholder="Nhập genre" value={data.genre} name="genre" onChange={handleChange}/>
            </div>
            <div className={cx('item')}>
                
                duration: <input placeholder="Nhập duration" value={data.duration} name="duration" onChange={handleChange}/>
            </div>
            <div className={cx('btn-container')}>
                <button className={cx('btn','edit')} onClick={handleSubmit}>
                    Xác nhận
                </button>
            </div>
    </div>
    </> );
}

export default AddMovie;