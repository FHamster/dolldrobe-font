<template>
    <el-container style="max-width: 700px ;display: flex" align="cneter">
        <el-header height="27px">
            <div style="border-bottom: 2px solid darkgray ">收货地址</div>
        </el-header>
        <el-main>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
                <el-form-item class="item_he"
                              prop="peopleName">
                    <div class="item_lab">收货人姓名:</div>
                    <el-input v-model="ruleForm.peopleName"
                              style="width: 230px; ">
                    </el-input>
                </el-form-item>
                <el-form-item class="item_he" prop="localArea">
                    <div class="item_lab">所在地区:</div>
                    <el-cascader :props="props"
                                 v-model="ruleForm.localArea">
                    </el-cascader>
                </el-form-item>
                <el-form-item prop="address" class="item_he">
                    <div class="item_lab">详细地址:</div>
                    <el-input v-model="ruleForm.address"
                              style="width: 500px; height: 33px!important;"
                    ></el-input>
                </el-form-item>
                <el-form-item prop="phone" class="item_he" style="margin-top: 40px;height: 50px">
                    <div class="item_lab" style="display: inline;margin-right: 60px">手机号码:</div>
                    <el-input v-model="ruleForm.phone"
                              style="width: 230px"
                    ></el-input>
                </el-form-item>
                <el-form-item prop="telephone" class="item_he" style="height: 50px">
                    <div class="item_lab" style="display: inline;margin-right: 60px">固定电话:</div>
                    <el-input v-model="ruleForm.telephone"
                              style="width: 230px"
                    ></el-input>
                </el-form-item>
                <el-form-item prop="e_mail" class="item_he" style="height: 50px">
                    <div class="item_lab" style="display: inline; margin-right: 60px">邮箱地址:</div>
                    <el-input v-model="ruleForm.email" style="width: 260px"></el-input>
                </el-form-item>
                <el-form-item prop="tagName" class="item_he">
                    <div class="item_lab">地址别名:</div>
                    <el-input v-model="ruleForm.tagName" style="width: 150px">{{ruleForm.tagName}}</el-input>
                    <div
                            class="item_lab"
                            style="display: inline">建议填写常用名称
                    </div>
                    <el-button plain size="small" @click=changeTag(tagItems[0].tag)>家里</el-button>
                    <el-button plain size="small" @click=changeTag(tagItems[1].tag)>父母家</el-button>
                    <el-button plain size="small" @click=changeTag(tagItems[2].tag)>公司</el-button>
                    <el-button plain size="small" @click=changeTag(tagItems[3].tag)>学校</el-button>
                </el-form-item>
                <el-form-item align="center" style="margin-top: 20px">
                    <el-button plain type="primary"
                               @click="addAddress">保存收货地址
                    </el-button>
                </el-form-item>
            </el-form>
        </el-main>
    </el-container>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "AddAddress",
        data: function () {
            return {
                tagItems: [{
                    tag: '家里'
                }, {
                    tag: '父母家'
                }, {
                    tag: '公司'
                }, {
                    tag: '学校'
                },],
                ruleForm: {
                    peopleName: '',
                    //收件区域
                    localArea: '',
                    //详细地址
                    address: '',
                    //移动手机号码
                    phone: '',
                    //固定电话号码
                    telephone: '',
                    e_mail: '',
                    tagName: '',
                },
                rules: {
                    peopleName: [{required: true, message: '请输入收件人姓名', trigger: 'blur'}],
                    localArea: [{required: true, message: '请输入收件人区域', trigger: 'blur'}],
                    address: [{required: true, message: '请输入收件人详细地址', trigger: 'blur'}],
                    phone: [
                        {required: true, message: '请输入收件电话', trigger: 'blur'},
                        {
                            pattern: '^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\\d{8}$',
                            message: '这个手机号是神仙号码吧'
                        }
                    ],
                    e_mail: [{
                        pattern: '^[a-zA-Z_]{1,}[0-9]{0,}@(([a-zA-z0-9]-*){1,}\\.){1,3}[a-zA-z\\-]{1,}$',
                        message: '不合法的邮箱'
                    }]
                },
                props: {
                    lazy: true,
                    lazyLoad(node, resolve) {
                        // const {level} = node;
                        // console.log(level);
                        // console.log("node");
                        // console.log(node.value);

                        if (node.value == null) {
                            node.value = 1;
                        }
                        let url = 'api/Region/RegionByParent/' + node.value;

                        axios.get(url
                        ).then(res => {
                            const chilNode = res.data.map(item => ({
                                value: item.arNum,
                                label: item.arName,
                                leaf: item.arType > 2
                            }));
                            resolve(chilNode);
                        }).catch(err => {
                            this.$message.error("error" + err.message);
                        });

                        // console.log(resolve);
                        // console.log(Array.from({length: level + 1}));
                        /*setTimeout(() => {
                            const nodes = Array.from({length: level + 1})
                                .map(item => ({
                                    value: ++id,
                                    label: `选项${id}`,
                                    leaf: level >= 2
                                }));
                            // console.log(nodes);
                            // 通过调用resolve将子节点数据返回，通知组件数据加载完成
                            resolve(nodes);
                        }, 1000);*/
                    }
                }
            };

        },
        methods: {
            addAddress() {
                let tmpArr = Array.from(this.ruleForm.localArea);

                let add = {
                    saName: this.ruleForm.peopleName,
                    arNum: tmpArr.pop(),
                    // saDefault: this.ruleForm.peopleName,
                    saDetail: this.ruleForm.address,
                    saEmail: this.ruleForm.email,
                    saTelphone: this.ruleForm.telephone,
                    saPhone: this.ruleForm.phone
                };
                console.log(this.submitForm("ruleForm"));
                if (this.submitForm("ruleForm")) {

                    axios.post('api/Address/Address', add, {
                        headers: {
                            'token': this.$store.getters.getToken
                        }
                    }).then(res => {
                        this.$message.success("成功添加收货地址");
                    }).catch(err => {
                        this.$message.error("收获收货地址添加失败");
                    });
                } else {
                    this.$message.error("收获收货地址添加失败");
                }
            },
            changeTag(value) {
                // console.log(value);
                this.ruleForm.tagName = value;
                this.$forceUpdate()
                // console.log(  this.ruleForm.tagName);
            },
            submitForm(formName) {
                var flag;
                this.$refs[formName].validate((valid) => {

                    if (valid) {
                        flag = valid;
                        // console.log(valid);
                        return true

                    } else {

                        // console.log('error submit!!');
                        flag = valid;
                        return false;
                    }
                });
                return flag;
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>
    .item_lab {
        font-size: 12px;
        color: #999;
        width: 100px;
        height: 40px;
        text-align: left;
        padding: 5px 10px;
    }

    .item_he {
        height: 90px;
        margin: 0;
        align-items: center;
    }
</style>
