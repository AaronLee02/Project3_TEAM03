import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import cookie from "react-cookies";
import $ from "jquery";
import Swal from "sweetalert2";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernm: "",
    };
  }
  componentDidMount() {
    var cookie_userid = cookie.load("userid");
    var cookie_usernm = cookie.load("username");
    var cookie_password = cookie.load("userpassword");
    console.log("cookie:", cookie_userid);

    if (cookie_userid != undefined) {
      const expires = new Date();
      expires.setMinutes(expires.getMinutes() + 60);

      cookie.save("userid", cookie_userid, { path: "/", expires });
      cookie.save("username", cookie_usernm, { path: "/", expires });
      cookie.save("userpassword", cookie_password, { path: "/", expires });

      $(".menulist").show();
      $(".hd_top").show();
      $(".login").hide();
    } else {
      $(".menulist").hide();
      $(".hd_top").hide();
      $(".login").show();
    }
    this.callSessionInfoApi();
  }

  callSessionInfoApi = (type) => {
    axios
      .post("/fund/session", {
        useremail: cookie.load("userid"),
        username: cookie.load("username"),
      })
      .then((response) => {
        console.log(response.data);
        this.setState({ usernm: response.data });
      })
      .catch((error) => {
        this.sweetalert(
          "작업중 오류가 발생하였습니다.",
          error,
          "error",
          "닫기"
        );
      });
  };

  sweetalert = (title, contents, icon, confirmButtonText) => {
    Swal.fire({
      title: title,
      text: contents,
      icon: icon,
      confirmButtonText: confirmButtonText,
    });
  };

  myInfoHover() {
    $(".hd_left > li > .box1").stop().fadeIn(400);
  }

  myInfoLeave() {
    $(".hd_left > li > .box1").stop().fadeOut(400);
  }

  logout = async (e) => {
    cookie.remove("userid", { path: "/" });
    cookie.remove("username", { path: "/" });
    cookie.remove("userpassword", { path: "/" });
    window.location.href = "/login";
  };

  render() {
    return (
      <header>
        <div className="top_bg">
          <div className="container">
            <div className="header_top-sec">
              <div className="top_left">
                <ul className="login">
                  <li className="top_link">
                    <Link to={"/loginform"}>로그인</Link>
                  </li>
                  <li className="top_link">
                    <Link to={"/register"}>회원가입</Link>
                  </li>
                </ul>
              </div>
      <div className="hd_top">
          <div className="top_wrap ct1 af">
          <ul className="hd_left af">
          <li className="my1" onMouseEnter={this.myInfoHover}
          onMouseLeave={this.myInfoLeave}>{/* <b>내정보</b> */}
                  <div className="top_left">
                      <ul>
                      <li><a>내 정보 수정</a></li>
                      <li><a href="javascript:" onClick={this.logout}>로그아웃</a></li>
                      </ul>
                  </div>
                  </li>
          </ul>
          <div className="top_left">
              <p><span>'{this.state.usernm}'</span>님 반갑습니다.</p>
          </div>
          </div>
          </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
        <div className="header-top">
          <div className="header-bottom">
            <div className="container">
              <div className="logo">
                <Link to={"/"}>
                  <h1>MOA</h1>
                </Link>
              </div>
              <div className="top-nav">
                <ul className="memenu skyblue">
                  <li className="grid">
                    <Link to={"/product"}>펀딩하기</Link>
                  </li>
                  <li className="grid">
                    <Link to={"/registration"}>펀딩등록</Link>
                  </li>
                  <li className="grid">
                    <Link to={"/event"}>이벤트</Link>
                  </li>
                  <li className="grid">
                    <Link to={"/SoftwareList"}>게시판</Link>
                  </li>
                  <li className="grid">
                    <Link to={"/MarketCapChart"}>그래프</Link>
                  </li>
                  <li className="grid">
                    <Link to={"/MapContainer"}>지도</Link>
                  </li>
                </ul>
                <div className="clearfix"></div>
              </div>
              <div className="clearfix"></div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
