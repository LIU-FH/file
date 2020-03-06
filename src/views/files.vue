<template>
    <div class="grid grid-cols-6 gap-6 py-8 px-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        <div v-for="(item,index) in fileListData.data" :key="index">
            <Card class="files-item">
                <div class="h-48 w-full flex items-end">
                    <img class="w-full h-full absolute rounded-sm object-cover" v-lazy="pic(item)">
                    <div class="bg-black text-white rounded-sm h-10 z-10 w-full flex items-center justify-between px-2">
                        <p class="text-cut flex-1">{{item.name}} </p>
                        <div class="flex-none">
                            <Icon @click="toEdit(item)" v-if="item.type === 'md'"
                                  type="ios-create ml-2 cursor-pointer"/>
                            <Icon v-clipboard:copy="item.path"
                                  v-clipboard:success="onCopy"
                                  v-clipboard:error="onError" class="ml-2 cursor-pointer" type="ios-copy"/>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "files",
        data: () => ({
            keyword: '',
            page: 0,
        }),
        watch: {
            $route: function () {
                this.loadData()
            }
        },
        mounted() {
            this.loadData()
        },
        methods: {
            ...mapActions(["fileList", 'editMd']),
            loadData() {
                let params = {
                    sort: '-updated_at',
                    page: this.page,
                }
                if (this.$route.query.text) {
                    params.filter = {
                        name: this.$route.query.text
                    }
                }
                this.fileList({params: params})
            },
            onCopy: function (e) {
                this.$Notice.success({
                    title: '提示消息',
                    desc: "复制成功"
                });
            },
            onError: function (e) {
                this.$Notice.error({
                    title: '提示消息',
                    desc: "复制失败，请手动复制"
                });
            },
            pic(item) {
                if (/(md)$/.test(item.type)) {
                    return require('../assets/img/md.png')
                } else if (/(png|jpg|gif|jpeg|webp)$/.test(item.type)) {
                    return item.path
                } else if (/(mp4)$/.test(item.type)) {
                    return require('../assets/img/video.png')
                }
            },
            toEdit(item) {
                this.$router.push('/md?item='+JSON.stringify(item))
            }
        },
        computed: {
            ...mapGetters(['fileListData']),
        }
    }
</script>

<style scoped>

    .text-cut {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
</style>