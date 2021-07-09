<template lang="html">
  <div id="router-div">
    <div id="content-box">
      <div id="skills-div-main">
        <h2 class="margin-top-forty">My tech stack - </h2>
        <div id="skills-div" class="left-on-small">
          <SkillComponent v-for="skill in skills" :name="skill.name" :level="skill.level" />
        </div>
        <h2 class="margin-top-sixty">My Strengths - </h2>
        <div id="strengths-div" class="left-on-small">
          <ol>
            <li>
              <p><span class="colored-text">Perfectionist ~ </span> <br> I like to make things perfect. </p>
            </li>
            <li>
              <p><span class="colored-text">Minimalist and Functional ~ </span> <br> I make things minimal. </p>
            </li>
            <li>
              <p><span class="colored-text">The "Back-End" Guy ~ </span> <br> I am good at the "functioning" part of a project. </p>
            </li>
          </ol>
        </div>
      </div>
      <footer id="mobile-footer">
        <a href="#" target="_blank" class="mobile-footer-links"><i class="fab fa-github"></i></a>
        <a href="#" target="_blank" class="mobile-footer-links"><i class="fab fa-twitter"></i></a>
        <a href="#" target="_blank" class="mobile-footer-links"><i class="fab fa-reddit"></i></a>
      </footer>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import SkillComponent from '@/components/SkillComponent.vue';

export default {
  name: 'Skills',
  components: {
    SkillComponent,
  },
  setup(){
    const skills = ref([
      {name: 'Java', level: 4},
      {name: 'JavaScript', level: 3},
      {name: 'HTML', level: 4},
      {name: 'CSS', level: 2},
      {name: 'PHP', level: 3},
      {name: 'Solidity', level: 1},
      {name: 'MySQL', level: 4},
    ]);
    return { skills }
  }
}
</script>

<style lang="css">

#skills-div{
  margin-top: 24px;
  display: grid;
  grid-gap: 12px;
}
.skill-p{
  display: grid;
  grid-template-columns: 110px auto;
  grid-gap: 40px;
}
.skill-bar-span{
  display: flex;
  align-items: center;
}
.skill-bar{
  background: var(--black);
  display: inline-block;
  flex: 1;
  max-width: 70px;
  height: 10px;
  margin: 0 4px;
  transform: skewX(-40deg);
}
.skill-bar.filled{
  background: var(--main-turquoise);
}
ol{
  margin: 24px 0;
}
ol li{
  margin-bottom: 12px;
}
@media screen and (max-width: 768px) {
  .skill-bar{
    background: var(--black-light);
  }
}

</style>
