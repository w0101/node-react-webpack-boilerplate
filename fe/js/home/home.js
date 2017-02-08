import React from 'react';
import $ from 'jquery';
import style from '../../css/home.less';

export default class Home extends React.Component{
	componentWillMount() {
		$.getJSON('http://api.map.baidu.com/location/ip?ak=ymQ8eekrnKms0Vb5GAIaQMCr3Yipl3IN&coor=bd09ll&callback=?',
			function(data) {
				//console.log(data);
				if(data.status === 0) {
					let location = data.content,
						cityCode = location.address_detail.city_code;
					alert('城市码：' + cityCode);
				}
			});
	}
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