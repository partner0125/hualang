import React from 'react';
import { Link } from 'react-router';

export default class AlbumList extends React.Component {
  
  render() {
    return (
      <div>
        <Link to='/section/1'><span>跳转到画廊1</span></Link><br />
        <Link to='/section/2'><span>跳转到画廊2</span></Link>
      </div>
    );
  }
}
