<template>
  <main class="container font-body text-white py-132">

    <!-- Title -->
    <h1 class="text-72 font-title font-black text-center leading-tight">
      Foreskin Restoration Calculator
    </h1>

    <div class="max-w-800 mx-auto">

      <!-- About -->
      <section class="my-72">
        <p class="text-20 leading-relaxed text-center">
          This app is still in development, so don't freak out if it's still buggy ;)
        </p>
      </section>

      <!-- Calculator -->
      <section class="my-72">

        <!-- Starting length -->
        <div class="flex flex-col items-center">
          <p class="text-24 text-center mb-20">
            First, measure your current skin length from the base of the penis to the glans, flaccid or erect, and enter it below:
          </p>
          <label
            for="start"
            class="block font-title text-18 font-bold uppercase">
            Starting length
          </label>
          <span class="text-16">
            (cm)
          </span>
          <input
            id="start"
            v-model.number="start"
            type="number"
            min="1"
            max="20"
            step="0.1"
            name="start"
            placeholder="e.g. 5"
            class="text-30 text-gray-900 font-bold text-center rounded-lg outline-none focus:shadow-outline pl-20 pr-5 py-10 mt-10">
        </div>

        <!-- Goal length -->
        <div class="flex flex-col items-center mt-48">
          <p class="text-24 text-center mb-20">
            Then, enter your desired goal length below:
          </p>
          <label
            for="goal"
            class="block font-title text-18 font-bold uppercase">
            Goal length
          </label>
          <span class="text-16">
            (cm)
          </span>
          <input
            id="goal"
            v-model.number="goal"
            type="number"
            min="1"
            max="25"
            step="0.1"
            name="goal"
            placeholder="e.g. 9"
            class="text-30 text-gray-900 font-bold text-center rounded-lg outline-none focus:shadow-outline pl-20 pr-5 py-10 mt-10">
        </div>
      </section>

      <!-- Results -->
      <section
        v-if="years > 0"
        class="text-center my-72">
        <h2 class="font-title text-48 font-extrabold uppercase mb-30">
          We have a result!
        </h2>
        <p class="text-30 mb-30">
          According to the values you entered, it would take
        </p>
        <div class="font-title text-144 font-extrabold leading-none">
          {{ years }}
        </div>
        <div class="font-title text-36 font-bold uppercase">
          {{ pluralizeYears }}
        </div>
        <p class="text-30 mt-30">
          to reach your desired skin length.
        </p>
      </section>

      <section
        v-if="start > 1 && goal > 1 && goal === start"
        class="text-center my-72">
        <h2 class="font-title text-48 font-extrabold uppercase mb-30">
          You're there!
        </h2>
        <p class="text-30 mb-30">
          If your starting and goal length are the same, then you don't need to do anything, which is fine.
        </p>
      </section>

      <section
        v-if="start > 1 && goal > 1 && goal < start"
        class="text-center my-72">
        <h2 class="font-title text-48 font-extrabold uppercase mb-30">
          Oops!
        </h2>
        <p class="text-30 mb-30">
          Your desired goal length should be higher than your starting length.
        </p>
      </section>
    </div>

  </main>
</template>

<script>
export default {
  data() {
    return {
      start: null,
      goal: null
    };
  },
  computed: {
    years() {
      return Number.parseFloat(3.8 * Math.log2(this.goal / this.start)).toPrecision(2);
    },
    pluralizeYears() {
      return this.years <= 1 ? 'year' : 'years';
    }
  }
}
</script>
