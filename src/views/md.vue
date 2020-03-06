<template>
    <div>
        <Modal
                title="想个合适的标题"
                v-model="showModal"
                @on-ok="handleConfirm"
                class-name="vertical-center-modal">
            <Input v-model="fromData.name" placeholder="请输入标题"/>
        </Modal>
        <div class="absolute top-0 right-0 pr-3 pt-2" style="z-index: 2">
            <Button type="primary" @click="showModal = true">保存</Button>
        </div>
        <mavon-editor id="editor" class="h-screen mdEditor" v-model="content"/>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import {mavonEditor} from "mavon-editor";
    import "mavon-editor/dist/css/index.css";
    import md5 from 'crypto-js/md5';
    import localforage from 'localforage';
    import axios from "axios";

    export default {
        name: "editMD",
        components: {mavonEditor},
        data: () => ({
            showModal: false,
            fromData: {
                id: 0,
                name: '',
                path: ''
            },
            content:''
        }),
        watch: {
            $route: function () {
                this.loadData()
            },
        },
        mounted() {
            this.loadData()
        },
        methods: {
            ...mapActions(["mdDraft", "fileUpload", "fileDel"]),
            loadData() {
                if (this.$route.query.item) {
                    this.fromData = JSON.parse(this.$route.query.item)
                    axios({
                        method: "GET",
                        url: this.fromData.path
                    }).then((res) => {
                        this.content = res.data
                    })
                }else if(this.mdDraftData && (this.mdDraftData.name || this.mdDraftData.content)){
                    this.fromData = {
                        name: this.mdDraftData.name,
                    }
                    this.content = this.mdDraftData.content
                }
            },
            handleConfirm() {
                let fileInfo = {
                    id:this.fromData.id,
                    name: this.fromData.name + ".md",
                    type: "md",
                    size: this.content.length,
                    status: 0,
                    key: "FileUpload-" + md5(this.fromData.name)
                }
                let blob = new Blob([this.content], {
                    type: "text/plain"
                });
                localforage.setItem(fileInfo.key, blob).then(() => {
                    this.fileUpload(fileInfo)
                })
            },
        },
        computed: {
            ...mapGetters(["mdDraftData", "editMdData"]),
        }
    };
</script>

<style scoped>

</style>
