<template>
  <div class="w-screen min-h-screen gradient-blue-indigo">
    <nuxt/>
    <Disclaimer/>
  </div>
</template>

<script>
import Disclaimer from "@/components/Disclaimer";

export default {
  components: {
    Disclaimer
  }  
}
</script>
