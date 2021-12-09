"ui";
var color = "#009688";
// account
var myUA, mytempCK, myCK;
var storage = storages.create("heyTapCkUa2");
var COOKIE = storage.get("CK");
var UA = storage.get("UA");
// 任务
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
// 抽奖
var cjrealme宠粉计划 = "./modules/[抽奖]realme宠粉计划.js";
var cjrealme积分乱斗 = "./modules/[抽奖]realme积分乱斗.js";
var cjReno7 = "./modules/[抽奖]Reno7.js";
var cjReno7流星宝藏 = "./modules/[抽奖]Reno7 流星宝藏.js";
var cj欢太宠粉计划 = "./modules/[抽奖]欢太宠粉计划.js";
var cj零元赚积分 = "./modules/[抽奖]零元赚积分.js";
var cj每日积分翻倍 = "./modules/[抽奖]每日积分翻倍.js";
var cj天天积分翻倍 = "./modules/[抽奖]天天积分翻倍.js";
var cj赚积分购好物 = "./modules/[抽奖]赚积分购好物.js";

ui.layout(
    <drawer id="drawer">
    <vertical>
        <appbar>
            <!-- 顶栏标题 -->
            <toolbar id="toolbar" title="欢太积分助手" />
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
                            <checkbox textSize="16sp" id="done" marginLeft="4" marginRight="6"
                                checked="{{this.done}}" />
                        </horizontal>
                    </card>
                </list>
            </frame>
            <!-- （商城任务）第二页内容 -->
            <frame>
                <ScrollView>
                    <vertical padding="10 8">
                        <checkbox textSize="16sp" id="tk1" text="社区视频" />
                        <checkbox textSize="16sp" id="tk2" text="赚积分购好物" />
                        <checkbox textSize="16sp" id="tk3" text="Reno7" />
                        <checkbox textSize="16sp" id="tk4" text="一加加油站" />
                        <checkbox textSize="16sp" id="tk5" text="现金助力" />
                        <checkbox textSize="16sp" id="tk6" text="现金任务" />
                        <checkbox textSize="16sp" id="tk7" text="全家桶签到" />
                        <checkbox textSize="16sp" id="tk8" text="签到页面" />
                        <checkbox textSize="16sp" id="tk9" text="零元赚积分" />
                        <checkbox textSize="16sp" id="tk10" text="Reno7 流星宝藏" />
                        <checkbox textSize="16sp" id="tk11" text="realme积分乱斗" />
                        <horizontal gravity="center">
                            <button id="allSelect" text="全选" />
                            <button id="clallSelect" text="取消全选" />
                            <button id="Run" text="执行" />
                            <button id="consoleClear" text="清日志" />
                        </horizontal>
                        <com.stardust.autojs.core.console.ConsoleView id="console" h="*" />
                    </vertical>
                </ScrollView>
            </frame>
            <!-- （抽奖活动）第三页内容 -->
            <frame>
                <ScrollView>
                    <vertical padding="10 8">
                        <checkbox textSize="16sp" id="cj1" text="realme宠粉计划" />
                        <checkbox textSize="16sp" id="cj2" text="realme积分乱斗" />
                        <checkbox textSize="16sp" id="cj3" text="Reno7" />
                        <checkbox textSize="16sp" id="cj4" text="Reno7 流星宝藏" />
                        <checkbox textSize="16sp" id="cj5" text="欢太宠粉计划" />
                        <checkbox textSize="16sp" id="cj6" text="零元赚积分" />
                        <checkbox textSize="16sp" id="cj7" text="每日积分翻倍" />
                        <checkbox textSize="16sp" id="cj8" text="天天积分翻倍" />
                        <checkbox textSize="16sp" id="cj9" text="赚积分购好物" />
                        <horizontal gravity="center">
                            <button id="allSelect1" text="全选" />
                            <button id="clallSelect1" text="取消全选" />
                            <button id="Run1" text="执行" />
                        </horizontal>
                    </vertical>
                </ScrollView>
            </frame>
        </viewpager>
    </vertical>
    <vertical layout_gravity="left" bg="#ffffff" w="280">
        <img w="280" h="200" scaleType="fitXY"
            src="http://images.shejidaren.com/wp-content/uploads/2014/10/023746fki.jpg" />
        <horizontal>
            <Switch id="autoService" text="无障碍服务" checked="{{auto.service != null}}" padding="16 8 8 16"
                textSize="15sp" />
            <button id="start" text="开始运行" margin="30 0 0 0" />
        </horizontal>
        <list id="menu">
            <horizontal bg="?selectableItemBackground" w="*">
                <img w="50" h="50" padding="16" src="{{this.icon}}" tint="{{color}}" />
                <text textColor="black" textSize="15sp" text="{{this.title}}" layout_gravity="center" />
            </horizontal>
        </list>
    </vertical>
</drawer>
);

