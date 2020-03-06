<template>
    <Poptip title="上传任务" placement="bottom-end">
        <Tooltip content="上传任务" placement="bottom">
            <Button shape="circle" icon="ios-cloud-upload"></Button>
        </Tooltip>
        <div slot="content" style="width: 350px">
            <List v-if="fileUploadData.length > 0">
                <ListItem v-for="(item,index) in fileUploadData" :key="index">
                    <ListItemMeta :title="item.name" :description="item.size"/>
                </ListItem>
            </List>
            <div v-else class="w-full flex items-center justify-center h-32">暂无上传任务</div>
        </div>
    </Poptip>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "uploadJob",
        methods: {},
        computed: {
            ...mapGetters(['fileUploadData']),
        }
    };
</script>

<style scoped>
</style>