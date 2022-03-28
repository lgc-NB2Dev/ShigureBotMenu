(() => {
  let footer = [
    '',
    '<hr/>',
    '<div class="footer">',
    '',
    '文档到底辣☆ﾟ･*:.｡.☆†_(ﾟ▽ﾟ*)β☆.｡.:*･ﾟ☆  ',
    '如果文档出现问题（错别字/介绍有误等）请及时联系我勘误～  ',
    '也可以在底下评论区评评论～我看到会回复哒～  ',
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
