var storage = storages.create("OPPO商城小铺");
var storage1 = storages.create("heyTapCkUa2");
var COOKIE = storage1.get("CK");
var UA = storage1.get("UA");

// var UA = 
// var COOKIE=
var headers = {
    "Host": "hd.oppo.com",
    "Connection": "keep-alive",
    "Accept": "application/json, text/javascript, */*; q=0.01",
    "X-Requested-With": "XMLHttpRequest",
    "User-Agent": UA,
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "Origin": "https://hd.oppo.com",
    "Sec-Fetch-Site": "same-origin",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Dest": "empty",
    "Referer": "https://hd.oppo.com/act/m/2021/jifenzhuanpan/index.html?us=gerenzhongxin&um=hudongleyuan&uc=yingjifen",
    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "Cookie": COOKIE,

};

//感谢支持
auto.waitFor()
app.startActivity({
    action: "VIEW",
    packageName: "com.oppo.store",
    className: "com.oppo.store.deeplink.DeepLinkInterpreterActivity",
    data: "https://store.oppo.com/cn/m/product/index?skuId=20305&utm_medium=ruanjianshangdian&utm_source=share_oppo_appstore&referer=MmZZSlI0SmcrU1Foa2hscGF4UTFGdz09&utm_campaign=sxdaohang",
});
sleep(1500);


console.show();
开始();

function 开始() {
    log("--------任务开始--------");
    action(1418);
    log("--------任务完成--------");
    log("返回欢太积分助手");
    app.launchPackage("com.freysu.heytappoints");
}


function peng(aid) {
    var url = "https://hd.oppo.com/task/list?aid=" + aid;
    ret = http.get(url, {
        headers: headers,
    });

}

function action(myaid) {
    taskret = http.get("https://hd.oppo.com/task/list?aid=" + myaid, {
        headers: headers,
    }).body.json();
    for (var i = 0; i < 10; i++) {
        if (taskret['data'][i] != null) {

            var aid = taskret['data'][i]['t_index'].split("i")[0];
            var t_index = taskret['data'][i]['t_index'];
            storage.put("tasktitle", taskret['data'][i]['title']);
            sleep(2000);
            //这里可以做一个判断   抓包  status！=2时候（就是未完成）时候执行。
            任务("finish", aid, t_index);
            sleep(1000);
            peng(aid);
            sleep(1000);
            任务("award", aid, t_index);
        }
    }

}



function 任务(xx, yy, zz) {

    sleep(2000);

    r = http.post("https://hd.oppo.com/task/" + xx, {
        "aid": yy,
        "t_index": zz,
    }, {
        headers: headers,
    }).body.json();
    var b = r.msg;
    console.log("[" + storage.get("tasktitle") + "]:" + b);

}