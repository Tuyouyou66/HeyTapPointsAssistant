console.show()
var start = "运行开始"
var end = "运行结束"
sleep(1500)
log(start)

function checkIn(PKG, CODE, appName) {
    toastLog(appName + "签到中");
    try {
        app.startActivity({
            action: "VIEW",
            packageName: "com.oppo.usercenter",
            className: "com.platform.usercenter.credits.ui.SignActivity",
            flags: ["activity_single_top"],
            extras: {
                KEY_FROM_PKG: PKG,
                KEY_BUZ_REGION: "CN",
                APP_CODE: CODE,
            },
        })
        toastLog("等待6秒")
        sleep(6000);
        if (id("close").exists()) {
            id("close").findOne().click();
            sleep(500);
            back();
        } else {
            back();
        }
    } catch (error) {
        console.error(error);
    }
    toastLog("等待1.5秒")
    sleep(1500)
}

function check(PKG, CODE, appName) {
    toastLog(appName + "签到中");
    try {
        app.startActivity({
            action: "View",
            packageName: "com.heytap.usercenter",
            className: "com.platform.usercenter.credits.ui.SignActivity",
            extras: {
                KEY_FROM_PKG: PKG,
                KEY_BUZ_REGION: "CN",
                APP_CODE: CODE,
            },
        })
        toastLog("等待6秒")
        sleep(6000);
        if (id("close").exists()) {
            id("close").findOne().click();
            sleep(500);
            back();
        } else {
            back();
        }
    } catch (error) {
        console.error(error);
    }
    toastLog("等待1.5秒")
    sleep(1500)
}

function main() {
    log("--------任务开始--------");
    var name = getAppName("com.oppo.usercenter");
    if ((name) != null) {
        toastLog("签到渠道-我的oppo");
        sleep(2000);
        //健康
        checkIn("com.heytap.health", "health", "健康");
        //游戏中心
        checkIn("com.nearme.gamecenter", "1001", "游戏中心");
        //我的oppo
        checkIn("com.oppo.usercenter", "0", "我的oppo"); //经常出问题；checkInSmart();
        //智能家居
        checkIn("com.heytap.smarthome", "smarthome", "智能家居");
        //软件商店
        checkIn("com.oppo.market", "1", "软件商店");
        //视频
        checkIn("com.heytap.yoli", "com.heytap.yoli", "视频");
        //音乐
        checkIn("com.heytap.music", "com.heytap.music", "音乐");
        //主题商店
        checkIn("com.heytap.themestore", "com.heytap.themestore", "主题商店");
        //浏览器
        checkIn("com.heytap.browser", "com.heytap.browser", "浏览器");
        //我的一加
        checkIn("com.heytap.vip", "com.heytap.vip", "我的一加");
        //极速视频
        checkIn("com.heytap.ugcvideo.praise", "com.heytap.ugcvideo.praise", "极速视频");
        //钱包
        checkIn("com.finshell.wallet", "com.finshell.wallet", "钱包");
    }

    var name = getAppName("com.heytap.usercenter");
    if ((name) != null) {
        toastLog("签到渠道-我的realme");
        sleep(2000);
        //健康
        check("com.heytap.health", "health", "健康");
        //游戏中心
        check("com.nearme.gamecenter", "1001", "游戏中心");
        //我的oppo
        check("com.oppo.usercenter", "0", "我的oppo"); //经常出问题；checkInSmart();
        //智能家居
        check("com.heytap.smarthome", "smarthome", "智能家居");
        //软件商店
        check("com.oppo.market", "1", "软件商店");
        //视频
        check("com.heytap.yoli", "com.heytap.yoli", "视频");
        //音乐
        check("com.heytap.music", "com.heytap.music", "音乐");
        //主题商店
        check("com.heytap.themestore", "com.heytap.themestore", "主题商店");
        //浏览器
        check("com.heytap.browser", "com.heytap.browser", "浏览器");
        //我的一加
        check("com.heytap.vip", "com.heytap.vip", "我的一加");
        //极速视频
        check("com.heytap.ugcvideo.praise", "com.heytap.ugcvideo.praise", "极速视频");
        //钱包
        check("com.finshell.wallet", "com.finshell.wallet", "钱包");
    }
    log("--------任务完成--------");
    log("返回欢太积分助手");
    app.launchPackage("com.freysu.heytappoints");
    console.hide();
}

main();

log(end)