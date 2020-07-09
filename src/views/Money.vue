<template>
    <div>
        <Layout class-prefix="layout">
            <NumberPad/>
            <Notes/>
            <Tags/>
            <Types/>
        </Layout>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Notes from '@/components/Money/Notes.vue';
  import Tags from '@/components/Money/Tags.vue';
  import Types from '@/components/Money/Types.vue';

  @Component({
    components: {Types, Tags, Notes, NumberPad}
  })
  export default class Money extends Vue {

  }
</script>

<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }
</style>