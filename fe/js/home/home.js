import React from 'react';
import style from '../../css/home.less';

export default class Home extends React.Component{
	render() {
		let sss;
		sss = 1;
		console.log(sss + 1);
		return (
			<div>
				<div>Home</div>
				<div className={style.container}>
					<div className={style.box}></div>
					<div className={style.box}></div>
				</div>
			</div>
		);
	}
}