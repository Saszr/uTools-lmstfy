const { lmstfy } = require('./js/lmstfy');

window.exports = {
  lmstfy: {
    mode: 'list',
    args: {
      search: (action, searchWord, callbackSetList) => {
        let list = [
          {
            title: 'Google',
            description: '让我帮你谷歌一下',
            icon: './img/google.png',
            url: 'https://lmstfy.net/?q=',
            searchValue: searchWord,
          },
          {
            title: '百度',
            description: '让我帮你百度一下',
            icon: './img/baidu.png',
            url: 'https://lmstfy.net/baidu/?q=',
            searchValue: searchWord,
          },
          {
            title: '必应',
            description: '让我帮你必应一下',
            icon: './img/bing.png',
            url: 'https://lmstfy.net/bing/?q=',
            searchValue: searchWord,
          },
        ];
        if (searchWord) {
          callbackSetList(list);
        } else {
          callbackSetList([]);
        }
      },
      select: (action, itemData, callbackSetList) => {
        window.utools.hideMainWindow();
        lmstfy(itemData);
        window.utools.outPlugin();
      },
      placeholder: '搜索',
    },
  },
};
