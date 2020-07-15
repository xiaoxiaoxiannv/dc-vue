<template>
    <button class="button"
            @click="$emit('click',$event)">
        <slot/>
    </button>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class LabelsButton extends Vue {

  }
</script>

<style lang="scss" scoped>
    .button {
        background: rgb(86, 115, 162);
        color: white;
        border-radius: 4px;
        border: none;
        height: 40px;

        &-wrapper {
            text-align: center;
            padding: 16px;
            margin-top: 28px;
        }
    }
</style>