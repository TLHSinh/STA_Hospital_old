import React, { useState, useContext } from 'react';
import './NavbarBS.css';
import { Link } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import { AuthContext } from '../../../context/AuthContext.jsx';//

function Navbar() {
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

    // Lấy thông tin người dùng từ AuthContext
    const { user } = useContext(AuthContext);

    // Hàm bật/tắt menu người dùng
    const toggleUserMenu = () => {
        setIsUserMenuOpen(!isUserMenuOpen);
    };

    return (
        <header className="header">
        <Link to="/doctor/home" className="logo" aria-label="Logo">
            <span className="logo-text">STA HOSPITAL.</span>
        </Link>

        <nav className="navbar">
            <Link to="/doctor/danhsachlichhenBS">Danh sách lịch hẹn</Link>
            <Link to="/doctor/kedonthuoc">Kê đơn thuốc</Link>       
                {/* Chỉ hiển thị biểu tượng người dùng hoặc ảnh nếu người dùng đã đăng nhập */}
                {user ? (
                    <div className="user-icon-container" onClick={toggleUserMenu}>
                        {user.hinhAnh ? (  // Kiểm tra xem có avatar hay không
                            <img src={user.hinhAnh} alt="User Avatar" className="user-avatar" />
                        ) : (
                            <FaRegCircleUser color="#0b8fac" size="2rem" />
                        )}
                        {isUserMenuOpen && (
                            <div className="user-dropdown-menu">
                                <Link to="/doctor/profile-bs">Hồ sơ</Link>
                                <Link to="/doctor/danhsachlichhenBS">Lịch hẹn của tôi</Link>
                                <Link to="/login">Đăng xuất</Link>
                            </div>
                        )}
                    </div>
                ) : (
                    <Link to="/login" className="user">
                        <FaRegCircleUser color="#0b8fac" size="2rem" />
                    </Link>
                )}
        </nav>   
    </header>
    );
}

export default Navbar;
