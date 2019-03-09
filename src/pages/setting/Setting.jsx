import React from 'react';
import {Link} from 'react-router-dom';

class Setting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '我是setting组件',
    }
  }

  render() {
    return (
        <div>
          <Link to={'/home'}>
            {this.state.title}
          </Link>
        </div>
    );
  }
}

export default Setting;