<template>
    <div>
        <Layout class-prefix="layout">
            <div class="numberPad">
                <div class="output">100</div>
                <div class="buttons">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>删除</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>清空</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button class="ok">OK</button>
                    <button class="zero">0</button>
                    <button>.</button>
                </div>
            </div>
            <div>
                <label class="notes">
                    <span class="name">备注</span>
                    <input type="text" placeholder="在这里输入备注">
                </label>
            </div>
            <div class="tags">
                <div class="new">
                    <button>新增标签</button>
                </div>
                <ul class="current">
                    <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                    <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                    <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                    <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                </ul>
            </div>
            <div>
                <ul class="types">
                    <li class="selected">支出</li>
                    <li>收入</li>
                </ul>
            </div>
        </Layout>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component({})
  export default class Money extends Vue {

  }
</script>

<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }
</style>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";

    .numberPad {
        .output {
            @extend %innerShadow;
            font-size: 36px;
            font-family: Consolas, monospace;
            padding: 9px 16px;
            text-align: right;
        }

        .buttons {
            @extend %clearFix;

            > button {
                width: 25%;
                height: 64px;
                float: left;
                border: none;
                background: transparent;

                &.ok {
                    height: 64*2px;
                    float: right;
                }

                &.zero {
                    width: 25*2%;
                }

                &:nth-child(1) {
                    background: rgb(217, 224, 235);
                }

                &:nth-child(2), &:nth-child(5) {
                    background: rgb(190, 202, 221);
                }

                &:nth-child(3), &:nth-child(6), &:nth-child(9) {
                    background: rgb(164, 180, 207);
                }

                &:nth-child(4), &:nth-child(7), &:nth-child(10), &:nth-child(13) {
                    background: rgb(137, 159, 193);
                }

                &:nth-child(8), &:nth-child(11), &:nth-child(13) {
                    background: rgb(110, 137, 179);
                }

                &:nth-child(12) {
                    background: rgb(77, 104, 146);
                }

                &:nth-child(14) {
                    background: rgb(86, 115, 162);
                }
            }
        }
    }

    .types {
        background: rgb(138, 165, 205);
        display: flex;
        text-align: center;
        font-size: 24px;

        > li {
            width: 50%;
            height: 64px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;

            &.selected:after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 2px;
                background: #333;
            }
        }
    }

    .notes {
        font-size: 14px;
        background: rgb(245, 246, 248);
        padding-left: 16px;
        display: flex;
        align-items: center;

        .name {
            padding-right: 16px;
        }

        input {
            height: 64px;
            flex-grow: 1;
            background: transparent;
            border: none;
            padding-right: 16px;
        }
    }

    .tags {
        font-size: 14px;
        padding: 16px;
        flex-grow: 1;
        display: flex;
        flex-direction: column-reverse;

        > .current {
            display: flex;
            flex-wrap: wrap;

            > li {
                background: rgb(168, 189, 220);
                height: 24px;
                line-height: 24px;
                border-radius: 12px;
                padding: 0 16px;
                margin-right: 12px;
                margin-top: 4px;
            }
        }

        > .new {
            padding-top: 16px;

            button {
                background: transparent;
                border: none;
                color: #999;
                border-bottom: 1px solid;
                padding: 0 4px;
            }
        }
    }
</style>