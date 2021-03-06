import React, { Component } from "react";
import { Link } from "react-router-dom";



import axios from "axios";
import cookie from 'react-cookies';
import $ from 'jquery';
import Swal from 'sweetalert2';
// import { format } from "morgan";

class registration extends Component {


  constructor(props) {
    var cookie_userid = cookie.load('userid')
    var cookie_usernm = cookie.load('username')
    var cookie_password = cookie.load('userpassword')
    console.log("cookie:", cookie_userid)
    super(props);
    this.state = {
      usernm: '',
      useremail:'',
      
    };
  }

  submitClick = (e) => {

    // const iamge=e.target.files[0];
    this.email=$('#email').val();
    this.prjectTitle=$('#project_title').val();
    this.price=$('#price').val();
    this.name=$('#name').val();
    this.phoneNum=$('#phonenum').val();
    this.text=$('#text').val();
    // const formData=new FormData();
    // formData.append('image',iamge)
    console.log(this.email,this.prjectTitle,this.price,this.name,this.phoneNum,this.text)

    axios.post('fund/funding',{
      email:this.email,
      projecttitle:this.prjectTitle,
      Price:this.price,
      name:this.name,
      phonenum:this.phoneNum,
      text:this.text,
      // image:formData,

    })
  }




  componentDidMount() {
    var cookie_userid = cookie.load('userid')
    var cookie_usernm = cookie.load('username')
    var cookie_password = cookie.load('userpassword')
    console.log("cookie:", cookie_userid)

    if (cookie_userid != undefined) {
      const expires = new Date()
      expires.setMinutes(expires.getMinutes() + 60)

      cookie.save('userid', cookie_userid
        , { path: '/', expires })
      cookie.save('username', cookie_usernm
        , { path: '/', expires })
      cookie.save('userpassword', cookie_password
        , { path: '/', expires })

      $('.menulist').show()
      $('.hd_top').show()
    } else {
      $('.menulist').hide()
      $('.hd_top').hide()
    }
    this.callSessionInfoApi()
  }

  callSessionInfoApi = (type) => {
    axios.post('/fund/session', {
      useremail: cookie.load('userid')
      , username: cookie.load('username')
    })
      .then(response => {
        console.log(response.data)
        this.setState({ usernm: response.data })
      })
      .catch(error => {
        this.sweetalert('????????? ????????? ?????????????????????.', error, 'error', '??????');
      });
  }

  sweetalert = (title, contents, icon, confirmButtonText) => {
    Swal.fire({
      title: title,
      text: contents,
      icon: icon,
      confirmButtonText: confirmButtonText
    })
  }





  handleFileInput(type, e) {
    if (type == 'file') {
      $('#imagefile').val(e.target.files[0].name)
    } else if (type == 'file2') {
      $('#imagefile2').val(e.target.files[0].name)
    } else if (type == 'manual') {
      $('#manualfile').val(e.target.files[0].name)
    }
    this.setState({
      selectedFile: e.target.files[0],
    })
  }


