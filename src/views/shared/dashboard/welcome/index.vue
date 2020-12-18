<template>
  <div>
    <div class="box">
      <img src="~@/assets/analysis.svg">
      <a-descriptions title="系统信息" bordered>
        <a-descriptions-item label="IP" key="IP">
          {{ userInfo.IP }}
        </a-descriptions-item>
        <a-descriptions-item v-for="(value, key) in browserInfo" :label="key" :key="key">
          {{ value }}
        </a-descriptions-item>
      </a-descriptions>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import {Descriptions, Badge} from 'ant-design-vue'
import {SettingOutlined, EditOutlined, EllipsisOutlined} from '@ant-design/icons-vue';
import BrowserType from '@/utils/browser-type'
import {useStore} from 'vuex'
// import performanceMonitor from '@/utils/performanceMonitor'

export default defineComponent({
  name: 'welcome',
  components: {
    [Badge.name]: Badge,
    [Descriptions.name]: Descriptions,
    [Descriptions.Item.name]: Descriptions.Item,
    SettingOutlined,
    EditOutlined,
    EllipsisOutlined,
  },
  setup() {
    const userInfo = useStore().getters.userInfo
    // 获取浏览器信息
    const browserInfo = ref(BrowserType("zh-cn"))

    // console.log(performanceMonitor.getPerformanceData(), 'performanceMonitor')

    return {
      userInfo,
      browserInfo
    }
  }
})
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: calc(100vh - 280px);
  display: flex;
  flex-direction: column;

  img {
    flex: 1;
  }

  .ant-form {
    flex: 2;
  }
}
</style>
