import React from 'react';
import { Link } from 'react-router';

const Item = (props) => <li className='navi-item'><Link to={props.link} activeClassName='link-active'>{props.label}</Link></li>;

export default Item;
