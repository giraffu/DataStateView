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
            name: '摄像头一',
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
            name: '摄像头四',
            loc: '前峡13号大桥',
            t1:'720p',
            t2:'60fps',
            t3:'2Mbps',
            t4:'H.265',
            t5:'AVI',
            state: '良好',
          },
        ],
        columns: [
          {
            title: '名称',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: '地点',
            dataIndex: 'loc',
            key: 'loc',
          },
          {
            title: '分辨率',
            dataIndex: 't1',
            key: 't1',
          },
          {
            title: '帧率',
            dataIndex: 't2',
            key: 't2',
          },
          {
            title: '码率',
            dataIndex: 't3',
            key: 't3',
          },
          {
            title: '编码格式',
            dataIndex: 't4',
            key: 't4',
          },
          {
            title: '视频容器格式',
            dataIndex: 't5',
            key: 't5',
          },
          {
            title: '状态',
            dataIndex: 'state',
            key: 'state',
          },
        ],
      };
    },
  };
</script>