function showHelp() {
    ui.layout(
        <drawer id="drawer1">
        <vertical>
            <appbar>
                <toolbar id="toolbar1" title="帮助" />
                <tabs id="tabs1" />
            </appbar>
            <viewpager id="viewpager1">
                <frame>
                    <ScrollView>
                        <vertical padding="10 8">
                            <frame height="match_parent" gravity="center">
                                <vertical>
                                    <text text="1. 使用之前请先打开无障碍服务。再打开之后请点【使用说明】页面的【开始运行】按钮。" textSize="16sp" />
                                    <text text="2. 签到脚本执行过程中请勿进行其他操作，避免误触。" textSize="16sp" />
                                    <text text="3. 执行过程中显示控制台日志，如果是第一次使用，可能会请求你开启悬浮窗功能权限。控制台日志可以关闭或者显示。"
                                        textSize="16sp" />
                                    <text text="4. 如果你需要使用【商城任务】以及【抽奖活动】的脚本功能，请先填写好你的UA和COOKIE。" textSize="16sp" />
                                    <text text="5. 如果填写过你的UA和COOKIE，可以不用再填写了。" textSize="16sp" />
                                    <text text="6. 【商城任务】中【现金助力】需要填写要助力的账号id。" textSize="16sp" />
                                    <text text="" />
                                </vertical>
                            </frame>
                        </vertical>
                    </ScrollView>
                </frame>
                <frame>
                    <ScrollView>
                        <vertical padding="10 8">
                            <frame height="match_parent" gravity="center">
                                <vertical>
                                    <text text="1. 打开本APP的无障碍服务。" textSize="16sp" />
                                    <text text="2. 点击【使用说明】页面的【开始运行】按钮。" textSize="16sp" />
                                    <text text="（现在就可以自己选择执行哪个签到了，比如我要执行软件商店签到）" textSize="14sp" />
                                    <text text="1. 点击【签到任务】页面的“软件商店”。" textSize="16sp" />
                                    <text text="2. 会弹出“确定要执行软件商店签到吗？”，点击“确定”将会开始执行签到，点击“取消”将会取消本次签到。" textSize="16sp" />
                                    <text text="" />
                                </vertical>
                            </frame>
                        </vertical>
                    </ScrollView>
                </frame>
                <frame>
                    <ScrollView>
                        <vertical padding="10 8">
                            <frame height="match_parent" gravity="center">
                                <vertical>
                                    <text text="1. 需要自己去抓OPPO商城的领券页面的UA和COOKIE。抓取方法请自行百度。" textSize="16sp" />
                                    <text text="2. 在本APP【右上角按钮】的【设置】的【配置账号】中填写。" textSize="16sp" />
                                    <text text="" />
                                </vertical>
                            </frame>
                        </vertical>
                    </ScrollView>
                </frame>
                <frame>
                    <ScrollView>
                        <vertical padding="10 8">
                            <frame height="match_parent" gravity="center">
                                <vertical>
                                    <text text="----OPPO 积分获取途径汇总----" textSize="18sp" gravity="center" />
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
            </viewpager>
        </vertical>
    </drawer>
    );

    //设置滑动页面的标题
    ui.viewpager1.setTitles(["注意事项", "使用说明", "配置账号", "获取途径"]);
    //让滑动页面和标签栏联动
    ui.tabs1.setupWithViewPager(ui.viewpager1);

    activity.setSupportActionBar(ui.toolbar1);
}

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
    if (auto.service == null) {
        toast("请先开启无障碍服务！");
        return;
    }
    main();
});

