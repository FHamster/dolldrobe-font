<template>
    <el-dialog title="登陆" :visible.sync="dialogFormVisible">
        <el-form :model="form">
            <el-form-item label="帐号" :label-width="formLabelWidth">
                <el-input v-model="form.account" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" :label-width="formLabelWidth">
                <el-input v-model="form.psd我" autocomplete="off"></el-input>
            </el-form-item>
            <!--<el-form-item label="密码" :label-width="formLabelWidth">
                <el-select v-model="form.psd" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>-->
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="login">确 定</el-button>
        </div>
    </el-dialog>
</template>

<script>
    export default {
        name: "LoginDialog",
        props: {
            IsVis: {
                type: Boolean,
                default: false
            }
        },
        data: function () {
            return {
                dialogFormVisible: false,
                form: {
                    account: '',
                    psd: '',
                },
                formLabelWidth: '120px'
            }
        },
        methods: {
            login: function () {
                this.axios.post('/User/Login', this.form)
                //then成功时候的回传
                //err出现异常的回传
                    .then((res) => {

                    })
                    .catch((err) => {

                    })

            }
        },
        watch: {
            IsVis: function (newValue) {
                this.dialogFormVisible = newValue;
            }
        },


    };
</script>

<style scoped>

</style>
