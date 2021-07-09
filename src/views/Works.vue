<template lang="html">
  <div id="router-div">
    <div id="content-box">
      <div id="alt-nav-div" class="margin-top-forty">
        <h1>Hello, I'm Siddhesh Hadkar</h1>
        <div class="margin-top-big">
          <p>I am an <span class="colored-text">Android Developer</span> and currently an engineering student.
            I like to develop <span class="colored-text">minimal and efficient apps.</span>
            I started out as a core java dev, but my interest grew in the dynamics of android development. <br>
            Apart from development, I love to play video games... A LOT!
          </p>
        </div>
      </div>
      <h2 class="margin-top-forty">My Projects/Works - </h2>
      <div id="projects-div" class="left-on-small margin-top-twenty">
        <ProjectCard v-for="project in projects" :title="project.title" :description="project.description" :tags="project.tags" :link="project.link" :stars="project.stars" />
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
import ProjectCard from '@/components/ProjectCard.vue';
import { ref } from 'vue';
export default {
  name: 'Works',
  components: {
    ProjectCard,
  },
  setup(){
    const projects = ref([
      { id: 1, title: "Farmer's Portal", description: 'Portal for farmers to sell their produce at a better rate', tags: [ 'Java', 'SQL' ], link: 'https://github.com/siddheshhadkar/farmers-portal', stars: 5 },
      { id: 2, title: "E-waste Management Using Block-chain", description: 'Ethereum Blockchain based E-Waste Management System', tags: [ 'JavaScript', 'HTML', 'CSS', 'Solidity' ], link: 'https://github.com/siddheshhadkar/e-waste-management-using-blockchain', stars: 3 },
      { id: 3, title: "Car Rental Management System", description: 'This is a car rental management system project for an imaginary car-rental company called SSSG. It was built using HTML/CSS/JS and PHP.', tags: [ 'PHP', 'CSS', 'JavaScript', 'TSQL' ], link: 'https://github.com/siddheshhadkar/Car-Rental-Management-System', stars: 2 },
      { id: 4, title: "Weather App", description: 'Android app providing weather updates using OpenWeatherMap API', tags: [ 'Java' ], link: 'https://github.com/siddheshhadkar/weather-app', stars: 0 },
      { id: 5, title: "Basic Text Editor", description: 'This is a basic text-editor built using JAVA. It covers most of the basic features provided by any simple text-editor.', tags: [ 'Java' ], link: 'https://github.com/siddheshhadkar/basic-text-editor', stars: 3 },
    ]);

    return { projects }
  }
}
</script>

<style lang="css">
#projects-div{
  display: flex;
  flex-direction: column;
  grid-gap: 15px;
}
#alt-nav-div{
  display: none;
}

@media screen and (max-width: 768px){
  #alt-nav-div{
    display: block;
  }
  .margin-top-big{
    margin-top: 25px;
  }
}
</style>
