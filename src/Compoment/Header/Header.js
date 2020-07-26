import React, { Component } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom'
import logoHome from './images/logo.png'
import quoc_ky from './images/quoc_ky.png'

class Header extends Component {
  render() {
    return (
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
                            <Link title="Beex IOT Platform" to="/BeexIotPlatform">Beex IOT Platform</Link>
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
    )
  }
}
export default Header