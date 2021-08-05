<template>
      <dice  v-for="dice in dices" :key="dice.id" :dice="dice"/>
</template>

<script>
import { defineComponent } from 'vue';

import Dice from 'components/Dice.vue';

export default defineComponent({
  name: 'Dices',
  components: {
    Dice,
  },
  props: {
    dices: {
      type: Array,
      required: true,
    },
  },
});
</script>
