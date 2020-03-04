<template>
    <label for="fileInput">
        <div class="ivu-btn ivu-btn-error" style="line-height: 30px;">上传</div>
        <input type="file" v-show="false" id="fileInput" multiple="multiple" @change="uploadFile"/>
    </label>
</template>

<script>
    import {mapActions} from "vuex";
    import md5 from 'crypto-js/md5';
    import localforage from 'localforage';

    export default {
        name: "uploadFile",
        methods: {
            ...mapActions(["fileUpload"]),
            uploadFile(e) {
                for (let i=0;i<e.target.files.length;i++){
                    let file = e.target.files[i];
                    let fileInfo = {
                        name: file.name,
                        type: "file",
                        size: file.size,
                        status: 0,
                        key: "FileUpload-" + md5(file.name)
                    }
                    localforage.setItem(fileInfo.key, file).then(() => {
                        this.fileUpload(fileInfo)
                    })
                }
            },
        }
    };
</script>

<style scoped>
</style>