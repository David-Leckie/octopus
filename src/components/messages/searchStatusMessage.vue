<template>
    <div id="searchStatusMessage" v-if="searchStatusMessageVisible">
      <div id="searchStatusMessageLogo"> 
        <octopusLogo></octopusLogo> 
      </div>              
      <div>{{searchStatusMessage}}</div>
    </div>
</template>

<style lang="scss">

#searchStatusMessage {
    background: var(--surface3);
    color: var(--onSurface);
    border: var(--darkBorder);
    box-shadow: var(--messageShadow);
    box-sizing: border-box;
    position: fixed;
    display: inline-block;
    left: 50%;
    transform: translateX(-50%);
    top: 19rem;
    width: auto;
    height: auto;
    padding: 5.8rem 2rem 1.5rem 2rem;
    margin: 0% 0% 0% 0%;
    border-radius: 1rem;
    font-size: calc(1.5rem * var(--largeText));
    line-height: 1.5;
    text-align: center;
    z-index: 2;
    white-space: nowrap;
}
#searchStatusMessageLogo {
    fill: var(--messageLogoColour);
    stroke: var(--messageLogoColour);
    position: absolute;
    width: 3.4rem;
    height: 3.4rem;
    left: 50%;
    margin-left: -1.7rem;
    top: 1.5rem;
}

</style>

<script>
export default {
    name: "searchStatusMessage",
    computed: {
        searchStatusMessageVisible() {
        return this.$store.state.messages.searchStatusMessageVisible;
        },
        searchStatusMessage() {
        return this.$store.state.messages.searchStatusMessage;
        },        
    },
    methods: {
        documentClick(e) {
            try {

                this.$store.commit('changeSearchStatusMessageVisible', false);

            }
            catch (err) {
                return
            }
        }
    },
    async created() {
        await document.addEventListener('click', this.documentClick);
    },
    destroyed() {
        document.removeEventListener('click', this.documentClick);
    }
}
</script>