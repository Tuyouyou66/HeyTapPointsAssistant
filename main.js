"ui";

var color = "#009688";

ui.layout(
<drawer id="drawer">
    <vertical>
        <appbar>
            <!-- 顶栏标题 -->
            <toolbar id="toolbar" title="欢太积分签到助手" />
            <tabs id="tabs" />
        </appbar>
        <viewpager id="viewpager">
            <!-- （日常签到）第一页内容-->
            <frame>
                <list id="todoList1">
                    <card w="*" h="70" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp"
                        foreground="?selectableItemBackground">
                        <horizontal gravity="center_vertical">
                            <View bg="{{this.color}}" h="*" w="10" />
                            <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                <text id="title" text="{{this.title}}" textColor="#222222" textSize="16sp"
                                    maxLines="2" />
                                <text text="{{this.summary}}" textColor="#999999" textSize="14sp" maxLines="2" />
                            </vertical>
                            <checkbox id="done" marginLeft="4" marginRight="6" checked="{{this.done}}" />
                        </horizontal>
                    </card>
                </list>
            </frame>
            <!-- （积分获取途径）第二页内容-->
            <frame>
                <ScrollView>
                    <vertical padding="10 8">
                        <frame height="match_parent" gravity="center">
                            <vertical>
                                <text text="OPPO 积分获取途径汇总" textSize="18sp" gravity="center" />
                                <text text="（来源：网络）" textSize="12sp" gravity="center" />
                                <text text="⭐OPPO 自家 12 个 APP 签到⭐" textSize="16sp" />
                                <text text="我的 OPPO、OPPO 社区、游戏中心、软件商店、钱包、欢太商城、主题商店、视频、浏览器、智能家居、小布助手、健康。"
                                    textSize="14sp" />
                                <text text="① OPPO 自带的“视频 APP”播放视频（每天获得约 110 分-160 分）" textSize="16sp" />
                                <text
                                    text="打开视频 APP，首页右下角会有个红包，然后不管它，直接看视频即可（每 45 秒圈圈转一次，一共转 50 次，也就是总共要播放 37 分钟的视频，才会完整获得积分），但并不是要你正儿八经的观看视频，我都是在无暇玩手机的时候，打开 APP，开启最低亮度和护眼模式，关闭声音，让它自己播放，整个过程耗电量极少，但是时间是少不了的。"
                                    textSize="14sp" />

                                <text text="② OPPO 软件商店和小游戏自带的“丫鸭梦想家”（每天可获得至少 100 积分，但前提要自己好好养）" textSize="16sp" />
                                <text
                                    text="软件商店-我的-右上角设置-丫鸭梦想家入口打开，就可以在软件商店打开，然后直接将丫鸭梦想家快捷方式放到桌面了。这个玩法和支付宝小鸡是一样的，每次喂食 150 克，400 克后获得一枚蛋，用上各种道具卡，一天轻松获得 5 枚蛋，一枚蛋可以兑换 20 积分，5 枚就是 100 积分。当然这个蛋也可以在界面换实物产品。"
                                    textSize="14sp" />

                                <text text="③ 视频 APP 里面的“种红包树”和“看广告赢积分”（可得约 65 积分，耗时 1-2 分钟）" textSize="16sp" />
                                <text
                                    text="视频 APP-我的界面，就可以看到 2 个活动入口。红包树很简单就是进去签到，领红包，用红包兑换积分，一天大概可得 35 积分，但不耗时。“看广告赢积分”我是和途径二一起做的，播放 3 个广告，约 70 秒，可得 30 积分。然后视频下面还有短视频播放、视频评论、点赞等任务，比较耗时，如果能完成还可以获得 25 积分。"
                                    textSize="14sp" />

                                <text text="④ 欢太商城-我的-签到按钮点进去-浏览商品和分享商品（可得 40 分）" textSize="16sp" />
                                <text text="浏览商品就是随便点击 10 个商品，分享商品就是随便分享 4 个商品给自己小号就行。操作简单。" textSize="14sp" />

                                <text text="⑤ 欢太商城不定期的活动，基本每个月都有，比如这个月的“积分膨胀”（每天至少可得 150 积分）" textSize="16sp" />
                                <text
                                    text="欢太商城首页顶部有个“积分膨胀”的小图标，目前这个活动持续到 8 月 18 日，积分翻倍平均可得 100 积分，运气好可得 500 积分，我前天翻倍三次，一次 300 分，两次 150 分。翻倍以后，把下面 13 个点击任务都做了，可得 65 积分。"
                                    textSize="14sp" />
                                <text
                                    text="这种类似的活动，欢太商城基本每个月都有，在首页都有活动告知，需要自己关注；包括每次新品预约，都有预约后抽奖送积分什么的，这种活动赠送积分非常可观，基本一个活动周期结束，积分都是 4 位数往上走。"
                                    textSize="14sp" />

                                <text text="⑥ 杂七杂八比较费时的积分获取方式" textSize="16sp" />
                                <text
                                    text="欢太商城 APP 里面的早睡打卡，每天 500 积分报名，基本每次收益在 560 积分左右，但这个非常容易忘记，容易连本带利被拿回去，如果够自律的小伙伴，可以试试，1 个月 2000 积分没啥问题。"
                                    textSize="14sp" />
                                <text text="健康 APP 里面的步数打卡，也可以获得积分。" textSize="14sp" />
                                <text
                                    text="浏览器里面每天有 7 个日常任务，完成可得 35 积分。游戏中心 APP 日常 2 个任务 10 积分。还有各个地区的微信号签到，每次可得 10 积分。"
                                    textSize="14sp" />
                                <text
                                    text="软件商店 APP-我的-安装有礼，不定时有新 APP 推广，下载一次 30 积分。如果你是第一次参加这个活动，那里面几十个 APP 你都可以下载，可以得几百积分。"
                                    textSize="14sp" />
                            </vertical>
                        </frame>
                    </vertical>
                </ScrollView>
            </frame>
            <!-- (使用说明) 第三页内容 -->
            <frame>
                <ScrollView>
                    <vertical padding="10 8">
                        <Switch id="autoService" text="无障碍服务" checked="{{auto.service != null}}" padding="8 8 8 8"
                            textSize="15sp" />
                        <button id="start" text="开始运行" />
                        <frame height="match_parent" gravity="center">
                            <vertical>
                                <text text="" />
                                <text text="" />
                                <text text="注意事项" gravity="center" textSize="18sp" />
                                <text text="1. 使用之前请先打开无障碍服务。再打开之后请点【使用说明】页面的【开始运行】按钮。" textSize="16sp" />
                                <text text="2. 签到脚本执行过程中请勿进行其他操作，避免误触。" textSize="16sp" />
                                <text text="3. 执行过程中显示控制台日志，如果是第一次使用，可能会请求你开启悬浮窗功能权限。控制台日志可以关闭或者显示。" textSize="16sp" />
                                <text text="" />
                                <text text="" />
                                <text text="使用说明" gravity="center" textSize="18sp" />
                                <text text="1. 打开本APP的无障碍服务。" textSize="16sp" />
                                <text text="2. 点击【使用说明】页面的【开始运行】按钮。" textSize="16sp" />
                                <text text="（现在就可以自己选择执行哪个签到了，比如我要执行软件商店签到）" textSize="14sp" />
                                <text text="1. 点击【日常签到】页面的“软件商店”。" textSize="16sp" />
                                <text text="2. 会弹出“确定要执行软件商店签到吗？”，点击“确定”将会开始执行签到，点击“取消”将会取消本次签到。" textSize="16sp" />
                            </vertical>
                        </frame>
                    </vertical>
                </ScrollView>
            </frame>
        </viewpager>
    </vertical>
</drawer>
);

