import React, { Component } from 'react';
import { LineOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Link } from 'react-router-dom'
import 'antd/dist/antd.css';
import logo from './images/ve_chung_toi.png';
import Beex_IOT_Platform from './images/Beex_IOT_Platform.png'
import Beex_Bigdata_Platform from './images/Beex_Bigdata_Platform.png'
import Beex_Camera_Platform from './images/Beex_Camera_Platform.png'
import Beex_Communication_Platform from './images/Beex_Communication_Platform.png'
import cmc_telecom from './images/cmc_telecom.png'
import fnc_entertainment from './images/fnc_entertainment.png'
import cgv_cinemas from './images/cgv_cinemas.png'
import zit from './images/zit.png'
import ecoland from './images/ecoland.png'
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
                      <div className="h-sub"><LineOutlined style={{ fontSize: '24px' }} /> VỀ CHÚNG TÔI</div>
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
      </React.Fragment>
    );
  }
}
export default Home