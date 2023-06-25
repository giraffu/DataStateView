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
            name: '人车定位一',
            loc: '天山胜利隧道出口端',
            t1:'3',
            t2:'45',
          },
          {
            key: '2',
            name: '人车定位二',
            loc: '天山胜利隧道入口端',
            t1:'5',
            t2:'88',

          },
          {
            key: '3',
            name: '人车定位三',
            loc: '天山隧道出口端',
            t1:'1',
            t2:'35',
          },
          {
            key: '4',
            name: '人车定位四',
            loc: '胜利隧道出口端',
            t1:'5',
            t2:'45',
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
            title: '人员总计',
            dataIndex: 't1',
            key: 't1',
          },
          {
            title: '车辆总计',
            dataIndex: 't2',
            key: 't2',
          },

        ],
      };
    },
  };
</script>