ui.autoService.on("check", function (checked) {
    // 用户勾选无障碍服务的选项时，跳转到页面让用户去开启
    if (checked && auto.service == null) {
        app.startActivity({
            action: "android.settings.ACCESSIBILITY_SETTINGS"
        });
    }
    if (!checked && auto.service != null) {
        auto.service.disableSelf();
    }
});

// 当用户回到本界面时，resume事件会被触发
ui.emitter.on("resume", function () {
    // 此时根据无障碍服务的开启情况，同步开关的状态
    ui.autoService.checked = auto.service != null;
});

ui.start.on("click", function () {
    //程序开始运行之前判断无障碍服务
    if(auto.service == null) {
    toast("请先开启无障碍服务！");
    return;
    }
    main();
});

//创建选项菜单(右上角)
ui.emitter.on("create_options_menu", menu => {
    menu.add("控制台日志");
    menu.add("关于");
    menu.add("退出");
});

//监听选项菜单点击
ui.emitter.on("options_item_selected", (e, item) => {
    switch (item.getTitle()) {
        case "控制台日志":
            toast("控制台日志");
            confirm("确定要打开" + item.getTitle() + "吗").then(value => {
                if (value) {
                    threads.start(function () {
                        console.show();
                    })
                } else {}
            });
            break;
        case "关于":
            alert("关于", "欢太积分签到助手 V1.1.0\n\n本app基于Auto.JS打包而成，APP现阶段是在测试阶段。\n\n制作者:FreySu");
            break;
        case "退出":
            ui.finish();
            break;
    }
    e.consumed = true;
});

