import classNames from "classnames/bind";
import styles from './DefaultLayout.module.scss'


import { logo } from '../../../../assets/images/index'
import { Link } from "react-router-dom";
const cx = classNames.bind(styles)


function DefaultLayout({children, isLogin}, props) {
    const handleClick =()=>{
        props.handleIslogin(false)
    }
    console.log(props);
    return ( <>

        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('logo')}>
                    <Link to={'/admin'}>{logo}</Link>
                </div>
                <div className={cx('log-out')} onClick={handleClick}>
                    {isLogin && 'Đăng xuất'}
                </div>
            </div>
            {children}
        </div>
    </> );
}

export default DefaultLayout;