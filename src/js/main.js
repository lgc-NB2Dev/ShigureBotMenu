window.$docsify = {
  coverpage: true,
  loadNavbar: true,
  loadFooter: true,
  auto2top: true,
  notFoundPage: true,
  topMargin: 90,
  repo: 'https://github.com/lgc2333/ShigureBotMenu',
  name: 'ShigureBot 功能列表',
  formatUpdated: '{YYYY}/{MM}/{DD} {HH}:{mm}:{ss}',
  //logo: '/imgs/shigure.jpg',
  search: {
    placeholder: '搜索……',
    noData: '没有发现结果呢',
  },
  progress: {
    color: 'var(--highlightColor,#42b983)',
  },
  copyCode: {
    buttonText: '📑',
    errorText: '❌失败！',
    successText: '✅',
  },
  'flexible-alerts': {
    style: 'flat',
    note: {
      label: '说明：',
    },
    tip: {
      label: '提示：',
    },
    warning: {
      label: '警告！',
    },
    attention: {
      label: '禁止！！',
    },
  },
  Valine: {
    appId: 'SWMnSx0tSjPO8b3RPBHhX6K6-MdYXbMMI',
    appKey: '7r6slQi7BJMEr4lSlPHwE1fK',
    placeholder: '快来写个评论吧！',
    avatar: 'identicon',
    enableQQ: true,
    requiredFields: ['nick', 'mail'],
  },
};
