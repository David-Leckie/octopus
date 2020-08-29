<template>
    <div>
        <transition name="fade">
            <div class="cellophane" v-if="alertMessageVisible"></div>
        </transition>

        <transition name="fade">
            <div id="alertMessage" v-if="alertMessageVisible">
            <octopusLogoName id="alertMessageLogo"></octopusLogoName>
            {{alertMessage}}
            </div>
        </transition>

    </div>
</template>

<style lang="scss" scoped>

.cellophane {
    background: rgba(0,0,0,0.25);
    position: fixed;
    width: 100vw;
    height: 100%;
    left: 0%;
    top: 0%;
    z-index: 10;
}
#alertMessage {
    background: var(--surface5);
    color: var(--onSurface);
    border: var(--darkBorder);
    box-shadow: var(--boxShadowStandard);
    box-sizing: border-box;
    position: fixed;
    left: 50%;
    top: 0.7rem;
    width: 20rem;
    height: auto;
    margin: 0 0 0 -10rem;
    padding: 7rem 2.4rem 3rem 3rem;
    border-radius: calc(var(--baseBorderRadius)*1);
    font-size: calc(1.4rem * var(--largeText));
    text-align: center;
    z-index: 10; 
}
#alertMessageLogo {
    fill: var(--messageLogoColour);
    stroke: var(--messageLogoColour);
    position: absolute;
    left: 1.5rem;
    top: 1.5rem;
    width: 9rem;
    height: 4.5rem;
}

</style>

<script>
export default {
    name: "alertMessage",
    computed: {
        alertMessageVisible() {
        return this.$store.state.messages.alertMessageVisible;
        },
        alertMessage() {
        return this.$store.state.messages.alertMessage;
        },       
    },
    methods: {
        documentClick(e) {
            try {

                this.$store.commit('changeAlertMessageVisible', false);

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