activity.setSupportActionBar(ui.toolbar);

//设置滑动页面的标题
ui.viewpager.setTitles(["日常签到", "获取途径", "使用说明"]);
//让滑动页面和标签栏联动
ui.tabs.setupWithViewPager(ui.viewpager);

var materialColors = ["#e91e63", "#ab47bc", "#5c6bc0", "#7e57c2", "##2196f3", "#00bcd4",
    "#26a69a", "#4caf50", "#8bc34a", "#ffeb3b", "#ffa726", "#78909c", "#8d6e63"
];

var AppObj = [{
        title: "软件商店",
        summary: "com.heytap.market",
        color: "#f44336",
        name: "market",
        done: false,
    },
    {
        title: "游戏中心",
        summary: "com.nearme.gamecenter",
        color: "#ff5722",
        name: "gamecenter",
        done: false,
    },
    {
        title: "主题商店",
        summary: "com.heytap.themestore",
        color: "#4caf50",
        name: "themestore",
        done: false
    },
    {
        title: "OPPO商城",
        summary: "com.oppo.store",
        color: "#2196f3",
        name: "oppostore",
        done: false
    },
    {
        title: "音乐",
        summary: "com.heytap.music",
        color: "#f44336",
        name: "music",
        done: false
    },
    {
        title: "视频",
        summary: "com.heytap.yoli",
        color: "#ff5722",
        name: "yoli",
        done: false
    },
    {
        title: "智能家居",
        summary: "com.heytap.smarthome",
        color: "#4caf50",
        name: "smarthome",
        done: false
    },
    {
        title: "钱包",
        summary: "com.finshell.wallet",
        color: "#2196f3",
        name: "wallet",
        done: false
    },
    {
        title: "浏览器",
        summary: "com.heytap.browser",
        color: "#f44336",
        name: "browser",
        done: false
    },
    {
        title: "OPPO社区",
        summary: "com.oppo.community",
        color: "#ff5722",
        name: "community",
        done: false
    },
    {
        title: "小布助手",
        summary: "com.heytap.speechassist",
        color: "#4caf50",
        name: "speechassist",
        done: false
    },
    {
        title: "我的realme",
        summary: "com.heytap.usercenter",
        color: "#4caf50",
        name: "usercenter",
        done: false
    },
    {
        title: "极速视频",
        summary: "com.heytap.ugcvideo.praise",
        color: "#4caf50",
        name: "ugcvideo",
        done: false
    },
];

var storage = storages.create("AppList3");
//从storage获取todo列表
var AppList3 = storage.get("items", AppObj);

ui.todoList1.setDataSource(AppList3);
ui.todoList1.on("item_bind", function (itemView, itemHolder) {
    //绑定勾选框事件
    itemView.done.on("check", function (checked) {
        let item = itemHolder.item;
        item.done = checked;
        let paint = itemView.title.paint;
        //设置或取消中划线效果
        if (checked) {
            paint.flags |= Paint.STRIKE_THRU_TEXT_FLAG;
        } else {
            paint.flags &= ~Paint.STRIKE_THRU_TEXT_FLAG;
        }
        itemView.title.invalidate();
    });
});

toast("请先浏览【使用说明】");

