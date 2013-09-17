function hello() {
	var sUsrAg = window.navigator.userAgent;

	if(sUsrAg.indexOf("Chrome") > -1) {
	    alert("Google Chrome");
	} else if (sUsrAg.indexOf("Safari") > -1) {
	    alert("Apple Safari");
	} else if (sUsrAg.indexOf("Opera") > -1) {
	    alert("Opera");
	} else if (sUsrAg.indexOf("Firefox") > -1) {
	    alert("Mozilla Firefox");
	} else if (sUsrAg.indexOf("MSIE") > -1) {
	    alert("Internet Explorer");
	}
}