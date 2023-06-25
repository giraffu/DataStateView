<template>
  <a-tabs v-model:activeTabKey="activeTabKey">
    <a-tab-pane key="1" tab="WYTJ-01标段">
      <a-table :dataSource="table1" :columns="columns" />
    </a-tab-pane>
    <a-tab-pane key="2" tab="WYTJ-02标段" force-render>
      <a-table :dataSource="table1" :columns="columns" />
    </a-tab-pane>
    <a-tab-pane key="3" tab="WYTJ-03标段">
      <a-table :dataSource="table1" :columns="columns" />
    </a-tab-pane>
    <a-tab-pane key="4" tab="WYTJ-04标段">
      <a-table :dataSource="table1" :columns="columns" />
    </a-tab-pane>
    <a-tab-pane key="5" tab="WYTJ-05标段">
      <a-table :dataSource="table1" :columns="columns" />
    </a-tab-pane>
    <a-tab-pane key="6" tab="WYTJ-06标段">
      <a-table :dataSource="table1" :columns="columns" />
    </a-tab-pane>
    <a-tab-pane key="7" tab="WYTJ-07标段">
      <a-table :dataSource="table1" :columns="columns" />
    </a-tab-pane>
    <a-tab-pane key="8" tab="WYTJ-08标段">
      <a-table :dataSource="table1" :columns="columns" />
    </a-tab-pane>
    <a-tab-pane key="9" tab="WYTJ-09标段">
      <a-table :dataSource="table1" :columns="columns" />
    </a-tab-pane>
    <a-tab-pane key="10" tab="WYTJ-10标段">
      <a-table :dataSource="table1" :columns="columns" />
    </a-tab-pane>
    <a-tab-pane key="11" tab="WYTJ-11标段">
      <a-table :dataSource="table1" :columns="columns" />
    </a-tab-pane>
    <a-tab-pane key="12" tab="WYTJ-12标段">
      <a-table :dataSource="table1" :columns="columns" />
    </a-tab-pane>
    <a-tab-pane key="13" tab="WYTJ-13标段">
      <a-table :dataSource="table1" :columns="columns" />
    </a-tab-pane>
    <a-tab-pane key="14" tab="WYJD-01标段">
      <a-table :dataSource="table1" :columns="columns" />
    </a-tab-pane>
    <a-tab-pane key="15" tab="WYWD-01标段">
      <a-table :dataSource="table1" :columns="columns" />
    </a-tab-pane>
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
            name: 'THDG18230',
            loc: '天山胜利隧道出口端',
            t1:'停机',
            t2:'正常',
            t3:'30%',
            t4:'2023-3-4',
          },
          {
            key: '2',
            name: 'THDG18430',
            loc: '天山胜利隧道入口端',
            t1:'停机',
            t2:'正常',
            t3:'20%',
            t4:'2023-3-4',
          },
          {
            key: '3',
            name: 'THDG15423',
            loc: '胜利隧道出口端',
            t1:'停机',
            t2:'正常',
            t3:'50%',
            t4:'2023-3-4',
          },
          {
            key: '4',
            name: 'THDG14543',
            loc: '天山隧道出口端',
            t1:'掘进',
            t2:'正常',
            t3:'10%',
            t4:'2023-3-4',
          },
        ],
        columns: [
          {
            title: '设备编号',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: '地点',
            dataIndex: 'loc',
            key: 'loc',
          },
          {
            title: '设备状态',
            dataIndex: 't1',
            key: 't1',
          },
          {
            title: '通讯状态',
            dataIndex: 't2',
            key: 't2',
          },
          {
            title: '进度',
            dataIndex: 't3',
            key: 't3',
          },
          {
            title: '采集时间',
            dataIndex: 't4',
            key: 't4',
          },

        ],
      };
    },
  };
</script>