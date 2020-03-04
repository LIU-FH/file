<template>
    <div class="w-screen h-screen px-10 flex flex-col">
        <div class="text-right flex-none my-3">
            <md-button class="md-raised">保存</md-button>
        </div>
        <div class="flex-1 flex mb-10">
            <div class="flex-1 mr-3 bg-white border border-gray-400 rounded p-3 ">
            <textarea class="outline-none resize-none w-full min-h-full overflow-y-auto md-scrollbar " v-model="html"
                      placeholder="请在此处输入HTML内容"></textarea>
            </div>
            <div class="flex-1 ml-3 bg-white border border-gray-400 rounded p-3 ">
            <textarea class="outline-none resize-none w-full min-h-full overflow-y-auto md-scrollbar" v-model="md"
                      placeholder="转化后的MD内容" readonly="readonly"></textarea>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "turndown",
        data: () => ({
            md: "",
            html: "",
        }),
        watch: {
            html: function () {
                let turndown = require('turndown')
                let t = new turndown()
                this.html = t.turndown(this.html)
            }
        },
        mounted() {

        }
    }
</script>

<style scoped>

</style>