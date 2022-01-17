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
// 自用
var zy全家桶签到 = "./modules/[自用]全家桶签到.js"
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
                        <checkbox textSize="16sp" id="tk7" text="零元赚积分" />
                        <checkbox textSize="16sp" id="tk8" text="realme积分乱斗" />
                        <checkbox textSize="16sp" id="tk9" text="Reno7 流星宝藏" />
                        <checkbox textSize="16sp" id="tk10" text="签到页面" />
                        <checkbox textSize="16sp" id="tk11" text="全家桶签到" />
                        <horizontal gravity="center">
                            <button id="allSelect" text="全选" />
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
                            <button id="Run1" text="执行" />
                        </horizontal>
                    </vertical>
                </ScrollView>
            </frame>
            <!-- （日志）第四页内容 -->
                <frame>
                    <ScrollView>
                        <vertical padding="10 8">
                            <text id="runLog" text="" />
                        </vertical>
                    </ScrollView>
                    <fab id="textGo" w="auto" h="auto" src="@drawable/ic_play_arrow_black_48dp" margin="16"
                    layout_gravity="bottom|left" tint="#ffffff" />
                    <fab id="textClear" w="auto" h="auto" src="@drawable/ic_clear_all_black_48dp" margin="16"
                    layout_gravity="bottom|right" tint="#ffffff" />
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

