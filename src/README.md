<!-- markdownlint-disable MD028 MD033 MD036 MD041 -->

# 写在前面

## 前言

> [!WARNING]
> 建议先看完再去下面翻菜单，有些东西我不想再说第二遍

Bot 账号：63960275（昵称：智障二号机）  
目前 Bot 大部分功能恢复正常，感谢群友 RainNight（QQ：3472366499） 提供的小号  
~~Bot 近期风控中，群聊消息无法正常发送，请尝试私聊使用~~

**Bot 征集戳一戳词库中！如果你有好的想法，欢迎通过下面的联系方式联系我～**

目前 Bot 的好友与进群请求由我手动同意，还请各位稍安勿躁，耐心等待我同意（我如果在线应该是秒同意的）

当你使用下面由`nonebot2`插件提供的指令时不需要带指令前缀（如 `#`、`/` 等）

目前饼干正在努力将所有功能迁移到`nonebot2`上！  
Bot 正处于过渡期，如果有些功能无法使用还请反馈一下  
**目前我的小栗子框架已过期，下面由小栗子插件提供的功能已无法正常使用，请知悉**

最近准备给这个站点接入 Google AdSense 了……毕竟我还是要吃饭的……

## 我可以把 Bot 拉进其它群吗？

当然可以！欢迎大家把我的 Bot 拉到更多群里去玩！！  
如果想拉到群里的话，加 Bot 好友然后直接把她拉到群里面就行了～

## 联系主人

