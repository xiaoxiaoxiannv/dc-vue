<template>
    <Layout class-prefix="layout">
        <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
        <div class="notes">
            <FormItem filed-name="备注"
                      placeholder="在这里输入备注"
                      @update:value="onUpdateNotes"/>

        </div>
        <Tags/>
        <Types :value.sync="record.type"/>
    </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import FormItem from '@/components/Money/FormItem.vue';
  import Tags from '@/components/Money/Tags.vue';
  import Types from '@/components/Money/Types.vue';
  import {Component} from 'vue-property-decorator';

  @Component({
    components: {Types, Tags, FormItem, NumberPad}
  })
  export default class Money extends Vue {
    get recordList() {
      return this.$store.state.recordList;
    }

    record: RecordItem = {
      type: '-', tags: [], notes: '', amount: 0
    };

    created() {
      this.$store.commit('fetchRecord');
    }

    onUpdateNotes(value: string) {
      this.record.notes = value;
    }

    saveRecord() {
      this.$store.commit('createRecord', this.record);
    }
  }
</script>

<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }

    .notes {
        background: rgb(245, 246, 248);
        padding: 12px 0;
    }
</style>