function main() {
    threads.start(function () {
        toast("你点击了【开始运行】按钮");
        ui.todoList1.on("item_click", function (item, i, itemView, listView) {
            //签到功能
            switch (item.name) {
                case "market":
                    confirm("确定要执行" + item.title + "签到吗？").then(value => {
                        if (value) {
                            itemView.done.checked = !itemView.done.checked;
                            toast("开始执行" + item.title + "签到");
                            threads.start(function () {
                                marketSign();
                            });
                        } else {
                            toast("取消执行" + item.title + "签到");
                        }
                    });
                    break;
                case "gamecenter":
                    confirm("确定要执行" + item.title + "签到吗？").then(value => {
                        if (value) {
                            itemView.done.checked = !itemView.done.checked;
                            toast("开始执行" + item.title + "签到");
                            threads.start(function () {
                                gameCenterSign();
                            });
                        } else {
                            toast("取消执行" + item.title + "签到");
                        }
                    });
                    break;
                case "themestore":
                    confirm("确定要执行" + item.title + "签到吗？").then(value => {
                        if (value) {
                            itemView.done.checked = !itemView.done.checked;
                            toast("开始执行" + item.title + "签到");
                            threads.start(function () {
                                themeStoreSign();
                            });
                        } else {
                            toast("取消执行" + item.title + "签到");
                        }
                    });
                    break;
                case "oppostore":
                    confirm("确定要执行" + item.title + "签到吗？").then(value => {
                        if (value) {
                            itemView.done.checked = !itemView.done.checked;
                            toast("开始执行" + item.title + "签到");
                            threads.start(function () {
                                oppoStoreSign();
                            });
                        } else {
                            toast("取消执行" + item.title + "签到");
                        }
                    });
                    break;
                case "music":
                    confirm("确定要执行" + item.title + "签到吗？").then(value => {
                        if (value) {
                            itemView.done.checked = !itemView.done.checked;
                            toast("开始执行" + item.title + "签到");
                            threads.start(function () {
                                musicSign();
                            });
                        } else {
                            toast("取消执行" + item.title + "签到");
                        }
                    });
                    break;
                case "yoli":
                    confirm("确定要执行" + item.title + "签到吗？").then(value => {
                        if (value) {
                            itemView.done.checked = !itemView.done.checked;
                            toast("开始执行" + item.title + "签到");
                            threads.start(function () {
                                yoliSign();
                            });
                        } else {
                            toast("取消执行" + item.title + "签到");
                        }
                    });
                    break;
                case "smarthome":
                    confirm("确定要执行" + item.title + "签到吗？").then(value => {
                        if (value) {
                            itemView.done.checked = !itemView.done.checked;
                            toast("开始执行" + item.title + "签到");
                            threads.start(function () {
                                smartHomeSign();
                            });
                        } else {
                            toast("取消执行" + item.title + "签到");
                        }
                    });
                    break;
                case "wallet":
                    confirm("确定要执行" + item.title + "签到吗？").then(value => {
                        if (value) {
                            itemView.done.checked = !itemView.done.checked;
                            toast("开始执行" + item.title + "签到");
                            threads.start(function () {
                                walletSign();
                            });
                        } else {
                            toast("取消执行" + item.title + "签到");
                        }
                    });
                    break;
                case "browser":
                    confirm("确定要执行" + item.title + "签到吗？").then(value => {
                        if (value) {
                            itemView.done.checked = !itemView.done.checked;
                            toast("开始执行" + item.title + "签到");
                            threads.start(function () {
                                browserSign();
                            });
                        } else {
                            toast("取消执行" + item.title + "签到");
                        }
                    });
                    break;
                case "community":
                    confirm("确定要执行" + item.title + "签到吗？").then(value => {
                        if (value) {
                            itemView.done.checked = !itemView.done.checked;
                            toast("开始执行" + item.title + "签到");
                            threads.start(function () {
                                communitySign();
                            });
                        } else {
                            toast("取消执行" + item.title + "签到");
                        }
                    });
                    break;
                case "speechassist":
                    confirm("确定要执行" + item.title + "签到吗？").then(value => {
                        if (value) {
                            itemView.done.checked = !itemView.done.checked;
                            toast("开始执行" + item.title + "签到");
                            threads.start(function () {
                                speechassistSign();
                            });
                        } else {
                            toast("取消执行" + item.title + "签到");
                        }
                    });
                    break;
                case "ugcvideo":
                    confirm("确定要执行" + item.title + "签到吗？").then(value => {
                        if (value) {
                            itemView.done.checked = !itemView.done.checked;
                            toast("开始执行" + item.title + "签到");
                            threads.start(function () {
                                ugcvideoSign();
                            });
                        } else {
                            toast("取消执行" + item.title + "签到");
                        }
                    });
                    break;
                case "usercenter":
                    confirm("确定要执行" + item.title + "签到吗？").then(value => {
                        if (value) {
                            itemView.done.checked = !itemView.done.checked;
                            toast("开始执行" + item.title + "签到");
                            threads.start(function () {
                                usercenterSign();
                            });
                        } else {
                            toast("取消执行" + item.title + "签到");
                        }
                    });
                    break;
                default:
                    toast("未选择");
                    break;
            }
        });
    })
}
// 软件商店签到
function marketSign() {
    console.show();
    log("打开软件商店");
    toast("打开软件商店");
    if (app.launchPackage("com.heytap.market")) {
        sign();
    } else {
        endSign();
    }
    backAPP();
}
// 游戏中心签到
function gameCenterSign() {
    console.show();
    log("打开游戏中心");
    toast("打开游戏中心");
    if (app.launchPackage("com.nearme.gamecenter")) {
        sign();
    } else {
        endSign();
    }
    backAPP();
}
// 主题商店签到
function themeStoreSign() {
    console.show();
    log("打开 主题商店");
    toast("打开 主题商店");
    if (app.launchPackage("com.heytap.themestore")) {
        sign();
    } else {
        endSign();
    }
    backAPP();
}
// OPPO商城签到
function oppoStoreSign() {
    console.show();
    log("打开 OPPO商城");
    toast("打开 OPPO商城");
    if (app.launchPackage("com.oppo.store")) {
        sign();
    } else {
        endSign();
    }
    backAPP();
}
// 音乐签到
function musicSign() {
    console.show();
    log("打开 音乐");
    toast("打开 音乐");
    if (app.launchPackage("com.heytap.music")) {
        sign();
    } else {
        endSign();
    }
    backAPP();
}
// 视频签到
function yoliSign() {
    console.show();
    log("打开 视频");
    toast("打开 视频");
    if (app.launchPackage("com.heytap.yoli")) {
        sign();
    } else {
        endSign();
    }
    backAPP();
}
// 智能家居签到
function smartHomeSign() {
    console.show();
    log("打开 智能家居");
    toast("打开 智能家居");
    if (app.launchPackage("com.heytap.smarthome")) {
        sign();
    } else {
        endSign();
    }
    backAPP();
}
// 钱包签到
function walletSign() {
    console.show();
    log("打开 钱包");
    toast("打开 钱包");
    if (app.launchPackage("com.finshell.wallet")) {
        sign();
    } else {
        endSign();
    }
    backAPP();
}
// 浏览器签到
function browserSign() {
    console.show();
    log("打开 浏览器");
    toast("打开 浏览器");
    if (app.launchPackage("com.heytap.browser")) {
        sign();
    } else {
        endSign();
    }
    backAPP();
}
// OPPO社区签到
function communitySign() {
    console.show();
    log("打开 OPPO社区");
    toast("打开 OPPO社区");
    if (app.launchPackage("com.oppo.community")) {
        sign();
    } else {
        endSign();
    }
    backAPP();
    back
}
// 小布助手签到
function speechassistSign() {
    console.show();
    log("打开 小布助手");
    toast("打开 小布助手");
    if (app.launchPackage("com.heytap.speechassist")) {
        sign();
        log("已签");
        toast("已签");
    } else {
        endSign();
    }
    backAPP();
}
// 极速视频签到
function ugcvideoSign() {
    console.show();
    log("打开 极速视频");
    toast("打开 极速视频");
    if (app.launchPackage("com.heytap.ugcvideo.praise")) {
        sign();
    } else {
        endSign();
    }
    backAPP();
}
// 我的realme签到
function usercenterSign() {
    console.show();
    log("打开 我的realme");
    toast("打开 我的realme");
    var i = app.intent({
        action: "android.intent.action.VIEW",
        packageName: "com.heytap.usercenter",
        className: "com.platform.usercenter.credits.ui.SignActivity",
    });
    app.startActivity(i);
    if (app.getAppName("com.heytap.usercenter")) {
        sleep(1500);
        var signchecked1 = text("已签");
        var qd2 = text("签到");
        if (qd2.exists()) {
            sleep(1500);
            log("点击“签到”");
            toast("点击“签到”");
            click(qd2.findOne().bounds().centerX(), qd2.findOne().bounds().centerY());
            sleep(1500);
            log("已签");
            toast("已签");
        } else if (signchecked1.exists()) {
            log("已签");
            toast("已签");
        }
    } else {
        endSign();
    }
    backAPP();
}

