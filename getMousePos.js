

/**
 * JavaScript 获取鼠标点击位置坐标
 * @param  {[type]} event [description]
 * @param  {[type]} type  [description]
 * @return {[type]}       [description]
 */
function getMousePos(event,type) {
    var e = event || window.event,obj ={}
	switch(type){
		case 'screen':
			obj.x = e.screenX;
			obj.y = e.screenY;
			break;
		case 'client':
			obj.x = e.clientX;
			obj.y = e.clientY;
			break;
		case 'document':
            var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
            var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
            var x= e.pageX || e.clientX + scrollX;
            var y = e.pageY || e.clientY + scrollY;
            obj.x = x;
			obj.y = y;
			break
	}
    return obj
}

module.exports = getMousePos