//创建选项菜单(右上角)
ui.emitter.on("create_options_menu", menu => {
    menu.add("退出");
});

//监听选项菜单点击
ui.emitter.on("options_item_selected", (e, item) => {
    switch (item.getTitle()) {
        case "退出":
            ui.finish();
            break;
    }
    e.consumed = true;
});
activity.setSupportActionBar(ui.toolbar);

//设置滑动页面的标题
ui.viewpager.setTitles(["日常签到", "商城任务", "抽奖活动"]);
//让滑动页面和标签栏联动
ui.tabs.setupWithViewPager(ui.viewpager);

//让工具栏左上角可以打开侧拉菜单
ui.toolbar.setupWithDrawer(ui.drawer);
ui.menu.setDataSource([{
        title: "设置",
        icon: "@drawable/ic_android_black_48dp"
    },
    {
        title: "关于",
        icon: "@drawable/ic_settings_black_48dp"
    },
    {
        title: "使用说明",
        icon: "@drawable/ic_favorite_black_48dp"
    },
    {
        title: "退出",
        icon: "@drawable/ic_exit_to_app_black_48dp"
    }
]);

ui.menu.on("item_click", item => {
    switch (item.title) {
        case "使用说明":
            showHelp();
            break;
        case "关于":
            alert("欢太积分助手 V1.1.0", "本app基于Auto.JS打包而成，\nAPP现阶段是在测试阶段。\n\n制作者：酷安@FreySu");
            break;
        case "退出":
            ui.finish();
            break;
        case "设置":
            var accSetting = ["配置账号", "查看当前账号"];
            dialogs.select("设置", accSetting)
                .then(i => {
                    switch (i) {
                        case 0:
                            dialogs.confirm("要配置账号吗?", "", function (b) {
                                if (b) {
                                    dialogs.rawInput("请输入您的UA", "", function (myUA) {
                                        return dialogs.rawInput("请输入您的COOKIE", "", function (mytempCK) {
                                            //alert("您输入的UA是:\n" + myUA);
                                            //alert("您输入的COOKIE是:\n" + mytempCK);
                                            let myCK = "'" + mytempCK + "'";
                                            var storage = storages.create("heyTapCkUa2");
                                            storage.put("UA", myUA);
                                            storage.put("CK", myCK);
                                            var UA1 = storage.get("UA");
                                            var COOKIE1 = storage.get("CK");
                                            UA = UA1;
                                            COOKIE = COOKIE1;
                                            //log("您输入的UA是\n" + UA1);
                                            //log("您输入的COOKIE是\n" + COOKIE1);
                                            //log("----");
                                            log("配置完后的UA是\n" + UA);
                                            log("配置完后的COOKIE是\n" + COOKIE);
                                            log("----");
                                        });
                                    });
                                } else {}
                            });
                            break;
                        case 1:
                            //toast("选了" + accSetting[i]);
                            log("当前的UA是\n" + UA);
                            log("当前COOKIE是\n" + COOKIE);
                            log("提示：可以点击【清除日志】清除该区域的内容")
                            break;
                        default:
                            //toast("未做选择");
                            break;
                    }
                });
            break;
    }
})

var isCanFinish = false;
var isCanFinishTimeout;
ui.emitter.on("back_pressed", e => {
    if (!isCanFinish) {
        isCanFinish = true;
        isCanFinishTimeout = setTimeout(() => {
            toastLog("再按一次退出");
            isCanFinish = false;
        }, 400);
        e.consumed = true;
    } else {
        clearTimeout(isCanFinishTimeout);
        e.consumed = false;
    };
});


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
var storage = storages.create("AppList4");
//从storage获取todo列表
var AppList4 = storage.get("items", AppObj);

ui.todoList1.setDataSource(AppList4);

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

ui.console.setConsole(runtime.console);
// 设置控制台字体颜色
let c = new android.util.SparseArray();
let Log = android.util.Log;
c.put(Log.VERBOSE, new java.lang.Integer(colors.parseColor("#dfc0c0c0")));
c.put(Log.DEBUG, new java.lang.Integer(colors.parseColor("#cc000000")));
c.put(Log.INFO, new java.lang.Integer(colors.parseColor("#ff64dd17")));
c.put(Log.WARN, new java.lang.Integer(colors.parseColor("#ff2962ff")));
c.put(Log.ERROR, new java.lang.Integer(colors.parseColor("#ffd50000")));
c.put(Log.ASSERT, new java.lang.Integer(colors.parseColor("#ffff534e")));
ui.console.setColors(c);

