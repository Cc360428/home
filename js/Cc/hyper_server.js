function like() {
	// var url = "http://60.205.176.110:8180/v1/home/like/create";
	//	var url = "http://127.0.0.1:8180/v1/home/like/create";
	// var url = "https://lichaocheng.top:8180/v1/home/like/create";
	var url = "https://meserver.lichaocheng.top/v1/home/like/create";
	$.ajax({
		"url": url,
		"data": "",
		"type": "post",
		"dataType": "json",
		"success": function(json) {
			if(json.code == 0) {
				alert(json.data);
			} else {
				alert(json.msg);
			}
		}
	});
}
