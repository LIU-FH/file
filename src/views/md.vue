<template>
    <div>
        <Modal
                title="想个合适的标题"
                v-model="showModal"
                @on-ok="handleConfirm"
                class-name="vertical-center-modal">
            <Input v-model="fromData.title" placeholder="请输入标题"/>
        </Modal>
        <div class="absolute top-0 right-0 pr-3 pt-2" style="z-index: 2">
            <Button type="primary" @click="showModal = true">保存</Button>
        </div>
        <mavon-editor id="editor" class="h-screen mdEditor" v-model="fromData.content"/>
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
                title: '',
                content: ''
            },
        }),
        watch: {
            $route: function () {
                this.loadData()
            },
            mdDraftData: function () {
                if (this.mdDraftData && (this.mdDraftData.title || this.mdDraftData.content)) {
                    this.fromData = {
                        title: this.mdDraftData.title,
                        content: this.mdDraftData.content
                    }
                }
            }
        },
        mounted() {
            this.loadData()
        },
        methods: {
            ...mapActions(["mdDraft", "fileUpload", "fileDel"]),
            loadData() {
                if (this.$route.query.path) {
                    axios({
                        method: "GET",
                        url: this.$utils.getGitHunUrl(this.$route.query.path)
                    }).then((res) => {
                        this.fromData = {
                            title: this.$utils.getUrlName(this.$route.query.path),
                            content: res.data,
                        }
                    })
                }
            },
            handleConfirm() {
                let fileInfo = {
                    name: this.fromData.title + ".md",
                    type: "md",
                    size: this.fromData.content.length,
                    status: 0,
                    key: "FileUpload-" + md5(this.fromData.title)
                }
                let blob = new Blob([this.fromData.content], {
                    type: "text/plain"
                });
                localforage.setItem(fileInfo.key, blob).then(() => {
                    this.fileUpload(fileInfo)
                })
            },
        },
        computed: {
            ...mapGetters(["mdDraftData"]),
        }
    };
</script>

<style scoped >

</style>
