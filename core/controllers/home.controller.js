/**
 * 首页
 * @param {Object} req
 * @param {Object} res
 */
module.exports = function (req, res) {
	res.render('home', {
		layout: 'layout-default',
		title: '主页',
		author: '尹长青',
		siteInfo: {
			theme: 'default',
			codeFooter:''
		},
		lists: [
			{name: '长青1', path:'#', contents:[{href:'#', title:'长青就是叼'}]},
			{name: '长青2', path:'#', contents:[{href:'#', title:'长青就是叼2'}]},
		],
		readingList: {
			total:[
				{href:'#', title:'读的列表1'},
				{href:'#', title:'读的列表2'}
			],
			month: [
				{href:'#', title:'读的列表1'},
				{href:'#', title:'读的列表2'}
			],
			week: [
				{href:'#', title:'读的列表1'},
				{href:'#', title:'读的列表2'}
			],
			day: [
				{href:'#', title:'读的列表1'},
				{href:'#', title:'读的列表2'}
			]
		}
		
	});
}