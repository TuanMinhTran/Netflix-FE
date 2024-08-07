import classNames from "classnames/bind";
import styles from './Login.module.scss'



const cx = classNames.bind(styles)


function Login(props) {


    const handleClickLogin = ()=>{
        props.isLogin(true)
    }
    return ( <>
        <div className={cx('wrapper')}>
            <div className={cx('form-input')}>
                <label for="admin-userName">
                    User Name
                </label>
                <input id="admin-userName" placeholder="Nhập User Name"/>
            </div>
            <div className={cx('form-input')}>
                <label for="admin-password">
                    Password
                </label>
                <input id="admin-password" placeholder="Nhập User Name" type="password"/>
            </div>

            <div className={cx('submit')}>
                <button className={cx('submit-btn')} onClick={handleClickLogin}>
                    Đăng nhập
                </button>
            </div>
        </div>
    </> );
}

export default Login;