// 返回REALME积分签到助手
function backAPP() {
    sleep(1500);
    log("返回REALME积分签到助手");
    toast("返回REALME积分签到助手");
    app.launchPackage("com.freysu.realmepoints");
}

// 基础签到
function sign() {
    skip();
    text("我的").waitFor();
    log("找到“我的”");
    toast("找到“我的”");
    var me = text("我的").boundsInside(0, device.height * 3 / 4, device.width, device.height).findOne();
    sleep(1000);
    if (me.visibleToUser()) {
        sleep(1000);
        log("点击“我的”");
        toast("点击“我的”");
        log(click(me.bounds().centerX(), me.bounds().centerY()));
        sleep(1000);
        var signchecked = text("已签");
        var signchecked4 = text("已签到");
        var qd3 = text("   签到"); //极速视频
        var qd = text("签到");
        if (qd.exists()) {
            log("点击“签到”");
            toast("点击“签到”");
            click(qd.findOne().bounds().centerX(), qd.findOne().bounds().centerY());
            sleep(1500);
            var signchecked2 = text("签到成功");
            var signchecked5 = text("立即签到");
            var qd1 = text("签到");
            if (qd1.exists()) {
                log("点击签到页的“签到”");
                toast("点击签到页的“签到”");
                click(qd1.findOne().bounds().centerX(), qd1.findOne().bounds().centerY());
                sleep(1500);
                safeCheck();
            } else if (signchecked2.exists()) {
                log("已签");
                toast("已签");
            } else if (signchecked5.exists()) {
                // 欢太商城(OPPO商城)
                log("点击“立即签到”");
                toast("点击“立即签到”");
                click(signchecked5.findOne().bounds().centerX(), signchecked5.findOne().bounds().centerY());
                sleep(2000);
                log("已签");
                toast("已签");
            } else {
                sleep(2000);
                gqd();
            }
        } else if (signchecked.exists()) {
            // 判断 我的 页面是否显示 已签
            log("已签");
            toast("已签");
        } else if (signchecked4.exists()) {
            // 判断 浏览器 我的 页面是否显示 已签
            log("已签");
            toast("已签");
        } else if (qd3.exists()) {
            log("点击签到页的“签到”");
            toast("点击签到页的“签到”");
            click(qd3.findOne().bounds().centerX(), qd3.findOne().bounds().centerY());
            sleep(1500);
            var qd = text("签到");
            if (qd.exists()) {
                log("点击“签到”");
                toast("点击“签到”");
                click(qd.findOne().bounds().centerX(), qd.findOne().bounds().centerY());
                sleep(1500);
                var qd1 = text("签到");
                if (qd1.exists()) {
                    log("点击签到页的“签到”");
                    toast("点击签到页的“签到”");
                    click(qd1.findOne().bounds().centerX(), qd1.findOne().bounds().centerY());
                    sleep(1500);
                    safeCheck();
                }
            }
        }
    }
}

