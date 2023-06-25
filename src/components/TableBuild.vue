<template>
  <a-tabs v-model:activeTabKey="activeTabKey">
      <a-table :dataSource="table1" :columns="columns" />

  </a-tabs>
</template>

<script>
import {ref} from 'vue'
const activeTabKey = ref('1');
export default {
    setup() {
      return {
        table1: [
          {
            key: '1',
            name: 'WYTJ-01标段',
            loc: '前峡8号大桥',
            t1:'720p',
            t2:'60fps',
            t3:'2Mbps',
            t4:'H.265',
            t5:'AVI',
            state: '良好',
          },
          {
            key: '2',
            name: '摄像头二',
            loc: '前峡13号大桥',
            t1:'720p',
            t2:'60fps',
            t3:'2Mbps',
            t4:'H.265',
            t5:'AVI',
            state: '良好',
          },
          {
            key: '2',
            name: '摄像头三',
            loc: '前峡13号大桥',
            t1:'720p',
            t2:'60fps',
            t3:'2Mbps',
            t4:'H.265',
            t5:'AVI',
            state: '良好',
          },
          {
            key: '2',
            name: 'WYTJ-01标段',
            t1:'720p',
            t2:'60fps',
            t3:'2Mbps',
          },
        ],
        columns: [
          {
            title: '名称',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: '进度',
            dataIndex: 't1',
            key: 't1',
          },
          {
            title: '填报日期',
            dataIndex: 't2',
            key: 't2',
          },
          {
            title: '审核日期',
            dataIndex: 't3',
            key: 't3',
          },
        ],
      };
    },
  };
</script>