function ShowLoginText(){
    layer.open({
        type:1,
        title:"登录",
        area:["395px","300px"],
        content:$("#loginBox"),
    });
}
function Login(){
    var username=$.trim($("#InputUsername").val());//获取用户名trim是去掉空格
    var password=$.trim($("#InputUserPwd").val());//获取密码
    if(username==""||password==""){
        layer.alert("用户名或者密码不能为空!",{
            title:"提示",
            icon:5,
        });
    }
}


// 绑定点击事件
document.querySelector('#btnAjax').onclick = function () {
    // 发送ajax 请求 需要 五步

    // （1）创建异步对象
    var ajaxObj = new XMLHttpRequest();

    // （2）设置请求的参数。包括：请求的方法、请求的url。
    ajaxObj.open('get', '02-ajax.php');

    // （3）发送请求
    ajaxObj.send();

    //（4）注册事件。 onreadystatechange事件，状态改变时就会调用。
    //如果要在数据完整请求回来的时候才调用，我们需要手动写一些判断的逻辑。
    ajaxObj.onreadystatechange = function () {
        // 为了保证 数据 完整返回，我们一般会判断 两个值
        if (ajaxObj.readyState == 4 && ajaxObj.status == 200) {
            // 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的
            // 5.在注册的事件中 获取 返回的 内容 并修改页面的显示
            console.log('数据返回成功');

            // 数据是保存在 异步对象的 属性中
            console.log(ajaxObj.responseText);

            // 修改页面的显示
            document.querySelector('h1').innerHTML = ajaxObj.responseText;
        }
    }
}