<template>
  <Layout style="background-color: #ffffff">
    <Header style="background-color: #ffffff" class="border-b"><l-header></l-header></Header>
    <Content style="min-height: 85vh">
      <router-view/>
    </Content>
    <Footer><l-footer></l-footer></Footer>
    <BackTop></BackTop>
  </Layout>
</template>

<script>
import LHeader from "./layout/lHeader";
import LFooter from "./layout/lFooter";
export default {
  name: "Home",
  components: {LFooter, LHeader},
  data: () => ({}),
  mounted() {},
  methods: {},
  computed: {},
  created() {}
};
</script>

<style lang="scss" scoped>
</style>