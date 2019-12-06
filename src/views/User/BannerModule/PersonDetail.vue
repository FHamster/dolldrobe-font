<template>
    <el-tabs type="border-card" style="width: 850px">
        <el-tab-pane label="基本资料">
            <div>
                亲爱的{{pdform.userName}}，填写真实的资料，有助于好友找到你哦。
            </div>
            <el-form :model=pdform ref="pdform">
                <el-form-item label="当前头像：" style="margin-top: 10px;margin-bottom: 0px">
                    <el-image v-if="pdform.nowImg" :src=pdform.nowImg></el-image>
                    <el-image v-else style="width: 80px;height: 80px;background-color: #9DBC7A"></el-image>
                </el-form-item>
                <el-form-item label="昵称:" style="height: 25px; width: 280px">
                    <el-input v-model="pdform.nickName" style="width: 200px;float: right" size="mini">
                        {{pdform.nickName}}
                    </el-input>
                </el-form-item>
                <el-form-item label="真实姓名：" style="height: 25px;width: 280px">
                    <el-input v-model="pdform.realName" style="width: 150px;float: right" size="mini">
                        {{pdform.realName}}
                    </el-input>
                </el-form-item>
                <el-form-item label="性别：" style="height: 25px;width: 300px" size="mini">
                    <template>
                        <el-radio style="margin-left: 25px" v-model="pdform.sex" label="1">男</el-radio>
                        <el-radio v-model="pdform.sex" label="2">女</el-radio>
                    </template>
                </el-form-item>
                <el-form-item label="生日：" style="height: 25px;width: 280px">
                    <template>
                        <div class="block">
                            <el-date-picker
                                    size="mini"
                                    v-model="pdform.birthday"
                                    type="date"
                                    style="width: 200px;float: right"
                                    placeholder="选择日期">
                            </el-date-picker>
                        </div>
                    </template>
                </el-form-item>
                <el-form-item label="星座："
                              style="height: 25px; float: right; margin-top: -45px ;margin-right: 100px; width: 250px">
                    <el-select v-model="pdform.constellation" placeholder="请选择"
                               style=" float: right;"
                               size="mini">
                        <el-option
                                v-for="item in constellationOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="居住地:" style="height: 25px ;width: 280px">
                    <el-cascader :props="props" size="mini"
                                 style="width: 200px; float: right"
                                 v-model="pdform.liveTown">
                    </el-cascader>
                </el-form-item>
                <el-form-item label="家乡：" style="height: 25px;  ;width: 280px">
                    <el-cascader :props="props" size="mini"
                                 style="width: 200px; float: right"
                                 v-model="pdform.homeTown">
                    </el-cascader>
                </el-form-item>
            </el-form>
            <el-button size="small" style="margin-left: 44%">提交</el-button>
        </el-tab-pane>
        <el-tab-pane label="头像照片">
            <div style="padding-top: 45px;margin-left: 50px;width: 200px;position: absolute">
                <div style="font-size: 13px ; color: #888888">
                    图片仅支持JPG和PNG格式，且大小不超过2M
                </div>
                <el-upload
                        style="margin-top: 10px"
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                <div>
                    <el-button plain size="small" style="margin-top: 20px">保存</el-button>
                </div>
            </div>
            <div style="width: 350px;margin-top: 50px;float: right;height: 400px">
                <div style="font-size: 12px; color: goldenrod;width: 200px">
                    您的头像会自动生成两种尺寸，请注意中小尺寸头像是否清晰
                </div>
                <div style="width: 160px;margin-top: 10px">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar" style="width: 100px;height: 100px;">
                    <img v-else style="width: 100px;height: 100px;" src="../../../assets/NullImg.jpg">
                    <div style="font-size: 11px;color: darkgray">中尺寸头像&nbsp;100x100像素</div>
                </div>
                <div style="width: 160px;margin-top: 10px">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar" style="width: 50px;height: 50px;">
                    <img v-else style="width: 50px;height: 50px;" src="../../../assets/NullImg.jpg">
                    <div style="font-size: 11px;color: darkgray">小尺寸头像&nbsp;50x50像素</div>
                </div>
            </div>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "PersonDetail",
        data() {
            return {
                // message:"helloworld",
                imageUrl: '',
                pdform: {
                    userName: '',//*
                    nowImg: '',//*
                    realName: '',
                    nickName: '',//*
                    constellation: '',
                    birthday: '',
                    sex: '',//*
                    homeTown: '',
                    liveTown: '',
                },
                constellationOptions: [{
                    value: '选项1',
                    label: '白羊座'
                }, {
                    value: '选项2',
                    label: '金牛座'
                }, {
                    value: '选项3',
                    label: '双子座'
                }, {
                    value: '选项4',
                    label: '巨蟹座'
                }, {
                    value: '选项5',
                    label: '狮子座'
                }, {
                    value: '选项6',
                    label: '处女座'
                }, {
                    value: '选项7',
                    label: '天秤座'
                }, {
                    value: '选项8',
                    label: '天蝎座'
                }, {
                    value: '选项9',
                    label: '射手座'
                }, {
                    value: '选项10',
                    label: '魔羯座'
                }, {
                    value: '选项11',
                    label: '水瓶座'
                }, {
                    value: '选项12',
                    label: '双鱼座'
                }],
                props: {
                    lazy: true,
                    lazyLoad(node, resolve) {
                        // const {level} = node;
                        // console.log(level);
                        // console.log("node");
                        // console.log(node.value);

                        axios.get('api/Region/RegionByParent', {
                            params: {ParentId: node.value}
                        }).then(res => {
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
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isPNG = file.type === 'image/png';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!(isJPG || isPNG)) {
                    this.$message.error('上传头像图片只能是 JPG 格式 或 PNG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return (isJPG || isPNG) && isLt2M;
            }
        }
    }
</script>

<style scoped>
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        width: 200px;
    }

    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }

    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 200px;
        height: 200px;
        line-height: 200px;
        text-align: center;
        border: 1px solid gainsboro;
    }

    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>
