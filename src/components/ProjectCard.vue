<template lang="html">
  <div class="project-card">
    <h4 class="colored-text">{{ title }}</h4>
    <p class="margin-both-fifteen">{{ description }}</p>
    <!-- <p><span class="tag">Java</span> <span class="tag">SQL</span></p> -->
    <p class="tagp">
      <span v-for="tag in tags" class="tag">{{ tag }}</span>
    </p>
    <p class="colored-text margin-top-twenty"><a :href="link" target="_blank" class="expand-links"><span>View on Github</span> <i class="fas fa-arrow-right"></i></a></p>
    <p class="right"><i class="fas fa-star"></i> <span>{{ stars }}</span> </p>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: [ 'title', 'description', 'tags', 'link', 'stars' ],

}
</script>

<style lang="css">

.project-card{
  padding: 20px;
  border-radius: 10px;
  background: var(--black);
  position: relative;
}
.project-card h4{
  font-size: 20px;
}
.tagp{
  display: flex;
  grid-gap: 10px;
  flex-wrap: wrap;
}
.tag{
  border-radius: 20px;
  background: var(--blue-grey);
  padding: 0px 11px;
  font-size: 14px;
}
.expand-links *{
  transition: all 0.3s ease;
}
.expand-links span{
  border-bottom: 1px solid transparent;
}
.expand-links:hover span{
  border-color: var(--main-turquoise);
}
.expand-links i{
  position: relative;
  right: 0;
}
.expand-links:hover i{
  right: -8px;
}
.right{
  position: absolute;
  right: 20px;
  bottom: 20px;
}

@media screen and (max-width: 992px){
  .project-card h4{
    font-size: 19px;
  }
}
@media screen and (max-width: 768px) {
  .project-card{
    background: var(--black-light);
  }
}
</style>
