<template>
  <section>
    <p>Have a good {{ indexToDay[today] }} :)</p>
  </section>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      today: null,
      indexToDay: {
        0: 'Sunday',
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday',
      }
    }
  },
  created() {
    const d = new Date();
    this.today = d.getDay();
  }
}
</script>

<style scoped>
section {
  text-align: center;
  padding: 1.5rem;
}
</style>