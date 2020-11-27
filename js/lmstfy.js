const { Base64 } = require('./base64');

const lmstfy = (params) => {
  const { url, searchValue } = params;
  const targetValue = Base64.encode(searchValue);
  const targetUrl = url + targetValue;

  window.utools.copyText(targetUrl);
  window.utools.showNotification('生成链接已复制到剪贴板')
};

module.exports = {
  lmstfy,
};
