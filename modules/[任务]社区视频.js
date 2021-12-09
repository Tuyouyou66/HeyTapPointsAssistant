console.show();
var storage1 = storages.create("heyTapCkUa2");
var COOKIE = storage1.get("CK");
var UA = storage1.get("UA");
// var COOKIE = "填入";//双引号改为单引号
// var UA = "填入";

http.__okhttp__.setTimeout(10000);





if (COOKIE.indexOf('TOKENSID') != -1) {
    var token = ";token" + COOKIE.split('TOKENSID')[1].split(';')[0];
    //感谢支持
    auto.waitFor()
    app.startActivity({
        action: "VIEW",
        packageName: "com.oppo.store",
        className: "com.oppo.store.deeplink.DeepLinkInterpreterActivity",
        data: "https://store.oppo.com/cn/m/product/index?skuId=20305&utm_medium=ruanjianshangdian&utm_source=share_oppo_appstore&referer=MmZZSlI0SmcrU1Foa2hscGF4UTFGdz09&utm_campaign=sxdaohang",
    });
    sleep(1500);

    开始();
} else {
    var token = COOKIE;
    //感谢支持
    auto.waitFor()
    app.startActivity({
        action: "VIEW",
        packageName: "com.oppo.store",
        className: "com.oppo.store.deeplink.DeepLinkInterpreterActivity",
        data: "https://store.oppo.com/cn/m/product/index?skuId=20305&utm_medium=ruanjianshangdian&utm_source=share_oppo_appstore&referer=MmZZSlI0SmcrU1Foa2hscGF4UTFGdz09&utm_campaign=sxdaohang",
    });
    sleep(1500);

    开始();
}




function 开始() {
    log("--------任务开始--------");
    videotask();
    log("--------任务完成--------");
    log("返回欢太积分助手");
    app.launchPackage("com.freysu.heytappoints");
    events.broadcast.emit("exit", "[任务]社区视频");

}






function videotask() {

    var time = new Date().getTime();

    console.log("--------OPPO社区视频任务--------");

    for (var v = 0; v < 10; v++) {

        sleep(1500);

        var url = "https://i-api.oppo.cn/java/task/api/browse/browseFinish";
        ret = http.post(url, {
            "systemId": "520",
            "_t": time,
            "_sign": ""
        }, {
            headers: {

                "Content-Type": "application/x-www-form-urlencoded",
                "Host": "i-api.oppo.cn",
                "Connection": "Keep-Alive",
                "User-Agent": UA,
                "TAP-GSLB": "0,0",
                "Cookie": token
            }
        }).body.json();
        if (ret['code'] == 200) {
            console.log("观看视频中");
        } else {
            console.log(ret['msg']);
        }
        sleep(2000);
    }

    sleep(2000);
    var url = "https://www.oppo.cn/java/task/api/browse/awardBrowseTask";
    ret = http.post(url, {
        "idList": "520"
    }, {
        headers: {
            "Host": "www.oppo.cn",
            "Connection": "keep-alive",
            "Pragma": "no-cache",
            "Cache-Control": "no-cache",
            "User-Agent": UA,
            "X-Requested-With": "XMLHttpRequest",
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            "Accept": "*/*",
            "Origin": "https://hybrid.oppo.cn",
            "Sec-Fetch-Site": "same-site",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "empty",
            "Referer": "https://hybrid.oppo.cn/readReward.html?customNightMode=true",
            "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
            "Cookie": token,
        }

    }).body.json();
    if (ret['code'] == 200) {
        console.log("观看任务完成");
        sleep(3000);
    } else {
        console.log("异常操作");
    }

}