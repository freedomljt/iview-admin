// eslint-disable-next-line import/no-extraneous-dependencies
import jsCookie from 'js-cookie';

const cookies = {};

/**
 * @description 存储 cookie 值
 * @param {String} name cookie name
 * @param {String} value cookie value
 * @param {Object} setting cookie setting
 */
cookies.set = function(name = 'default', value = '', cookieSetting = {}) {
  let currentCookieSetting = {
    expires: 1,
  };
  Object.assign(currentCookieSetting, cookieSetting);
  jsCookie.set(`${name}`, value, currentCookieSetting);
};

/**
 * @description 拿到 cookie 值
 * @param {String} name cookie name
 */
cookies.get = function(name = 'default') {
  return jsCookie.get(`${name}`);
};

/**
 * @description 拿到 cookie 全部的值
 */
cookies.getAll = function() {
  return jsCookie.get();
};

/**
 * @description 删除 cookie
 * @param {String} name cookie name
 */
cookies.remove = function(name = 'default') {
  return jsCookie.remove(`${name}`);
};

const stateSetIn = function(state, level, value) {
  const key = level.shift();
  // level 是最后一个，结束递归
  if (key) {
    if (level.length > 0) {
      state[key] = stateSetIn(state[key], level, value);
    } else {
      state[key] = value;
    }
  }
  return state;
};

export { cookies, stateSetIn };
