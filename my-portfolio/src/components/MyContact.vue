<template>
    <div
      class="py-4 p-st pt-5"
      :class="{
        'bg-light': !nightMode,
        'bg-dark2': nightMode,
        'text-light': nightMode,
      }"
    >
      <div class="container">
        <div
          class="text-center"
          data-aos="fade"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          <span
            class="title text-center"
            :class="{ pgray: !nightMode, 'text-light': nightMode }"
            >CONTACT</span
          >
        </div>
        <hr
          width="50%"
          :class="{ pgray: !nightMode, 'bg-secondary': nightMode }"
        />
        <br />
        <div class="text-center">
          <div
            class="mb-3"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1000">
            <div class="wave-group" v-for="data in contactFormData" :key="data.label" style="padding-bottom: 20px;">
              <input required="" v-model="data.value" type="text" :class="{'input':true,
              'text-light': nightMode}">
              <span class="bar"></span>
              <label class="label">
                <span class="label-char" v-for="i in (data.label.length + 1)" style="--index: (i-1)" :key="i-1">
                  {{data.label.charAt(i-1)}}
                </span>
              </label>
            </div>
          </div>

          <div
            class="my-3"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1000"
          >
          <div class="wave-group" style="padding-bottom: 20px;">
              <textarea required="" name="message"
              v-model="message"
              :class="{'input':true,
              'text-light': nightMode}"
              rows="4" />
              <span class="bar"></span>
              <label class="label">
                <span class="label-char" v-for="i in (messageString.length + 1)" style="--index: (i-1)" :key="i-1">
                  {{messageString.charAt(i-1)}}
                </span>
              </label>
            </div>
          </div>
          <button
          @click.prevent="sendEmail"
           class="button"> Button
          </button>
        </div>
  
        <!-- <Snackbar
          :showSnackbar="showSnackbar"
          @close="closeSnackbar"
          :snackbarMessage="snackbarMessage"
          :snackbarColor="snackbarColor"
        /> -->
      </div>
    </div>
</template>

<script>

import config from "../../config";
import emailjs from "emailjs-com";

export default {
  name: "MyContact",
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data(){
    return{
      message: "",
      contactFormData:[{
        label: "Name",
        value: ""
      },
      {
        label: "Email",
        value: ""
      },
      {
        label: "Subject",
        value: ""
      }
    ],
      messageString: "Message",
    }
  },
  methods: {
    sendEmail() {
      var emailData = {
        from_name: this.contactFormData[0].value,
        user_email: this.contactFormData[1].value,
        subject: this.contactFormData[2].value,
        message: this.message,
      };
      if(Object.values(emailData).every(x => x === null || x === '')){
        console.log("Nope");
        //TODO
      }
      else{
        emailjs
          .send(
            config.emailjs.serviceID,
            config.emailjs.templateID,
            emailData,
            config.emailjs.userID
          )
          .then(
            () => {
              this.contactFormData.forEach((e)=>e.value="");
              this.message = "";
            },
            () => {
              //TODO
            }
          );
      }
    }
  }
};
</script>

<style scoped>

.title {
    font-size: 30px;
    font-weight: 500;
  }

/* Inputs */
.wave-group {
  position: relative;
  margin: 0 auto;
  width: 65%;
}

.wave-group .input {
  font-size: 16px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid #515151;
  background: transparent;
}

.wave-group .input:focus {
  outline: none;
}

.wave-group .label {
  color: #999;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  display: flex;
}

.wave-group .label-char {
  transition: 0.2s ease all;
  transition-delay: calc(var(--index) * .05s);
}

.wave-group .input:focus ~ label .label-char,
.wave-group .input:valid ~ label .label-char {
  transform: translateY(-20px);
  font-size: 14px;
  color: #5264AE;
}

.wave-group .bar {
  position: relative;
  display: block;
  width: 100%;
}

.wave-group .bar:before,.wave-group .bar:after {
  content: '';
  height: 2px;
  width: 0;
  bottom: 0px;
  position: absolute;
  background: #5264AE;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

.wave-group .bar:before {
  left: 50%;
}

.wave-group .bar:after {
  right: 50%;
}

.wave-group .input:focus ~ .bar:before,
.wave-group .input:focus ~ .bar:after {
  width: 50%;
}

/* Button */
.button {
 --color: #5264AE;
 padding: 0.8em 1.7em;
 background-color: transparent;
 border-radius: .3em;
 position: relative;
 overflow: hidden;
 cursor: pointer;
 transition: .5s;
 font-weight: 400;
 font-size: 17px;
 border: 1px solid;
 font-family: inherit;
 text-transform: uppercase;
 color: var(--color);
 z-index: 1;
}

.button::before, .button::after {
 content: '';
 display: block;
 width: 50px;
 height: 50px;
 transform: translate(-50%, -50%);
 position: absolute;
 border-radius: 50%;
 z-index: -1;
 background-color: var(--color);
 transition: 1s ease;
}

.button::before {
 top: -1em;
 left: -1em;
}

.button::after {
 left: calc(100% + 1em);
 top: calc(100% + 1em);
}

.button:hover::before, .button:hover::after {
 height: 410px;
 width: 410px;
}

.button:hover {
 color: rgb(10, 25, 30);
}

.button:active {
 filter: brightness(.8);
}


</style>