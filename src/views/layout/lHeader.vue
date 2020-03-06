<template>
    <div class="h-full w-full flex items-center justify-between">
        <div class="flex items-center">
            <h1 class="mr-8">Assets</h1>
            <Input search placeholder="Enter something..." @on-search="toSearch"/>
        </div>
        <div>
            <router-link to="/md">
                <Tooltip content="MD编辑器" placement="bottom">
                    <Button class="ml-4" shape="circle" icon="ios-create"></Button>
                </Tooltip>
            </router-link>
            <router-link to="/turndown">
                <Tooltip content="Html To Markdown" placement="bottom">
                    <Button class="ml-4" shape="circle" icon="md-repeat"></Button>
                </Tooltip>
            </router-link>
            <router-link to="/spider">
                <Tooltip content="爬虫" placement="bottom">
                    <Button class="ml-4" shape="circle" icon="md-color-wand"></Button>
                </Tooltip>
            </router-link>
            <file-push class="ml-4"></file-push>
            <upload-job class="ml-4"></upload-job>
            <upload-file class="ml-4"></upload-file>
        </div>
    </div>
</template>

<script>
    import UploadFile from "../tools/uploadFile";
    import UploadJob from "../tools/uploadJob";
    import FilePush from "../tools/filePush";

    export default {
        name: "lHeader",
        components: {FilePush, UploadJob, UploadFile},
        methods: {
            toSearch(val) {
                this.$router.push('/?text=' + val)
            }
        }
    }
</script>

<style scoped>

</style>