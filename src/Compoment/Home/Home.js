import React, { Component } from 'react';
import { Button } from 'antd';
import { PhoneOutlined, MailOutlined, HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import 'antd/dist/antd.css';
import logoHome from './images/logo.png'
import logo from './images/ve_chung_toi.png';
import quoc_ky from './images/quoc_ky.png'
import Beex_IOT_Platform from './images/Beex_IOT_Platform.png'
import Beex_Bigdata_Platform from './images/Beex_Bigdata_Platform.png'
import Beex_Camera_Platform from './images/Beex_Camera_Platform.png'
import Beex_Communication_Platform from './images/Beex_Communication_Platform.png'
import cmc_telecom from './images/cmc_telecom.png'
import fnc_entertainment from './images/fnc_entertainment.png'
import cgv_cinemas from './images/cgv_cinemas.png'
import zit from './images/zit.png'
import ecoland from './images/ecoland.png'
import beex_footer from './images/Beex_footer.png'
import cmc_datacenter from './images/cmc_datacenter.png'

class Home extends Component {
  state = {
    active_1: "active",
    active_2: "",
    active_3: "",
    active_4: "",
  };
  replace = (value) => {
    if (value == "active_1") {
      this.setState({
        active_1: "active",
        active_2: "",
        active_3: "",
        active_4: "",
      })
    } else if (value == "active_2") {
      this.setState({
        active_1: "",
        active_2: "active",
        active_3: "",
        active_4: "",
      })
    } else if (value == "active_3") {
      this.setState({
        active_1: "",
        active_2: "",
        active_3: "active",
        active_4: "",
      })
    } else if (value == "active_4") {
      this.setState({
        active_1: "",
        active_2: "",
        active_3: "",
        active_4: "active",
      })
    }
  }
  render() {
    const { active_1, active_2, active_3, active_4 } = this.state
    return (
      <React.Fragment>
        <div className="wraphead_mobile clearfix">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-12">
                <div className="logo">
                  <a href="/" className="logo-wrapper ">
                    <img src={logoHome} alt="Beex" />
                  </a>
                </div>
              </div>
              <div className="col-lg-7 col-xl-8 col-md-0">
                <div className="head_nav">
                  <div className="wrap_main d-none d-lg-block d-xl-block">
                    <div className="header-nav">
                      <ul className="item_big">
                        <li className="nav-item">
                          <a className="a-img" href="#" title="Giới thiệu">
                            <span>Giới thiệu</span>
                          </a>
                        </li>
                        <li className="nav-item ">
                          <a className="a-img" href="#" title="Giải pháp">
                            <span>Giải pháp</span>
                          </a>
                          <ul className="item_small">
                            <li>
                              {/* <a href="#" title="Beex IOT Platform">Beex IOT Platform </a> */}
                              <Link to="/solution">Beex IOT Platform</Link>
                            </li>
                            <li>
                              <a href="#" title="Beex Camera Platform">Beex Camera Platform </a>
                            </li>
                            <li>
                              <a href="#" title="Beex Bigdata Platform">Beex Bigdata Platform </a>
                            </li>
                            <li>
                              <a href="#" title="Beex Communication Platform">Beex Communication Platform </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item ">
                          <a className="a-img" href="#" title="Hỗ trợ">
                            <span>Hỗ trợ</span>
                          </a>
                        </li>
                        <li className="nav-item ">
                          <Button size='large' style={{ background: "#0E9347", borderRadius: "5px", border: "1px" }}>
                            <a className="a-img" href="#" title="Đăng nhập">
                              <span className="b-center">Đăng nhập</span>
                            </a>
                          </Button>
                        </li>
                        <li className="nav-item ">
                          <a className="a-img" href="#" title="Đăng ký">
                            <span>Đăng ký</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-xl-2 col-md-12">
                <div className="cartsearch">
                  <div className="carthd">
                    <div className="mini-cart text-xs-center">
                      <div className="heading-cart cart_header">
                        <div className="icon_hotline">
                          <img className='quoc_ky' src={quoc_ky} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="bread-crumb">
          <span className="crumb-border" />
          <div className="container">
            <div className="rows">
              <div className="col-xs-12 a-left">
                <span>Smart streaming camera</span>
              </div>
              <div className="b-left">
                <span>Hệ thống thực hiện quá trình giám sát liên tục, hỗ trợ tăng chất lượng giảm nghẽn mạng. Giải pháp tiết kiệm tới 30% băng thông, tối ưu hơn so với streaming thường</span>
              </div>
              <Button size='large' className="a-center"><span className='a-center-button' style={{ border: "0px" }}>Dùng thử ngay</span></Button>
            </div>
          </div>
        </section>
        <section className="awe-section-2">
          <div className="section_about lazyload">
            <div className="container">
              <div className="row">
                <div className="col-md-4 col-xl-4">
                  <div className="department-carousel2">
                    <div className="department-item">
                      <div className="h-sub"> VỀ CHÚNG TÔI</div>
                      <h2 className="title">Beex.vn là gì? Tại sao nên lựa chọn và chúng tôi có đặc trưng nổi bật</h2>
                      <p>Là một đơn vị cung cấp dịch vụ trẻ nhưng chúng tôi đã đưa đến những giải pháp giám sát và lưu trữ, phân tích dữ liệu nhanh chóng, an toàn, tối ưu hiệu quả cho doanh nghiệp cũng như cá nhân. Đội ngũ Beex xây dựng những Platform hỗ trợ và tích hợp các ứng dụng liên quan trên đa nền tảng công nghệ Web, Mobile App, Desktop giúp người dùng sử dụng tiện lợi.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-xl-5">
                  <img src={logo} alt="Về chúng tôi" />
                </div>
                <div className="col-md-3 col-xl-3">
                  <div className="department-carousel2">
                    <div className="department-item">
                      <br />
                      <br />
                      <p>Với mục đích đem lại những giải pháp lưu trữ và xử lý thông tin, mang đến những giá trị, nâng cao chất lượng công việc lẫn cuộc sống. Chúng tôi mong muốn đồng hành cùng bạn trên chặng đường phát triển của thời đại!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="awe-section-3">
          <div className="section_service_tab clearfix">
            <div className="container">
              <h3 className="c-center text-center">GIẢI PHÁP</h3>
              <div className="title-wrap text-center">
                <h2 className="h1 double-title">
                  <span>Beex hỗ trợ bạn giám sát và vận hành hệ thống hiệu quả hơn</span>
                </h2>
              </div>
              <div className="nav nav-pills-icons" role="tablist">
                <a className={`nav-link ${active_1}`} onClick={() => this.replace("active_1")} data-toggle="pill" role="tab" aria-expanded="true">
                  <span>Beex IOT Platform</span>
                </a>
                <a className={`nav-link ${active_2}`} onClick={() => this.replace("active_2")} data-toggle="pill" role="tab" aria-expanded="false">
                  <span>Beex Camera Platform</span>
                </a>
                <a className={`nav-link ${active_3}`} onClick={() => this.replace("active_3")} data-toggle="pill" role="tab" aria-expanded="false">
                  <span>Beex Bigdata Platform</span>
                </a>
                <a className={`nav-link ${active_4}`} onClick={() => this.replace("active_4")} data-toggle="pill" role="tab" aria-expanded="false">
                  <span>Beex Communication Platform</span>
                </a>
              </div>
              <div id="tab-content" className="tab-content mt-2 mt-sm-4">
                <div id="tabservice-1" className={`tab-pane ${active_1}`} role="tabpanel" style={{}} aria-expanded="true">
                  <div className="row">
                    <div className="col-md-6 h-100 mb-2 mb-md-0">
                      <img className="lazyload imageload img-fluid loaded" src={Beex_IOT_Platform} alt="Beex IOT Platform" data-was-processed="true" />
                    </div>
                    <div className="col-md-6">
                      <div className="pt-xl-1">
                        <div className="contentx">
                          <br />
                          <p> Nền tảng hỗ trợ kết nối và tích hợp các ứng dụng của Beex. Chúng tôi xây dựng mạng lưới an toàn cho tất cả các thiết bị dễ dàng tham gia gửi dữ liệu và nhận tín hiệu điều khiển trực tiếp từ hệ thống.</p>
                        </div>
                        <a href="#" title="Xem chi tiết" className="btn-main margin-top-15 margin-right-15"><span>Xem chi tiết</span></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tabservice-2" className={`tab-pane ${active_2}`} role="tabpanel" style={{}} aria-expanded="false">
                  <div className="row">
                    <div className="col-md-6 h-100 mb-2 mb-md-0">
                      <img className="lazyload imageload img-fluid loaded" src={Beex_Camera_Platform} alt="Beex Camera Platform" />
                    </div>
                    <div className="col-md-6">
                      <div className="pt-xl-1">
                        <div className="contentx">
                          <p>Beex.vn cung cấp nền tảng quản lý camera tập trung. Phân tích dữ liệu đa dạng như nhận dạng khuôn mặt người quen, biển số xe, số người xuất hiện trong khung hình, thống kê độ tuổi giới tính. Hệ thống nâng cao chức năng kiểm soát hệ thống, dễ dàng tích hợp với CRM, ERP.</p>
                        </div>
                        <a href="#" title="Xem chi tiết" className="btn-main margin-top-15 margin-right-15"><span>Xem chi tiết</span></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tabservice-3" className={`tab-pane ${active_3}`} role="tabpanel" style={{}} aria-expanded="false">
                  <div className="row">
                    <div className="col-md-6 h-100 mb-2 mb-md-0">
                      <img className="lazyload imageload img-fluid loaded" src={Beex_Bigdata_Platform} alt="Beex Bigdata Platform" />
                    </div>
                    <div className="col-md-6">
                      <div className="pt-xl-1">
                        <div className="contentx">
                          <p>Cung cấp công cụ giúp đơn giản hoá việc tổng hợp các nguồn dữ liệu, quản lý các tiến trình thu thập dữ liệu phức tạp, tổ chức lưu trữ dữ liệu lớn hàng trăm TB. Ngoài ra BeeX Bigdata platform còn cung cấp các giải pháp và công cụ khai thác dữ liệu xây dựng dashboard, phân tích AI chuyên sâu.</p>
                        </div>
                        <a href="#" title="Xem chi tiết" className="btn-main margin-top-15 margin-right-15"><span>Xem chi tiết</span></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tabservice-4" className={`tab-pane ${active_4}`} role="tabpanel" style={{}} aria-expanded="false">
                  <div className="row">
                    <div className="col-md-6 h-100 mb-2 mb-md-0">
                      <img className="lazyload imageload img-fluid loaded" src={Beex_Communication_Platform} alt="Beex Communication Platform" />
                    </div>
                    <div className="col-md-6">
                      <div className="pt-xl-1">
                        <div className="contentx">
                          <p>Cung cấp SDK cho voice/video call trên nền tảng web và mobile giúp khách hàng sử dụng tiện lợi mọi lúc mọi nơi.</p>
                        </div>
                        <a href="#" title="Xem chi tiết" className="btn-main margin-top-15 margin-right-15"><span>Xem chi tiết</span></a>
                      </div>
                    </div>
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
                  <span>Đặc trưng giữa người dùng bên ngoài và hệ thống</span>
                </div>
              </div>
              <div className="title-wrap">
                <div className="double-title">
                  <div style={{ position: "absolute", bottom: "26px", background: "rgba(255, 254, 254, 0.7)" }}>
                    <div className="CMC_Datacenter">CMC Datacenter</div>
                    <div className="CMC_Datacenter1">Chúng tôi phối hợp với CMC triển khai hệ thống Camera-Platform quản lý tập trung lưu trữ không giới hạn dữ liệu Camera ở trung tâm DC 3 miền.</div>
                  </div>
                  <img className="lazyload imageload img-fluid loaded" style={{ marginTop: "30px" }} src={cmc_datacenter} alt="cmc datacenter" data-was-processed="true" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="awe-section-3">
          <div className="section_service_tab clearfix">
            <div className="container">
              <h3 className="c-center text-center">ĐỐI TÁC</h3>
              <div className="title-wrap text-center">
                <h2 className="h1 double-title">
                  <span>Đối tác khách hàng thân thiết</span>
                </h2>
              </div>
              <div className="nav nav-pills-icons" role="tablist">
                <img className="lazyload_1 imageload img-fluid" src={cmc_telecom} alt="cmc datacenter" />
                <img className="lazyload_1 imageload img-fluid" src={zit} alt="cmc datacenter" />
                <img className="lazyload_1 imageload img-fluid" src={fnc_entertainment} alt="cmc datacenter" />
                <img className="lazyload_1 imageload img-fluid" src={ecoland} alt="cmc datacenter" />
                <img className="lazyload_1 imageload img-fluid" src={cgv_cinemas} alt="cmc datacenter" />
              </div>
            </div>
          </div>
        </section>
        <div className="section footer_wwap">
          <link rel="stylesheet" href="./Ego Medical_files/all.css" media="all" /><footer className="footer">
            <div className="site-footer">
              <div className="mid-footer clearfix">
                <div className="container">
                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                      <div className="widget-ft first before">
                        <h4 className="title-menu">
                          <img className="lazyload_2 imageload img-fluid" src={beex_footer} alt="Beex" />
                        </h4>
                        <div className="collapse" id="collapseListMenu01">
                          <ul className="list-menu">
                            <li className="li_menu"><a href="#">Nền tảng và ứng dụng điện toán đám mây cho camera.</a></li>
                            <li className="li_menu"><a href="#"> Giúp quản lý hệ thống camera tập trung bằng công nghệ điện toán đám mây.</a></li>
                            <li className="li_menu"><a href="#">Giải pháp lưu trữ và xử lý thông tin tối ưu cho bạn.</a></li>
                            <li className="li_menu"><a href="#">Copyright 2020 Beex.vn. All rights reserved.</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-2">
                      <div className="widget-ft first before">
                        <h4 className="title-menu">
                          <a role="button" className="collapsed" data-toggle="collapse" aria-expanded="false" data-target="#collapseListMenu02" aria-controls="collapseListMenu02">
                            GIẢI PHÁP <i className="fa fa-plus hidden" aria-hidden="true" />
                          </a>
                        </h4>
                        <div className="collapse" id="collapseListMenu02">
                          <ul className="list-menu">
                            <li className="li_menu"><a href="#">Beex IOT Platform</a></li>
                            <li className="li_menu"><a href="#">Beex Camera Platform</a></li>
                            <li className="li_menu"><a href="#">Beex Bigdata Platform</a></li>
                            <li className="li_menu"><a href="#">Beex Communication Platform</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                      <div className="widget-ft first before">
                        <h4 className="title-menu">
                          <a role="button" className="collapsed" data-toggle="collapse" aria-expanded="false" data-target="#collapseListMenu03" aria-controls="collapseListMenu03">
                            TRUY CẬP NHANH <i className="fa fa-plus hidden" aria-hidden="true" />
                          </a>
                        </h4>
                        <div className="collapse" id="collapseListMenu03">
                          <ul className="list-menu">
                            <li className="li_menu"><a href="#">Điều khoản sử dụng giải pháp</a></li>
                            <li className="li_menu"><a href="#">Những giải pháp mới nhất</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                      <div className="widget-ft first before lasst">
                        <h4 className="title-menu">
                          <a role="button" className="collapsed" data-toggle="collapse" aria-expanded="false" data-target="#collapseListMenu04" aria-controls="collapseListMenu04">
                            LIÊN HỆ <i className="fa fa-plus hidden" aria-hidden="true" />
                          </a>
                        </h4>
                        <div className="collapse" id="collapseListMenu04">
                          <ul className="list-menu">
                            <li className="li_menu"><PhoneOutlined style={{ fontSize: '20px' }} /> <a href="#">Hotline: 1900 8198</a></li>
                            <li className="li_menu"><MailOutlined style={{ fontSize: '20px' }} /> <a href="#">Gmail: Beex.vn@gmail.com</a></li>
                            <li className="li_menu"><HomeOutlined style={{ fontSize: '20px' }} /> <a href="#">Số 234 Tôn Đức Thắng, Đống Đa HN.</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}
export default Home