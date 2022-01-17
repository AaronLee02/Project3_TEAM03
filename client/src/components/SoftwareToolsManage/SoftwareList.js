import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import Swal from 'sweetalert2'

class SoftwareList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            responseSwtoolList: '',
            append_SwtoolList: '',
        }
    }

    componentDidMount() {
        this.callSwToolListApi()
    }

    callSwToolListApi = async () => {
        axios.post('/fund/funding', {
        })
        .then( response => {
            try {
                console.log("post:",response.data[0])
                this.setState({ responseSwtoolList: response });
                this.setState({ append_SwtoolList: this.SwToolListAppend() });
            } catch (error) {
                alert('작업중 오류가 발생하였습니다.');
            }
        })
        .catch( error => {alert('작업중 오류가 발생하였습니다.');return false;} );
    }
    

    SwToolListAppend = () => {
        let result = []
        var SwToolList = this.state.responseSwtoolList
        var asd=SwToolList
        console.log('data',SwToolList.data[0].id)
        console.log('data2',SwToolList.data.length)
        for(let i=0; i<SwToolList.data.length; i++){
            var data = SwToolList.data[i]

           

            result.push(
                <tr class="hidden_type">
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.text}</td>
                    <td>{data.Price}원</td>
                    
                    <td>
                        <Link to={'/SoftwareView/'+data.swt_code} 
                        className="bt_c1 bt_c2 w50_b">수정</Link>
                        <a href="#n" class="bt_c1 w50_b" id={data.swt_code}
                        onClick={(e) => this.deleteSwtool(e)}>삭제</a>
                    </td>
                </tr>
            )
        }
        return result
    }

    deleteSwtool = (e) => {
        var event_target = e.target
        this.sweetalertDelete('정말 삭제하시겠습니까?', function() {
            axios.post('/api/Swtool?type=delete', {
                is_SwtCd : event_target.getAttribute('id')
            })
            .then( response => {
                this.callSwToolListApi()
            }).catch( error => {alert('작업중 오류가 발생하였습니다.');return false;} );
        }.bind(this))
    }

    sweetalertDelete = (title, callbackFunc) => {
        Swal.fire({
            title: title,
            text: "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
          }).then((result) => {
            if (result.value) {
              Swal.fire(
                'Deleted!',
                '삭제되었습니다.',
                'success'
              )
            }else{
                return false;
            }
            callbackFunc()
          })
    }

    render () {
        return (
                      
      <div className="contact">
      <div className="container">
        <ol className="breadcrumb">
          <li><a href="index.html">MOA</a></li>
          <li className="active">게시판</li>
        </ol></div>
            <section class="sub_wrap" >
                <article class="s_cnt mp_pro_li ct1 mp_pro_li_admin">
                    <div class="li_top">
                        <div class="li_top_sch af">
                        <Link to={'/SoftwareView/register'} className="sch_bt2 wi_au" >Tool 등록</Link>
                        </div>
                    </div>

                    <div class="list_cont list_cont_admin">
                        <table class="table_ty1 ad_tlist">
                            <tr>
                                <th>번호</th>
                                <th>이메일</th>
                                <th>이름</th>
                                <th>내용</th>
                                <th>펀딩 금액</th>
                                <th>기능</th>
                            </tr>
                        </table>   
                        <table class="table_ty2 ad_tlist">
                            {this.state.append_SwtoolList}
                        </table>
                    </div>
                </article>
            </section>
            </div>
        );
    }
}

export default SoftwareList;