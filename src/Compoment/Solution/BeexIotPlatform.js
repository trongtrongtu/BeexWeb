import React, { Component } from 'react';
import { LineOutlined, AndroidFilled, AppleFilled, DesktopOutlined } from '@ant-design/icons';
import { Form, Input, Button, Checkbox } from 'antd';
import Slider from "react-slick";
import Beex_IOT_Platform_1 from './images/Beex_IOT_Platform_1.png';
import thiet_bi_gui_tin_nhan from './images/thiet_bi_gui_tin_nhan.png';
import cam_bien_moi_truong from './images/cam_bien_moi_truong.png';
import Camera from './images/Camera.png';
import Bigdata from './images/Bigdata.png';
import Communication from './images/Communication.png';
import cmc_global from './images/cmc_global.png';
import ho_tro from './images/ho_tro.png';

class Solution extends Component {
  render() {
    const layout = {
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 16,
      },
    };
    const tailLayout = {
      wrapperCol: {
        offset: 4,
        span: 16,
      },
    };
    const onFinish = values => {
      console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      // autoplay: true,
      // autoplaySpeed: 5000,
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
                <span> Hệ thống thực hiện giám sát và điều khiển liên tục, hỗ trợ tăng chất lượng, giảm nghẽn mạng và tiết kiệm 30% băng thông sử dụng so với streaming thông thường.</span>
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
                      <div className="h-sub"><LineOutlined style={{ fontSize: '24px' }} /> BEEX IOT PLATFORM</div>
                      <h2 className="title">Nền tảng cloud hỗ trợ đa dạng thiết bị kết nối, hàng triệu thiết bị</h2>
                      <p>There are some other important criteria that differentiate IoT platforms between each other, such as scalability, customizability, ease of use, code control, integration with 3rd party software, deployment options, and the data security level.</p>
                      <div><strong>Thiết bị gửi tin nhắn</strong> - advanced IoT platforms ensure elastic scalability across any number of endpoints that the client may require.</div>
                      <div><strong>Cảm biến môi trường:</strong>
                        <ul>
                          <li><strong>Đo bụi</strong> - a crucial factor for the speed of delivery. It closely relates to flexibility of integration APIs, louse coupling of the platform’s components, and source code transparency.</li>
                          <li><strong>Đo nhiệt độ, độ ẩm</strong> - data security involves encryption, comprehensive identity management, and flexible deployment. End-to-end data flow encryption.</li>
                        </ul>
                      </div>
                      <div><strong>Công tắc thông minh</strong> - deployment options, and the data security level.</div>
                      <div><strong>Tủ điện thông minh</strong> - deployment options, and the data security level.</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 col-xl-7">
                  <img style={{ marginLeft: '10%', marginTop: '12%' }} src={Beex_IOT_Platform_1} alt="Về chúng tôi" />
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
                    <span className="b-center">Dùng thử tính năng</span>
                  </Button>
                </div>
              </div>
              <div>
                <div className="div1"><img style={{ width: '77px', height: '62px', margin: "44px 38px" }} src={cam_bien_moi_truong} alt="Về chúng tôi" /></div>
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
                <div className="div1"><img style={{ width: '77px', height: '62px', margin: "44px 38px" }} src={cam_bien_moi_truong} alt="Về chúng tôi" /></div>
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
                <div className="div1"><img style={{ width: '77px', height: '62px', margin: "44px 38px" }} src={cam_bien_moi_truong} alt="Về chúng tôi" /></div>
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
                <div className="div1"><img style={{ width: '77px', height: '62px', margin: "44px 38px" }} src={cam_bien_moi_truong} alt="Về chúng tôi" /></div>
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
                <div className="div1"><img style={{ width: '77px', height: '62px', margin: "44px 38px" }} src={cam_bien_moi_truong} alt="Về chúng tôi" /></div>
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
          <section className="awe-section-3" style={{ background: '#0E9347' }}>
            <div className="clearfix">
              <div className="container" style={{ color: '#FFFFFF' }}>
                <br />
                <span className="section_service_tab3">
                  <span>BEEX HỖ TRỢ ĐA NỀN TẢNG</span>
                </span>
                <br />
                <span className="section_service_tab4">
                  <span>Đã có mặt trên Desktop và Mobile</span>
                </span>
                <span className="section_service_tab5">
                  <ul className="item_big" style={{ display: 'inline-flex', marginTop: '-15px' }}>
                    <li className="nav-item">
                      <DesktopOutlined style={{ fontSize: '50px', color: '#FFFFFF', marginRight: '100px' }} />
                      <br />
                      <span>Desktop</span>
                    </li>
                    <li className="nav-item ">
                      <AppleFilled style={{ fontSize: '50px', color: '#FFFFFF', marginRight: '100px' }} />
                      <br />
                      <span style={{ marginLeft: '15px' }}>Ios</span>
                    </li>
                    <li className="nav-item ">
                      <AndroidFilled style={{ fontSize: '50px', color: '#FFFFFF', marginRight: '100px' }} />
                      <br />
                      <span>Android</span>
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </section>
          <section className="awe-section-3">
            <br />
            <br />
          </section>
        </section>
        <section className="awe-section-3">
          <div className="section_service_tab clearfix">
            <div className="container">
              <h3 className="c-center text-center">TÍCH HỢP HỆ THỐNG</h3>
              <div className="title-wrap text-center">
                <h2 className="h1 double-title">
                  <span>Linh hoạt trong khả năng kết nối và đồng bộ với các hệ thống khác</span>
                </h2>
              </div>
              <div className="nav nav-pills-icons" role="tablist">
                <div style={{ marginRight: '150px' }}>
                  <div className="div1"><img style={{ width: '77px', height: '62px', margin: "44px 38px" }} src={Camera} alt="Về chúng tôi" /></div>
                  <div style={{ textAlign: 'center', margin: '0px 39px' }}>
                    <div><strong style={{ color: '#0E9347' }}>Camera</strong></div>
                    <div style={{ width: '160px' }}>Dễ dàng kết nối Camera. Linh hoạt trong khả năng kết nối và đồng bộ với các hệ thống khác</div>
                  </div>
                </div>
                <div style={{ marginRight: '150px' }}>
                  <div className="div1"><img style={{ width: '77px', height: '62px', margin: "44px 38px" }} src={Bigdata} alt="Về chúng tôi" /></div>
                  <div style={{ textAlign: 'center', margin: '0px 39px' }}>
                    <div><strong style={{ color: '#0E9347' }}>Bigdata</strong></div>
                    <div style={{ width: '160px' }}>Dễ dàng kết nối Bigdata. Linh hoạt trong khả năng kết nối và đồng bộ với các hệ thống khác</div>
                  </div>
                </div>
                <div>
                  <div className="div1"><img style={{ width: '77px', height: '62px', margin: "44px 38px" }} src={Communication} alt="Về chúng tôi" /></div>
                  <div style={{ textAlign: 'center', margin: '0px 39px' }}>
                    <div><strong style={{ color: '#0E9347' }}>Communication</strong></div>
                    <div style={{ width: '160px' }}>Linh hoạt trong khả năng kết nối và đồng bộ với các hệ thống khác</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="awe-section-3">
          <div className="section_service_tab1 clearfix">
            <div className="container">
              <h3 className="c-center text-center">USE CASE</h3>
              <div className="title-wrap">
                <div className="h1 double-title">
                  <span>Dự án Beex IOT Platform đã triển khai thành công</span>
                </div>
              </div>
              <div className="title-wrap">
                <div className="double-title">
                  <img className="lazyload imageload img-fluid loaded" style={{ marginTop: "30px", width: '639px', height: '436px' }} src={cmc_global} alt="cmc datacenter" data-was-processed="true" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="awe-section-2">
          <div className="section_about1 lazyload">
            <div className="container">
              <div className="row">
                <div className="col-md-7 col-xl-7">
                  <img style={{ marginLeft: '10%', marginTop: '12%', width: '450px', height: '450px' }} src={ho_tro} alt="Về chúng tôi" />
                </div>
                <div className="col-md-5 col-xl-5">
                  <div className="department-carousel2">
                    <div className="department-item">
                      <div className="h-sub text-center" style={{ marginBottom: '50px', marginTop: '20px', marginRight: '50px' }}>BẠN CẦN CHÚNG TÔI HỖ TRỢ</div>
                      <Form
                        {...layout}
                        name="basic"
                        initialValues={{
                          remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                      >
                        <Form.Item
                          name="username"
                          rules={[
                            {
                              required: true,
                              message: 'Please input your username!',
                            },
                          ]}
                        >
                          <Input style={{ borderRadius: '30px', width: '416px', height: '48px', maxWidth: 'initial' }} placeholder="Họ tên liên lạc" />
                        </Form.Item>
                        <Form.Item
                          name="number"
                          rules={[
                            {
                              required: true,
                              message: 'Please input your number!',
                            },
                          ]}
                        >
                          <Input style={{ borderRadius: '30px', width: '416px', height: '48px', maxWidth: 'initial' }} placeholder="Số điện thoại" />
                        </Form.Item>
                        <Form.Item
                          name="email"
                          rules={[
                            {
                              required: true,
                              message: 'Please input your email!',
                            },
                          ]}
                        >
                          <Input style={{ borderRadius: '30px', width: '416px', height: '48px', maxWidth: 'initial' }} placeholder="Email" />
                        </Form.Item>
                        <Form.Item
                          name="support"
                          rules={[
                            {
                              required: true,
                              message: 'Please input your text support!',
                            },
                          ]}
                        >
                          <Input.TextArea style={{ borderRadius: '30px', width: '416px', height: '120px', maxWidth: 'initial' }} placeholder="Chúng tôi sẵn sàng lắng nghe ý kiến hỗ trợ của bạn" />
                        </Form.Item>
                        <Form.Item {...tailLayout}>
                          <Button type="primary" style={{ borderRadius: '30px', width: '264px', height: '48px', maxWidth: 'initial', background: '#0F813F' }} htmlType="submit">
                            <strong>GỬI HỖ TRỢ</strong>
                          </Button>
                        </Form.Item>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}
const cssstyle = `
.slick-next:before, .slick-prev:before {
    color: #0E9347;
    font-size: 25px;
    line-height: 0.4;
}
`
export default Solution