QQ：3076823485  
吹水/通知群：[1105946125](https://jq.qq.com/?_wv=1027&k=Z3n1MpEp)  
邮箱：<lgc2333@126.com>  
评论区（页面最底下）

## 赞助

可以给卑微的饼干一口饭吃吗 球球了 QAQ

- [爱发电](https://afdian.net/@lgc2333)
- <details>
    <summary>赞助二维码（点击展开）</summary>

  ![讨饭](https://raw.githubusercontents.com/lgc2333/ShigureBotMenu/master/src/imgs/sponsor.png)

  </details>

<details>
  <summary>赞助列表（点击展开）</summary>

感谢以下赞助者！！！
|                                  昵称                                  |    时间    |  金额   |
| :--------------------------------------------------------------------: | :--------: | :-----: |
| 爱发电[@zkhsrc](https://afdian.net/u/a6cfff50726211ea956352540025c377) | 2022-05-08 | ￥ 50.00 |

</details>

## 最近更新内容

- 2022.5.11
  - **添加**插件[`site_tool`（站长工具）](#站长工具)（从小栗子插件迁移）
- 2022.5.2
  - **删除**小栗子插件`一言&毒鸡汤`（迁移到`nonebot2`）
  - **添加**插件[`hitokoto`（一言）](#一言)（从小栗子插件迁移）
  - **添加**插件[`poison_soup`（毒鸡汤）](#毒鸡汤)（从小栗子插件迁移）
- 2022.4.26
  - **添加**插件[`nonebot-plugin-withdraw`（撤回）](#撤回消息)
  - **添加**插件[`nonebot-plugin-abstract`（语句抽象化）](#语句抽象化)

# 功能列表

## 自己写的 nonebot2 插件

> [!NOTE]
> 这些插件我已经开源，[仓库地址](https://github.com/lgc2333/ShigureBot)

### BlackBE 云黑记录查询

> [!TIP]
> 站长：NyanCatda QQ：1012140043 [项目官网](https://blackbe.xyz/)  
> 如果喜欢 BlackBE 就去[支持一下](https://afdian.net/@BlackBE)他们吧～

- 介绍
  - 查询玩家 BlackBE 云黑记录
  - 当已录入云黑玩家在群内发言时提示
- 指令
  - `查云黑 <XboxID/QQ号/@某人/XUID>`

### MC 服务器信息查询

- 介绍
  - 获取 Minecraft JE/BE 服务器状态
- 指令
  - `!motd <服务器 IP>[:端口]`
  - `!motdfull <服务器 IP>[:端口]`
  - `!motdpe <服务器 IP>[:端口]`

### 戳一戳回复

> [!TIP]
> 如果有想添加进去的文案/表情包，欢迎联系我～

- 介绍
  - 双击 Bot 头像有惊喜哦 awa

### 网页截图

- 介绍
  - 使用 playwright 对给定的网页进行截图
- 用法
  - 指令
    - `网页截图 [参数] <URL>`
  - 参数
    - `--delay`/`-d` 【可选】截图延时（单位：秒），默认值：5
    - `--width`/`-wd` 【可选】页面宽度，默认值：1280
    - `--height`/`-hi` 【可选】页面高度，默认值：720
- 示例
  - `网页截图 baidu.com`  
    页面加载完成 5 秒后截取一张 1280\*720 的百度页面
  - `网页截图 -d 0 baidu.com`  
    页面加载完成后立即截取一张 1280\*720 的百度页面
  - `网页截图 -d 0 -wd 800 -hi 600 baidu.com`  
    页面加载完成后立即截取一张 800\*600 的百度页面

### Github 仓库简介图生成

- 介绍
  - 使用[socialify](https://github.com/wei/socialify)生成一张 Github 仓库简介图
- 用法
  - 直接发送 Github 仓库地址或`user/repo`格式文本
  - 指令`socialify`（使用`socialify -h`查看指令帮助）
  - 回复一张图片可以自定义简介图显示的 logo
- 示例

  - <details>
      <summary>示例图（点击展开）</summary>

    ![示例](https://raw.githubusercontents.com/lgc2333/ShigureBotMenu/master/src/imgs/socialify/example.png)

    </details>

### 打乱文本

- 介绍
  - 将一段文本分词后打乱
- 指令
  - `打乱 <句子>`

### 一言

> [!NOTE]
> 语句来自<https://hitokoto.cn>

- 介绍
  - 获取一句一言，支持指定分类
- 指令
  - `一言 [分类]`  
    可以指定多个分类，指定多个时会从指定分类中随机选取一个，不指定默认随机

### 毒鸡汤

- 介绍
  - 获取一句毒鸡汤，本地语句库
- 指令
  - `毒鸡汤`

### 站长工具

> [!TIP]
> API 来自<https://gmit.vip>

- 介绍
  - 一些常用站长工具
- 指令
  - `二维码解析 <附带或回复一张图片>`
  - `二维码生成 <内容>`
  - `ping <主机名>`
  - `icp查询 <域名>`
  - `拦截检测 <网址>`
  - `whois查询 <域名>`

## 来自 nonebot2 商店的插件

### B 站推送

> [!TIP]
> 使用这些功能时**需要**@Bot

- 介绍
  - 将 B 站的动态和直播信息推送至 QQ
- [Wiki](https://haruka-bot.sk415.icu/)
- [源 Repo](https://github.com/SK-415/HarukaBot)

### 搜图

> [!NOTE]
> 由于我没有设置 exhentai 的 cookie（我没有账号），ex 搜索结果会回退到 eh ~~，有些 loli 本就搜不到了~~

> [!TIP]
> 发图不回复可能是被风控，尝试私聊（私聊不用@）
>
> 建议私聊使用该功能，保险

- 介绍
  - 从各个接口查找色图来源，目前支持 ascii2d exhentai iqdb saucenao trace.moe
- 指令
  - `@Bot 搜图`/`@Bot search`（@Bot 可以替换为 Bot 昵称，私聊无需@）  
    例：`@Shigure 2nd~ 搜图` `shigure 搜图`  
    当询问图片查询源时输入不正确默认使用 saucenao（nao）
  - `上一张图是什么`/`上一张`/`这是什么`（使用 saucenao 搜索群友最新发的一张图）
- [源 Repo](https://github.com/synodriver/nonebot_plugin_picsearcher)

### 网易云点歌

- 介绍
  - 一个点歌插件，数据源为网易云音乐
- 使用
  - 发送`点歌+歌曲名`，从插件所给的候选项中选择歌曲。
- [源 Repo](https://github.com/maxesisn/nonebot_plugin_songpicker2)

### 网易云无损音乐下载

> [!NOTE]
> 网易云黑胶为自费，2022 年 7 月 1 日到期  
> 球球给口饭吃嘛 QAQ

- 介绍
  - 网易云歌曲分享到群内后回复机器人即可解析上传到群文件
- [README（文档）](quotes/nonebot-plugin-ncm/README.md#使用说明)
- [源 Repo](https://github.com/kitUIN/nonebot_tools/tree/master/nonebot_tools/nonebot-plugin-ncm)

### B 站链接解析

- 介绍
  - B 站 视频/番剧/直播/专栏/动态 链接内容解析
- 使用
  - 私聊或群聊发送 bilibili 的小程序/链接/av 号 等
- [源 Repo](https://github.com/NekoAria/nonebot_plugin_analysis_bilibili)

### 和风天气

> [!NOTE]
> 我使用的是一个普通版 API，仅支持**3 天**天气预报

- 介绍
  - 获取和风天气信息并转换为图片
- 指令
  - `天气+地区`/`地区+天气`
- [源 Repo](https://github.com/kexue-z/nonebot-plugin-heweather)

### 青年大学习

- 介绍
  - 获取最新一期的青年大学习答案
- 指令
  - `青年大学习`/`大学习`
- [源 Repo](https://github.com/ayanamiblhx/nonebot_plugin_youthstudy)

### 枝网查重

> [!NOTE]
> 查重比对库范围：**b 站动态、视频评论区 _(仅限 A-Soul 的六个官方账号)_**

- 介绍
  - 利用[枝网查重](https://asoulcnki.asia/)查找最相似的小作文
- 指令
  - `查重`/`枝网查重` + 要查重的小作文
  - **回复**需要查重的内容，回复“`查重`”
  - `小作文`/`随机小作文`
- [源 Repo](https://github.com/MeetWq/nonebot-plugin-asoulcnki)

### 头像表情包

- 介绍
  - 制作头像相关的表情包
- [README（文档）](quotes/nonebot-plugin-petpet/README.md#使用)
- [源 Repo](https://github.com/MeetWq/nonebot-plugin-petpet)

### 在线运行代码

- 介绍
  - 使用<https://glot.io/>的接口在线运行代码
- [README（文档）](quotes/nonebot_plugin_code/README.md#指令💻)
- [源 Repo](https://github.com/yzyyz1387/nonebot_plugin_code)

### 表情包制作

- 介绍
  - 制作有趣的梗图
- [README（文档）](quotes/nonebot-plugin-memes/README.md)
- [源 Repo](https://github.com/MeetWq/nonebot-plugin-memes)

### 棋类游戏

- 介绍
  - 一个棋类游戏插件，目前支持五子棋/围棋/黑白棋
- [README（文档）](quotes/nonebot-plugin-chess/README.md#使用)
- [源 Repo](https://github.com/MeetWq/nonebot-plugin-chess)

### 原神抽卡记录分析

> [!WARNING]
> 我没有配置腾讯云 COS 桶，私聊导出数据可能无法使用

- 介绍
  - 用于统计及导出原神祈愿记录的插件
- [README（文档）](quotes/nonebot-plugin-gachalogs/README.md)
- [源 Repo](https://github.com/monsterxcn/nonebot-plugin-gachalogs)

### 颜色图片 ~~（色图）~~ 生成

- 介绍
  - 用于生成指定色彩图片的插件  
    ~~_哎哟这个色啊，好色！_~~
- [README（文档）](quotes/nonebot-plugin-color/README.md)
- [源 Repo](https://github.com/monsterxcn/nonebot-plugin-color)

### Emoji 合成器

- 介绍
  - 将两个 Emoji 合成到一起
- 示例

  - <details>
    <summary>示例图（点击展开）</summary>

    ![示例](https://s2.loli.net/2022/01/23/EyoA1BHe9YpJZUD.png)

    </details>

- [源 Repo](https://github.com/MeetWq/nonebot-plugin-emojimix)

### 扫雷

- 介绍
  - 一个扫雷小游戏插件
- [README（文档）](quotes/nonebot-plugin-minesweeper/README.md)
- [源 Repo](https://github.com/MeetWq/nonebot-plugin-minesweeper)

### 撤回消息

- 介绍
  - 让 Bot 撤回自己不该发的消息
- [README（文档）](quotes/nonebot-plugin-withdraw/README.md)
- [源 Repo](https://github.com/noneplugin/nonebot-plugin-withdraw)

### 语句抽象化

- 介绍
  - 让你的语句变得抽象起来（转 emoji）
- [README（文档）](quotes/nonebot-plugin-abstract/README.md)
- [源 Repo](https://github.com/CherryCherries/nonebot-plugin-abstract)

## 来自 GitHub 的 nonebot2 插件

### 原神 UID 查询

- 介绍
  - 一个原神 UID 查询/原神 Wiki/米游社签到/树脂提醒插件
- [Wiki](quotes/GenshinUID.wiki/Home.md)
- [源 Repo](https://github.com/KimigaiiWuyi/GenshinUID/tree/nonebot2-beta1)

### 原神 Bot

- 介绍
  - 一个原神娱乐及信息查询插件，包含原神抽卡，丘丘语翻译，找资源点等功能
- [Wiki](quotes/Genshin_Impact_bot.wiki/Home.md)
- [源 Repo](https://github.com/H-K-Y/Genshin_Impact_bot/tree/nonebot2)

## 小栗子插件（WIP）

> [!WARNING]
> 目前我的小栗子框架已过期，下面的功能已无法正常使用，请等待我后续迁移

### QQ 多选点歌

- 介绍
  - 调用 QQ 音乐官方的 API 点歌
- 指令
  - `QQ点歌 <歌名>`/`qqy <歌名>`

### 查资料

> [!WARNING]
> 请勿滥用，我 Bot 被这玩意搞封过，如滥用必严查

- 介绍
  - 查询某个 QQ 的详细资料信息
- 指令
  - `查资料 <QQ号/@某人>`

### 梗百科

- 介绍
  - 查询小鸡词典词条
- 指令
  - `XX是什么梗`  
    例：`屁股肉是什么梗`

### 运行状态

- 介绍
  - 获取 Bot 和系统的运行状态
- 指令
  - `状态`/`运行状态`/`机器状态`

### 随机网抑云

> [!TIP]
> 感谢群友 @落空 提供的 API

- 介绍
  - 获取一句网抑云语录
- 指令
  - `网抑云`/`呜呜呜`/`到点了`/`人间不值得`/`我很抱歉`
