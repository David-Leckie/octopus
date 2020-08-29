<template>
  <div>
    <ul style="list-style: none;">
      <li v-for="site in sites" :key="site.key" >
        <a :href="site.value.url">
          <div class="site" >             
            <div class= "siteItemTitle">{{site.value.name}}</div>
            <div class= "siteItemURL">{{site.value.url}}</div>
            <div class= "siteItemDescription">{{site.value.description}}</div>
              <div class="siteItemFlagWrapper" v-on:click.prevent="showAlertMessage('Coming Soon')">
              <flagIcon class="siteFlagIcon"></flagIcon>
              Flag Site
              </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">

.site {
    background: var(--surface3);
    border: var(--darkBorder);
    box-shadow: var(--siteShadow);
    box-sizing: border-box;
    position: relative;
    left: 2%;
    width: 96%;
    margin: 0.8rem 0rem 0.7rem 0rem;
    padding: 0.8rem 0rem 1.6rem 0.5rem;
    border-style: 0px solid transparent;
    border-radius: calc(var(--baseBorderRadius)*1);
    font-weight: normal;
    font-size: calc(1.25rem * var(--largeText));
}
.siteItemTitle {
    color: var(--siteTitleColour);
    padding: 1rem 1rem 0.8rem 0.5rem;
    width: 85%;
    font-size: calc(1.75rem * var(--largeText));
}
.siteItemURL {
    color: var(--siteURLColour);
    padding: 0.2rem 0.5rem 0.25rem 1.5rem;
    font-size: calc(1.25rem * var(--largeText)); 
    font-style: oblique;
}
.siteItemDescription {
    color: var(--onSurface);
    padding: 1rem 1.2rem 0.8rem 0.7rem;
}
.siteItemFlagWrapper {
    color: var(--error);
    stroke: none; 
    position: relative;
    left: 0.35rem;
    top: 0.35rem;
    font-size: calc(1.15rem * var(--largeText));
    padding: 0.6rem 0rem 0.6rem 4.2rem;
}
.siteFlagIcon {
    fill: var(--error);
    box-sizing: border-box;
    position: absolute;
    left: 1.2rem;
    top: 50%;
    margin-top: -1.1rem;
    width: 2.2rem;
    height: 2.2rem;
    background-color: transparent;
}

</style>

<script>

export default {

    name: "sitesDisplay",

    computed: {
        sites() {
            return this.$store.state.searchterms.sites;
        },      
    },
    
}
</script>