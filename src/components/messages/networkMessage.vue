<template>

<div v-if="networkMessageVisible">
    <div class="cellophane"></div>
    <div id="networkMessage">
      <safeAnimation class="networkMessageLogo"></safeAnimation> 
      {{networkMessage}}
    </div>
</div>

</template>

<style lang="scss">

.networkMessage {
    background-color: white;
    fill: black;
    stroke: black;
    color: black;
    box-shadow: var(--messageShadow);
    box-sizing: border-box;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    width: auto;
    height: auto;
    padding: 7rem 2.5rem 1.6rem 2.5rem;
    margin: 6rem 0% 0% 0%;
    border-radius: 1rem;
    font-size: calc(1.6rem * var(--largeText));
    line-height: 1.6;
    text-align: center;
    z-index: 2;
    visibility: hidden;
}
.networkMessageLogo {
    //fill: black;
    //stroke: black;
    position: absolute;
    width: 4rem;
    height: 4rem;
    left: 50%;
    margin-left: -1.8rem;
    top: 2rem;
}

</style>

<script>
export default {
    name: "networkMessage",
    computed: {
        networkMessageVisible() {
        return this.$store.state.messages.networkMessageVisible;
        },
        networkMessage() {
        return this.$store.state.messages.networkMessage;
        },       
    }
}
</script>