<template>
    <Layout class-prefix="layout">
        <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
        <div class="notes">
            <FormItem filed-name="备注"
                      placeholder="在这里输入备注"
                      :value.sync="record.notes"
            />
        </div>
        <div class="createdAt">
            <FormItem filed-name="日期"
                      type="date"
                      placeholder="在这里输入日期"
                      :value.sync="record.createdAt"
            />
        </div>
        <Tags @update:value="record.tags = $event"/>
        <Tabs :data-source="recordTypeList"
              :value.sync="record.type"/>
    </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import FormItem from '@/components/Money/FormItem.vue';
  import Tags from '@/components/Money/Tags.vue';
  import {Component} from 'vue-property-decorator';
  import recordTypeList from '@/constants/recordTypeList';
  import Tabs from '@/components/Money/Tabs.vue';

  @Component({
    components: {Tabs, Tags, FormItem, NumberPad}
  })
  export default class Money extends Vue {
    get recordList() {
      return this.$store.state.recordList;
    }

    recordTypeList = recordTypeList;

    record: RecordItem = {
      type: '-', tags: [], notes: '', amount: 0,createdAt: new Date().toISOString()
    };

    created() {
      this.$store.commit('fetchRecord');
    }

    onUpdateNotes(value: string) {
      this.record.notes = value;
    }

    saveRecord() {
      this.$store.commit('createRecord', this.record);
      if (this.$store.state.createRecordError === null) {
        window.alert('保存成功');
        this.record.notes = '';
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";

    ::v-deep .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }

    .notes {
        background: rgb(245, 246, 248);
    }
    .createdAt{
        background: rgb(245, 246, 248);
    }
</style>