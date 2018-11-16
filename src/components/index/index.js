import React, { Component } from "react";
import {
  Input,
  Button,
  notification
 } from 'antd'

import { insert } from '../../config/firebase'

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

const openNotificationWithIcon = (type) => {
  notification[type]({
    message: 'ขอบคุณที่ร่วมส่งเรื่องราวดีๆ ด้วยกัน :D'
  });
};

export default class Index extends Component {
  state = {
    story: '',
    author: ''
  };
  handleStory = (e) => {
    e.preventDefault();
    insert(`/story/${guid()}`, { ...this.state });
    openNotificationWithIcon('success');
    this.setState({ story: '', author: '' })
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <form onSubmit={this.handleStory}>
                <h1 className='mt-3' >ร่วมส่งเรื่องราว SIT ตาม สาย กัน !</h1>
                <Input.TextArea placeholder='เรื่องราวของคุณ...' className='my-3' onChange={e => this.setState({ story: e.target.value })} cols="30" rows="10" required />
                <Input placeholder='นามแฝง... (ไม่บังคับ)' className='my-3' onChange={e => this.setState({ author: e.target.value })}  />
                <Button size='large' className='my-3 w-100' >ส่งหัวข้อ !</Button>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