// 清除商城任务界面的控制台日志
ui.consoleClear.on("click", function () {
    console.clear();
})

toast("请先浏览【使用说明】");

function main() {
    threads.start(function () {
        ui.todoList1.on("item_click", function (item, i, itemView, listView) {
            //签到功能
            switch (item.name) {
                case "market":
                    toastLog("开始执行软件商店签到");
                    threads.start(function () {
                        marketSign();
                    });
                    break;
                case "gamecenter":
                    toastLog("开始执行游戏中心签到");
                    threads.start(function () {
                        gameCenterSign();
                    });
                    break;
                case "themestore":
                    toastLog("开始执行主题商店签到");
                    threads.start(function () {
                        themeStoreSign();
                    });
                    break;
                case "oppostore":
                    toastLog("开始执行OPPO商城签到");
                    threads.start(function () {
                        oppoStoreSign();
                    });
                    break;
                case "music":
                    toastLog("开始执行音乐签到");
                    threads.start(function () {
                        musicSign();
                    });
                    break;
                case "yoli":
                    toastLog("开始执行视频签到");
                    threads.start(function () {
                        yoliSign();
                    });
                    break;
                case "smarthome":
                    toastLog("开始执行智能家居签到");
                    threads.start(function () {
                        smartHomeSign();
                    });
                    break;
                case "wallet":
                    toastLog("开始执行钱包签到");
                    threads.start(function () {
                        walletSign();
                    });
                    break;
                case "browser":
                    toastLog("开始执行浏览器签到");
                    threads.start(function () {
                        browserSign();
                    });
                    break;
                case "community":
                    toastLog("开始执行OPPO社区签到");
                    threads.start(function () {
                        communitySign();
                    });
                    break;
                case "speechassist":
                    toastLog("开始执行小布助手签到");
                    threads.start(function () {
                        speechassistSign();
                    });
                    break;
                case "ugcvideo":
                    toastLog("开始执行极速视频签到");
                    threads.start(function () {
                        ugcvideoSign();
                    });
                    break;
                case "usercenter":
                    toastLog("开始执行我的realme签到");
                    threads.start(function () {
                        usercenterSign();
                    });
                    break;
                default:
                    toast("未选择");
                    break;
            }
        });
        //执行
        ui.Run.on("click", function () {
            selectRun();
            console.log("点击了执行");
        });
        //全选
        ui.allSelect.on("click", function () {
            // log(ui.allSelect.getText())
            ui.tk1.checked = true;
            ui.tk2.checked = true;
            ui.tk3.checked = true;
            ui.tk4.checked = true;
            ui.tk5.checked = true;
            ui.tk6.checked = true;
            ui.tk7.checked = true;
            ui.tk8.checked = true;
            ui.tk9.checked = true;
            ui.tk10.checked = true;
            ui.tk11.checked = true;
            console.log("点击了全选");
            toast("不建议全选执行，建议按需执行")
        })
        //取消全选
        ui.clallSelect.on("click", function () {
            ui.tk1.checked = false;
            ui.tk2.checked = false;
            ui.tk3.checked = false;
            ui.tk4.checked = false;
            ui.tk5.checked = false;
            ui.tk6.checked = false;
            ui.tk7.checked = false;
            ui.tk8.checked = false;
            ui.tk9.checked = false;
            ui.tk10.checked = false;
            ui.tk11.checked = false;
            console.log("点击了取消全选");
        })
        //执行
        ui.Run1.on("click", function () {
            selectRun1();
            console.log("点击了执行");
        })
        //全选
        ui.allSelect1.on("click", function () {
            ui.cj1.checked = true;
            ui.cj2.checked = true;
            ui.cj3.checked = true;
            ui.cj4.checked = true;
            ui.cj5.checked = true;
            ui.cj6.checked = true;
            ui.cj7.checked = true;
            ui.cj8.checked = true;
            ui.cj9.checked = true;
            console.log("点击了全选");
            toast("不建议全选执行，建议按需执行")
        })
        //取消全选
        ui.clallSelect1.on("click", function () {
            ui.cj1.checked = false;
            ui.cj2.checked = false;
            ui.cj3.checked = false;
            ui.cj4.checked = false;
            ui.cj5.checked = false;
            ui.cj6.checked = false;
            ui.cj7.checked = false;
            ui.cj8.checked = false;
            ui.cj9.checked = false;
            console.log("点击了取消全选");
        })
    })
}

