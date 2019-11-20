<template>
    <div class="flex-col">
        <el-dialog title="商品详情" :visible.sync="isGoodDialogVis" width="1000px">
            <GoodDialog :c-num="curGood" :c-name="curGoodName"></GoodDialog>
        </el-dialog>

        <div class="myhead">

        </div>

        <!--  <el-aside class="goodaside">
              <el-col v-for="index of 5" :key="index">
                  &lt;!&ndash;<el-card :body-style="{ padding: '10px' }" shadow="hover" style="width: 250px;margin-left: 15px ;"&ndash;&gt;
                  &lt;!&ndash;@click="isGoodDialogVis = !isGoodDialogVis">&ndash;&gt;
                  &lt;!&ndash;<img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"&ndash;&gt;
                  &lt;!&ndash;class="image">&ndash;&gt;
                  &lt;!&ndash;<div style="padding: 14px;width: 180px">&ndash;&gt;
                  &lt;!&ndash;<span>好吃的汉堡</span>&ndash;&gt;
                  &lt;!&ndash;<div class="bottom clearfix">&ndash;&gt;
                  &lt;!&ndash;<el-button type="text" class="button">加入购物车</el-button>&ndash;&gt;
                  &lt;!&ndash;</div>&ndash;&gt;
                  &lt;!&ndash;</div>&ndash;&gt;
                  &lt;!&ndash;</el-card>&ndash;&gt;
              </el-col>
          </el-aside>-->

        <!--
        <div class="el-row" height="20px" style="align-text: center">
            <el-button plain class="head_btn" @click=getPageByC_Num>综合排序</el-button>
            <el-button plain class="head_btn">销量</el-button>
            <el-button plain class="head_btn" @click="getPageByC_MaxMoney">价格</el-button>
            <el-button plain class="head_btn">评论数</el-button>
            <el-button plain class="head_btn" @click="getPageByC_EndTime">上架时间</el-button>
        </div>
-->
        <el-container style="padding:24px 80px">
            <el-aside>
                <el-card>
                    <!--         套装
                             帽子
                             上衣
                             下装
                             鞋靴
                             配饰 (口罩眼罩娃用包假发贴纸奶嘴辫子眼镜游泳圈气球滑板跑车)
                             家具-->
                    <el-collapse accordion>
                        <el-collapse-item title="全部" name="全部">
                            <div>世界是我的想象</div>
                        </el-collapse-item>
                        <el-collapse-item title="套装" name="套装">
                            <div>波西米亚是一种精神</div>
                        </el-collapse-item>
                        <el-collapse-item title="帽子" name="帽子">
                            <div>奥黛丽赫本式的优雅味道</div>
                        </el-collapse-item>
                        <el-collapse-item title="上衣" name="上衣">
                            <div>翻出新鲜的花样</div>
                        </el-collapse-item>
                        <el-collapse-item title="下装" name="下装">
                            <div>百慕大短裤就像夏天的冰可乐</div>
                        </el-collapse-item>
                        <el-collapse-item title="鞋靴" name="鞋靴">
                            <div>有磨损才会有故事</div>
                        </el-collapse-item>
                        <el-collapse-item title="配饰" name="配饰">
                            <div>小礼帽、红襟花、羊皮长手套</div>
                        </el-collapse-item>
                    </el-collapse>
                    <el-divider content-position="left">KeyWord</el-divider>
                    <div class="rowdir">
                        <el-input prefix-icon="el-icon-search" type="text"
                                  size=large class="mysearch"
                                  v-model="keyWord">
                        </el-input>
                        <el-button @click="getCart">
                            搜索
                        </el-button>
                    </div>
                </el-card>

                <el-card>
                    <el-button plain @click=getPageByC_Num>综合排序</el-button>
                    <el-button plain>销量</el-button>
                    <el-button plain @click="getPageByC_MaxMoney">价格</el-button>
                    <el-button plain>评论数</el-button>
                    <el-button plain @click="getPageByC_EndTime">上架时间</el-button>
                </el-card>
                <!--      <el-card>
                          <div class="flex-col" style="align-items: center">
                              <el-divider></el-divider>
                              <div>
                                  <el-button type="text">文字按钮</el-button>
                              </div>
                              <div>
                                  <el-button type="text">文字按钮</el-button>
                              </div>
                              <div>
                                  <el-button type="text">文字按钮</el-button>
                              </div>
                              <div>
                                  <el-button type="text">文字按钮</el-button>
                              </div>
                              <div>
                                  <el-button type="text">文字按钮</el-button>
                              </div>
                              <div>
                                  <el-button type="text">文字按钮</el-button>
                              </div>
                              <el-divider></el-divider>
                          </div>
                      </el-card>-->
            </el-aside>
            <el-main style="padding: 0;margin-left: 32px">
                <el-card>
                    <div style="justify-content: center" class="flex-row">
                        <!--商品展示面板-->
                        <div class="goodPanel">
                            <div v-for="good in goodList" :key="good.cNum"
                                 style="margin-left: 16px;margin-top: 8px"
                                 @click="visGoodDialog(good.cNum,good.cName)">
                                <GoodCard :good="good"/>
                            </div>
                        </div>
                    </div>
                    <el-pagination
                            background
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page.sync="curPage"
                            :page-size="5"
                            layout="prev, pager, next, jumper"
                            :total="total"
                            style="float: right;margin-top: 50px;margin-right: 100px">
                    </el-pagination>
                </el-card>
            </el-main>

        </el-container>

    </div>
