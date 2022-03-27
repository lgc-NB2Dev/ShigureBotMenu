(() => {
  let footer = [
    '',
    '<hr/>',
    '<div class="footer">',
    '',
    '文章到底辣～  ',
    '上次修改: {docsify-updated}',
    '',
    '</div>',
  ].join('\n');

  plugin = function (hook) {
    hook.beforeEach(function (md) {
      return md + footer;
    });
  };

  window.$docsify.plugins = [plugin].concat(window.$docsify.plugins || []);
})();
