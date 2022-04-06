# GenshinUID Wiki

## 丨插件简介

一个原神信息查询 Bot 插件，该插件不包括本体，应该配合以下 Bot 并结合[Go-CQHTTP](https://github.com/Mrs4s/go-cqhttp)使用：

- [HoshinoBot](https://github.com/Ice-Cirno/HoshinoBot)
- [NoneBot2](https://github.com/nonebot/nonebot2)

## 丨已实现的功能列表

### 丨查询模块

_基于米游社提供的 API_

- 原神信息查询（可使用米游社 ID、UID、Cookies 查询基本信息/深渊信息）
- 原神个人信息（每月统计（获取原石、摩拉数量），当前状态（树脂、宝钱、派遣））
- 原神签到和每日自动签到，以及推送树脂提醒、洞天宝钱提醒、派遣状态提醒（支持群聊、私聊）
- 米游社自动获取米游币
- 御神签（每日随机）
- 查询词云功能（基于深渊信息、角色信息等输出属于自己的关键词）

### 丨Wiki 模块

_基于[minigg](https://www.minigg.cn/)提供的 Api_

_除了语音查询暂时不能模糊查询以外，其他都可以模糊查询_

- 武器查询（包括查询固定等级的武器信息）
- 角色查询（包括查询固定等级的角色基础属性）
- 材料查询（支持以'材料黄金'类型查询使用黄金天赋书的所有角色）
- 命座查询
- 天赋查询
- 语音查询
- 原魔查询
- 圣遗物查询
- 食物查询

### 丨数据模块

_内部实现以及缓存_

- 添加 Cookies
- 查询调用 Cookies 缓存列表
- 校验全部 Cookies
- 绑定 uid/mysid（以此支持@群友查询他的信息）
- 全部重签

## 丨安装

### 丨[HoshinoBot](https://github.com/Ice-Cirno/HoshinoBot)

1. 在 hoshino/modules 目录下执行

   ```sh
   git clone https://github.com/KimigaiiWuyi/GenshinUID.git
   ```

2. 进入 GenshinUID 文件夹内，安装依赖库

   ```sh
   pip3 install -r requirements.txt
   ```

3. 在 hoshino/config 的**bot**.py 文件中，添加 GenshinUID

4. 启动 HoshinoBot 后，私聊机器人，发送`添加 cookies`(方法：[获取米游社 Cookies](#丨获取米游社cookies92-remkeeper))

   - 注意事项：可以添加多条，但一次只能添加一条，添加两个字的之后必须带有空格，cookies 填入你自己的，并且不要泄露给任何人，如果添加了错误的 cookies，会导致一系列问题，如果想删除错误的 cookies，请操作 sqlite 数据库完成，目前已实现 Cookies 校验，如果校验失败，请检查 Cookies 是否按照格式输入。

5. 进入机器人在的群聊，即可正常使用本插件。

### 丨[NoneBot2](https://github.com/nonebot/nonebot2)

1. 在插件目录文件夹下执行（Alpha16 版本及以下执行上面那一条，Beta1 版本执行下面一条）

   ```sh
   # Nonebot2 <= alpha-16
   $ git clone -b nonebot2 https://github.com/KimigaiiWuyi/GenshinUID.git
   # Nonebot2 >= beta-1
   $ git clone -b nonebot2-beta1 https://github.com/KimigaiiWuyi/GenshinUID.git
   ```

2. 进入 GenshinUID 文件夹内，安装依赖库

   ```sh
   pip3 install -r requirements.txt
   ```

3. 在 Nonebot2 的 Bot.py 文件中，添加 GenshinUID 的插件目录加载代码。

4. 启动 NoneBot2 后，私聊机器人，发送`添加 cookies`(方法：[获取米游社 Cookies](#丨获取米游社cookies92-remkeeper))

   注意事项：可以添加多条，但一次只能添加一条，添加两个字的之后必须带有空格，cookies 填入你自己的，并且不要泄露给任何人，如果添加了错误的 cookies，会导致一系列问题，如果想删除错误的 cookies，请操作 sqlite 数据库完成，目前已实现 Cookies 校验，如果校验失败，请检查 Cookies 是否按照格式输入。

5. 进入机器人在的群聊，即可正常使用本插件。

### 丨[QQ 官方频道 Bot](https://bot.q.qq.com/wiki/#)

1. 选一个你喜欢的位置，执行以下命令。

   ```sh
   git clone -b QQGuildBot https://github.com/KimigaiiWuyi/GenshinUID.git
   ```

2. 进入文件夹内，安装依赖库

   ```sh
   pip3 install -r requirements.txt
   ```

3. 在 Config.yaml 文件下，分别修改两个 test123 的值为你自己申请 bot 的 BotID 和 BotToken

4. 在文件目录下，启动 bot

   ```sh
   python3 bot.py
   ```

## 丨米游社 Cookies 等获取方法

### 丨获取米游社 Cookies（[#92](https://github.com/KimigaiiWuyi/GenshinUID/issues/92) [@RemKeeper](https://github.com/RemKeeper)）

1. 复制下面全部代码，然后打开<https://bbs.mihoyo.com/ys/>

   ```js
   var cookie = document.cookie;
   var Str_Num = cookie.indexOf('_MHYUUID=');
   cookie = '添加 ' + cookie.substring(Str_Num);
   var ask = confirm('Cookie:' + cookie + '\n\n按确认，然后粘贴发送给机器人');
   if (ask == true) {
     copy(cookie);
   }
   ```

2. 在页面上右键检查或者 Ctrl+Shift+i（手机可以使用 Kiwi Browser 打开开发者工具）
3. 选择控制台（Console），粘贴，回车，在弹出的窗口点确认（点完自动复制）
4. 然后在和机器人的私聊窗口，粘贴发送即可

### 丨获取米游社 Stoken（[AutoMihoyoBBS](https://github.com/Womsxd/AutoMihoyoBBS#%E8%8E%B7%E5%8F%96%E7%B1%B3%E6%B8%B8%E7%A4%BECookie)）

**前提**：已经添加过米游社 Cookies，并且已经绑定过 uid(仅用于米游社币的获取)

1. 复制下面全部代码，然后打开<http://user.mihoyo.com/>

   ```js
   var cookie = document.cookie;
   var ask = confirm(
     'Cookie:' + cookie + '\n\nDo you want to copy the cookie to the clipboard?'
   );
   if (ask == true) {
     copy('添加stoken' + cookie);
   }
   ```

2. 在页面上右键检查或者 Ctrl+Shift+i
3. 选择控制台（Console），粘贴，回车，在弹出的窗口点确认（点完自动复制）
4. 然后在和机器人的私聊窗口，粘贴发送即可

## 丨指令列表

**Hoshino 版本的插件，除了添加 Cookies 以外，其他功能均只能群聊**

**Nonebot2 版本的插件，基本上所有功能群聊/私聊都可**

### 丨查询模块指令列表

<details>
    <summary>图片版（建议查看此项）</summary>
    <img src="https://raw.githubusercontent.com/KimigaiiWuyi/GenshinUID/main/mihoyo_libs/mihoyo_bbs/index/help.png"/>
</details>

|                 触发词                  |                    效果                     |                             举例                             |                             备注                             |
| :-------------------------------------: | :-----------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|                   uid                   |        获取角色信息一览(带武器信息)         |                         uid123456789                         | 由于米游社限制，完整信息配队需绑定Cookies<br/>可以在原本基础命令之后附一张图片，自定义背景图片，例如<br/>uid123456789 [图片] |
|      uid（上期）深渊（9/10/11/12）      |         获取角色深渊总览或单层配队          | uid123456789深渊<br/>uid123456789.上期深渊<br/>uid123456789.上期深渊11<br/>uid123456789深渊12 |                             同上                             |
|                   mys                   |       角色信息(带武器信息，冒险等级)        |                          mys123456                           | 由于米游社限制，完整信息配队需绑定Cookies<br/>mys为米游社通行证<br />可以在原本基础命令之后附一张图片，自定义背景图片，例如<br/>mys123456 [图片] |
|      mys（上期）深渊（9/10/11/12）      |         获取角色深渊总览或单层配队          | mys123456深渊<br/>mys123456上期深渊<br/>mys123456.上期深渊11<br/>mys123456深渊12 |                             同上                             |
|              查询（@群友）              |      查询自己(或者@到的人)角色信息一览      |                   查询<br />查询@Wuyi无疑                    | 由于米游社限制，完整信息配队需绑定Cookies<br />查询命令要求必须绑定过mys/uid<br />可以在原本基础命令之后附一张图片，自定义背景图片，例如<br/>查询 [图片] |
| 查询（上期）深渊（9/10/11/12）（@群友） | 获取自己(或者@到的人)角色深渊总览或单层配队 |        查询上期深渊@Wuyi<br/>查询深渊<br/>查询深渊12         |                             同上                             |
|                当前状态                 |       获取树脂、每日委托、派遣等信息        |                           当前状态                           |                    必须绑定过Cookies和uid                    |
|                每月统计                 |   查询当前绑定账号的每月/每日的原石/摩拉    |                           每月统计                           |                             同上                             |
|                  签到                   |             直接进行米游社签到              |                             签到                             |                             同上                             |
|                活动列表                 |          输出原神活动列表包含时间           |                           活动列表                           |                                                              |
|       gs开启/关闭自动签到(@群友)        |           开启/关闭每日米游社签到           |              gs开启自动签到<br/>gs关闭自动签到               | 群聊/私聊都可<br/>必须绑定过CK和uid<br/>@后缀仅限超级管理员可用 |
|         gs开启/关闭推送(@群友)          |    开启/关闭推送，超过140树脂提醒旅行者     |                  gs开启推送<br/>gs关闭推送                   |                             同上                             |
|             开始获取米游币              |      帮你自动做米游社的米游币悬赏任务       |                              -                               |                     需要绑定米游社SToken                     |

### | Wiki 模块指令列表

|                 触发词                 |                           效果                            |                             举例                             |                             备注                             |
| :------------------------------------: | :-------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|               武器(数字)               |             武器信息<br/>某把武器某个等级属性             |   武器天空之翼<br/>武器天空之翼90<br/>武器翼<br/>武器翼55    |                        均支持模糊搜索                        |
|               角色(数字)               |  角色信息<br/>某角色某等级基础属性<br/>某类型的所有角色   | 角色七七<br/>角色莉90<br/>角色火<br/>角色单手剑<br/>角色八月<br/>角色琉璃带 | 支持模糊搜索<br/>类型识别不支持模糊搜索<br/>类型:武器、材料、属性、突破属性、生日等等..... |
|               天赋(数字)               |                  输出某个角色的某个天赋                   |              天赋1心海<br/>天赋7心<br/>天赋5达               | 1-3为普攻、战技、爆发<br/>4-6为三个被动<br/>某些角色有7<br/>均支持模糊搜索 |
|               命座(数字)               |                  输出某个角色的某个命座                   |                   命座3可<br/>命座6芭芭拉                    |                        均支持模糊搜索                        |
|                  材料                  | 输出某个角色需要的所有材料<br/>输出某种天赋书哪些角色需要 |                    材料甘雨<br/>材料天光                     |                        均支持模糊搜索                        |
|               语音(列表)               |                    输出某个角色的语音                     |                语音列表<br/>语音可莉357<br/>                 | 不支持模糊搜索<br />需要[FFmpeg](https://ffmpeg.org/)环境<br />语音列表命令可获取全部ID<br />需要具体语音ID |
|                 圣遗物                 |                   输出某圣遗物详细信息                    |                          圣遗物海染                          |                        均支持模糊搜索                        |
|                  食物                  |                    输出某食物详细信息                     |                    食物鸡<br/>食物仙跳墙                     |                        均支持模糊搜索                        |
|                  原魔                  |                      输出某怪物介绍                       |                    原魔使徒<br/>原魔公子                     |                        均支持模糊搜索                        |
|    角色名+（用什么/能用啥/怎么养）     |                  输出角色适用武器&圣遗物                  |                八重神子用什么<br/>刻晴怎么养                 |                                                              |
| 武器名+（能给谁/给谁用/要给谁/谁能用） |                     输出武器适用角色                      |            嘟嘟可故事集能给谁<br/>尘世之锁谁能用             |                                                              |

### 丨数据模块指令列表

|        触发词        |                         效果                         |        举例        |                    备注                    |
| :------------------: | :--------------------------------------------------: | :----------------: | :----------------------------------------: |
|     添加Cookies      |       向数据库添加你的Cookies<br/>绑定Cookies        | 添加 _ga=balabala  |             仅限私聊，注意空格             |
|   校验全部Cookies    |    校验数据库内全部Cookies可用状态，失效自动删除     |  校验全部Cookies   |                                            |
|       全部重签       | 重新签到开启自动签到的所有账户，不管之前是否成功签到 |      全部重签      |               仅限超级管理员               |
|       绑定uid        |               当前qq号关联绑定原神uid                |  绑定uid123456789  |          查询模块中功能的前置条件          |
|       绑定mys        |               当前qq号绑定米游社通行证               |  绑定mys12345678   |          查询模块中功能的前置条件          |
|  gs开启简洁签到报告  |               每日自动签到时使用简单版               | gs开启简洁签到报告 | 如果使用人过多，此功能可有效防止QQ账户冻结 |
| 添加stoken *Cookies* |             向数据库添加你的米游社SToken             |         -          |                  仅限私聊                  |
|        gs帮助        |                   机器人帮助图片版                   |       gs帮助       |                                            |

## 丨自定义

### 丨查询界面背景图的自定义

请向 mys/bg 文件夹内填充背景图片，最好不要替换原本的图片，否则可能造成下次更新时文件冲突
调用查询命令时，会随机读取该文件夹内的图片作为背景图片

### 丨查询界面叠加层的自定义

请修改 mys/texture2d 文件夹内的 All_Mask.png，修改为你喜欢的叠加层方式（注意：颜色不会改变）

## 丨常见问题 Q&A

### 丨为何添加 Cookies 一直提示失败？

1. 确认是按照[获取米游社 Cookies](#丨获取米游社Cookies)的方法拿到的 CK；
2. 确认该 Cookies 对应的米游社账号登陆过`原神`和`米游社`
3. 确认获取到的 Cookies 内包括`account_id = xxxxxx`和`cookie_token = xxxxxx`这两条参数
4. 如果以上均正确，截图后台报错，开 issues

### 丨为何查询正常，但`当前状态`、`每月统计`、`签到`等功能没有反应？

1. 首先查看控制台报错
2. 如无报错，考虑是 Nonebot2 的配置文件中的`COMMAND_START`未配置

### 丨为何 Bot 启动时，报错类似`No module named 'xxxxx'`？

1. 依赖未安装，使用命令`pip install xxxxx`即可.
2. 若无效可尝试`pip3 install xxxxx`或者`pip39 install xxxxx`

### 丨为何在加载插件时提示`RuntimeError: GenshinUID is not loaded as a plugin ...`?

> 仅限 Nonebot2 版本
>
> 一些情况会出现本问题，例如通过[`nb-cli`](https://github.com/nonebot/nb-cli)安装插件

1. 请检查`pyproject.toml`文件
2. 若出现`plugin_dirs`等字样，请删除前面对本插件的加载代码