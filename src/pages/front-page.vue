
<script>

//import safenetwork from '../safenetwork_interface.js'
import fakenetwork from '../fake_interface.js';
import themeHandler from '../themes/themeHandler.js'

import background from '../components/background.vue'
import loadingBackgroundMessage from '../components/messages/loadingBackgroundMessage'
import searchStatusMessage from '../components/messages/searchStatusMessage.vue'
import alertMessage from '../components/messages/alertMessage.vue'
import networkMessage from '../components/messages/networkMessage.vue'
import settingsMenu from '../components/settings-menu/settingsMenu.vue'
import searchBox from '../components/searchBox.vue'
import sortMenu from '../components/front-page/sortMenu.vue'
import displayedSites from '../components/front-page/displayedSites.vue'

export default {

  components: {
    background,
    loadingBackgroundMessage,
    searchStatusMessage,
    alertMessage,
    networkMessage,
    settingsMenu,
    searchBox,
    sortMenu,
    displayedSites
  },

  name: 'front-page',

  data () {
    return {  

      sitesListActive: false, beforeResults: true,

      returnToTopButton: false,

      searchIcon: true, searchIconOctopusLogo: false,
      
    }
  },


  computed: {

    sites() {
      return this.$store.state.searchterms.sites;
    },
    safeLogo() {
      return this.$store.state.theme.safeLogo;
    },

  },


  methods: {

    emptyHomePage: async function() {
      this.sitesListActive = false
      this.beforeResults = true
      this.$store.commit('changeSearchText', '')
      this.$router.push({ name: 'front-page',  params: {passedText: null}})
    },

    scrollView(e) {

      var currentPosition = window.scrollY;

        if (currentPosition>70) {
          this.returnToTopButton=true
          this.$store.commit('changeSafeLogo', false)
        }
        else {
          this.returnToTopButton=false
          this.$store.commit('changeSafeLogo', true)
        }

        if (currentPosition>50) {
          this.searchIcon=false
          this.searchIconOctopusLogo=true
        }
        else {
          this.searchIcon=true
          this.searchIconOctopusLogo=false
        }

    },
    scrollToTop() {
      window.scrollTo(0, 0)
    },

    displayResults: async function(returnedSites) {
      this.sitesListActive = true
      await this.$store.commit('changeSearchStatusMessageVisible', false)
      let sitesLength = await returnedSites.length;
      if (sitesLength == 0) {
        this.sitesListActive = false
        this.beforeResults = true
        await this.showSearchStatusMessage('Sorry, Nothing Found')
      }
      else {
        this.beforeResults = false
        this.sitesListActive = true
      }
    },

  },

  async created() {

    //await safenetwork.authoriseAndConnect()
    //await safenetwork.linkToMutableData()
    await themeHandler.setTheme()
    await document.addEventListener('scroll', this.scrollView) 

  },

  destroyed() {

    document.removeEventListener('scroll', this.scrollView)

  },
}


</script>



<style lang="scss">

@import './front-page-style/collected-front-page.scss';

</style>

<template>
  <div id="frontPageRoot">
    
    <div id="stickyElementsRestrainer">
      
      <!--Background Elements-->

      <loadingBackgroundMessage></loadingBackgroundMessage>

      <div id="backgroundImageWrapper">
        <background></background>
      </div>
      <div id="topSplitBackgroundImageWrapper" :class="{beforeResults}">
        <background></background>
      </div>

      <!--Header Panel-->
      
      <div id="headerElements" :class="{beforeResults}">

        <div id="octopusLogoTitle" @click.prevent="emptyHomePage()">
          <!--<p>George's Amazing</p>
          <p>Search Engine</p>-->
          <octopusLogoName></octopusLogoName>
        </div> 

        <!--<a href="http://localhost:5000">-->
          <div id="addMySiteButton"
          @click.prevent="showAlertMessage('Coming Soon...')">My Site
            <div id="addIcon">
              <addIcon></addIcon>
            </div>
          </div>
        <!--</a>-->

      </div>

      <!--Settings Menu Elements-->

      <div id="settingsIcon" @click.prevent="toggleSettingsMenu()">
        <settingsIcon></settingsIcon>
      </div>

      <settingsMenu></settingsMenu>
      
      <!--Search Panel-->

      <div id="searchElements" :class="{sitesListActive, beforeResults}">

        <div id="searchBoxWrapper" :class="{scrolled:searchIconOctopusLogo}">
          <transition name="searchIconTwist">
            <searchIcon id="searchIcon" v-if="searchIcon">
            </searchIcon>
          </transition>
          <transition name="searchIconTwist">
            <octopusLogo id="searchIconOctopusLogo" v-if="searchIconOctopusLogo">
            </octopusLogo>
          </transition>
          <searchBox @display-results="displayResults(sites)"></searchBox>
        </div>

      </div>

      <!--Sort Panel-->

      <div id="sortPanelBackground" v-if="sitesListActive">
        <sortMenu></sortMenu>
      </div>

      <!--!IMPORTANT! DUMMY SITES LIST (Used as Spacer Only for scrolling behaviour, must stay within "stickyElementsContainer") -->

        <!----><div id="sitesListDummyWrapper">
        <!---->   <displayedSites></displayedSites>
        <!----></div>

    </div>

    <div id="sitesListWrapper" :class="{beforeResults}">

      <displayedSites v-if="sitesListActive"></displayedSites>

      <div id="returnToTopButton" v-if="returnToTopButton" @click.prevent="scrollToTop()">
        <doubleArrowUpIcon id="returnToTopIcon"></doubleArrowUpIcon>
      </div>

      <div id="safeLogo" v-if="safeLogo" :class="{beforeResults}">
        <safeLogo></safeLogo>
      </div>

    </div>

        <!--Messages-->

    <networkMessage></networkMessage>

    <alertMessage></alertMessage>

    <searchStatusMessage></searchStatusMessage>

  </div>
</template>





