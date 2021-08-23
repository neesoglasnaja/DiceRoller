<template>
  <q-page class="column" style="height: 100vh">
    <div class="col q-pa-lg flex flex-center">
      <dices :dices="dices" />
    </div>
    <div class="flex col-auto q-pa-md row q-gutter-sm">
      <q-input v-model.number="counter" type="number" rounded outlined style="max-width: 150px"
        align="center" class="col">
        <template v-slot:prepend>
          <q-btn @click="sub()" label="-" :disabled="counter<=1" filled rounded color="primary"/>
        </template>
        <template v-slot:append>
          <q-btn @click="add()" label="+" filled rounded color="primary"/>
        </template>
      </q-input>
      <q-btn @click="roll()" filled color="secondary" label="Roll dice" class="flex col" />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { DiceRoll } from 'rpg-dice-roller';

import Dices from 'components/Dices.vue';

export default defineComponent({
  name: 'PageIndex',
  components: {
    Dices,
  },
  data() {
    return {
      counter: parseInt(localStorage.getItem('diceRoller__dicesCounter'), 10) || 10,
      dices: [],
    };
  },
  watch: {
    counter(newValue) {
      localStorage.setItem('diceRoller__dicesCounter', newValue);
    },
  },
  methods: {
    sub() {
      this.counter -= 1;
    },
    add() {
      this.counter += 1;
    },
    roll() {
      const roll = new DiceRoll(`${this.counter}d6`);
      this.dices = roll.rolls[0].rolls.map((result) => result.value).sort().reverse();
      if (navigator && navigator.vibrate) {
        navigator.vibrate(200);
      }
    },
  },
});
</script>
