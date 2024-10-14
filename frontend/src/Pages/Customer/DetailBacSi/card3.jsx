import React from 'react';
import BannerBS from '../../../Components/Customer/Banner/BannerBacSi/BannerBS';
import SidePanel from '../SidePanel'; 
import { Link } from 'react-router-dom';

function BS3() {
  const schedule = [
    { day: 'Thứ 2', time: '7:00 AM - 11:00 AM' },
    { day: 'Thứ 4', time: '7:00 AM - 11:00 AM' },
    { day: 'Thứ 6', time: '7:00 AM - 11:00 AM' },
  ];
    return (
        <div>
            <BannerBS />
            <div className='container-content'>
                <div className='intro'>
                  <h1 className='article-item'>Thông Tin Bác Sĩ</h1>
                </div>

                <section>
                    <div className="max-w-[1170px] mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-[50px]">
                            {/* Cột 1: Hình ảnh */}
                            <div className="flex flex-col items-center p-4">
                              {/* Hình ảnh bác sĩ */}
                              <img
                                src="/Images/STA_BACSI/bacsi_chu-minh-tuan.png"
                                alt="Doctor"
                                className="w-full max-w-xs h-auto rounded-md shadow-md"
                              />
                              
                              {/* Nút Quay lại trang tìm kiếm */}
                              <Link
                                to="/bacsi"
                                className="mt-6 w-full max-w-xs px-4 py-2 bg-purple-400 text-white rounded-md hover:bg-purple-500 text-center no-underline"
                                style={{ textDecoration: 'none' }}  // Thêm style này
                              >
                                Quay lại trang tìm kiếm
                              </Link>
                            </div>
                            {/* Cột 2: Văn bản */}
                            <div className="flex flex-col">
                                <div className="flex justify-center">
                                    {/* <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-1 lg:px-3 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded inline-block">
                                        Bác Sĩ Đa Khoa
                                    </span> */}
                                </div>
                                <h3 className="text-headingColor text-[30px] leading-9 mt-2 font-bold">
                                    Chu Minh Tuấn
                                </h3>
                                
                                <p className='text__para text-[14px] leading-6 md:text-[18px] mt-2'>
                                Bác sĩ Chu Minh Tuấn là chuyên gia với hơn 10 năm kinh nghiệm trong lĩnh vực điều trị Ngoại khoa. Bác sĩ Tuấn cũng là một trong những bác sĩ được đánh giá cao về tay nghề, chuyên môn và sự tận tâm trong công tác điều trị, chăm sóc bệnh nhân, mang đến dịch vụ điều trị chất lượng cao và hiệu quả cho người bệnh.

Bác sĩ Tuấn tốt nghiệp Bác sĩ Đa khoa tại Đại học Y Dược Thành phố Hồ Chí Minh vào năm 2011. Sau đó, tiếp tục theo học và tốt nghiệp Bằng chuyên khoa cấp 1, Ngoại khoa, tại Đại học Y Dược Thành phố Hồ Chí Minh năm 2018, đồng thời bác Tuấn cũng không ngừng nâng cao chuyên môn khi xuyên tham gia các khóa đào tạo, hội thảo cập nhật kiến thức chuyên môn.
                                </p>

                                <h3 className="text-headingColor text-[30px] leading-9 mt-2 font-bold">
                                    Chứng Nhận
                                </h3>

                                <p className='text__para text-[14px] leading-6 md:text-[18px] mt-2'>
                                
                                Quản lý toàn diện các rối loạn tiêu hóa ở trẻ em<br/>
                                Sử dụng Marcolid trong nhiễm khuẩn hô hấp cấp trẻ em<br/>
                                Can thiệp dinh dưỡng tỏng bệnh lý tiêu hóa<br/>
                                Điều trị và dự phòng hiệu quả Hen phế quản<br/>
                                Hồi sức sốc trẻ em
                                </p>
                            </div>
                          
                            {/* Cột 3: Để trống */}
                            <div>
                              <SidePanel
                                price="500.000 VNĐ"
                                schedule={schedule}
                                buttonLabel="Đặt lịch"
                              />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default BS3;