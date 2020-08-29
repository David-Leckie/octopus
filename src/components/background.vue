<template>
    <div>
      <div v-if="!backgroundPicture" class="backgroundSolidL"></div>
      <div v-if="!backgroundPicture" class="backgroundSolidR"></div>
      <div v-if="backgroundPicture" class="backgroundImage"
        :style="{backgroundImage: 'url('+require(`../themes/${themeCategory}/${themeFolder}/${theme}-${orientation}.jpg`)+')'}">
      </div>
      <!--<component :is="theme" class="backgroundImage"></component>-->
    </div>
</template>

<style lang="scss">

.backgroundSolidL {
    height: var(--portraitBackgroundHeight);
    width: 100vw;
    background: var(--backgroundSolidL);
    width: 40vw;
}
.backgroundSolidR {
    height: var(--portraitBackgroundHeight);
    position: absolute;
    background: var(--backgroundSolidR);
    width: 60vw;
    top: 0px;
    left: 40vw;
}

.backgroundImage {
    height: var(--portraitBackgroundHeight);
    //min-height: 55rem;
    background: transparent;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
}

@media only screen and (min-width: 1200px) {
    .backgroundImage {
    height: var(--landscapeBackgroundHeight);
    }
}
</style>

<script>

import themeHandler from '../themes/themeHandler.js'

export default {
  name: 'background',
  data () {
    return {
      orientation: '',
    }
  },
  computed: {
    theme() {
      return this.$store.state.theme.theme;
    },
    backgroundPicture() {
      return this.$store.state.theme.backgroundPicture;
    },
    themeCategory() {
      return this.$store.state.theme.themeCategory;
    },
    themeFolder() {
      return this.$store.state.theme.themeFolder;
    },
  },
  methods: {
        applyBackground: async function(e) {
            window.vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);    
            if (vw>1200) {
                this.orientation = 'landscape';
            }
            else {
                this.orientation = 'portrait';
            }
        }
    },
  async created() {
    await this.applyBackground();
    await window.addEventListener('resize', this.applyBackground);
       
  },
  destroyed() {
    window.removeEventListener('resize', this.applyBackground);
  },
}
</script>



