<template>
    <Layout>
        <Tabs class-prefix="type" :data-source="recordTypeList" :value.sync="type"/>
        <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
        <div>
            type:{{type}}
            interval:{{interval}}
        </div>
    </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Tabs from '@/components/Money/Tabs.vue';
  import intervalList from '@/constants/intervalList';
  import recordTypeList from '@/constants/recordTypeList';

  @Component({
    components: {Tabs}
  })
  export default class Statistics extends Vue {
    type = '-';
    interval = 'day';
    recordTypeList =recordTypeList;
    intervalList = intervalList;
  }
</script>

<style lang="scss" scoped>
    ::v-deep .type-tabs-item {
        background: white;

        &.selected {
            background: rgb(138, 165, 205);

            &::after {
                display: none;
            }
        }
    }
    ::v-deep .interval-tabs-item{
        height: 48px;
    }
</style>