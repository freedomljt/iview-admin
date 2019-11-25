import { stateSetIn } from '@/libs/utils';
// import { getMenu } from '@/api/base';

const state = {
  menu: [],
  currentMenu: null,
};
const getters = {
  menu: state => state.menu,
  currentMenu: state => state.currentMenu,
};
const actions = {
  async updateField({ commit }, payload) {
    commit('updateState', payload);
  },
  async getMenu({ commit }) {
    // const { results } = await getMenu(payload);
    const results = [
      {
        name: '订单管理',
        path: '/order',
        icon: 'ios-list-box-outline',
      },
      {
        name: 'Demo',
        path: '/demo',
        icon: 'ios-list-box',
      },
    ];
    commit('updateState', { field: ['menu'], values: results });
  },
};
const mutations = {
  updateState(state, payload) {
    const { field, values = null } = payload;
    state = stateSetIn(state, field, values);
  },
};
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
