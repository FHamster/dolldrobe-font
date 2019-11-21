<template>
    <div class="foot">

        <div class="tag">
            <div style="font-size: 30px" v-for="(Tag,index) in bigTag" :key="index">
                <i :class="Tag.icon"></i>
                {{Tag.title}}
            </div>
        </div>


        <div class="bz">
            <a v-for="(tag1,index) in otherList" :key="index" y href="#">{{tag1}}|</a>
        </div>
        <!--
                <div class="sm1">
                    <a href="http://yanxuan.nosdn.127.net/284cbf85c80d3b1146f4df247b0d57cc.jpg?imageView">食品经营许可证：JY13301080111719</a>
                    <a href="http://yanxuan.nosdn.127.net/e45ef8d5f69114977fefff52495354eb.jpg?imageView">出版物经营许可证：新出发滨字第0132号</a>
                    <a href="#">妙得ICP证号：ICP 证浙B2-20160106</a>
                    <a href="http://yanxuan.nosdn.127.net/1a2b5c83529ee1bd53531a5726e76ebe.jpg?imageView">浙杭食药监械经营备20171029号</a>
                    <a href="http://yanxuan.nosdn.127.net/9f9d7a8a8529f97b33c351cc85f8db81.jpg?imageView">营业执照</a>
                    <a href="#">网易公司版权所有 © 1997-2019</a>
                </div>-->
        <!--       <div class="sm2">
                   <a href="http://ewm.zjfda.gov.cn:8088/qcode.action?id=0000000069A47A7D0169A492778E07C6&user_type=WLFW">（浙杭）网械企备字[2019]第00119号</a>
                   <a href="#">（粤）网械平台备字（2019）第00004号</a>
                   <a href="http://yanxuan.nosdn.127.net/d678ac17014b97f97d25bb86ae288af2.jpg?imageView">单用途商业预付卡备案证：330100AAC0024</a>
                   &lt;!&ndash;                <a href="#"><img alt="sbiao" src="../image/ghui.png"></a>&ndash;&gt;
               </div>-->
    </div>

</template>
<script>
    export default {
        name: 'MainFooter',
        data() {
            return {
                bigTag: [
                    {
                        title: "DollDrobe自营电商",
                        icon: "el-icon-mobile"
                    },
                    {
                        title: "30天无忧退换货",
                        icon: "el-icon-mouse"
                    },
                    {
                        title: "满88元免邮费",
                        icon: "el-icon-chat-round"
                    },
                    {
                        title: "品质保证",
                        icon: "el-icon-basketball"
                    }
                ],
                otherList: [
                    '关于我们',
                    '帮组中心',
                    '售后服务',
                    '配送与验收',
                    '商务合作',
                    '企业采购',
                    '开放平台',
                    '搜索推荐',
                    '友情链接'
                ]
            }
        }
    }
</script>

<style scoped>
    .foot {
        width: 100%;
        display: flex;
        flex-direction: column;
        /*height: 500px;*/
        background-color: whitesmoke;
        /*background-color: #eaeaea;*/
        /*border: 1px solid black;*/
    }


    .bt1 p, .bt2 p, .bt3 p, .bt4 p {
        text-align: center;
        color: white;
    }


    .b2 img {
        margin-top: 3px;
    }


    .b3 img {
        margin-top: 2px;
    }

    .b4 img {
        margin-top: 3px;
    }


    .bz {

        margin-top: 50px;
        display: flex;
        justify-content: center;
        height: 100px;
        /*margin-top: 50px;*/

    }

    .bz > a {
        color: gray;
        margin: 8px 0;
    }

    .bz > a:hover {
        color: #6C7BC1;
    }

    .sm1 {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 14px;
        text-align: center;
        margin-top: -50px;
        font-size: small;
    }

    .sm1 a {
        color: gray;
        float: left;
        margin-left: 30px;
    }

    .sm1 a:hover {
        color: #9DBC7A;
    }

    .sm2 {
        display: flex;
        justify-content: center;
        width: 100%;
        text-align: center;
        font-size: small;
        margin-top: 3px;
    }

    .sm2 a {
        color: gray;
        margin-top: 10px;
    }

    .sm2 a:hover {
        color: #9DBC7A;
    }

    .tag {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-top: 50px;

    }
</style>
