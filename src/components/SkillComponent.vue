<template lang="html">
  <p class="skill-p">
    <span>{{ name }}</span>
    <span class="skill-bar-span">
      <span class="skill-bar" v-for="i in 5" :class="{filled: i <= level}"></span>
    </span>
  </p>
</template>

<script>
export default {
  name: 'SkillComponent',
  props: [ 'name', 'level' ],
}
</script>

<style lang="css">
</style>
