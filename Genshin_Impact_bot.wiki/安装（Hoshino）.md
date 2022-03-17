1. 安装[HoshinoBot](https://github.com/Ice-Cirno/HoshinoBot)。

   1. 一键安装脚本：[pcrbot/hoshino-installer](https://github.com/pcrbot/hoshino-installer) (**不建议使用**)
   2. ` git clone https://github.com/Ice-Cirno/HoshinoBot `

   > **config.py**文件有插件的常用配置，你可以根据自己的情况修改

2. 在 HoshinoBot\hoshino\modules 目录下使用以下命令拉取本项目：

   ```shell
   git clone https://github.com/H-K-Y/Genshin_Impact_bot.git
   ```
   
3. 这个插件除了需要HoshinoBot的requirements.txt外还需要 loguru 模块，直接pip安装就行

   ```shell
   pip install loguru
   ```

4. 编辑HoshinoBot\\hoshino\\config\\\__bot__.py内MODULES_ON，加入`Genshin_Impact_bot`：

  ```python
  MODULES_ON = {
    'Genshin_Impact_bot',
    'example1',
    'example2'
  }
  ```

5. 重启 **HoshinoBot**即可
