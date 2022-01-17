import React from "react";
import { Component } from "react";
import axios from 'axios';
import Swal from 'sweetalert2'
import $ from 'jquery';


class fund extends Component {
    constructor (props) {
        super(props);
        this.state = {
            responseFPList: '',
            append_FPList: '',
        }

        axios.get('fund/')
        .then(response=>{
            try{
                this.setState({ responseFPList: response });
                this.setState({ append_FPList: this.FloatPopulListAppend() });
            } catch(error){
                 alert(error)
            } 
        })
        .catch( error => {alert(error);return false;} );
    }
    FloatPopulListAppend = () => {
        var FPList = this.state.responseFPList.data
        var jsonString = JSON.stringify(FPList)
        console.log('asdasdasd',jsonString)
        //jsonString = jsonString.replace(/\(1시간단위\)/g, '')
        //jsonString = jsonString.replace(/\(10세단위\)/g, '')
        var json = JSON.parse(jsonString)
        console.log('jsonData',json[6].fundPrice)
        var data=0
        for(let i=0; i<json.length; i++){
            var pars=parseInt(json[i].fundPrice)
            data = pars+data
            console.log('addData',data)
            console.log('Data',parseInt(json[i].fundPrice))
        }
        return data
            
    }



    submitClick=async(e)=>{
        this.fundprice=$('#fundprice').val();
        
        if(this.fundprice<=0){
            this.sweetalert('금액은 0보다 커야합니다', '', 'info', '닫기')
        }
        else{
            axios.post('fund/',{fundPrice:this.fundprice}).then(response=>{

            }).catch(error=>{

            }).then(()=>{

            })
        };


   
    };
    sweetalert = (title, contents, icon, confirmButtonText) => {
        Swal.fire({
            title: title,
            text: contents,
            icon: icon,
            confirmButtonText: confirmButtonText
              })
        }

    render(){
        return(
            // const onChange=(e)=>{

            // };
        
        <section>
            <h1>asd</h1>

           
            <form >
                <input type="number"  id="fundprice" placeholder="입금금액"/>
                <button onClick={(e)=>this.submitClick(e)} type="submit" >펀딩하기</button>
            </form>
            <table>
                {this.state.append_FPList}
            </table>
            </section>
        );
    }
}
export default fund;