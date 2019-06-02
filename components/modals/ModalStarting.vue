<template>
  <modal
    name="starting"
    height="auto"
    :adaptive="true"
    :scrollable="true"
    class="fixed">
    <button
      class="modal__close"
      @click="$modal.hide('starting')">
      X
    </button>
    <div class="modal__container">
      <SchemaStarting class="schema__container"/>
      <p class="paragraph__modal">
        Measure your current skin length from the base of the penis to the scar line.
      </p>
    </div>
  </modal>
</template>

<script>
import SchemaStarting from "@/components/schemas/SchemaStarting";

export default {
  components: {
    SchemaStarting
  }  
}
</script>
