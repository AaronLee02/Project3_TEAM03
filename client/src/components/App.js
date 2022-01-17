import React, { Component } from 'react';
import { Route } from "react-router-dom";
import cookie from 'react-cookies';
import axios from "axios";
import main from './main'

// css
import '../css/new.css';
import '../css/style.css';
import '../css/bootstrab.css';
import '../css/memenu.css';
import '../css/floala.css';
import '../css/18chunk2.css';
import '../css/board.css';
import '../css/campaign.css';
import '../css/chunk.css';
import '../css/chunk2.css';
import '../css/common.css';
import '../css/flexslider.css';
import '../css/form.css';
import '../css/jquery-ui.css';
import '../css/main_chunk.css';
import '../css/sub.css';
import '../css/wadiz.css';

// header
import HeaderAdmin from './Header/Header admin';

// footer
import Footer from './Footer/Footer';

// login
import LoginForm from './LoginForm';

import SoftwareList from './SoftwareToolsManage/SoftwareList';
import SoftwareView from './SoftwareToolsManage/SoftwareView';

import Register from './Register/Register';
import PwChangeForm from './PwChangeForm';
import fund from './Floating_population/fund';
import sub from './Floating_population/sub';
import product from './Floating_population/product';
import registration from './Floating_population/registration';
import event from './Floating_population/event';
import MarketCapChart from './Floating_population/MarketCapChart';

import MapContainer from './Floating_population/MapContainer';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    if(window.location.pathname.indexOf('/PwChangeForm') == -1){
      axios.post('/api/LoginForm?type=SessionConfirm', {
        token1 : cookie.load('userid') 
        , token2 : cookie.load('username') 
      })
      .then( response => {
          this.state.userid = response.data.token1
          let password = cookie.load('userpassword')
          if(password !== undefined){
            axios.post('/api/LoginForm?type=SessionSignin', {
              is_Email: this.state.userid,
              is_Token : password
            })
            .then( response => {
              if(response.data.json[0].useremail === undefined){
                this.noPermission()
              }
            })
            .catch( error => {
              this.noPermission()
            });
          }else{
            this.noPermission()
          }
      })
      .catch( response => this.noPermission());
    }
  }

  noPermission = (e) => {
    if(window.location.hash == 'nocookie'){
      this.remove_cookie();
      window.location.href = '/login/#nocookie';
    }
  };

  remove_cookie = (e) => {
    cookie.remove('userid', { path: '/'});
    cookie.remove('username', { path: '/'});
    cookie.remove('userpassword', { path: '/'});
  }

  render () {
    return (
      <div className="App">
        <HeaderAdmin/> 
        <Route exact path='/' component={main} />
        <Route exact path='/LoginForm' component={LoginForm} />
        <Route path='/login' component={LoginForm} />
        <Route path='/SoftwareList' component={SoftwareList} />
        <Route path='/SoftwareView/:swtcode' component={SoftwareView} />
        <Route path='/register' component={Register} />
        <Route path='/PwChangeForm/:email/:token' component={PwChangeForm} />
        <Route path='/fund' component={fund} />
        <Route path='/sub' component={sub} />
        <Route path='/product' component={product} />
        <Route path='/registration' component={registration} />
        <Route path='/event' component={event} />
        <Route path='/MarketCapChart' component={MarketCapChart} />

        <Route path='/MapContainer' component={MapContainer} />

        <Footer/>
      </div>
    );
  }
}

export default App;