import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';

import {  faCheck, faLaptop, faMobileScreenButton, faTabletScreenButton, faTv  } from "@fortawesome/free-solid-svg-icons";




import DefaultLayout from './DefaultLayout/DefaultLayout'
import Payment from './Payment/Payment';
import styles from './Register.module.scss'
import Devices from '../../../assets/images/Devices.png'
import Checkmark from '../../../assets/images/Checkmark.png'



const cx = classNames.bind(styles)
function Register() {
    const { step } = useParams()
    const navigate = useNavigate()
    const [optionPayment, setOptionPayment] = useState('plandChoice0')

    const [user, setUser] = useState({email:'',password:''})
    const [errors, setErrors] = useState({});
    const handleChangeOption = (e)=>{
        setOptionPayment(e.target.value)
    }

    const handleChaneUser = (e)=>{
        setUser((prevUser=>({...prevUser,[e.target.name]:e.target.value}))
            )
    }

    const handleSubmitRegister = async (event)=>{
        event.preventDefault();

        const validationErrors = validateForm(user);
        setErrors(validationErrors);
        
        if (Object.keys(validationErrors).length === 0) {
            const isSuccess = await sendDataToApi();
            if (isSuccess) {
                navigate('/register/step2');
            }
        }
    };

    const sendDataToApi = async () => {
    try {
      await axios.post("http://localhost:8080/api/users/register", user);
        return true;
    } catch (error) {
        if (error.response && error.response.status === 409) {
            setErrors({email: 'Tài khoản với email này đã tồn tại.'});
        } else {
            console.error('Error submitting data:', error);
        }
        return false;
    }
  };

    
    const validateForm = (data)=>{
        let errors = {}
        if (!data.email.trim()) {
            errors.email = 'Email không được để trống';
        } else if (!isValidEmail(data.email)) {
            errors.email = 'Vui lòng nhập đúng định dạng email';
        }
        if (!data.password.trim()) {
            errors.password = 'Mật khẩu không được để trống';
        } else if (data.password.length < 8) {
            errors.password = 'Mật khẩu phải dài hơn 8 ký tự';
        }
         return errors;
    }

    const isValidEmail = (email) => {
            // Use a regex or any other validation logic for email format
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        };
    

    return ( <>
            <DefaultLayout>
                {/* trang đầu tiên */}
                {!step && <div className={cx('wrapper')}>
                    <img src={Devices} alt='step img' className={cx('step-img')}/>
                    <div className={cx('header')}>
                        <span className={cx('step-indicator')}>Bước 1/3</span>
                        <h1 className={cx('step-title')}>Hoàn thành việc cài đặt tài khoản của bạn</h1>
                    </div>
                    <div className={cx('regContext')}>
                        Netflix được cá nhân hóa cho riêng bạn. Tạo mật khẩu để xem Netflix trên bất kỳ thiết bị nào, vào bất cứ lúc nào.
                    </div>
                    <button className={cx('btn')} onClick={()=>navigate('/register/regform')}>
                        Tiếp theo
                    </button>
                </div>}
                {/* trang đăng kí thành viên */}
                {(step ==='regform') && <div className={cx('wrapper', 'reg-form')}>
                    <div className={cx('header', 'reg-form')}>
                        <span className={cx('step-indicator')}>Bước 1/3</span>
                        <h1 className={cx('step-title')}>Tạo mật khẩu để bắt đầu tư cách thành viên của bạn</h1>
                    </div>
                    <div className={cx('regContext')}>
                        Netflix được cá nhân hóa cho riêng bạn. Tạo mật khẩu để xem Netflix trên bất kỳ thiết bị nào, vào bất cứ lúc nào.
                    </div>
                    <form className={cx('form')}>
                        <div className={cx('form-register')}>
                            <input type='text' name='email' value={user.name}  onChange={handleChaneUser}/>
                            <label className={user.email ? cx('active'):''} >Email</label>
                        </div>
                            {errors.email && <p className={cx('noti-err')}>{errors.email}</p>}
                        <div className={cx('form-register')}>
                            <input name='password' type='password' value={user.password} onChange={handleChaneUser}/>
                            <label className={user.password ? cx('active'):''}>Thêm mật khẩu</label>
                        </div>
                            {errors.password && <p className={cx('noti-err')}>{errors.password}</p>}
                        <div>
                            <input type='checkbox' className={cx('checkbox')}/>
                                Vui lòng không gửi các ưu đãi đặc biệt của Netflix qua email cho tôi
                        </div>
                    </form>
                    <button className={cx('btn')} onClick={handleSubmitRegister}>
                        Tiếp theo
                    </button>
                </div> }
                {/* trang chọn gói dịch vụ */}
                {(step==='step2') && <div className={cx('wrapper')}>
                    <img src={Checkmark} alt='step img' className={cx('step-img','small')}/>
                    <div className={cx('header')}>
                        <span className={cx('step-indicator')}>Bước 2/3</span>
                        <h1 className={cx('step-title')}>Chọn gói dịch vụ của bạn.</h1>
                    </div>
                    <div className={cx('regContext')}>
                        <ul className={cx('checkmark-group')}>
                            <li>
                                <FontAwesomeIcon icon={faCheck} className={cx('icon-check')}/>
                                <span>Không yêu cầu cam kết, hủy bất kỳ lúc nào.</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faCheck} className={cx('icon-check')}/>
                                <span>Mọi thứ trên Netflix chỉ với mức giá thấp.</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faCheck} className={cx('icon-check')}/>
                               <span> Không quảng cáo, không phụ phí. Luôn luôn như vậy.</span>
                            </li>
                        </ul>
                    </div>
                    <button className={cx('btn')} onClick={()=>navigate('/register/planform')}>
                        Tiếp theo
                    </button>
                </div>}
                {/*  */}
                {(step==='planform') && <div className={cx('plan-form-container')}>
                    <div className={cx('header-plan-form')}>
                        <span className={cx('step-indicator')}>Bước 2/3</span>
                        <h1 className={cx('step-title')}>Chọn gói dịch vụ phù hợp với bạn</h1>
                    </div>
                    <div className={cx('regContext')}>
                        <ul className={cx('checkmark-group')}>
                            <li>
                                <FontAwesomeIcon icon={faCheck} className={cx('icon-check')}/>
                                <span>Xem mọi nội dung bạn muốn. Không có quảng cáo.</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faCheck} className={cx('icon-check')}/>
                                <span>Đề xuất dành riêng cho bạn.</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faCheck} className={cx('icon-check')}/>
                               <span>Thay đổi hoặc hủy gói dịch vụ của bạn bất cứ khi nào.</span>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('plandGrid')}>
                        <div className={cx('plandGrid-header')}>
                            <div className={cx('plandGrid-selector')}>
                                <label className={cx('plandGrid-selector-choice')} for='plandGrid-choice0'>
                                    <input type='radio' name='plandChoice' value='plandChoice0' className={cx('plandGrid-selector-input')} id='plandGrid-choice0' onChange={handleChangeOption}/>
                                    <span className={cx('plandGrid-selector-label',{'plandGrid-selected-label' : optionPayment==='plandChoice0'})}>
                                        Di động
                                    </span>
                                </label>
                                <label className={cx('plandGrid-selector-choice')} for='plandGrid-choice1'>
                                    <input type='radio' name='plandChoice' value='plandChoice1' className={cx('plandGrid-selector-input')} id='plandGrid-choice1' onChange={handleChangeOption}/>
                                    <span className={cx('plandGrid-selector-label',{'plandGrid-selected-label' : optionPayment==='plandChoice1'})}>
                                        Cơ bản
                                    </span>
                                </label>
                                <label className={cx('plandGrid-selector-choice')} for='plandGrid-choice2'>
                                    <input type='radio' name='plandChoice' value='plandChoice2' className={cx('plandGrid-selector-input')} id='plandGrid-choice2' onChange={handleChangeOption}/>
                                    <span className={cx('plandGrid-selector-label',{'plandGrid-selected-label' : optionPayment==='plandChoice2'})}>
                                        Tiêu chuẩn
                                    </span>
                                </label>
                                <label className={cx('plandGrid-selector-choice')} for='plandGrid-choice3'>
                                    <input type='radio' name='plandChoice' value='plandChoice3' className={cx('plandGrid-selector-input')} id='plandGrid-choice3' onChange={handleChangeOption}/>
                                    <span className={cx('plandGrid-selector-label',{'plandGrid-selected-label' : optionPayment==='plandChoice3'})}>
                                       Cao cấp
                                    </span>
                                </label>
                                
                            </div>
                        </div>
                        <table className={cx('plandGrid-feature-table')}>
                            <tbody className={cx('plandGrid-feature-table-body')}>
                                <tr className={cx('plandGrid-feature-table-row')}>
                                    <th className={cx('plandGrid-featureCell')}>Giá hàng tháng</th>
                                    <td className={cx('plandGrid-cell',{'selected' : optionPayment==='plandChoice0'})}>70.000 đ</td>
                                    <td className={cx('plandGrid-cell',{'selected' : optionPayment==='plandChoice1'} )}>108.000 ₫</td>
                                    <td className={cx('plandGrid-cell',{'selected' : optionPayment==='plandChoice2'} )}>220.000 ₫</td>
                                    <td className={cx('plandGrid-cell',{'selected' : optionPayment==='plandChoice3'} )}>260.000 ₫</td>
                                </tr>
                                <tr className={cx('plandGrid-feature-table-row')}>
                                    <th className={cx('plandGrid-featureCell')}>Chất lưọng video</th>
                                    <td className={cx('plandGrid-cell',{'selected' : optionPayment==='plandChoice0'} )}>70.000 đ</td>
                                    <td className={cx('plandGrid-cell',{'selected' : optionPayment==='plandChoice1'} )}>108.000 ₫</td>
                                    <td className={cx('plandGrid-cell',{'selected' : optionPayment==='plandChoice2'} )}>220.000 ₫</td>
                                    <td className={cx('plandGrid-cell',{'selected' : optionPayment==='plandChoice3'} )}>260.000 ₫</td>
                                </tr>
                                <tr className={cx('plandGrid-feature-table-row')}>
                                    <th className={cx('plandGrid-featureCell')}>Độ phân giải</th>
                                    <td className={cx('plandGrid-cell',{'selected' : optionPayment==='plandChoice0'} )}>70.000 đ</td>
                                    <td className={cx('plandGrid-cell',{'selected' : optionPayment==='plandChoice1'} )}>108.000 ₫</td>
                                    <td className={cx('plandGrid-cell',{'selected' : optionPayment==='plandChoice2'} )}>220.000 ₫</td>
                                    <td className={cx('plandGrid-cell',{'selected' : optionPayment==='plandChoice3'} )}>260.000 ₫</td>
                                </tr>
                                <tr className={cx('plandGrid-feature-table-row')}>
                                    <th className={cx('plandGrid-featureCell')}>Các thiết bị có thể dùng xem</th>
                                    <td className={cx('plandGrid-cell',{'selected' : optionPayment==='plandChoice0'} )}>
                                        <div>
                                                <FontAwesomeIcon icon={faMobileScreenButton} />
                                            <div>
                                                Điện thoại
                                            </div>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faTabletScreenButton} />
                                            <div>
                                                Máy tính bảng
                                            </div>
                                        </div>

                                    </td>
                                    <td className={cx('plandGrid-cell',{'selected' : optionPayment==='plandChoice1'} )}>
                                        <div>
                                                <FontAwesomeIcon icon={faMobileScreenButton} />
                                            <div>
                                                Điện thoại
                                            </div>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faTabletScreenButton} />
                                            <div>
                                                Máy tính bảng
                                            </div>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faLaptop} />
                                            <div>
                                                Máy tính
                                            </div>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faTv} />
                                            <div>
                                                TV
                                            </div>
                                        </div>
                                    </td>
                                    <td className={cx('plandGrid-cell',{'selected' : optionPayment==='plandChoice2'} )}>
                                        <div>
                                                <FontAwesomeIcon icon={faMobileScreenButton} />
                                            <div>
                                                Điện thoại
                                            </div>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faTabletScreenButton} />
                                            <div>
                                                Máy tính bảng
                                            </div>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faLaptop} />
                                            <div>
                                                Máy tính
                                            </div>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faTv} />
                                            <div>
                                                TV
                                            </div>
                                        </div>
                                    </td>
                                    <td className={cx('plandGrid-cell',{'selected' : optionPayment==='plandChoice3'})}>
                                        <div>
                                                <FontAwesomeIcon icon={faMobileScreenButton} />
                                            <div>
                                                Điện thoại
                                            </div>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faTabletScreenButton} />
                                            <div>
                                                Máy tính bảng
                                            </div>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faLaptop} />
                                            <div>
                                                Máy tính
                                            </div>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faTv} />
                                            <div>
                                                TV
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div>
                            <small >
                                <span>
                                    Việc bạn có thể xem ở chế độ HD (720p), Full HD (1080p), Ultra HD (4K) và HDR hay không phụ thuộc vào dịch vụ internet và khả năng của thiết bị. Không phải tất cả nội dung đều có sẵn ở mọi độ phân giải. Xem <span><a href='/'>Điều khoản sử dụng</a></span> của chúng tôi để biết thêm chi tiết.
                                </span>
                                <div></div>
                                <span>
                                    Chỉ những người sống cùng bạn mới có thể dùng tài khoản của bạn. Xem trên 4 thiết bị khác nhau cùng lúc với gói Cao cấp, 2 với gói Tiêu chuẩn và 1 với gói Cơ bản và Di động.
                                </span>
                            </small>
                        </div>
                    </div>
                    <button className={cx('btn')} onClick={()=>navigate('/register/paymentPicker')}>
                        Tiếp theo
                    </button>
                </div>}
                {/* thanh toán */}
                {((step ==='paymentPicker') || (step ==='creditOption') || (step ==='mobileWalletOption'))&& <Payment option={optionPayment} />}
            </DefaultLayout>
    </> );
}

export default Register;