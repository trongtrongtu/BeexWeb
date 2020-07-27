import React, { Component } from 'react';
import { LineOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import { Button } from 'antd';
import Slider from "react-slick";
import thiet_bi_gui_tin_nhan from './images/thiet_bi_gui_tin_nhan.png';
import mo_phong_he_thong from './images/mo_phong_he_thong.png';
import website from './images/website.png';
import quan_ly_va_quan_sat from './images/quan_ly_va_quan_sat.png';
import ket_noi_cac_thiet_bi from './images/ket_noi_cac_thiet_bi.png';

class BeexIotPlatformDetail extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true
    };
    return (
      <>
        <section className="bread-crumb">
          <span className="crumb-border" />
          <div className="container">
            <div className="rows">
              <div className="col-xs-12 a-left" style={{ paddingTop: '25px' }}>
                <span>Beex IOT Platform</span>
              </div>
              <div className="b-left">
                <span>Thiết bị gửi tin nhắn</span>
              </div>
            </div>
          </div>
        </section>
        <section className="awe-section-2">
          <div className="section_about lazyload">
            <div className="container">
              <div className="row">
                <div className="col-md-5 col-xl-5">
                  <div className="department-carousel2">
                    <div className="department-item">
                      <div className="h-sub"><LineOutlined style={{ fontSize: '24px' }} /> THIẾT BỊ GỬI TIN NHẮN</div>
                      <h2 className="title">Thiết bị gửi tin nhắn và phạm vi ứng dụng của giải pháp</h2>
                      <div>
                        <div>
                          <strong>Thiết bị gửi tin nhắn:</strong>
                        </div>
                        <br />
                        <div>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                          nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel
                          illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui
                          blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                          </div>
                        <br />
                        <div>
                          Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                          nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                        </div>
                        <br />
                      </div>
                      <div>
                        <div>
                          <strong>Phạm vi ứng dụng của giải pháp</strong>
                        </div>
                        <br />
                        <div>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                          tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                          quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                          consequat. Duis autem vel eum iriure dolor in hendrerit in vulp utate velit esse molestie
                          consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto
                          odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait
                          nulla facilisi.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 col-xl-7">
                  <img style={{ marginLeft: '10%', marginTop: '12%' }} src={thiet_bi_gui_tin_nhan} alt="Về chúng tôi" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="awe-section-2">
          <div className="section_about lazyload" style={{ marginTop: '17px' }}>
            <div className="container">
              <div className="row">
                <div className="col-md-7 col-xl-7">
                  <img style={{ marginTop: '-14%', marginLeft: '-6%' }} src={mo_phong_he_thong} alt="Về chúng tôi" />
                </div>
                <div className="col-md-5 col-xl-5">
                  <div className="department-carousel2">
                    <div className="department-item">
                      <div className="h-sub" style={{ marginLeft: '17%' }}>MÔ HÌNH HỆ THỐNG</div>
                      <h2 className="title">Mô hình nguyên lý Mô hình nguyên lý</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                        tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                        nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                        Duis autem vel eum iriure dolor in hendrerit in vulp utate velit esse molestie consequat, vel
                        illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui
                        blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="awe-section-3">
          <div className="section_service_tab clearfix" style={{ background: '#FFFFFF' }}>
            <div className="container">
              <h3 className="c-center text-center">CÁCH TIẾP CẬN VÀ SỬ DỤNG BEEX</h3>
              <div className="title-wrap text-center">
                <h2 className="h1 double-title">
                  <span>Kết nối và quản lý tập trung với các bước đơn giản</span>
                </h2>
              </div>
              <div className="nav nav-pills-icons" role="tablist">
                <div style={{ marginRight: '150px' }}>
                  <div className="div1"><img style={{ width: '86px', height: '65px', margin: "44px 38px" }} src={website} alt="Về chúng tôi" /></div>
                  <div style={{ textAlign: 'center', margin: '0px 39px' }}>
                    <div><strong style={{ color: '#0E9347', marginLeft: '-10px' }}>Qua website hoặc app beex</strong></div>
                    <div style={{ width: '160px' }}>
                      <div> - Truy cập Beex.vn sau đó đăng nhập tài khoản</div>
                      <div>- Tải app Beex.vn trên Google Play và App Store</div>
                    </div>
                  </div>
                </div>
                <div style={{ marginRight: '150px' }}>
                  <div className="div1"><img style={{ width: '70px', height: '65px', margin: "44px 38px" }} src={ket_noi_cac_thiet_bi} alt="Về chúng tôi" /></div>
                  <div style={{ textAlign: 'center', margin: '0px 39px' }}>
                    <div><strong style={{ color: '#0E9347' }}>Kết nối các thiết bị</strong></div>
                    <div style={{ width: '160px' }}>Thêm box cùng lớp mạng với thiết bị đó.</div>
                  </div>
                </div>
                <div>
                  <div className="div1"><img style={{ width: '70px', height: '65px', margin: "44px 38px" }} src={quan_ly_va_quan_sat} alt="Về chúng tôi" /></div>
                  <div style={{ textAlign: 'center', margin: '0px 39px' }}>
                    <div><strong style={{ color: '#0E9347' }}>Quản lý và giám sát</strong></div>
                    <div style={{ width: '160px' }}>Giám sát mọi lúc và thông báo khẩn cấp. Xem lại dữ liệu lưu trữ dễ dàng.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="awe-section-3">
          <div className="section_service_tab2 clearfix">
            <div className="container">
              <h3 className="c-center text-center">KHO ỨNG DỤNG</h3>
              <div className="title-wrap">
                <div className="h1 double-title">
                  <span>Kho ứng dụng sẵn có đa dạng sẵn sàng tích hợp</span>
                </div>
              </div>
            </div>
          </div>
          <div className="container1">
            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            <style>{cssstyle}</style>
            <Slider {...settings}>
              <div>
                <div className="div1"><img style={{ width: '65px', height: '83px', margin: "34px 45px" }} src={thiet_bi_gui_tin_nhan} alt="Về chúng tôi" /></div>
                <div style={{ textAlign: 'center', margin: '0px 39px' }}>
                  <div><strong style={{ color: '#0E9347' }}>Thiết bị gửi tin nhắn</strong></div>
                  <div>- Truy cập Beex.vn sau đó đăng nhập tài khoản</div>
                  <div>- Tải app Beex.vn trên Google Play và App Store</div>
                  <br />
                  <Button className="a-img" title="Dùng thử tính năng" size='large' style={{ background: "#0E9347", borderRadius: "20px", border: "1px", fontSize: '14px' }}>
                    <span className="b-center"><Link title="Dùng thử tính năng" to="/Detail" style={{ color: '#FFFFFF' }}>Dùng thử tính năng</Link></span>
                  </Button>
                </div>
              </div>
              <div>
                <div className="div1"><img style={{ width: '77px', height: '62px', margin: "44px 38px" }} src={thiet_bi_gui_tin_nhan} alt="Về chúng tôi" /></div>
                <div style={{ textAlign: 'center', margin: '0px 39px' }}>
                  <div><strong style={{ color: '#0E9347' }}>Cảm biến môi trường</strong></div>
                  <div>Data security involves encryption</div>
                  <br />
                  <br />
                  <br />
                  <Button className="a-img" title="Dùng thử tính năng" size='large' style={{ background: "#0E9347", borderRadius: "20px", border: "1px", fontSize: '14px' }}>
                    <span className="b-center">Dùng thử tính năng</span>
                  </Button>
                </div>
              </div>
              <div>
                <div className="div1"><img style={{ width: '77px', height: '62px', margin: "44px 38px" }} src={thiet_bi_gui_tin_nhan} alt="Về chúng tôi" /></div>
                <div style={{ textAlign: 'center', margin: '0px 39px' }}>
                  <div><strong style={{ color: '#0E9347' }}>Đo nhiệt độ, độ ẩm</strong></div>
                  <div>Data security involves encryption</div>
                  <br />
                  <br />
                  <br />
                  <Button className="a-img" title="Dùng thử tính năng" size='large' style={{ background: "#0E9347", borderRadius: "20px", border: "1px", fontSize: '14px' }}>
                    <span className="b-center">Dùng thử tính năng</span>
                  </Button>
                </div>
              </div>
              <div>
                <div className="div1"><img style={{ width: '77px', height: '62px', margin: "44px 38px" }} src={thiet_bi_gui_tin_nhan} alt="Về chúng tôi" /></div>
                <div style={{ textAlign: 'center', margin: '0px 39px' }}>
                  <div><strong style={{ color: '#0E9347' }}>Công tắc thông minh</strong></div>
                  <div>Giám sát mọi lúc và thông báo khẩn cấp. Xem lại dữ liệu lưu trữ dễ dàng.</div>
                  <br />
                  <br />
                  <Button className="a-img" title="Dùng thử tính năng" size='large' style={{ background: "#0E9347", borderRadius: "20px", border: "1px", fontSize: '14px' }}>
                    <span className="b-center">Dùng thử tính năng</span>
                  </Button>
                </div>
              </div>
              <div>
                <div className="div1"><img style={{ width: '77px', height: '62px', margin: "44px 38px" }} src={thiet_bi_gui_tin_nhan} alt="Về chúng tôi" /></div>
                <div style={{ textAlign: 'center', margin: '0px 39px' }}>
                  <div><strong style={{ color: '#0E9347' }}>Tủ điện thông minh</strong></div>
                  <div>Giám sát mọi lúc và thông báo khẩn cấp. Xem lại dữ liệu lưu trữ dễ dàng.</div>
                  <br />
                  <br />
                  <Button className="a-img" title="Dùng thử tính năng" size='large' style={{ background: "#0E9347", borderRadius: "20px", border: "1px", fontSize: '14px' }}>
                    <span className="b-center">Dùng thử tính năng</span>
                  </Button>
                </div>
              </div>
              <div>
                <div className="div1"><img style={{ width: '77px', height: '62px', margin: "44px 38px" }} src={thiet_bi_gui_tin_nhan} alt="Về chúng tôi" /></div>
                <div style={{ textAlign: 'center', margin: '0px 39px' }}>
                  <div><strong style={{ color: '#0E9347' }}>Thiết bị gửi tin nhắn</strong></div>
                  <div>- Truy cập Beex.vn sau đó đăng nhập tài khoản</div>
                  <div>- Tải app Beex.vn trên Google Play và App Store</div>
                  <br />
                  <Button className="a-img" title="Dùng thử tính năng" size='large' style={{ background: "#0E9347", borderRadius: "20px", border: "1px", fontSize: '14px' }}>
                    <span className="b-center">Dùng thử tính năng</span>
                  </Button>
                </div>
              </div>
            </Slider>
          </div>
        </section>
      </>
    )
  }
}
const cssstyle = `
// .slick-next:before, .slick-prev:before {
//     color: #0E9347;
//     font-size: 25px;
//     line-height: 0.4;
// }
`
export default BeexIotPlatformDetail