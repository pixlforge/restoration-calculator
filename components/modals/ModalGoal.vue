<template>
  <modal
    name="goal"
    height="auto"
    :adaptive="true"
    :scrollable="true"
    class="fixed">
    <button
      class="modal__close"
      @click="$modal.hide('goal')">
      X
    </button>
    <div class="modal__container">
      <SchemaGoal class="schema__container"/>
      <p class="paragraph__modal">
        Measure your current skin length from the base of the penis and add as much length as you'd like to restore.
      </p>
    </div>
  </modal>
</template>

<script>
import SchemaGoal from "@/components/schemas/SchemaGoal";

export default {
  components: {
    SchemaGoal
  }  
}
</script>