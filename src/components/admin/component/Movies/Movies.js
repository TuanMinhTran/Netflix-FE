import classNames from "classnames/bind";
import styles from './Movies.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faPlus } from "@fortawesome/free-solid-svg-icons";
import {Link, useNavigate} from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from "axios";
import { MOVIES_API_URL } from "../../../../constants/constant";
const cx = classNames.bind(styles)


function Movies() {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get(`${MOVIES_API_URL}videos`)
        .then(function (response) {
            setData(response.data)
        })
        .catch(function (error) {
            alert(error)
        })
    },[])
    const handleClickAdd =()=>{
        navigate('/admin/add')
    }

    return ( <>
        <div className={cx('wrapper')}>
            <div className={cx('add-movie')}>
                <button className={cx('btn')} onClick={handleClickAdd}>
                    Thêm phim mới
                    <span><FontAwesomeIcon icon={faPlus} /></span>
                </button>
            </div>
            <div className={cx('overview')}>
                <table>
                    <thead>
                        <tr>
                            <th className={cx('table-square')}>
                                ID
                            </th>
                            <th className={cx('table-square')}>
                                Name
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item=>(<tr className={cx('table-row')}>
                            <td className={cx('table-square')}>
                                {item.id}
                            </td>
                            <td className={cx('table-square')}>
                                {item.title}
                            </td>
                            <td className={cx('detail','table-square')}>
                                <Link to={`/admin/${item.id}`}>Detail</Link>
                            </td>
                        </tr>))}
                    </tbody>
                </table>
            </div>
        </div>
    </> );
}

export default Movies;