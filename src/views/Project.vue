<template>
    <div id="project">
        <div class="title">
            <h1>项目列表</h1>
        </div>
        <ul>
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
                <div class="project-item-box">
                    <img src="http://beta.awaa.cc/wp-content/uploads/2023/03/synapse.png" alt="">
                    <h3>Synapse</h3>
                    <p>传说Synapse是一块屹立在天空中的移动领域，漂洋在广袤的天空，是天空中的神秘领域，是永远无法到达的“新大陆”。</p>
                </div>
            </div>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
#project {
    margin-top: 50px;

    .title {
        text-align: center;
    }

    ul {
        padding: 100px 0;
        text-align: center;

        .project-item {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;

            .project-item-box {
                border: 1px solid #E4E4E4;
                margin: 20px 5px;
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
}
</style>