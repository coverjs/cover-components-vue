<!-- eslint-disable vue/block-lang -->
<script setup lang="tsx">
import { ConfigProvider, Button } from 'ant-design-vue'
import { PageContainer, ProLayout } from '@cover-components-vue/layout'

const headerExtra = [<Button>按钮</Button>, <Button>按钮2</Button>]
</script>

<template>
  <config-provider prefix-cls="coverx">
    <div class="container">
      <pro-layout :footer-render="false">
        <page-container
          :header="{
            title: '标题',
            breadcrumb: {
              items: [
                { path: '/', title: '首页' },
                { path: '/list', title: '列表' },
                { path: '/list/1', title: '详情' },
              ],
            },
            extra: headerExtra,
          }"
        >
          content
        </page-container>
      </pro-layout>
    </div>
  </config-provider>
</template>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100vh;
}
.cover-pro-layout {
  height: 100%;
}
</style>
