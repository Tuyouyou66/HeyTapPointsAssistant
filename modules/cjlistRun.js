var cjrealme宠粉计划 = "./modules/[抽奖]realme宠粉计划.js";
var cjrealme积分乱斗 = "./modules/[抽奖]realme积分乱斗.js";
var cjReno7 = "./modules/[抽奖]Reno7.js";
var cjReno7流星宝藏 = "./modules/[抽奖]Reno7 流星宝藏.js";
var cj欢太宠粉计划 = "./modules/[抽奖]欢太宠粉计划.js";
var cj零元赚积分 = "./modules/[抽奖]零元赚积分.js";
var cj每日积分翻倍 = "./modules/[抽奖]每日积分翻倍.js";
var cj天天积分翻倍 = "./modules/[抽奖]天天积分翻倍.js";
var cj赚积分购好物 = "./modules/[抽奖]赚积分购好物.js";

console.show();
start();

function start() {
    sleep(1000);
    toastLog("执行 realme宠粉计划")
    eval(files.read(cjrealme宠粉计划))
    toastLog("执行 realme积分乱斗")
    eval(files.read(cjrealme积分乱斗))
    toastLog("执行 Reno7")
    eval(files.read(cjReno7))
    toastLog("执行 Reno7流星宝藏")
    eval(files.read(cjReno7流星宝藏))
    toastLog("执行 欢太宠粉计划")
    eval(files.read(cj欢太宠粉计划))
    toastLog("执行 零元赚积分")
    eval(files.read(cj零元赚积分))
    toastLog("执行 每日积分翻倍")
    eval(files.read(cj每日积分翻倍))
    toastLog("执行 天天积分翻倍")
    eval(files.read(cj天天积分翻倍))
    toastLog("执行 赚积分购好物")
    eval(files.read(cj赚积分购好物))
    sleep(1000);
    toastLog("全选执行完成")
    events.broadcast.emit("exit", "全选执行完成");
    log("返回欢太积分助手");
    app.launchPackage("com.freysu.heytappoints");
}