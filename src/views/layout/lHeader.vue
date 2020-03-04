<template>
    <div class="h-full w-full flex items-center justify-between">
        <div class="flex items-center">
            <h1 class="mr-8">Assets</h1>
            <Input search placeholder="Enter something..." @on-search="toSearch"/>
        </div>
        <div>

            <router-link to="/md">
                <Button class="ml-4" shape="circle" icon="ios-create"></Button>
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