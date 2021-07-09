<template>
  <div class="container">
    <main id="main-div">
      <div id="nav-div">
        <h1>Hello, I'm Siddhesh Hadkar</h1>
        <div class="margin-top-big">
          <p>I am an <span class="colored-text">Android Developer</span> and currently an engineering student.
            I like to develop <span class="colored-text">minimal and efficient apps.</span>
            I started out as a core java dev, but my interest grew in the dynamics of android development. <br>
            Apart from development, I love to play video games... A LOT!
          </p>
        </div>
        <nav id="desktop-nav">
          <router-link :to="{ name: 'Works', params: {} }">01 <span class="nav-lines"></span> WORKS</router-link><br>
          <router-link :to="{ name: 'Skills', params: {} }">02 <span class="nav-lines"></span> SKILLS</router-link><br>
          <router-link :to="{ name: 'Contact', params: {} }">03 <span class="nav-lines"></span> CONTACT</router-link>
        </nav>
        <footer id="desktop-footer">
          <a href="#" target="_blank" class="desktop-footer-links"><i class="fab fa-github"></i><span>Github</span></a>
          <a href="#" target="_blank" class="desktop-footer-links"><i class="fab fa-twitter"></i><span>Twitter</span></a>
          <a href="#" target="_blank" class="desktop-footer-links"><i class="fab fa-reddit"></i><span>Reddit</span></a>
        </footer>
      </div>
      <div id="mobile-nav-div">
        <router-link :to="{ name: 'Works', params: {} }">WORKS</router-link>
        <router-link :to="{ name: 'Skills', params: {} }">SKILLS</router-link>
        <router-link :to="{ name: 'Contact', params: {} }">CONTACT</router-link>
      </div>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<style>

:root{
  --black: #0b132b;
  --black-light: #1c2541;
  --blue-grey: #3a506b;
  --turquoise-dark: #5bc0be;
  --main-turquoise: #6fffe9;
  --white: #fffafb;
  --light: #d0d9d7;
  scroll-behavior: smooth;
}
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: var(--light);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #0F1B40;
}
::-webkit-scrollbar-thumb:hover{
  background: var(--black);
}

/* all margins */
.margin-top-big{
  margin-top: 30px;
}
.margin-right-big{

}
.margin-top-forty, .margin-top-forty-special{
  margin-top: 40px;
}
.margin-top-sixty{
  margin-top: 60px;
}
.margin-top-thirty{
  margin-top: 30px;
}
.margin-top-twenty{
  margin-top: 20px;
}
p.margin-both-fifteen{
  margin: 12px 0;
}
p.margin-top-twenty{
  margin-top: 15px;
}

body{
  margin: 0;
  padding: 0;
  background: var(--black);
  color: var(--light);
  font-family: 'Roboto Mono', monospace;
  font-size: 16px;
}
h1, h2, h3, h4, h5, h6, p{
  margin: 0;
}
a{
  color: inherit;
  text-decoration: none;
}
a.router-link-exact-active{
  color: var(--main-turquoise);
}
#main-div{
  display: flex;
  grid-gap: 110px;
  min-height: 100vh;
  align-items: center;
}
#nav-div, #router-div{
  flex: 1;
  box-sizing: border-box;
  max-height: 662px;
  height: 90vh;
}

#nav-div{
  max-width: 550px;
  padding-bottom: 40px;
  position: relative;
}
#router-div{
  border-radius: 10px;
  padding: 25px 15px 25px 25px;
  overflow: auto;
  background: var(--black-light);
}
#content-box{
  height: 100%;
  padding-right: 5px;
  overflow: auto;
}
#desktop-nav{
  margin-top: 60px;
}
#desktop-nav a{
  margin-bottom: 15px;
}
a .nav-lines{
  width: 30px;
  height: 1px;
  vertical-align: middle;
  background: var(--light);
}
#desktop-nav a, a .nav-lines{
  display: inline-block;
  transition: all 0.62s ease;
}


.fade-enter-active{
  transition: all 0.3s ease;
}
.fade-leave-active {
  /* opacity: 1; */
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

a.router-link-exact-active .nav-lines{
  width: 70px;
  background: var(--main-turquoise);
}
#desktop-footer{
  position: absolute;
  bottom: 5px;
}
.desktop-footer-links{
  margin-right: 35px;
}
.desktop-footer-links span{
  border-bottom: 1px solid transparent;
}
.desktop-footer-links, .desktop-footer-links span{
  transition: all 0.3s ease;
}
.desktop-footer-links:hover{
  color: var(--white);
}
.desktop-footer-links:hover span{
  border-color: var(--white);
}
.desktop-footer-links i{
  margin-right: 10px;
}
.container{
  width: 100%;
  margin: 0 auto;
  max-width: 1426px;
  box-sizing: border-box;
  padding: 0 30px;
}
h1{
  font-size: 50px;
  color: var(--white);
}
h2{
  font-size: 30px;
  font-weight: 400;
}
p{
  line-height: 1.75em;
}

.colored-text{
  color: var(--main-turquoise);
}

#mobile-nav-div{
  display: none;
  position: fixed;
  bottom: 0;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
  z-index: 2;
  background: var(--black);
}
#mobile-nav-div a{
  padding: 15px;
}
#mobile-footer{
  display: none;
  margin: 30px 0 20px 0;
  /* position: relative;
  bottom: -25px; */
  grid-gap: 5px;
  justify-content: center;
}
.mobile-footer-links{
  font-size: 16px;
  padding: 7.5px;
}

@media screen and (max-width: 1440px) {
  .container{
    max-width: 1200px;
  }
  #desktop-nav{
    margin-top: 50px;
  }
  #nav-div, #router-div{
    max-height: 600px;
  }
}

@media screen and (max-width: 1366px) {
  h1{
    font-size: 44px;
  }
}

@media screen and (max-width: 1024px) {
  h1{
    font-size: 42px;
  }
  #main-div{
    grid-gap: 80px;
  }
  .margin-top-forty, .margin-top-forty-special{
    margin-top: 30px;
  }
  .margin-top-sixty{
    margin-top: 40px;
  }
}

@media screen and (max-width: 992px) {
  #main-div{
    grid-gap: 70px;
  }
  h1{
    font-size: 40px;
  }
  h2{
    font-size: 26px;
  }
  body{
    font-size: 15px;
  }

}

@media screen and (max-width: 768px) {
  body{
    text-align: center;
  }
  h1{
    font-size: 34px;
  }
  #main-div{
    flex-direction: column;
  }
  #nav-div{
    display: none;
  }
  #mobile-footer{
    display: flex;
  }
  .container{
    padding: 0;
  }
  #router-div{
    border-radius: 0;
    height: 100vh;
    width: 100%;
    max-height: 100vh;
    padding: 0;
    padding-bottom: 50px;
    background: var(--black);
  }
  #router-div, #content-div{
    width: 100%;
  }
  #mobile-nav-div{
    display: grid;
  }
  #content-box{
    padding: 0 30px;
    box-sizing: border-box;
    background: var(--black);
  }

  .margin-top-forty{
    margin-top: 50px;
  }

  .left-on-small{
    text-align: left;
  }
  .margin-top-forty-special{
    margin-top: 25px;
  }

}


/* higher to lower sizes */
</style>
