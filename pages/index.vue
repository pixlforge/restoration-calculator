<template>
  <main class="container__main container">

    <!-- Title -->
    <h1 class="title__main">
      Foreskin Restoration Calculator
    </h1>

    <div class="container__inner">

      <!-- About -->
      <section class="section__default">
        <p class="paragraph__default">
          This app was made to help people restoring their foreskins estimate how long their journey is going to take. It uses a formula developed by <em>Reddit</em> user
          <a
            href="https://www.reddit.com/user/Icerest/"
            target="_blank"
            rel="noopener noreferrer"
            class="paragraph__link">
            /u/Icerest</a>.
        </p>
      </section>

      <!-- Calculator -->
      <section class="section__default">

        <h2 class="title__default">
          Let's find out
        </h2>

        <!-- Starting length -->
        <div class="calculator__section">
          <div class="calculator__step">
            1
          </div>
          <p class="calculator__paragraph">
            First, measure your current skin length from the base of the penis to the scar line, flaccid or erect, and enter it below:
          </p>
          <IconQuestionCircle
            class="icon__default"
            @click.native="openStartingModal"/>
        </div>

        <div class="calculator__group">
          <label
            for="start"
            class="calculator__label">
            Starting length
          </label>
          <span class="calculator__units">
            (cm / in)
          </span>
          <input
            id="start"
            v-model.number="start"
            type="number"
            min="1"
            max="20"
            step="0.1"
            name="start"
            placeholder="5"
            class="calculator__input">
        </div>

        <!-- Goal length -->
        <div class="calculator__section">
          <div class="calculator__step">
            2
          </div>
          <p class="calculator__paragraph">
            Then, measure your desired goal length and enter it below:
          </p>
          <IconQuestionCircle
            class="icon__default"
            @click.native="openGoalModal"/>
        </div>

        <div class="calculator__group">
          <label
            for="goal"
            class="calculator__label">
            Goal length
          </label>
          <span class="calculator__units">
            (cm / in)
          </span>
          <input
            id="goal"
            v-model.number="goal"
            type="number"
            min="1"
            max="25"
            step="0.1"
            name="goal"
            placeholder="9"
            class="calculator__input">
        </div>
      </section>

      <!-- Commitment -->
      <section class="section__default">
        <div class="calculator__section">
          <div class="calculator__step">
            3
          </div>
          <p class="calculator__paragraph">
            Finally, estimate your growth rate by choosing your level of commitment to tugging:
          </p>
        </div>

        <div class="calculator__button-group-wrapper">

          <div class="calculator__button-group">
            <button
              :class="selectedOption.id === 1 ? 'calculator__button--active' : ''"
              class="calculator__button"
              @click="selectOption(1)">
              <div class="calculator__button-label">
                Not that committed
              </div>
              <div class="calculator__button-info">
                Tugs substandard amount. Estimated to have slower than the average growth rate.
              </div>
            </button>
          </div>

          <div class="calculator__button-group">
            <button
              :class="selectedOption.id === 2 ? 'calculator__button--active' : ''"
              class="calculator__button"
              @click="selectOption(2)">
              <div class="calculator__button-label">
                Committed
              </div>
              <div class="calculator__button-info">
                Tugs moderate amount. Estimated to have the average growth rate.
              </div>
            </button>
          </div>

          <div class="calculator__button-group">
            <button
              :class="selectedOption.id === 3 ? 'calculator__button--active' : ''"
              class="calculator__button"
              @click="selectOption(3)">
              <div class="calculator__button-label">
                Very committed
              </div>
              <div class="calculator__button-info">
                Tugs superior amount. Estimated to have faster than the average growth rate.
              </div>
            </button>
          </div>

        </div>
      </section>

      <!-- Results -->
      <section
        v-if="positive"
        class="section__default">
        <h2 class="title__default">
          We have a result!
        </h2>
        <p class="paragraph__result">
          According to the values you entered, it would take
        </p>
        <div class="calculator__result">
          {{ years }}
        </div>
        <div class="calculator__years">
          {{ pluralizeYears }}
        </div>
        <p class="paragraph__result">
          to reach your desired skin length.
        </p>
      </section>

      <section
        v-if="equal"
        class="section__default">
        <h2 class="title__default">
          You're there!
        </h2>
        <p class="paragraph__error">
          If your starting and goal length are the same, then you don't need to do anything, which is fine.
        </p>
      </section>

      <section
        v-if="negative"
        class="section__default">
        <h2 class="title__default">
          Oops!
        </h2>
        <p class="paragraph__error">
          Your desired goal length should be higher than your starting length.
        </p>
      </section>

      <!-- FAQ -->
      <section class="section__default">
        <h2 class="title__default">
          FAQ
        </h2>

        <ul class="faq__list">
          <li class="faq__list-item">
            <p class="faq__question">
              How can I distinguish between inner and outer skin in the calculator?
            </p>
            <p class="faq__answer">
              To get estimate for both inner and outer the calculator needs to be run separately for outer skin and inner skin.
            </p>
          </li>
          <li class="faq__list-item">
            <p class="faq__question">
              Does this app gather any user information? What about my privacy?
            </p>
            <p class="faq__answer">
              This app does not keep track of any user information except for Google Analytics.
            </p>
          </li>
        </ul>
      </section>

    </div>

    <ModalStarting/>
    <ModalGoal/>
  </main>
</template>

<script>
import ModalStarting from '@/components/modals/ModalStarting';
import ModalGoal from '@/components/modals/ModalGoal';
import IconQuestionCircle from '@/components/icons/IconQuestionCircle';

export default {
  components: {
    IconQuestionCircle,
    ModalStarting,
    ModalGoal
  },
  data() {
    return {
      start: null,
      goal: null,
      selectedOption: {
        id: null,
        value: null
      },
      options: [
        { id: 1, value: 5 },
        { id: 2, value: 3.8 },
        { id: 3, value: 2.8 }
      ]
    };
  },
  computed: {
    years() {
      return Number.parseFloat(this.selectedOption.value * Math.log2(this.goal / this.start)).toPrecision(2);
    },
    pluralizeYears() {
      return this.years <= 1 ? 'year' : 'years';
    },
    positive() {
      return this.years > 0 && this.years !== 'Infinity';
    },
    equal() {
      return this.start > 1 && this.goal > 1 && this.goal === this.start;
    },
    negative() {
      return this.start > 1 && this.goal > 1 && this.goal < this.start;
    }
  },
  methods: {
    openStartingModal() {
      this.$modal.show('starting');
    },
    openGoalModal() {
      this.$modal.show('goal');
    },
    selectOption(value) {
      this.selectedOption = this.options.find(option => {
        return option.id === value;
      });
    }
  }
}
</script>
