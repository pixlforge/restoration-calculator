<template>
  <main class="container font-body text-white py-132">

    <!-- Title -->
    <h1 class="text-72 font-title font-black text-center">
      Restoration Calculator
    </h1>

    <!-- About -->
    <section class="max-w-800 mx-auto my-72">
      <p class="text-20 leading-relaxed text-center">
        This app is still in development, so don't freak out if it's still buggy ;)
      </p>
    </section>

    <!-- Calculator -->
    <section class="max-w-800 flex mx-auto my-72">

      <!-- Starting length -->
      <div class="px-36">
        <label
          for="start"
          class="block font-title text-18 font-bold uppercase">
          Starting length
          <small class="font-normal normal-case ml-5">
            (cm)
          </small>
        </label>
        <input
          id="start"
          v-model.number="start"
          type="number"
          name="start"
          placeholder="e.g. 5"
          class="text-30 text-gray-900 font-bold rounded-lg outline-none focus:shadow-outline pl-20 py-10 mt-10">
      </div>

      <!-- Goal length -->
      <div class="px-36">
        <label
          for="goal"
          class="block font-title text-18 font-bold uppercase">
          Goal length
          <small class="font-normal normal-case ml-5">
            (cm)
          </small>
        </label>
        <input
          id="goal"
          v-model.number="goal"
          type="number"
          name="goal"
          placeholder="e.g. 9"
          class="text-30 text-gray-900 font-bold rounded-lg outline-none focus:shadow-outline pl-20 py-10 mt-10">
      </div>
    </section>

    <!-- Results -->
    <section
      v-if="years"
      class="text-center my-72">
      <p class="text-24 mb-30">
        According to the values you entered, it would take
      </p>
      <div class="font-title text-144 font-extrabold leading-none">
        {{ years }}
      </div>
      <div class="font-title text-36 font-bold uppercase">
        {{ pluralizeYears }}
      </div>
      <p class="text-24 mt-30">
        to reach your desired skin length.
      </p>
    </section>

  </main>
</template>

<script>
export default {
  data() {
    return {
      start: 5,
      goal: 9
    };
  },
  computed: {
    years() {
      return this.start + this.goal;
    },
    pluralizeYears() {
      return this.years <= 1 ? 'year' : 'years';
    }
  }
}
</script>
