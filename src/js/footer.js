(() => {
  const footer = `
文档到底辣 .˚‧º·(´ฅωฅ｀)‧º·˚.  
如果文档出错请及时勘误  
直接往右上角Github提Issue或PR就行啦～  
上次修改: {docsify-updated}

感谢[Wutzu](http://berthua.top/)大佬提供的网站服务器～`.trimStart();

  function install(hook, vm) {
    hook.beforeEach(function (md) {
      return `${md}\n<hr /><div class="footer">\n\n${footer}\n\n</div>`;
    });
  }

  window.$docsify.plugins = [].concat(install, window.$docsify.plugins);
})();
