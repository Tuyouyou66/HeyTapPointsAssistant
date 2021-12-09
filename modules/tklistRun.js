var tk社区视频 = "./modules/[任务]社区视频.js";
var tk赚积分购好物 = "./modules/[任务]赚积分购好物.js"
var tkReno7 = "./modules/[任务]Reno7.js";
var tk一加加油站 = "./modules/[任务]一加加油站.js";
var tk现金助力 = "./modules/[任务]现金助力.js";
var tk现金任务 = "./modules/[任务]现金任务.js";
var tk零元赚积分 = "./modules/[任务]零元赚积分.js"
var tkrealme积分乱斗 = "./modules/[任务]realme积分乱斗.js";
var tkReno7流星宝藏 = "./modules/[任务]Reno7 流星宝藏.js";
var tk签到页面 = "./modules/[任务]签到页面.js";
var tk全家桶签到 = "./modules/[任务]全家桶签到.js";

console.show();

start();

function start() {
    sleep(1000);
    toastLog("执行 社区视频")
    eval(files.read(tk社区视频))
    toastLog("执行 赚积分购好物")
    eval(files.read(tk赚积分购好物))
    toastLog("执行 Reno7")
    eval(files.read(tkReno7))
    toastLog("执行 一加加油站")
    eval(files.read(tk一加加油站))
    toastLog("执行 现金助力")
    eval(files.read(tk现金助力))
    toastLog("执行 现金任务")
    eval(files.read(tk现金任务))
    toastLog("执行 零元赚积分")
    eval(files.read(tk零元赚积分))
    toastLog("执行 realme积分乱斗")
    eval(files.read(tkrealme积分乱斗))
    toastLog("执行 Reno7 流星宝藏")
    eval(files.read(tkReno7流星宝藏))
    toastLog("执行 签到页面")
    eval(files.read(tk签到页面))
    toastLog("执行 全家桶签到")
    eval(files.read(tk全家桶签到))
    sleep(1000);
    toastLog("全选执行完成")
    events.broadcast.emit("exit", "全选执行完成");
    log("返回欢太积分助手");
    app.launchPackage("com.freysu.heytappoints");
}