function marketSign() {
    console.show();
    toastLog("打开软件商店");
    if (app.launchPackage("com.heytap.market")) {
        sign();
    } else {
        endSign();
    }
    backAPP();
}

function gameCenterSign() {
    console.show();
    toastLog("打开游戏中心");
    if (app.launchPackage("com.nearme.gamecenter")) {
        sign();
    } else {
        endSign();
    }
    backAPP();
}

function themeStoreSign() {
    console.show();
    toastLog("打开 主题商店");
    if (app.launchPackage("com.heytap.themestore")) {
        sign();
    } else {
        endSign();
    }
    backAPP();
}

function oppoStoreSign() {
    console.show();
    toastLog("打开 OPPO商城");
    if (app.launchPackage("com.oppo.store")) {
        sign();
    } else {
        endSign();
    }
    backAPP();
}

function musicSign() {
    console.show();
    toastLog("打开 音乐");
    if (app.launchPackage("com.heytap.music")) {
        sign();
    } else {
        endSign();
    }
    backAPP();
}

function yoliSign() {
    console.show();
    toastLog("打开 视频");
    if (app.launchPackage("com.heytap.yoli")) {
        sign();
    } else {
        endSign();
    }
    backAPP();
}

function smartHomeSign() {
    console.show();
    toastLog("打开 智能家居");
    if (app.launchPackage("com.heytap.smarthome")) {
        sign();
    } else {
        endSign();
    }
    backAPP();
}

function walletSign() {
    console.show();
    toastLog("打开 钱包");
    if (app.launchPackage("com.finshell.wallet")) {
        sign();
    } else {
        endSign();
    }
    backAPP();
}

function browserSign() {
    console.show();
    toastLog("打开 浏览器");
    if (app.launchPackage("com.heytap.browser")) {
        sign();
    } else {
        endSign();
    }
    backAPP();
}

function communitySign() {
    console.show();
    toastLog("打开 OPPO社区");
    if (app.launchPackage("com.oppo.community")) {
        sign();
    } else {
        endSign();
    }
    backAPP();
}

function speechassistSign() {
    console.show();
    toastLog("打开 小布助手");
    if (app.launchPackage("com.heytap.speechassist")) {
        sign();
        toastLog("已签");
    } else {
        endSign();
    }
    backAPP();
}

function ugcvideoSign() {
    console.show();
    toastLog("打开 极速视频");
    if (app.launchPackage("com.heytap.ugcvideo.praise")) {
        sign();
    } else {
        endSign();
    }
    backAPP();
}

