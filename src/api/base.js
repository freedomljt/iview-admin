import request from '@/libs/request';

const getMenu = () => request({ url: '/menu' });
const getUserInfo = () => request({ url: '/user' });

export { getMenu, getUserInfo };
