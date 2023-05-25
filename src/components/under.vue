<template>
  <div id="under">
    <div class="aboutwe">
      <ul>
        <li>
          <h4>关于我们</h4>
          <h1>LIYXI Team</h1>
        </li>
        <li>
          <h4>联系方式</h4>
          <p>
            <telegram theme="outline" size="24" fill="#000" /><a
              href="https://proxy.gfwin.icu/alongw.t.me/"
              target="_blank"
              >t.me/alongw</a
            >
          </p>
          <p>
            <mail theme="outline" size="24" fill="#000" />
            <a href="mailto:alongw@alongw.cn" target="_blank">alongw@alongw.cn</a>
          </p>
        </li>
        <li>
          <h4>友情链接</h4>
          <ul>
            <li>
              <a href="https://www.alongw.cn" target="_blank">阿龙的笔记</a>
            </li>
            <li>
              <a href="https://cloud.alongw.cn/" target="_blank">幻昼云存储</a>
            </li>
            <li>
              <a href="https://docs.liyxi.com" target="_blank">LIYXI Docs</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <div class="cy">
      Powered By <a href="https://team.liyxi.com" target="_blank">liyxi</a> | Copyright ©
      2023 <a href="https://www.alongw.cn" target="_blank">ALONGW</a> All Rights Reserved
      | <a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备2022046081号</a>
    </div>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/index.css'
import { Telegram, Mail } from '@icon-park/vue'
import '@icon-park/vue/styles/index.css'

export default {
  components: {
    Telegram,
    Mail
  }
}
</script>

<style lang="less" scoped>
.aboutwe {
  ul {
    display: flex;
    margin: 50px 0;
    justify-content: space-around;

    li {
      &:nth-child(1) {
        h1 {
          color: #0090ff;
        }
      }

      &:nth-child(2) {
        p {
          display: flex;
          margin: 15px;

          a {
            margin-left: 15px;

            &:hover {
              color: lightpink;
              text-decoration: underline;
            }
          }
        }
      }

      &:nth-child(3) {
        ul {
          display: flex;
          flex-direction: column;
          margin: 0;
          padding: 0;

          li {
            margin-top: 5px;

            a {
              &:hover {
                color: lightpink;
                text-decoration: underline;
              }
            }
          }
        }
      }
    }
  }
}

.cy {
  text-align: center;
  margin: 15px;

  a {
    &:hover {
      color: lightpink;
      text-decoration: underline;
    }
  }
}
</style>