// 结束基础签到
function endSign() {
    log("软件不存在，结束本次签到");
    toast("软件不存在，结束本次签到");
}

// 跳过广告
function skip() {
    log("正在等待广告结束（默认6秒）");
    toast("正在等待广告结束（默认6秒）");
    sleep(6000);
}

// 安全验证
function safeCheck() {
    //text("安全验证").waitFor();
    var safecheck = text("安全验证");
    if (safecheck.exists()) {
        log("请手动验证");
        toast("请手动验证");
        sleep(5000);
        text("已签到").waitFor();
        var signcheck = text("已签到");
        if (signcheck.exists()) {
            log("已签");
            toast("已签");
        }
    } else {
        var signcheck = text("已签到");
        if (signcheck.exists()) {
            log("已签");
            toast("已签");
        }
    }
}

// 视频APP_去签到
function gqd() {
    var gqd = text("去签到");
    var signchecked3 = text("已签到");
    if (gqd.exists()) {
        //适用于视频APP
        log("点击签到页的“去签到”");
        toast("点击签到页的“去签到”");
        click(gqd.findOne().bounds().centerX(), gqd.findOne().bounds().centerY());
        sleep(1500);
        var qd1 = text("签到");
        if (qd1.exists()) {
            log("点击签到页的“签到”");
            toast("点击签到页的“签到”");
            click(qd1.findOne().bounds().centerX(), qd1.findOne().bounds().centerY());
            sleep(1500);
            safeCheck();
        } else if (signchecked3.exists()) {
            log("已签");
            toast("已签");
        }
    }
    var signchecked3 = text("已签到");
    if (gqd.exists()) {
        //适用于视频APP
        log("点击签到页的“去签到”");
        toast("点击签到页的“去签到”");
        click(gqd.findOne().bounds().centerX(), gqd.findOne().bounds().centerY());
        sleep(1500);
        var qd1 = text("签到");
        if (qd1.exists()) {
            log("点击签到页的“签到”");
            toast("点击签到页的“签到”");
            click(qd1.findOne().bounds().centerX(), qd1.findOne().bounds().centerY());
            sleep(1500);
            safeCheck();
        } else if (signchecked3.exists()) {
            log("已签");
            toast("已签");
        }
    }
}