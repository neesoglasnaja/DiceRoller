<template>
  <div :style="{ color: diceValue.color}" class="dice" >{{diceValue.dice}} </div>
</template>

<style lang="css">
  .dice {
    color: pink;
    font-size: 120px;
    line-height: 60px;
    list-style: none;
    display: inline-block;
  }
</style>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Dice',
  props: {
    dice: {
      type: Number,
      required: true,
    },
  },
  computed: {
    diceValue() {
      const dices = {
        1: {
          dice: '⚀',
          color: 'red',
        },
        2: {
          dice: '⚁',
          color: 'grey',
        },
        3: {
          dice: '⚂',
          color: 'grey',
        },
        4: {
          dice: '⚃',
          color: 'grey',
        },
        5: {
          dice: '⚄',
          color: 'blue',
        },
        6: {
          dice: '⚅',
          color: 'green',
        },
      };

      return dices[this.dice];
    },
  },
});
</script>
