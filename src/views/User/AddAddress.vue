<template>
    <el-container style="max-width: 700px ;display: flex" align="cneter">
        <el-header height="27px">
            <div style="border-bottom: 2px solid darkgray ">收货地址</div>
        </el-header>
        <el-main>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
                <el-form-item label="收货人姓名:" prop="name">
                    <el-input v-model="ruleForm.peopleName"></el-input>
                </el-form-item>
                <el-form-item label="所在地区:">
                    <el-cascader :props="props"></el-cascader>
                </el-form-item>
                <el-form-item label="详细地址:" prop="address">
                    <el-input v-model="ruleForm.address"></el-input>
                </el-form-item>
                <el-form-item label="手机号码:" prop="phone">
                    <el-input v-model="ruleForm.phone"></el-input>
                </el-form-item>
                <el-form-item label="固定电话:" prop="telephone">
                    <el-input v-model="ruleForm.telephone"></el-input>
                </el-form-item>
                <el-form-item label="邮箱地址:" prop="email">
                    <el-input v-model="ruleForm.email"></el-input>
                </el-form-item>
                <el-form-item label="地址别名" prop="tagName">
                    <el-input v-model="ruleForm.tagName"></el-input>
                    <div>建议填写常用名称</div>
                    <el-button plain>家里</el-button>
                    <el-button plain>父母家</el-button>
                    <el-button plain>公司</el-button>
                    <el-button plain>学校</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button plain type="primary"> 保存收货地址</el-button>
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

</style>