  callSessionInfoApi = (type) => {
    axios
      .post("/fund/session", {
        useremail: cookie.load("userid"),
        username: cookie.load("username"),
      })
      .then((response) => {
        console.log(response.data);
        this.setState({ usernm: response.data[0] });
        this.setState({ useremail: response.data[1] });
      })
      .catch((error) => {
        this.sweetalert(
          "????????? ????????? ?????????????????????.",
          error,
          "error",
          "??????"
        );
      });
  };
  render() {
    return (
      <div className="contact">
        <div className="container">
          <ol className="breadcrumb">
            <li>
              <a href="index.html">MOA</a>
            </li>
            <li className="active">????????????</li>
          </ol>




          <form className="wz form Form_form__3ASTU">
            <div className="field Form_field__35I9T required CorporationRegistrationCorpNameField_field__1N1CN">
              <label className="wz label Label_label__3oH0h">????????????</label>
              <p className="CorporationRegistrationCorpNameField_info__3fSE7">
                ??????????????? ????????? ???????????? ??????????????? 1?????? ???????????????.
              </p>
              <div className="wz dropdown outline block Dropdown_dropdown__31dpZ">
                <div
                  className="Dropdown_value__35Inl Dropdown_placeholder__3Wobx"
                  aria-hidden="true"
                >
                  ???????????? ??????
                </div>
                <select name="categoryId" id="category">
                  <option value disabled>
                    ???????????? ??????
                  </option>
                  <option value={287}>??????????????</option>
                  <option value={288}>??????????????</option>
                  <option value={311}>??????</option>
                  <option value={289}>??????</option>
                  <option value={310}>???????????</option>
                  <option value={296}>??????????????</option>
                  <option value={297}>???????????????????????</option>
                  <option value={290}>?????????????????</option>
                  <option value={309}>?????????????????</option>
                  <option value={308}>????????????</option>
                  <option value={292}>??????????????</option>
                  <option value={312}>??????????????</option>
                </select>
              </div>
            </div>




            <div className="field Form_field__35I9T required FormikFieldInput_field__1J8ZD">
              <label className="wz label Label_label__3oH0h">
                ???????????? ??????
              </label>
              <div className="FormikFieldInput_inputContainer__jgofT">
                <div className="wz input right FormikFieldInput_input__3srmA">
                  <input
                    id="project_title"
                    placeholder="?????? ??????"
                    maxLength={40}
                    values="[object Object]"
                    errors="[object Object]"
                    touched="[object Object]"
                    submitcount={0}
                    initialvalues="[object Object]"
                    name="title"
                    type="text"
                    defaultValue
                  />
                </div>
                <em className="helper FormikFieldInput_helper__3sJ2a">
                  40??? ??????
                </em>
              </div>
            </div>




            <div className="MouseOverGuide_container__3jDBz">
              <div className="MouseOverGuide_contents__APrXG">
                <div className="field Form_field__35I9T required FormikFieldInput_field__1J8ZD">
                  <label className="wz label Label_label__3oH0h">
                    ?????? ??????
                  </label>
                  <div className="FormikFieldInput_description__2J086">
                    ?????? 50??? ??? ~ ?????? 1??? ????????? ???????????????.
                  </div>
                  <div className="FormikFieldInput_inputContainer__jgofT">
                    <div className="wz input right FormikFieldInput_input__3srmA FormikFieldInput_price__3g2tv">
                      <input
                        id="price"
                        placeholder="?????? ?????? ??????"
                        values="[object Object]"
                        errors="[object Object]"
                        touched="[object Object]"
                        submitcount={0}
                        initialvalues="[object Object]"
                        name="targetAmount"
                        type="number"
                        defaultValue
                      />
                    </div>
                    <span
                      className="FormikFieldInput_priceText__cId43"
                      style={{ display: "inline" }}
                    >
                      ???
                    </span>
                    <em className="helper FormikFieldInput_helper__3sJ2a" />
                  </div>
                </div>
              </div>
            </div>
            <div className="MouseOverGuide_container__3jDBz">
              <div className="MouseOverGuide_contents__APrXG">
                <div className="FundingBaseInfoImageContainer_container__3SceA">
                  <input
                    name="representativeEncPhotoId"
                    type="hidden"
                    defaultValue
                  />
                  <div className="field Form_field__35I9T required FundingBaseInfoImageField_field__3Wdlo">
                    <div className="FundingBaseInfoImageField_container__2Q_xy">
                      <label className="wz label Label_label__3oH0h">
                        <div className="ToolTipMobile_toolTipContainer__2tYPd">
                          <div className="ToolTipMobile_label__1dBSo ToolTipMobile_required__3WiIn">
                            ?????? ?????????
                          </div>
                        </div>
                      </label>
                    </div>
                    <div className="FundingBaseInfoImageField_container__2Q_xy">
                      <label htmlFor='imageSelect' className="btn_file">????????????</label>
                      <input type="text" id="imagefile" className="fileName fileName1"
                        readOnly="readonly" placeholder="????????? ?????? ??????" />
                      <input type="file" id="imageSelect" className="uploadBtn uploadBtn1"
                        onChange={e => this.handleFileInput('file', e)} />
                      <div id="upload_img">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>






            <div className="MouseOverGuide_container__3jDBz">
              <div className="MouseOverGuide_contents__APrXG">
                <div className="field Form_field__35I9T required">
                  <label className="wz label Label_label__3oH0h">
                    ???????????? ?????????
                  </label>
                  <div className="FundingBaseInfoDateField_description__ng5P0">
                    ?????????????????? ?????? ??? ???????????? ?????? ????????? ????????? ?????? ?????????
                    ?????? ???????????? ???????????? ??????????????????.
                  </div>
                  <div className="FundingBaseInfoDateField_inputWrapper__39AXT">
                    <div className="FundingBaseInfoDateField_input__3g63a">
                      <div className="wz input right FundingBaseInfoDateField_input__3g63a">
                        <input
                          pattern="\d*"
                          name="whenHoldTo"
                          placeholder="???)20120501"
                          maxLength={8}
                          readOnly
                          closeclass="FundingBaseInfoDateField_close__cvANs"
                          type="tel"
                          defaultValue
                        />
                      </div>
                      <button
                        type="button"
                        className="wz button less icon dense FundingBaseInfoDateField_close__cvANs"
                      >
                        <i aria-hidden="true" className="icon close" />
                      </button>
                    </div>
                    <button type="button" className="wz button less icon dense">
                      <i aria-hidden="true" className="icon calendar-o" />
                    </button>
                  </div>
                </div>
              </div>
            </div>


            <div className="MouseOverGuide_guideWrapper__28wbb">
              <div className="MouseOverGuide_guide__13NEZ">
                <h5 className="MouseOverGuide_title__1sJjC" />
                <div className="MouseOverGuide_content__I9HrE">
                  <div data-role="title">??? ????????????(??????)</div>
                  ?????? ?????? ??? ??????????????? ????????? ??? ?????????, ?????? ????????? ?????????
                  ??????????????? ???????????? ??????????????? ???????????????.
                  <br />
                  <br />
                  <div data-role="title">??? ??????~??????</div>
                  ?????? ?????? ??? ??????????????? ????????? ??? ?????????, ?????? 30??????
                  ???????????????.
                  <br /> <br />
                </div>
              </div>
            </div>




            <div className="CorporationRegistrationAdminFieldsContainer_container__17OPi">
              <div className="field Form_field__35I9T required FormFieldInput_field__2r889">
                <label className="wz label FormFieldInput_label__2Ibta Label_label__3oH0h">
                  ????????? ???
                </label>
                <div className="FormFieldInput_inputContainer__3rjBp">
                  <div className="wz input right FormFieldInput_input__19Je0">
                    <input
                      id="name"
                      name="nickName"
                      disabled
                      placeholder
                      type="text"
                      defaultValue={this.state.usernm}
                    />
                  </div>
                </div>
              </div>
            </div>




            <div className="field Form_field__35I9T required FormFieldInput_field__2r889">
              <label className="wz label FormFieldInput_label__2Ibta Label_label__3oH0h">
                ????????? ?????????
              </label>
              <div className="FormFieldInput_inputContainer__3rjBp">
                <div className="wz input right FormFieldInput_input__19Je0">
                  <input
                    id="email"
                    name="userName"
                    disabled
                    placeholder
                    type="text"
                    defaultValue={this.state.useremail}
                  />
                </div>
                <em className="helper FormFieldInput_helper__3AfGh">
                  ??????????????? ????????? ????????? ????????? ???????????? ???????????? ????????????
                  ????????? ?????? ?????? ?????? ?????? ???????????? ???????????????.
                </em>
              </div>
            </div>




            {/* <div className="field Form_field__35I9T required CorporationRegistrationAdminMobileField_field__1S21G">
              <label className="wz label Label_label__3oH0h">
                ????????? ????????? ??????
              </label>
              <div className="CorporationRegistrationAdminMobileField_inputWrapper__3jmcw">
                <div className="wz input right CorporationRegistrationAdminMobileField_input__319MK">
                  <input
                    id="phonenum"
                    placeholder
                    type="text"
                    defaultValue={"01079224332"}
                    readOnly
                  />
                </div>
              </div>
              <em className="helper success">????????? ????????? ???????????????.</em>
            </div> */}




            <div className="MouseOverGuide_container__3jDBz">
              <div className="MouseOverGuide_contents__APrXG">
                <div className="StorySummaryField_container__1Ld4C">
                  <div className="field Form_field__35I9T FormFieldTextarea_field__33Ncu">
                    <div className="wide column-2 field Form_field__35I9T required">
                      <label className="wz label Label_label__3oH0h">
                        ??????????????? ??????
                      </label>
                    </div>
                    <div className="wide column-4">
                      <div className="wz input">
                        <grammarly-extension
                          data-grammarly-shadow-root="true"
                          style={{
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            pointerEvents: "none",
                          }}
                          className="cGcvT"
                        />
                        <grammarly-extension
                          data-grammarly-shadow-root="true"
                          style={{
                            mixBlendMode: "darken",
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            pointerEvents: "none",
                          }}
                          className="cGcvT"
                        />
                        <textarea
                          id="text"
                          placeholder="?????? ??????"
                          helper="[object Object]"
                          maxLength={100}
                          name="storyInfo.coreMessage"
                          description="???????????? ????????? ?????? ??? ???????????? ??? ???????????????."
                          rows={3}
                          spellCheck="false"
                          defaultValue={"?????? ?????? ?????? ?????? ?????? ?????? ??????"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>



            <div className="field Form_field__35I9T required ImageFormField_field__X1jTW StoryImageField_field__2BLTd">
              <div className="ImageFormField_buttonWrapper__su3pO field Form_field__35I9T required">
                <label className="wz label Label_label__3oH0h">
                  ??????????????? ?????? ??????
                </label>
                <label className="wz label ImageFileButton_label__3thB2 Label_label__3oH0h">
                  <button
                    type="button"
                    className="wz button gray ImageFileButton_button__3gAHD"
                  >
                    <i aria-hidden="true" className="icon camera-o" />
                    ????????????
                  </button>




                  {/*                     <div className="wz input right ImageFileButton_input__1Dnch">
                      <input
                        accept="image/JPEG,image/JPG,image/GIF,image/PNG"
                        name="uploadFile"
                        placeholder
                        type="file"
                        defaultValue
                      />
                    </div> */}



                </label>
              </div>
            </div>




            <div className="CorporationRegistrationAdminFieldsContainer_checkWrap__2CCAe">
              <label className="wz Checkbox_checkbox__2Dr81 checkbox">
                <input type="checkbox" name="isAgreeCollection" />
                <div>(??????) ?????? ?????? ?????? ??????</div>
              </label>
            </div>


            <div className="CorporationRegistrationContainer_buttonWrapper__2a1lo">
              <button
                onClick={(e) => this.submitClick(e)}
                type="button"

                className="wz button primary CorporationRegistrationContainer_button__D8sW6"
              >
                ????????????
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default registration;