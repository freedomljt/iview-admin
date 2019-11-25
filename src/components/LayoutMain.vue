<template>
  <div class="layout">
    <Layout>
      <Sider ref="side">
        <Menu
          :active-name="currentMenu"
          style="height: 100vh;"
          @on-select="selectMenu"
          width="auto"
        >
          <template v-for="item in menu">
            <Submenu v-if="item.children" :name="item.name" :key="item.name">
              <template slot="title">
                <span>{{ item.name }}</span>
              </template>
              <template v-for="sub in item.children">
                <MenuItem :name="sub.path" :key="sub.name">
                  <span>{{ sub.name }}</span>
                </MenuItem>
              </template>
            </Submenu>
            <MenuItem :name="item.path" :key="item.name" v-else>
              <Icon :type="item.icon"></Icon>
              <span>{{ item.name }}</span>
            </MenuItem>
          </template>
        </Menu>
      </Sider>
      <Layout>
        <Header></Header>
        <Content class="contentMain">
          <Breadcrumb>
            <BreadcrumbItem v-for="item in breadcrumb" :to="item.path" :key="item.name">{{
              item.name
            }}</BreadcrumbItem>
          </Breadcrumb>
          <router-view></router-view>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'LayoutMain',
  computed: {
    ...mapGetters('base', ['menu', 'currentMenu']),
  },
  data() {
    return {
      breadcrumb: [],
    };
  },
  mounted() {
    this.getMenu();
    // this.getBreadcrumb();
    this.initCurrentMenu();
    console.log(this.$route);
  },
  methods: {
    async getMenu() {
      await this.$store.dispatch('base/getMenu');
    },
    async getBreadcrumb() {
      this.breadcrumb = this.$route.matched;
      this.breadcrumb[0].path = '/';
      this.breadcrumb[this.breadcrumb.length - 1].path = '';
      console.log(this.$route, this.breadcrumb);
    },
    async selectMenu(path) {
      if (path !== this.$route.path) {
        await this.$router.push(path);
        this.getBreadcrumb();
      }
    },
    initCurrentMenu() {
      const { path } = this.$route;
      this.$store.dispatch('base/updateField', { field: ['currentMenu'], values: path });
    },
  },
};
</script>
<style scoped lang="scss">
.layout {
  min-height: 100vh;
}
.contentMain {
  padding: 8px;
}
</style>