ui.autoService.on("check", function(checked) {
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
ui.emitter.on("resume", function() {
    // 此时根据无障碍服务的开启情况，同步开关的状态
    ui.autoService.checked = auto.service != null;
});

ui.start.on("click", function() {
    //程序开始运行之前判断无障碍服务
    if (auto.service == null) {
        toast("请先开启无障碍服务！");
        return;
    }
    main();
});

//创建选项菜单(右上角)
ui.emitter.on("create_options_menu", menu => {
    menu.add("删除日志");
    menu.add("签到");
    menu.add("停止");
    menu.add("退出");
});
//监听选项菜单点击
ui.emitter.on("options_item_selected", (e, item) => {
    switch (item.getTitle()) {
        case "退出":
            ui.finish();
            break;
        case "停止":
            engines.stopAllAndToast();
            break;
        case "签到":
            threads.start(function() {
                sleep(1500)
                marketSign();
                sleep(1500);
                gameCenterSign();
                sleep(1500);
                themeStoreSign();
                sleep(1500);
                oppoStoreSign();
                sleep(1500);
                musicSign();
                sleep(1500);
                yoliSign();
                sleep(1500);
                smartHomeSign();
                sleep(1500);
                walletSign();
                sleep(1500);
                browserSign();
                sleep(1500);
                communitySign();
                sleep(1500);
                speechassistSign();
                sleep(1500);
                ugcvideoSign();
                sleep(1500);
                usercenterSign();
                sleep(1500);
                var enginesId;
                toastLog("开始执行 全家桶签到")
                enginesId = engines.execScriptFile(zy全家桶签到);
                sleep(500);
                while (!enginesId.getEngine().isDestroyed()) {
                  sleep(1000);
                }
                toastLog("执行完成")
                console.hide();
            });
            break;
        case "删除日志":
            if (files.exists(path)){
                log(files.remove(path))
                toastLog("删除成功")
            }else{
                toastLog("没有生成日志")
            }
    }
    e.consumed = true;
});
activity.setSupportActionBar(ui.toolbar);

//设置滑动页面的标题
ui.viewpager.setTitles(["日常签到", "商城任务", "抽奖活动","日志"]);
//让滑动页面和标签栏联动
ui.tabs.setupWithViewPager(ui.viewpager);

//让工具栏左上角可以打开侧拉菜单
ui.toolbar.setupWithDrawer(ui.drawer);
ui.menu.setDataSource([{
        title: "免责声明",
        icon: "@drawable/ic_favorite_black_48dp"
    },
    {
        title: "账号",
        icon: "@drawable/ic_account_circle_black_48dp"
    },
    {
        title: "帮助",
        icon: "@drawable/ic_help_black_48dp"
    },
    {
        title: "关于",
        icon: "@drawable/ic_info_black_48dp"
    },
    {
        title: "退出",
        icon: "@drawable/ic_exit_to_app_black_48dp"
    }
]);

ui.menu.on("item_click", item => {
    switch (item.title) {
        case "免责声明":
            dialogs.build({
                title: "免责声明",
                content: "    本项目中涉及的任何脚本，仅用于测试和学习研究，禁止用于商业用途，不能保证其合法性，准确性，完整性和有效性，请根据情况自行判断。\n    所有使用者在使用本项目的任何部分时，需先遵守法律法规。对于一切使用不当所造成的后果，需自行承担。对任何脚本问题概不负责，包括但不限于由任何脚本错误导致的任何损失或损害。\n    如果任何单位或个人认为该项目可能涉嫌侵犯其权利，则应及时通知并提供身份证明，所有权证明，我们将在收到认证文件后删除相关文件。\n    任何以任何方式查看此项目的人或直接或间接使用该项目的任何脚本的使用者都应仔细阅读此声明。本人保留随时更改或补充此免责声明的权利。一旦使用并复制了任何相关脚本或本项目的规则，则视为您已接受此免责声明。\n    您必须在下载后的24小时内从计算机或手机中完全删除以上内容。\n    您使用或者复制了本项目且本人制作的任何脚本，则视为已接受此声明，请仔细阅读。",
                positive: "接受",
                negative: "不接受"
            }).on("positive", () => {
                toast("你已接受此声明");
            }).on("negative", () => {
                ui.finish();
            }).show();
            break;
        case "帮助":
            engines.execScriptFile("./helpUI.js");
            break;
        case "关于":
            alert("欢太积分助手 V1.2.0", "本app基于AutoJS打包而成\n\n本APP使用到的部分脚本基于酷安@iFyn_编写的开源AutoJS脚本\n\nAPP现阶段是在测试阶段\n\n制作者：酷安@FreySu\n\n本APP的开源项目地址：\nhttps://github.com/freysu/HeyTapPointsAssistant\n\n酷安@iFyn_的开源项目地址：\nhttps://github.com/i-Fyn/oppostore");
            break;
        case "退出":
            ui.finish();
            break;
        case "账号":
            var accSetting = ["配置账号", "查看当前账号"];
            dialogs.select("账号", accSetting)
                .then(i => {
                    switch (i) {
                        case 0:
                            dialogs.confirm("要配置账号吗?", "", function(b) {
                                if (b) {
                                    dialogs.rawInput("请输入您的UA", "", function(myUA) {
                                        return dialogs.rawInput("请输入您的COOKIE", "", function(mytempCK) {
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
                            toast("请到【商城任务】的控制台日志查看")
                            log("提示：可以点击【清除日志】清除该区域的内容")
                            log("当前的UA是\n" + UA);
                            log("当前COOKIE是\n" + COOKIE);
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
        }, 2000);
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

ui.todoList1.on("item_bind", function(itemView, itemHolder) {
    //绑定勾选框事件
    itemView.done.on("check", function(checked) {
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
ui.consoleClear.on("click", function() {
    console.clear();
})

toast("请先浏览【侧滑栏】的【帮助】");

var path = "/sdcard/HeyTapPointsAssistant/log.txt";
console.setGlobalLogConfig({

    file: path

});
var d = (new Date);
var years = d.getFullYear(); //获取年份
var months = d.getMonth() + 1; //获取月份
var dates = d.getDate() //获取日期
var hours = d.getHours(); //获取小时
var minutes = d.getMinutes(); //获取分钟 
var seconds = d.getSeconds(); //获取秒钟 
console.log(years + "/" + months + "/" + dates + " " + hours + ":" + minutes + ":" + seconds); //打印显示当前时间

function main() {
    threads.start(function() {
        ui.todoList1.on("item_click", function(item, i, itemView, listView) {
            //签到功能
            switch (item.name) {
                case "market":
                    confirm("确定要执行" + item.title + "签到吗？").then(value => {
                        if (value) {
                            itemView.done.checked = !itemView.done.checked;
                            toast("开始执行" + item.title + "签到");
                            threads.start(function() {
                                marketSign();
                                backAPP();
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
                            threads.start(function() {
                                gameCenterSign();
                                backAPP();
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
                            threads.start(function() {
                                themeStoreSign();
                                backAPP();
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
                            threads.start(function() {
                                oppoStoreSign();
                                backAPP();
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
                            threads.start(function() {
                                musicSign();
                                backAPP();
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
                            threads.start(function() {
                                yoliSign();
                                backAPP();
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
                            threads.start(function() {
                                smartHomeSign();
                                backAPP();
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
                            threads.start(function() {
                                walletSign();
                                backAPP();
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
                            threads.start(function() {
                                browserSign();
                                backAPP();
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
                            threads.start(function() {
                                communitySign();
                                backAPP();
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
                            threads.start(function() {
                                speechassistSign();
                                backAPP();
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
                            threads.start(function() {
                                ugcvideoSign();
                                backAPP();
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
                            threads.start(function() {
                                usercenterSign();
                                backAPP();
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
        //执行
        ui.Run.on("click", function() {
            console.log("点击了执行");
            selectRun();
        });
        //全选
        ui.allSelect.on("click", function() {
            if (ui.allSelect.getText() == "取消全选") {
                ui.allSelect.setText("全选");
                console.log("点击了取消全选");
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
            } else {
                ui.allSelect.setText("取消全选");
                console.log("点击了全选");
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
                toast("不建议全选执行，建议按需执行")
            }

        })
        //执行
        ui.Run1.on("click", function() {
            console.log("点击了执行");
            selectRun1();
        })
        //全选
        ui.allSelect1.on("click", function() {
            if (ui.allSelect1.getText() == "取消全选") {
                ui.allSelect1.setText("全选");
                console.log("点击了取消全选");
                ui.cj1.checked = false;
                ui.cj2.checked = false;
                ui.cj3.checked = false;
                ui.cj4.checked = false;
                ui.cj5.checked = false;
                ui.cj6.checked = false;
                ui.cj7.checked = false;
                ui.cj8.checked = false;
                ui.cj9.checked = false;
            } else {
                ui.allSelect1.setText("取消全选");
                console.log("点击了全选");
                ui.cj1.checked = true;
                ui.cj2.checked = true;
                ui.cj3.checked = true;
                ui.cj4.checked = true;
                ui.cj5.checked = true;
                ui.cj6.checked = true;
                ui.cj7.checked = true;
                ui.cj8.checked = true;
                ui.cj9.checked = true;
                toast("不建议全选执行，建议按需执行")
            }
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
}

function gameCenterSign() {
    console.show();
    toastLog("打开游戏中心");
    if (app.launchPackage("com.nearme.gamecenter")) {
        sign();
    } else {
        endSign();
    }

}

function themeStoreSign() {
    console.show();
    toastLog("打开 主题商店");
    if (app.launchPackage("com.heytap.themestore")) {
        sign();
    } else {
        endSign();
    }

}

function oppoStoreSign() {
    console.show();
    toastLog("打开 OPPO商城");
    if (app.launchPackage("com.oppo.store")) {
        sign();
    } else {
        endSign();
    }

}

function musicSign() {
    console.show();
    toastLog("打开 音乐");
    if (app.launchPackage("com.heytap.music")) {
        sign();
    } else {
        endSign();
    }

}

function yoliSign() {
    console.show();
    toastLog("打开 视频");
    if (app.launchPackage("com.heytap.yoli")) {
        sign();
    } else {
        endSign();
    }

}

function smartHomeSign() {
    console.show();
    toastLog("打开 智能家居");
    if (app.launchPackage("com.heytap.smarthome")) {
        sign();
    } else {
        endSign();
    }

}

function walletSign() {
    console.show();
    toastLog("打开 钱包");
    if (app.launchPackage("com.finshell.wallet")) {
        sign();
    } else {
        endSign();
    }

}

function browserSign() {
    console.show();
    toastLog("打开 浏览器");
    if (app.launchPackage("com.heytap.browser")) {
        sign();
    } else {
        endSign();
    }

}

function communitySign() {
    console.show();
    toastLog("打开 OPPO社区");
    if (app.launchPackage("com.oppo.community")) {
        sign();
    } else {
        endSign();
    }

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

}

function ugcvideoSign() {
    console.show();
    toastLog("打开 极速视频");
    if (app.launchPackage("com.heytap.ugcvideo.praise")) {
        sign();
    } else {
        endSign();
    }

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
    events.broadcast.on("exit", function(name) {
        toastLog("执行完成 " + name);
    });
}

// 抽奖选择
function selectRun1() {
    threads.start(function() {
        var enginesId;
        if (ui.cj1.isChecked()) {
            console.log("选了" + ui.cj1.getText());
            enginesId = engines.execScriptFile(cjrealme宠粉计划);
            toastLog("执行完 realme宠粉计划")
            sleep(500);
            while (!enginesId.getEngine().isDestroyed()) {
                sleep(1000);
            }
        }
        if (ui.cj2.isChecked()) {
            console.log("选了" + ui.cj2.getText());
            enginesId = engines.execScriptFile(cjrealme积分乱斗);
            toastLog("执行完 realme积分乱斗")
            sleep(500);
            while (!enginesId.getEngine().isDestroyed()) {
                sleep(1000);
            }
        }
        if (ui.cj3.isChecked()) {
            console.log("选了" + ui.cj3.getText());
            enginesId = engines.execScriptFile(cjReno7);
            toastLog("执行完 Reno7")
            sleep(500);
            while (!enginesId.getEngine().isDestroyed()) {
                sleep(1000);
            }
        }
        if (ui.cj4.isChecked()) {
            console.log("选了" + ui.cj4.getText());
            enginesId = engines.execScriptFile(cjReno7流星宝藏);
            toastLog("执行完 Reno7流星宝藏")
            sleep(500);
            while (!enginesId.getEngine().isDestroyed()) {
                sleep(1000);
            }
        }
        if (ui.cj5.isChecked()) {
            console.log("选了" + ui.cj5.getText());
            enginesId = engines.execScriptFile(cj欢太宠粉计划);
            toastLog("执行完 欢太宠粉计划")
            sleep(500);
            while (!enginesId.getEngine().isDestroyed()) {
                sleep(1000);
            }
        }
        if (ui.cj6.isChecked()) {
            console.log("选了" + ui.cj6.getText());
            enginesId = engines.execScriptFile(cj零元赚积分);
            toastLog("执行完 零元赚积分")
            sleep(500);
            while (!enginesId.getEngine().isDestroyed()) {
                sleep(1000);
            }
        }
        if (ui.cj7.isChecked()) {
            console.log("选了" + ui.cj7.getText());
            enginesId = engines.execScriptFile(cj每日积分翻倍);
            toastLog("执行完 每日积分翻倍")
            sleep(500);
            while (!enginesId.getEngine().isDestroyed()) {
                sleep(1000);
            }
        }
        if (ui.cj8.isChecked()) {
            console.log("选了" + ui.cj8.getText());
            enginesId = engines.execScriptFile(cj天天积分翻倍);
            toastLog("执行完 天天积分翻倍")
            sleep(500);
            while (!enginesId.getEngine().isDestroyed()) {
                sleep(1000);
            }
        }
        if (ui.cj9.isChecked()) {
            console.log("选了" + ui.cj9.getText());
            enginesId = engines.execScriptFile(cj赚积分购好物);
            toastLog("执行完 赚积分购好物")
            sleep(500);
            while (!enginesId.getEngine().isDestroyed()) {
                sleep(1000);
            }
        }
        toastLog("结束");
        console.hide();
    })
}
// 任务选择
function selectRun() {
    threads.start(function() {
        var enginesId;
        if (ui.tk1.isChecked()) {
            console.log("选了" + ui.tk1.getText());
            enginesId = engines.execScriptFile(tk社区视频);
            toastLog("执行完 社区视频")
            sleep(500);
            while (!enginesId.getEngine().isDestroyed()) {
                sleep(1000);
            }
        }
        if (ui.tk2.isChecked()) {
            console.log("选了" + ui.tk2.getText());
            enginesId = engines.execScriptFile(tk赚积分购好物);
            toastLog("执行完 赚积分购好物")
            sleep(500);
            while (!enginesId.getEngine().isDestroyed()) {
                sleep(1000);
            }
        }
        if (ui.tk3.isChecked()) {
            console.log("选了" + ui.tk3.getText());
            enginesId = engines.execScriptFile(tkReno7);
            toastLog("执行完 Reno7")
            sleep(500);
            while (!enginesId.getEngine().isDestroyed()) {
                sleep(1000);
            }
        }
        if (ui.tk4.isChecked()) {
            console.log("选了" + ui.tk4.getText());
            enginesId = engines.execScriptFile(tk一加加油站);
            toastLog("执行完 一加加油站")
            sleep(500);
            while (!enginesId.getEngine().isDestroyed()) {
                sleep(1000);
            }
        }
        if (ui.tk5.isChecked()) {
            console.log("选了" + ui.tk5.getText());
            enginesId = engines.execScriptFile(tk现金助力);
            toastLog("执行完 现金助力")
            sleep(500);
            while (!enginesId.getEngine().isDestroyed()) {
                sleep(1000);
            }
        }
        if (ui.tk6.isChecked()) {
            console.log("选了" + ui.tk6.getText());
            enginesId = engines.execScriptFile(tk现金任务);
            toastLog("执行完 现金任务")
            sleep(500);
            while (!enginesId.getEngine().isDestroyed()) {
                sleep(1000);
            }
        }
        if (ui.tk7.isChecked()) {
            console.log("选了" + ui.tk7.getText());
            enginesId = engines.execScriptFile(tk零元赚积分);
            toastLog("执行完 零元赚积分")
            sleep(500);
            while (!enginesId.getEngine().isDestroyed()) {
                sleep(1000);
            }
        }
        if (ui.tk8.isChecked()) {
            console.log("选了" + ui.tk8.getText());
            enginesId = engines.execScriptFile(tkrealme积分乱斗);
            toastLog("执行完 realme积分乱斗")
            sleep(500);
            while (!enginesId.getEngine().isDestroyed()) {
                sleep(1000);
            }
        }
        if (ui.tk9.isChecked()) {
            console.log("选了" + ui.tk9.getText());
            enginesId = engines.execScriptFile(tkReno7流星宝藏);
            toastLog("执行完 Reno7流星宝藏")
            sleep(500);
            while (!enginesId.getEngine().isDestroyed()) {
                sleep(1000);
            }
        }
        if (ui.tk10.isChecked()) {
            console.log("选了" + ui.tk10.getText());
            enginesId = engines.execScriptFile(tk签到页面);
            toastLog("执行完 签到页面")
            sleep(500);
            while (!enginesId.getEngine().isDestroyed()) {
                sleep(1000);
            }
        }
        if (ui.tk11.isChecked()) {
            console.log("选了" + ui.tk11.getText());
            enginesId = engines.execScriptFile(tk全家桶签到);
            toastLog("执行完 全家桶签到")
            sleep(500);
            while (!enginesId.getEngine().isDestroyed()) {
                sleep(1000);
            }
        }
        toastLog("结束");
        console.hide();
    })
}

ui.textClear.on("click", function() {
    if (ui.runLog.getText() != "") {
        ui.runLog.setText("");
    } else {
        toastLog("已清屏");
    }
});

ui.textGo.on("click", function() {
    toastLog("开始输出日志");
    threads.start(function() {
        sleep(1000);
        log("---日志---");
        //打开文件
        var file = open(path);
        //读取文件的所有内容
        var text = file.read();
        ui.run(() => {
            ui.runLog.setText(text);
        });
        //关闭文件
        file.close();
        log("---日志---");
    });
});
