import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    tabbar: [
      {
        iconPath: "/static/uview/example/component.png",
        selectedIconPath: "/static/uview/example/component_select.png",
        text: "首页",
        pagePath: "/pages/index/index",
      },
      {
        iconPath: "/static/uview/example/js.png",
        selectedIconPath: "/static/uview/example/js_select.png",
        text: "扫码",
        midButton: true,
        pagePath: "/pages/scan/index",
      },
      {
        iconPath: "/static/uview/example/template.png",
        selectedIconPath: "/static/uview/example/template_select.png",
        text: "我的",
        pagePath: "/pages/mine/index",
      },
    ],

    background: {
      backgroundColor: "cornflowerblue",
    },
  },
  mutations: {},
  actions: {},
});