function usercenterSign() {
    console.show();
    toastLog("打开 我的realme");
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
            toastLog("点击“签到”");
            click(qd2.findOne().bounds().centerX(), qd2.findOne().bounds().centerY());
            sleep(1500);
            toastLog("已签");
        } else if (signchecked1.exists()) {
            toastLog("已签");
        }
    } else {
        endSign();
    }
    backAPP();
}
// 返回欢太积分助手
function backAPP() {
    sleep(1500);
    toastLog("返回欢太积分助手");
    app.launchPackage("com.freysu.heytappoints");
}
// 基础签到
function sign() {
    skip();
    text("我的").waitFor();
    toastLog("找到“我的”");
    var me = text("我的").boundsInside(0, device.height * 3 / 4, device.width, device.height).findOne();
    sleep(1000);
    if (me.visibleToUser()) {
        sleep(1000);
        toastLog("点击“我的”");
        log(click(me.bounds().centerX(), me.bounds().centerY()));
        sleep(1000);
        var signchecked = text("已签");
        var signchecked4 = text("已签到");
        var qd3 = text("   签到"); //极速视频
        var qd = text("签到");
        if (qd.exists()) {
            toastLog("点击“签到”");
            click(qd.findOne().bounds().centerX(), qd.findOne().bounds().centerY());
            sleep(1500);
            var signchecked2 = text("签到成功");
            var signchecked5 = text("立即签到");
            var qd1 = text("签到");
            if (qd1.exists()) {
                toastLog("点击签到页的“签到”");
                click(qd1.findOne().bounds().centerX(), qd1.findOne().bounds().centerY());
                sleep(1500);
                safeCheck();
            } else if (signchecked2.exists()) {
                toastLog("已签");
            } else if (signchecked5.exists()) {
                // 欢太商城(OPPO商城)
                toastLog("点击“立即签到”");
                click(signchecked5.findOne().bounds().centerX(), signchecked5.findOne().bounds().centerY());
                sleep(2000);
                toastLog("已签");
            } else {
                sleep(2000);
                gqd();
            }
        } else if (signchecked.exists()) {
            // 判断 我的 页面是否显示 已签
            toastLog("已签");
        } else if (signchecked4.exists()) {
            // 判断 浏览器 我的 页面是否显示 已签
            toastLog("已签");
        } else if (qd3.exists()) {
            toastLog("点击签到页的“签到”");
            click(qd3.findOne().bounds().centerX(), qd3.findOne().bounds().centerY());
            sleep(1500);
            var qd = text("签到");
            if (qd.exists()) {
                toastLog("点击“签到”");
                click(qd.findOne().bounds().centerX(), qd.findOne().bounds().centerY());
                sleep(1500);
                var qd1 = text("签到");
                if (qd1.exists()) {
                    toastLog("点击签到页的“签到”");
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
    toastLog("软件不存在，结束本次签到");
}
// 跳过广告
function skip() {
    toastLog("正在等待广告结束（默认6秒）");
    sleep(6000);
}
// 安全验证
function safeCheck() {
    //text("安全验证").waitFor();
    var safecheck = text("安全验证");
    if (safecheck.exists()) {
        toastLog("请手动验证");
        sleep(5000);
        text("已签到").waitFor();
        var signcheck = text("已签到");
        if (signcheck.exists()) {
            toastLog("已签");
        }
    } else {
        var signcheck = text("已签到");
        if (signcheck.exists()) {
            toastLog("已签");
        }
    }
}
// 视频APP_去签到
function gqd() {
    var gqd = text("去签到");
    var signchecked3 = text("已签到");
    if (gqd.exists()) {
        //适用于视频APP
        toastLog("点击签到页的“去签到”");
        click(gqd.findOne().bounds().centerX(), gqd.findOne().bounds().centerY());
        sleep(1500);
        var qd1 = text("签到");
        if (qd1.exists()) {
            toastLog("点击签到页的“签到”");
            click(qd1.findOne().bounds().centerX(), qd1.findOne().bounds().centerY());
            sleep(1500);
            safeCheck();
        } else if (signchecked3.exists()) {
            toastLog("已签");
        }
    }
}

// 任务完成通知
function noticeFinish() {
    events.broadcast.on("exit", function (name) {
        toastLog("执行完成 " + name);
    });
}

// 任务选择
function selectRun() {
    if (ui.tk1.isChecked()) {
        console.log("选了" + ui.tk1.getText());
        threads.start(function () {
            engines.execScriptFile(tk社区视频);
            noticeFinish();
        });
    } else {
        // console.log("取消选了@");
    }
    if (ui.tk2.isChecked()) {
        console.log("选了" + ui.tk2.getText());
        threads.start(function () {
            engines.execScriptFile(tk赚积分购好物);
            noticeFinish();
        });
    } else {
        // console.log("取消选了@");
    }
    if (ui.tk3.isChecked()) {
        console.log("选了" + ui.tk3.getText());
        threads.start(function () {
            engines.execScriptFile(tkReno7);
            noticeFinish();
        });

    } else {
        // console.log("取消选了@");
    }
    if (ui.tk4.isChecked()) {
        console.log("选了" + ui.tk4.getText());
        threads.start(function () {
            engines.execScriptFile(tk一加加油站);
            noticeFinish();
        });
    } else {
        // console.log("取消选了@");
    }
    if (ui.tk5.isChecked()) {
        console.log("选了" + ui.tk5.getText());
        threads.start(function () {
            engines.execScriptFile(tk现金助力);
            noticeFinish();
        });
    } else {
        // console.log("取消选了@");
    }
    if (ui.tk6.isChecked()) {
        console.log("选了" + ui.tk6.getText());
        threads.start(function () {
            engines.execScriptFile(tk现金任务);
            noticeFinish();
        });
    } else {
        // console.log("取消选了@");
    }
    if (ui.tk7.isChecked()) {
        console.log("选了" + ui.tk7.getText());
        threads.start(function () {
            engines.execScriptFile(tk零元赚积分);
            noticeFinish();
        });
    } else {
        // console.log("取消选了@");
    }
    if (ui.tk8.isChecked()) {
        console.log("选了" + ui.tk8.getText());
        threads.start(function () {
            engines.execScriptFile(tkrealme积分乱斗);
            noticeFinish();
        });
    } else {
        // console.log("取消选了@");
    }
    if (ui.tk9.isChecked()) {
        console.log("选了" + ui.tk9.getText());
        threads.start(function () {
            engines.execScriptFile(tkReno7流星宝藏);
            noticeFinish();
        });
    } else {
        // console.log("取消选了@");
    }
    if (ui.tk10.isChecked()) {
        console.log("选了" + ui.tk10.getText());
        threads.start(function () {
            engines.execScriptFile(tk签到页面);
            noticeFinish();
        });
    } else {
        // console.log("取消选了@");
    }
    if (ui.tk11.isChecked()) {
        console.log("选了" + ui.tk11.getText());
        threads.start(function () {
            engines.execScriptFile(tk全家桶签到);
            noticeFinish();
        });
    } else {
        // console.log("取消选了@");
    }
}

// 抽奖选择
function selectRun1() {
    if (ui.cj1.isChecked()) {
        console.log("选了" + ui.cj1.getText());
        threads.start(function () {
            engines.execScriptFile(cjrealme宠粉计划);
            noticeFinish();
        });
    } else {
        // console.log("取消选了1");
    }
    if (ui.cj2.isChecked()) {
        console.log("选了" + ui.cj2.getText());
        threads.start(function () {
            engines.execScriptFile(cjrealme积分乱斗);
            noticeFinish();
        });
    } else {
        // console.log("取消选了2");
    }
    if (ui.cj3.isChecked()) {
        console.log("选了" + ui.cj3.getText());
        threads.start(function () {
            engines.execScriptFile(cjReno7);
            noticeFinish();
        });
    } else {
        // console.log("取消选了3");
    }
    if (ui.cj4.isChecked()) {
        console.log("选了" + ui.cj4.getText());
        threads.start(function () {
            engines.execScriptFile(cjReno7流星宝藏);
            noticeFinish();
        });
    } else {
        // console.log("取消选了4");
    }
    if (ui.cj5.isChecked()) {
        console.log("选了" + ui.cj5.getText());
        threads.start(function () {
            engines.execScriptFile(cj欢太宠粉计划);
            noticeFinish();
        });
    } else {
        // console.log("取消选了5");
    }
    if (ui.cj6.isChecked()) {
        console.log("选了" + ui.cj6.getText());
        threads.start(function () {
            engines.execScriptFile(cj零元赚积分);
            noticeFinish();
        });
    } else {
        // console.log("取消选了6");
    }
    if (ui.cj7.isChecked()) {
        console.log("选了" + ui.cj7.getText());
        threads.start(function () {
            engines.execScriptFile(cj每日积分翻倍);
            noticeFinish();
        });
    } else {
        // console.log("取消选了7");
    }
    if (ui.cj8.isChecked()) {
        console.log("选了" + ui.cj8.getText());
        threads.start(function () {
            engines.execScriptFile(cj天天积分翻倍);
            noticeFinish();
        });
    } else {
        // console.log("取消选了8");
    }
    if (ui.cj9.isChecked()) {
        console.log("选了" + ui.cj9.getText());
        threads.start(function () {
            engines.execScriptFile(cj赚积分购好物);
            noticeFinish();
        });
    } else {
        // console.log("取消选了9");
    }
}