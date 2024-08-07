import classNames from 'classnames/bind';


import styles from './DefaultLayout.module.scss';
import { Link } from 'react-router-dom';


import { logo } from '../../../../assets/images';
const cx = classNames.bind(styles)


function DefaultLayout( {children} ) {
    const LIST_LINK = [
        {to:'/',
        title:'Câu hỏi thường gặp'},
        {to:'/',
        title:'Trung tâm trợ giúp'},
        {to:'/',
        title:'Cửa hàng Netflix'},
        {to:'/',
        title:'Điều khoản sử dụng'},
        {to:'/',
        title:'Quyền riêng tư'},
        {to:'/',
        title:'Tùy chọn cookie'},
        {to:'/',
        title:'Thông tin doanh nghiệp'},
    ]




    return ( <>
    <div className={cx('wrapper')}>
        <div className={cx('wrapper-header')}>
            <div className={cx('header')}>
                <Link to={'/'} className={cx('logo')}>
                {logo}
                </Link>
                <Link to={'/login'} className={cx('login')}>
                    Đăng nhập
                </Link>
            </div>
        </div>
        {children}
        <div className={cx('wrapper-footer')}>
            <div className={cx('footer')}>
                <p className={cx('footer-top')}>
                    <a href='/contactus'>Bạn có câu hỏi? Liên hệ với chúng tôi.</a>
                </p>
                <ul className={cx('footer-links')}>
                    {LIST_LINK.map((item,index)=>(<li key={index} className={cx('footer-link-item')}>
                        <a href={item.to} className={cx('footer-link')}>{item.title}</a>
                    </li>))}
                </ul>
                <div className={cx('language-selection-container')}>
                    <select   className={cx('langue-picked')}>
                        <option value='Việt Nam'>
                            Việt Nam
                        </option>
                        <option value='English'>
                            English
                        </option>
                    </select>
                </div>
            </div>
        </div>
    </div>
    </> );
}

export default DefaultLayout;