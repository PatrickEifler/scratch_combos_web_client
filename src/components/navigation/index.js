import React from 'react';
import Item from './Item';

function renderItems(props) {
	return props.items.map(item => <Item key={item.label} label={item.label} link={item.link} />);
}

const Navi = (props) => <div className='navi' ><ul className='navi-inner'>{renderItems(props)}</ul></div>;

export default Navi;


