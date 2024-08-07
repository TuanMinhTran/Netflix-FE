import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faCaretUp, faCircleQuestion, faFlag, faLock } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";

import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import {cardIcon} from '../../../../assets/images';
import Lock from '../../../../assets/images/Lock.png';
import AMEX from '../../../../assets/images/AMEX.png';
import MASTERCARD from '../../../../assets/images/MASTERCARD.png';
import VISA from '../../../../assets/images/VISA.png';
import MOMOPAY from '../../../../assets/images/MOMOPAY.png';



import styles from './Payment.module.scss'
import {  useState } from "react";
const cx = classNames.bind(styles)


function Payment({option}) {
    const LIST_COUNTRY = [
        {
            id:1,
            number:'+45',
            name:'Quata',
        },
        {
            id:2,
            number:'+46',
            name:'Quata jhdsfhjn',
        },
        {
            id:3,
            number:'+47',
            name:'Quata fdgdg',
        },
        {
            id:4,
            number:'+48',
            name:'Quata dfgd',
        },
        {
            id:5,
            number:'+49',
            name:'Quata ererg',
        },
        {
            id:1,
            number:'+45',
            name:'Quata',
        },
        {
            id:2,
            number:'+46',
            name:'Quata jhdsfhjn',
        },
        {
            id:3,
            number:'+47',
            name:'Quata fdgdg',
        },
        {
            id:4,
            number:'+48',
            name:'Quata dfgd',
        },
        {
            id:5,
            number:'+49',
            name:'Quata ererg',
        },
    ]
    const servicePackOption =(option)=>{
        if(option==='plandChoice0'){
            return {name:'Di động', price:'70.000'}
        }
        else if(option==='plandChoice1'){
            return {name:'Cơ bản', price:'108.000'}
        }
        else if(option==='plandChoice2'){
            return {name:'Tiêu chuẩn', price:'220.000'}
        }
        else if(option==='plandChoice3'){
            return {name:'Cao cấp', price:'260.000'}
        }
    }
    const servicePack = servicePackOption(option)
    if(option==='plandChoice0'){

    }


    const [country, setCountry] = useState({
            id:1,
            number:'+45',
            name:'Quata',
    })
    
    const [isShowToolTips, setIsShowToolTips] = useState(false)
    const navigate =useNavigate()
    const { step } = useParams()
    return (
        <>
        {(step === 'paymentPicker') && <div className={cx('wrapper')}>
            <img src={Lock} alt="lock" className={cx('step-img')}/>
            <div className={cx('header')}>
                <span className={cx('step-indicator')}>Bước 3/3</span>
                <h1 className={cx('step-title')}>Chọn cách thanh toán</h1>
            </div>
            <div className={cx('regContext-first')}>
                Quá trình thanh toán của bạn được mã hóa và bạn có thể thay đổi cách thanh toán bất kỳ lúc nào.
            </div>
            <div className={cx('regContext-secon')}>
                <div className={cx('context-emphasized')}>
                    An toàn để an tâm.
                </div>
                <div className={cx('context-emphasized')}>
                    Hủy trực tuyến dễ dàng.
                </div>
            </div>
            <div className={cx('secure-server-badge')}>
                <span>
                    Mã hóa đầu cuối
                </span>
                <span><FontAwesomeIcon icon={faLock} /></span>
            </div>
            <div className={cx('option-payment')}>
                <button className={cx('option')} onClick={()=>navigate('/register/creditOption')}>
                    <div className={cx('option-name-logo')}>
                        <span className={cx('option-name')}>
                            Thẻ ghi nợ hoặc thẻ tín dụng
                        </span>
                        <span className={cx('option-logo')}>
                            <img alt="logo" src={VISA}/>
                            <img alt="logo" src={MASTERCARD}/>
                            <img alt="logo" src={AMEX}/>
                        </span>
                    </div>
                    <span className={cx('arrow')}>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </span>
                </button>
                <button className={cx('option')} onClick={()=>navigate('/register/mobileWalletOption')}>
                    <div className={cx('option-name-logo')}>
                        <span className={cx('option-name')}>
                            Ví điện tử
                        </span>
                        <span className={cx('option-logo')}>
                            <img alt="logo" src={MOMOPAY}/>
                            
                        </span>
                    </div>
                    <span className={cx('arrow')}>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </span>
                </button>
            </div>
        </div>}
        {(step === 'creditOption') && 
            <div className={cx('wrapper', 'field-container')}>
                <div className={cx('header')}>
                    <span className={cx('step-indicator')}>Bước 3/3</span>
                    <h1 className={cx('step-title')}>Thiết lập thẻ tín dụng hoặc thẻ ghi nợ</h1>
                </div>
                <div className={cx('container-logo')}>
                    <span className={cx('option-logo')}>
                        <img alt="logo" src={VISA}/>
                        <img alt="logo" src={MASTERCARD}/>
                        <img alt="logo" src={AMEX}/>
                    </span>
                </div>
                <div className={cx('form-field-container')}>
                    <ul className={cx('simple-form')}>
                        <li className={cx('nF-form-space')}>
                            <input className={cx('input-form')}/>
                            <label className={cx('input-label')}>Số thẻ</label>
                            <span className={cx('card-icon')}>{cardIcon}</span>
                        </li>

                        <li className={cx('inline')}>
                            <div className={cx('nF-form-space','nF-form-space-inline')}>
                                <input className={cx('input-form')}/>
                                <label className={cx('input-label')}>Ngày hết hạn</label>
                            </div>
                            <div className={cx('nF-form-space','nF-form-space-inline')}>
                                <input className={cx('input-form')}/>
                                <label className={cx('input-label')}>CVV</label>
                                <button className={cx('question-icon')}>
                                    <FontAwesomeIcon icon={faCircleQuestion} />
                                </button>
                            </div>
                        </li>
                        <li className={cx('nF-form-space')}>
                            <input className={cx('input-form')}/>
                            <label className={cx('input-label')}>Tên</label>
                        </li>
                        <li className={cx('nF-form-space')}>
                            <input className={cx('input-form')}/>
                            <label className={cx('input-label')}>Họ</label>
                        </li>

                    </ul>
                </div>
                <div className={cx('order-infor')}>
                    <div className={cx('order-infor-item')}>
                        <p className={cx('option-price')}>{servicePack.price} đ/tháng</p>
                        <p className={cx('option-name')}>{servicePack.name}</p>
                    </div>
                    <div className={cx('change-option-button')} onClick={()=>navigate('/register/planform')}>
                        Thay đổi
                    </div>
                </div>
                <div style={{color:'rgb(115, 115, 115)',fontSize:'13px'}}>
                    <p className={cx('reminder')}>
                        Các khoản thanh toán của bạn sẽ được xử lý ở nước ngoài. Bạn có thể phải trả thêm phí ngân hàng.
                    </p>
                    <p>
                        Bằng cách đánh dấu vào hộp kiểm bên dưới, bạn đồng ý với <a href="/" className={cx('link')}>Điều khoản sử dụng</a>, <a href="/" className={cx('link')}>Tuyên bố về quyền riêng tư</a> của chúng tôi, đồng thời xác nhận rằng bạn trên 18 tuổi. Netflix sẽ tự động gia hạn tư cách thành viên của bạn và tính phí thành viên (hiện tại là 260.000 ₫/tháng) vào phương thức thanh toán của bạn cho đến khi bạn hủy. Bạn có thể hủy bất kỳ lúc nào để tránh bị tính phí về sau.
                    </p>
                    <div className={cx('acceptance')}>
                        <input type="checkbox" className={cx('checkbox')}/>
                        Tôi đồng ý
                    </div>
                </div>
                <button className={cx('btn')}>
                    Kích hoạt tư cách thành viên
                </button>
            </div>}
            {(step === 'mobileWalletOption') &&<div className={cx('wrapper', 'field-container')}>
                <div className={cx('header')}>
                    <span className={cx('step-indicator')}>Bước 3/3</span>
                    <h1 className={cx('step-title')}>Thiết lập thẻ tín dụng hoặc thẻ ghi nợ</h1>
                </div>
                <div className={cx('container-logo')}>
                    <span className={cx('option-logo')}>
                        <img alt="logo" src={MOMOPAY}/>
                    </span>
                </div>
                <p className={cx('sub-header')}>
                    
                        Hãy nhập số điện thoại di động MoMo của bạn.
                    <br/>
                    <br/>
                    
                        Chúng tôi cũng sẽ dùng số điện thoại của bạn nếu bạn quên mật khẩu, cũng như để gửi các tin nhắn quan trọng về tài khoản. Bạn có thể phải trả phí tin nhắn SMS.
                    
                </p>  
                <div className={cx('form-field-container')}>
                    <div className={cx('select-country')}>

                            <div className={cx('select-country')}>
                                <div className={cx('country-select-container')}>
                                    <Tippy 
                                    visible={isShowToolTips}
                                    placement="bottom-start"
                                    interactive={true}
                                    render={attrs => (
                                        <div className={cx('popup-select-country')} tabIndex="-1" {...attrs}>
                                            <ul className={cx('list-country')}>
                                                {LIST_COUNTRY.map((item,index)=><li  key={index} className={cx('item-country')} onClick={()=>{setCountry(item);setIsShowToolTips(!isShowToolTips)}}>
                                                    <span className={cx('country-select-option-flag')}>
                                                        <FontAwesomeIcon icon={faFlag} />
                                                    </span>
                                                    <span className={cx('country-select-option-name')}>
                                                        {item.name}
                                                    </span>
                                                    <span className={cx('country-select-option-code')}>
                                                        {item.number}
                                                    </span>
                                                </li>)}
                                            </ul>
                                        </div>
                                    )}
                                    >
                                        <div className={cx('country-select-container')} onClick={()=>setIsShowToolTips(!isShowToolTips)}>
                                            <span className={cx('country-select-flag')}>
                                                <FontAwesomeIcon icon={faFlag} />
                                            </span>
                                            <span className={cx('country-select-code')}>
                                                {country.number}
                                            </span>
                                            <span>
                                                <FontAwesomeIcon icon={faCaretUp} />
                                            </span>
                                        </div>
                                    </Tippy>
                                </div>
                                <div className={cx('phone-number')}>
                                    <input className={cx('input-phone-number')}/>
                                    <label className={cx('input-phone-label')}>Số điện thoại di động</label>
                                </div>
                            </div>
                        
                    </div>
                    
                </div>




                <div className={cx('order-infor')}>
                    <div className={cx('order-infor-item')}>
                        <p className={cx('option-price')}>{servicePack.price} đ/tháng</p>
                        <p className={cx('option-name')}>{servicePack.name}</p>
                    </div>
                    <div className={cx('change-option-button')}>
                        Thay đổi
                    </div>
                </div>
                <div style={{color:'rgb(115, 115, 115)',fontSize:'13px'}}>
                    <p className={cx('reminder')}>
                        Các khoản thanh toán của bạn sẽ được xử lý ở nước ngoài. Bạn có thể phải trả thêm phí ngân hàng.
                    </p>
                    <p>
                        Bằng cách đánh dấu vào hộp kiểm bên dưới, bạn đồng ý với <a href="/" className={cx('link')}>Điều khoản sử dụng</a>, <a href="/" className={cx('link')}>Tuyên bố về quyền riêng tư</a> của chúng tôi, đồng thời xác nhận rằng bạn trên 18 tuổi. Netflix sẽ tự động gia hạn tư cách thành viên của bạn và tính phí thành viên (hiện tại là 260.000 ₫/tháng) vào phương thức thanh toán của bạn cho đến khi bạn hủy. Bạn có thể hủy bất kỳ lúc nào để tránh bị tính phí về sau.
                    </p>
                    <div className={cx('acceptance')}>
                        <input type="checkbox" className={cx('checkbox')}/>
                        Tôi đồng ý
                    </div>
                </div>
                <button className={cx('btn')} >
                    Kích hoạt tư cách thành viên
                </button>
            </div>}
        </>
     );
}

export default Payment;