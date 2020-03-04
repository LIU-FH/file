<template>
    <Poptip title="Title" placement="bottom-end">
        <Button shape="circle" icon="ios-cloud-upload"></Button>
        <List slot="content">
            <ListItem>
                <ListItemMeta avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"
                              title="This is title" description="This is description, this is description."/>
            </ListItem>
            <ListItem>
                <ListItemMeta avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"
                              title="This is title" description="This is description, this is description."/>
            </ListItem>
            <ListItem>
                <ListItemMeta avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"
                              title="This is title" description="This is description, this is description."/>
                <template slot="action">
                    <li>
                        <a href="">Edit</a>
                    </li>
                    <li>
                        <a href="">More</a>
                    </li>
                </template>
            </ListItem>
            <ListItem>
                <ListItemMeta avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"
                              title="This is title" description="This is description, this is description."/>
                <template slot="action">
                    <li>
                        <a href="">Edit</a>
                    </li>
                    <li>
                        <a href="">More</a>
                    </li>
                </template>
            </ListItem>
        </List>
    </Poptip>
</template>

<script>
    import {mapActions} from "vuex";
    import md5 from 'crypto-js/md5';
    import localforage from 'localforage';

    export default {
        name: "uploadJob",
        methods: {
            ...mapActions(["fileUpload"]),
            uploadFile(e) {
                let file = e.target.files[0];
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
            },
        }
    };
</script>

<style scoped>
</style>