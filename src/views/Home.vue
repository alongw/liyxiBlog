<template>
    <div id="home">
        <div class="banner">
            <div class="nr">
                <h1>创意无限</h1>
                <h3>无限的创造和想象</h3>
                <h4>与一群有趣的小伙伴做一些有趣的事情</h4>
                <el-button class="morebtn" type="primary" round>查看更多
                    <share theme="outline" size="18" fill="#fff" />
                </el-button>

            </div>
            <img src="@/assets/img/banner.png" alt="">
        </div>

        <div class="project-list">
            <h1>项目列表</h1>
            <h3>是否好奇我们在搞什么大事</h3>
            <share theme="outline" size="18" fill="#000" />
            <div class="project-item">
                <div class="project-item-box">
                    <img src="http://beta.awaa.cc/wp-content/uploads/2023/03/synapse.png" alt="">
                    <h3>Synapse</h3>
                    <p>传说Synapse是一块屹立在天空中的移动领域，漂洋在广袤的天空，是天空中的神秘领域，是永远无法到达的“新大陆”。</p>
                </div>
                <div class="project-item-box">
                    <img src="http://beta.awaa.cc/wp-content/uploads/2023/03/synapse.png" alt="">
                    <h3>Synapse</h3>
                    <p>传说Synapse是一块屹立在天空中的移动领域，漂洋在广袤的天空，是天空中的神秘领域，是永远无法到达的“新大陆”。</p>
                </div>
                <div class="project-item-box">
                    <img src="http://beta.awaa.cc/wp-content/uploads/2023/03/synapse.png" alt="">
                    <h3>Synapse</h3>
                    <p>传说Synapse是一块屹立在天空中的移动领域，漂洋在广袤的天空，是天空中的神秘领域，是永远无法到达的“新大陆”。</p>
                </div>
            </div>
        </div>

        <div class="subbanner">
            <h2>内容是有限的 创意是无限的</h2>
            <div class="btngroup">
                <el-button type="primary">返回顶部</el-button>
                <el-button type="primary" plain>来点音乐</el-button>
            </div>
        </div>



    </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/index.css'
import { Share } from '@icon-park/vue'
import '@icon-park/vue/styles/index.css'

export default {
    components: {
        Share
    },
}
</script>

<style lang="less" scoped>
#home {
    .banner {
        // margin-top: 100px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin: 100px auto;

        .nr {

            h1 {
                font-size: 50px;
                margin-bottom: 30px;
            }

            h3 {
                font-size: 30px;
                margin-bottom: 30px;
                font-weight: 500;
            }

            h4 {
                font-size: 25px;
                margin-bottom: 30px;
                font-weight: 500;
            }

            .morebtn {
                font-size: 18px;
            }


        }

        img {
            max-width: 100%;
        }
    }

    .project-list {
        padding: 100px 0;
        border-top: 2px solid #E4E4E4;
        text-align: center;

        h3 {
            display: inline-block;
            font-weight: 500;
        }

        .project-item {
            display: flex;
            justify-content: center;
            margin-top: 50px;

            .project-item-box {
                border: 1px solid #E4E4E4;
                margin: 10px;
                // padding: 15px;
                max-width: 400px;

                img {
                    max-width: 100%;
                    margin: 20px;
                }

                h3 {
                    display: block;
                    font-size: 30px;
                    font-weight: 800;
                }

                p {
                    font-size: 18px;
                    padding: 25px;
                }
            }
        }


    }

    .subbanner {
        background-color: #EDF5FB;
        height: 250px;
        text-align: center;
        padding: 60px;

        h2 {
            font-size: 35px;
            color: #3FADFF;
            margin-bottom: 50px;
        }
    }


}
</style>