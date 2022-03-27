<!-- markdownlint-disable MD033 MD041 -->

# 写在前面

下面标题前带有`#`的功能由`nonebot2`插件提供  
当你使用这些指令时不需要带前缀（如 `#`、`/` 等）

目前饼干正在努力将所有功能迁移到`nonebot2`上！  
Bot 正处于过渡期，如果有些功能无法使用还请反馈一下  
联系我的方式在 Bot 的个性签名！

<details>
  <summary>赞助二维码</summary>

![讨饭](imgs/sponsor.png)

</details>

可以给卑微的饼干一口饭吃吗 球球了 QAQ

# 功能列表

## # MC 服务器信息查询

- 介绍
  - 获取 Minecraft JE/BE 服务器状态
- 指令
  - `!motd <服务器 IP>[:端口]`
  - `!motdfull <服务器 IP>[:端口]`
  - `!motdpe <服务器 IP>[:端口]`

## # 原神 UID 查询（GenshinUID）

- 介绍
  - 一个原神 UID 查询/原神 Wiki/米游社签到/树脂提醒插件
- [Wiki](quotes/GenshinUID.wiki/Home.md)
- [源 Repo](https://github.com/KimigaiiWuyi/GenshinUID/tree/nonebot2-beta1)

## # 原神 Bot（Genshin_Impact_Bot）

- 介绍
  - 一个原神娱乐及信息查询插件，包含原神抽卡，丘丘语翻译，找资源点等功能
- [Wiki](quotes/Genshin_Impact_bot.wiki/Home.md)
- [源 Repo](https://github.com/H-K-Y/Genshin_Impact_bot/tree/nonebot2)

## # 原神祈愿分析（nonebot-plugin-gachalogs）

!> 我没有配置腾讯云 COS 桶，私聊导出数据可能无法使用

- 介绍
  - 用于统计及导出原神祈愿记录的插件
- [README](quotes/nonebot-plugin-gachalogs/README.md)
- [源 Repo](https://github.com/monsterxcn/nonebot-plugin-gachalogs)

## # B 站推送（HarukaBot）

- 介绍
  - 将 B 站的动态和直播信息推送至 QQ
- [Wiki](https://haruka-bot.sk415.icu/)
- [源 Repo](https://github.com/SK-415/HarukaBot)

## # 搜图（nonebot_plugin_picsearcher）

!> 由于我没有设置 exhentai 的 cookie（我没有账号），ex 搜索结果会回退到 eh ~~，有些 loli 本就搜不到了~~

> 建议私聊使用该功能，保险

- 介绍
  - 从各个接口查找色图来源，目前支持 ascii2d exhentai iqdb saucenao trace.moe
- 指令
  - `@Bot 搜图`/`@Bot search`（@Bot 可以替换为 Bot 昵称，私聊无需@）  
    例：`@Shigure 2nd~ 搜图` `shigure 搜图`
  - `上一张图是什么`/`上一张`/`这是什么`（使用 saucenao 搜索群友最新发的一张图）

## 剩下的先鸽，今天搞一天了 qwq
