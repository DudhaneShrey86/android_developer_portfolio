<template lang="html">
  <div id="router-div">
    <div id="content-box">
      <div id="contact-div">
        <h2 class="margin-top-forty">Get in Touch -</h2>
        <p class="margin-top-twenty">If you have a project or just wanna say hi, send me a message!</p>
        <div id="contact-form" class="margin-top-forty-special">
          <div class="input-field left-on-small">
            <label for="name">NAME</label>
            <input type="text" name="name" id="name" value="">
          </div>
          <div class="input-field left-on-small">
            <label for="email">EMAIL</label>
            <input type="text" name="email" id="email" value="">
          </div>
          <div class="input-field full-width left-on-small">
            <label for="message">MESSAGE</label>
            <textarea name="message" id="message"></textarea>
          </div>
          <div class="button-field">
            <button type="submit" id="submit-button" @click="submitForm"><span>Send</span> <i class="fas fa-paper-plane"></i></button>
            <button type="button" id="submitted-button"><span>Message Sent</span> <i class="fas fa-check"></i></button>
          </div>
        </div>
        <div id="response-message-div">
          <div id="response-message">
            <p>I will get back to you in 1-2 working days!</p>
          </div>
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
export default {
  name: 'Contact',
  setup(){
    const submitForm = () => {
      document.getElementById('response-message').classList.add('active');
      document.getElementById('submit-button').style.display = 'none';
      document.getElementById('submitted-button').style.display = 'inline';
      // setTimeout(function(){
      //   document.getElementById('response-message').classList.remove('active');
      // }, 4000);
    };

    return {
      submitForm,
    }
  }
}
</script>

<style lang="css">
#contact-form{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
}
.full-width{
  grid-column: 1/3;
}
label, input, textarea{
  display: block;
  width: 100%;
  box-sizing: border-box;
}
label{
  font-size: 14px;
  font-weight: 500;
  color: var(--main-turquoise);
  margin-bottom: 3px;
  margin-left: 2px;
}
input, textarea, button{
  color: var(--light);
  font-family: 'Roboto Mono', monospace;
  font-size: 14px;
  border-radius: 5px;
  padding: 15px;
  background: var(--black);
  border: 0;
  outline: 0;
}
button{
  font-size: 16px;
}
textarea{
  resize: none;
  min-height: 180px;
}
#submit-button, #submitted-button{
  color: var(--main-turquoise);
  font-weight: 500;
  padding: 15px 30px;
  cursor: pointer;
}
#submit-button span{
  border-bottom: 1px solid transparent;
  transition: all 0.3s ease;
}
#submit-button:hover span{
  border-color: var(--main-turquoise);
}
#submitted-button{
  display: none;
}

#response-message-div{
  position: relative;
}
#response-message{
  position: absolute;
  width: 100%;
  text-align: center;
  padding: 11px;
  font-weight: 500;
  bottom: 0px;
  box-sizing: border-box;
  background: var(--main-turquoise);
  color: var(--black);
  border-radius: 5px;
  bottom: -10px;
  opacity: 0;
  z-index: -1;
}
#response-message.active{
  animation: popup 4s ease;
  animation-iteration-count: 1;
  z-index: 1;
}
@keyframes popup {
  0%{
    bottom: -10px;
    opacity: 0;
  }
  10%, 85%{
    bottom: 0;
    opacity: 1;
  }
  100%{
    bottom: -20px;
    opacity: 0;
  }
}
@media screen and (max-width: 992px) {
  button{
    font-size: 15px;
  }
}
@media screen and (max-width: 768px) {
  #contact-form{
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
  .full-width{
    grid-column: 1/2;
  }
  input, textarea, button{
    background: var(--black-light);
  }
}
</style>
