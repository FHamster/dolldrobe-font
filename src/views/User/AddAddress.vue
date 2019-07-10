<template>
    <el-container style="max-width: 700px ;display: flex" align="cneter">
        <el-header height="27px">
            <div style="border-bottom: 2px solid darkgray ">收货地址</div>
        </el-header>
        <el-main>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
                <el-form-item  prop="name" class="item_he">
                    <div class="item_lab">收货人姓名:</div>
                        <el-input v-model="ruleForm.peopleName"
                                  style="width: 230px; "
                        ></el-input>
                </el-form-item>
                <el-form-item  class="item_he">
                    <div class="item_lab">所在地区:</div>
                    <el-cascader :props="props"></el-cascader>
                </el-form-item>
                <el-form-item  prop="address"  class="item_he">
                    <div class="item_lab">详细地址:</div>
                    <el-input v-model="ruleForm.address"
                              style="width: 500px; height: 33px!important;"
                    ></el-input>
                </el-form-item>
                <el-form-item  prop="phone" class="item_he" style="margin-top: 40px;height: 50px">
                    <div class="item_lab" style="display: inline;margin-right: 60px">手机号码:</div>
                    <el-input v-model="ruleForm.phone"
                    style="width: 230px"
                    ></el-input>
                </el-form-item>
                <el-form-item  prop="telephone" class="item_he" style="height: 50px">
                    <div class="item_lab" style="display: inline;margin-right: 60px">固定电话:</div>
                    <el-input v-model="ruleForm.telephone"
                              style="width: 230px"
                    ></el-input>
                </el-form-item>
                <el-form-item  prop="email" class="item_he" style="height: 50px">
                    <div class="item_lab" style="display: inline; margin-right: 60px">邮箱地址:</div>
                    <el-input v-model="ruleForm.email" style="width: 260px"></el-input>
                </el-form-item>
                <el-form-item  prop="tagName" class="item_he">
                    <div class="item_lab">地址别名:</div>
                    <el-input v-model="ruleForm.tagName" style="width: 150px"></el-input>
                    <div
                            class="item_lab"
                            style="display: inline">建议填写常用名称</div>
                    <el-button plain size="small">家里</el-button>
                    <el-button plain size="small">父母家</el-button>
                    <el-button plain size="small">公司</el-button>
                    <el-button plain size="small">学校</el-button>
                </el-form-item>
                <el-form-item align="center" style="margin-top: 20px">
                    <el-button plain type="primary" > 保存收货地址</el-button>
                </el-form-item>
            </el-form>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "AddAddress",
        data: function () {
            return {
                ruleForm: [{
                    peopleName: '',
                    localArea: '',
                    address: '',
                    phone: '',
                    telephone: '',
                    email: '',
                    tagName: '',
                }],

                props: {
                    lazy: true,
                    // lazyLoad(node, resolve) {
                    //     const {level} = node;
                    //     setTimeout(() => {
                    //         const nodes = Array.from({length: level + 1})
                    //             .map(item => ({
                    //                 value: ++id,
                    //                 label: `选项${id}`,
                    //                 leaf: level >= 2
                    //             }));
                    //         // 通过调用resolve将子节点数据返回，通知组件数据加载完成
                    //         resolve(nodes);
                    //     }, 1000);
                    // }
                }
            };

        },
    }
</script>

<style scoped>
.item_lab{
    font-size: 12px;
    color: #999;
    width: 100px;
    height:40px;
    text-align: left;
    padding: 5px 10px;
}
    .item_he{
        height: 90px;
        margin: 0;
        align-items: center;
    }
</style>
