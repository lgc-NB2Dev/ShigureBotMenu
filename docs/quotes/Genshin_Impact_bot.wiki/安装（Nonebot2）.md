### ⚠️ 此教程已过时（写于Nonebot v2.0.0a16）⚠️
## 依赖安装
### Ubuntu
1. 更新系统依赖
    ```
    sudo apt-get update
    sudo apt-get upgrade -y
    ```

2. 安装必要依赖
    ```
    apt-get install git screen python3 # 阿里云或腾讯云可以不需要安装python3，自带
    ```

### Windows
1. 咕咕咕

## 正式安装
1. 安装nonebot2 (及依赖)
    ```
    pip3 install nb-cli pillow \
    requests \
    nonebot-adapter-cqhttp \
    nonebot-plugin-apscheduler
    ```

2. 创建nonebot项目

    `nb create # 按如下所示`

    ```
    [?] Project Name: GS_bot
    注：名字，随便填即可
    [?] Where to store the plugin?
    > In a "genshinimpact_bot" folder
    > In a src folder
    注：选择插件放置目录，键盘↑↓选择，回车确认，这里选第二个In a src folder
    [?] Load Nonebot Builtin Plugin? (y/N)
    注：加载Nonebot2内置插件，回车跳过即可
    [?] which adapter(s) would you like to use?(Use ↑ and ↓ to move，Space to select，Enter to submit)
    >  ● cqhttp
       o ding
       o mirai
       o feishu
    注：上下移动选择框，空格选中，回车确认
    ```

3. 安装GenshinImpact_Bot
    ```
    cd GS_bot # 刚才创建的目录
    git clone -b nonebot2 https://github.com/H-K-Y/Genshin_Impact_bot.git
    ```

4. 编辑启动文件
**注：这里推荐使用更简单的nano编辑器** `nano bot.py`
在里面加入如下代码
    ```
    nonebot.load_plugins("Genshin_Impact_bot")
    ```
    ![image.png](https://i.loli.net/2021/09/14/wVMAUjsqazpECf1.png#vwid=506&vhei=161)

5. 下载go-cqhttp
    ```
    cd ~
    wget https://github.com/Mrs4s/go-cqhttp/releases/download/v0.9.40-fix5/go-cqhttp_0.9.40-fix5_linux_amd64.deb
    dpkg -i go-cqhttp_0.9.40-fix5_linux_amd64.deb
    mkdir qq &&cd qq
    go-cqhttp # 输入数字 3，回车
    ```

6. 配置go-cqhttp
    ```
    nano config.hjson
    ```
    键盘上下移动光标，修改其中的uin， password及servers:
    ```
    account: # 账号相关
      uin: 1233456 # QQ账号
      password: '密码' # 密码为空时使用扫码登录
    servers:
      - ws-reverse:
          universal: ws://127.0.0.1:8080/cqhttp/ws
    ```
    **注：** 这里仅包含需要修改的项目，而非仅需保留这些内容。
    按`Ctrl`+`S`保存，然后`Ctrl`+`X`退出编辑

7. 配置bot
    ```
    nano ~/GS_bot/.env.dev
    ```
    按如下方式修改：

    ```
    HOST=0.0.0.0  # 配置 NoneBot 监听的 IP/主机名
    PORT=8080  # 配置 NoneBot 监听的端口
    SUPERUSERS=["123456"]  # 配置 NoneBot 超级用户
    NICKNAME=["bot", "派蒙"]  # 配置机器人的昵称
    COMMAND_START=["/", ""]  # 配置命令起始字符
    ```

    > 其中，**HOST**和**PORT**可以不用修改，而修改的话则应对应前面go-cqhttp中的配置
    >
    > NICKNAME填写后，发送`xxx 操作`等同于直接@机器人（例如抽卡功能需要@机器人，而添加nickname之后可以直接发送`派蒙 原之井`这样来触发命令

8. 运行
    **go-cqhttp部分**
    ```
    cd ~/qq #放置配置文件的目录
    screen -S qq # 可改为其他名字，如screen -S az
    go-cqhttp # 若提示扫码按要求操作
    ```
    按下`Ctrl`+`A`+`D`离开当前**screen**
    **bot部分**
    ```
    cd ~/GS_bot # 步骤4中的项目名称
    screen -S bot
    python3 bot.py
    ```

    **至此，bot已经开始正常运行。**
