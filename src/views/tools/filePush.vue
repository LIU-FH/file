<template>
    <Poptip title="文件提交" placement="bottom-end">
        <Button shape="circle" icon="md-git-commit"></Button>
        <div style="width: 450px;" slot="content">
            <div class="h-20 mt-3 flex items-center justify-center">
                <Button @click="filePush" size="large" type="primary">Primary</Button>
            </div>
            <Divider>最后一次更新</Divider>
            <div class="leading-7 w-full" style="max-height: 410px;overflow: auto">
                <p>{{filePushLastData.time}}</p>
                <p v-for="(item,index) in filePushLastData.output" :key="index">{{item}}</p>
                <p>{{filePushLastData.return_var}}</p>
            </div>
        </div>
    </Poptip>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "filePush",
        data: () => ({}),
        mounted() {
            this.getPushLast()
        },
        methods: {
            ...mapActions(["filePush", "filePushLast"]),
            getPushLast() {
                this.filePushLast({
                    cache: false
                })
            }
        },
        computed: {
            ...mapGetters(["filePushData", "filePushLastData"])
        }
    };
</script>

<style scoped>
</style>