</template>

<script>
    import axios from 'axios';
    import GoodDialog from "./GoodDialog";
    import GoodCard from "./GoodCard";


    export default {
        name: "GoodsPage",
        components: {GoodCard, GoodDialog},
        mounted() {
            this.getCart();
        },
        data() {
            return {
                // 商品对话框当前选中商品cNum
                curGood: '',
                curGoodName: '',
                isGoodDialogVis: false,

                total: 200,
                C_Num: "C_Num",
                C_MaxMoney: "C_MaxMoney",
                C_EndTime: "C_EndTime",
                keyWord: '',
                goodList: [],
                curPage: 1,
                pageSize: 12,
                order: '',
                isAsc: true,

                options: [{
                    value: 'zhinan',
                    label: '指南',
                    children: [{
                        value: 'shejiyuanze',
                        label: '设计原则',
                        children: [{
                            value: 'yizhi',
                            label: '一致'
                        }, {
                            value: 'fankui',
                            label: '反馈'
                        }, {
                            value: 'xiaolv',
                            label: '效率'
                        }, {
                            value: 'kekong',
                            label: '可控'
                        }]
                    }, {
                        value: 'daohang',
                        label: '导航',
                        children: [{
                            value: 'cexiangdaohang',
                            label: '侧向导航'
                        }, {
                            value: 'dingbudaohang',
                            label: '顶部导航'
                        }]
                    }]
                }, {
                    value: 'zujian',
                    label: '组件',
                    children: [{
                        value: 'basic',
                        label: 'Basic',
                        children: [{
                            value: 'layout',
                            label: 'Layout 布局'
                        }, {
                            value: 'color',
                            label: 'Color 色彩'
                        }, {
                            value: 'typography',
                            label: 'Typography 字体'
                        }, {
                            value: 'icon',
                            label: 'Icon 图标'
                        }, {
                            value: 'button',
                            label: 'Button 按钮'
                        }]
                    }, {
                        value: 'form',
                        label: 'Form',
                        children: [{
                            value: 'radio',
                            label: 'Radio 单选框'
                        }, {
                            value: 'checkbox',
                            label: 'Checkbox 多选框'
                        }, {
                            value: 'input',
                            label: 'Input 输入框'
                        }, {
                            value: 'input-number',
                            label: 'InputNumber 计数器'
                        }, {
                            value: 'select',
                            label: 'Select 选择器'
                        }, {
                            value: 'cascader',
                            label: 'Cascader 级联选择器'
                        }, {
                            value: 'switch',
                            label: 'Switch 开关'
                        }, {
                            value: 'slider',
                            label: 'Slider 滑块'
                        }, {
                            value: 'time-picker',
                            label: 'TimePicker 时间选择器'
                        }, {
                            value: 'date-picker',
                            label: 'DatePicker 日期选择器'
                        }, {
                            value: 'datetime-picker',
                            label: 'DateTimePicker 日期时间选择器'
                        }, {
                            value: 'upload',
                            label: 'Upload 上传'
                        }, {
                            value: 'rate',
                            label: 'Rate 评分'
                        }, {
                            value: 'form',
                            label: 'Form 表单'
                        }]
                    }, {
                        value: 'data',
                        label: 'Data',
                        children: [{
                            value: 'table',
                            label: 'Table 表格'
                        }, {
                            value: 'tag',
                            label: 'Tag 标签'
                        }, {
                            value: 'progress',
                            label: 'Progress 进度条'
                        }, {
                            value: 'tree',
                            label: 'Tree 树形控件'
                        }, {
                            value: 'pagination',
                            label: 'Pagination 分页'
                        }, {
                            value: 'badge',
                            label: 'Badge 标记'
                        }]
                    }, {
                        value: 'notice',
                        label: 'Notice',
                        children: [{
                            value: 'alert',
                            label: 'Alert 警告'
                        }, {
                            value: 'loading',
                            label: 'Loading 加载'
                        }, {
                            value: 'message',
                            label: 'Message 消息提示'
                        }, {
                            value: 'message-box',
                            label: 'MessageBox 弹框'
                        }, {
                            value: 'notification',
                            label: 'Notification 通知'
                        }]
                    }, {
                        value: 'navigation',
                        label: 'Navigation',
                        children: [{
                            value: 'menu',
                            label: 'NavMenu 导航菜单'
                        }, {
                            value: 'tabs',
                            label: 'Tabs 标签页'
                        }, {
                            value: 'breadcrumb',
                            label: 'Breadcrumb 面包屑'
                        }, {
                            value: 'dropdown',
                            label: 'Dropdown 下拉菜单'
                        }, {
                            value: 'steps',
                            label: 'Steps 步骤条'
                        }]
                    }, {
                        value: 'others',
                        label: 'Others',
                        children: [{
                            value: 'dialog',
                            label: 'Dialog 对话框'
                        }, {
                            value: 'tooltip',
                            label: 'Tooltip 文字提示'
                        }, {
                            value: 'popover',
                            label: 'Popover 弹出框'
                        }, {
                            value: 'card',
                            label: 'Card 卡片'
                        }, {
                            value: 'carousel',
                            label: 'Carousel 走马灯'
                        }, {
                            value: 'collapse',
                            label: 'Collapse 折叠面板'
                        }]
                    }]
                }, {
                    value: 'ziyuan',
                    label: '资源',
                    children: [{
                        value: 'axure',
                        label: 'Axure Components'
                    }, {
                        value: 'sketch',
                        label: 'Sketch Templates'
                    }, {
                        value: 'jiaohu',
                        label: '组件交互文档'
                    }]
                }]


            };
        },
        methods: {
            handleSizeChange(val) {
                return (`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.curPage = val;
                this.getCart();
            },
            getPageByC_Num() {
                this.order = "C_Num";
                this.getCart();
            },
            getPageByC_MaxMoney() {

                this.order = "C_MinMoney";
                this.getCart();
            },

            getPageByC_EndTime() {
                this.order = "C_EndTime";
                this.getCart();
            },

            visGoodDialog(viscNum, visName) {
                this.curGood = viscNum;
                this.curGoodName = visName;
                // console.log(viscNum);
                this.isGoodDialogVis = true;
            },
            getCart() {
                axios.get('/api/GoodPage/GoodPageByOrder', {
                        params: {
                            keyWord: this.keyWord,
                            startPage: this.curPage,
                            pageSize: this.pageSize,
                            order: this.order,
                            isAsc: this.isAsc
                        }
                    }
                ).then(res => {
                    this.goodList = res.data;
                    console.log(this.goodList);
                })
            }
        }

    };
</script>

<style scoped>

    .good-card {
        padding: 0;
        width: 250px;

        display: flex;
        flex-direction: column;
        align-content: center;
    }

    .my_logo {
        /*position: relative;*/
        /*float: left;*/
        /*width: 200px;*/
        /*height: 65px;*/
        /*font-family: 华文琥珀;*/
        color: #9DBC7A;
        font-size: 40px;
        white-space: nowrap;
    }

    .el-input__inner5 {
        /*width: 40%;*/
        /*margin-top: 12px;*/
        /*border-color: red;*/
        /*border-width: 1px;*/
        /*margin-left: 20px;*/
        /*border-radius: 0px;*/
        /*background-color: rgba(192,192,192,0.5);*/
    }


    .rowdir {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .myhead {
        min-height: 90px;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        background-color: whitesmoke;
    }

    .myimg {
        /*float: left;*/

        width: 70px;
        height: 70px;

    }

    .head_btn {
        font-size: 13px;
        border-radius: 0px;
        background-image: linear-gradient(to bottom, #f5f7fa 0%, #c3cfe2 100%);
        margin: 0px;
    }


    .button {
        padding: auto;
        float: right;
    }


    .goodPanel {
        width: 1350px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }


</style>
