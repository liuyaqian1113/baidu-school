;(function(){
	for(let i = 0; i < getEleByClass('nav').length; i++) {
		getEleByClass('nav')[i].id = i+1;
		getEleByClass('nav')[i].onclick = function(e) {
			let id = this.id;
			// 清空动画class
			for(var i = 0; i < getEleByClass('page').length; i++) {
				getEleByClass('page')[i].className = 'page page'+ (i+1) +'';
				getEleByClass('page')[i].style.zIndex = 0;
				getEleByClass('navblackbg')[i].style.display = 'block';
			}
			// 给当前点击添加动画class
			getEleByClass('page'+ id +'')[0].className = 'page page'+ id +' page'+ id +'animation';
			getEleByClass('page'+ id +'')[0].style.zIndex = 10;
			getEleByClass('navblackbg')[id-1].style.display = 'none';
			setTimeout(function() {
				getEleByClass('page'+ id +'')[0].className = 'page page'+ id +'';
			}, 1000)
		}
	}
	// 获取元素方法
	function getEleByClass(ele){
		return document.getElementsByClassName(''+ ele +'');
	}
})()