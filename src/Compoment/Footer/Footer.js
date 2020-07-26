import React, { Component } from 'react';
import { PhoneOutlined, MailOutlined, HomeOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import beex_footer from './images/Beex_footer.png';

class Footer extends Component {
  render() {
    return (
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
    )
  }
}
export default Footer