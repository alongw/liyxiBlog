<template>
    <div id="articlelist">
        <div class="title">
            <h1>文章索引</h1>
        </div>
        <div class="acticle-block">
            <ul>
                <li>
                    <h3>无线创想新徽标设计规范</h3>
                    <p>因为旧的无限创想徽标已经使用太久了，并且没有明确的设计规范，没有做多尺寸格式，使用不便。 综上原因，趁着重制官 […]</p>
                    <span>3月 8, 2023</span> | <span>Admin</span>
                </li>
                <li>
                    <h3>无线创想新徽标设计规范</h3>
                    <p>因为旧的无限创想徽标已经使用太久了，并且没有明确的设计规范，没有做多尺寸格式，使用不便。 综上原因，趁着重制官 […]</p>
                    <span>3月 8, 2023</span> | <span>Admin</span>
                </li>
                <li>
                    <h3>无线创想新徽标设计规范</h3>
                    <p>因为旧的无限创想徽标已经使用太久了，并且没有明确的设计规范，没有做多尺寸格式，使用不便。 综上原因，趁着重制官 […]</p>
                    <span>3月 8, 2023</span> | <span>Admin</span>
                </li>
                <li>
                    <h3>无线创想新徽标设计规范</h3>
                    <p>因为旧的无限创想徽标已经使用太久了，并且没有明确的设计规范，没有做多尺寸格式，使用不便。 综上原因，趁着重制官 […]</p>
                    <span>3月 8, 2023</span> | <span>Admin</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
#articlelist {
    .title {
        text-align: center;
        margin: 30px;
    }

    .acticle-block {
        display: flex;
        max-width: 700px;
        margin: 0 auto;

        ul {
            li {
                cursor: pointer;
                padding: 15px;
                margin-bottom: 15px;
                transition: all .3s;
                border: 1px solid #fff;

                &:hover {
                    background-color: #fcfcfc;
                    border: 1px solid #E4E4E4;
                }

                h3 {
                    text-decoration: underline;
                    font-weight: 600;
                    margin-bottom: 20px;
                }

                p {
                    font-size: 15px;
                    margin-bottom: 15px;
                }

                span {
                    font-size: 15px;
                    text-decoration: underline;
                    font-style: italic;
                }
            }

        }

    }
}
</style>