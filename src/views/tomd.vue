<template>
    <div class="w-screen h-screen px-10 flex flex-col">
        <div class="text-right flex-none my-3">
            <Button @click="doCopy">复制</Button>
            <Button @click="toEdit" class="ml-3" type="primary">编辑</Button>
        </div>
        <div class="flex-1 flex mb-10">
            <div class="flex-1 mr-3 bg-white border border-gray-400 rounded p-3 ">
            <textarea class="outline-none resize-none w-full min-h-full overflow-y-auto md-scrollbar " v-model="html"
                      placeholder="请在此处输入HTML内容" @input="toMd"></textarea>
            </div>
            <div class="flex-1 ml-3 bg-white border border-gray-400 rounded p-3 ">
            <textarea class="outline-none resize-none w-full min-h-full overflow-y-auto md-scrollbar" v-model="md"
                      placeholder="转化后的MD内容" readonly="readonly"></textarea>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from "vuex";

    export default {
        name: "tomd",
        data: () => ({
            md: "",
            html: "",
        }),
        methods: {
            ...mapActions(["mdDraft"]),
            toMd(e) {
                let turndown = require('turndown')
                let t = new turndown()
                this.html = t.turndown(this.html)
            },
            toEdit() {
                this.mdDraft({
                    content: this.md
                })
                this.$router.push('/md')
            },
            doCopy() {
                this.$copyText(this.md).then(() => {
                    this.$Notice.success({
                        title: '提示消息',
                        desc: "复制成功"
                    });
                }, () => {
                    this.$Notice.error({
                        title: '提示消息',
                        desc: "复制失败，请手动复制"
                    });
                })
            }
        }
    }
</script>

<style scoped>

</style>