
<template>
    <div>
        <transition name="fade">
          <div ref="settingsMenu" class="cellophane" v-if="settingsMenuVisible"></div>
        </transition>

        <transition name="slideRight">
            <div id="settingsMenuWrapper" v-if="settingsMenuVisible">
                <div id="closeButton" @click.prevent="removeSettingsMenu()">
                    <crossIcon></crossIcon>
                </div>
                <div id="authoriseButton" @click.prevent="showAlertMessage('Coming Soon...')">Authorise</div>
                <div id="settingsIconActive" @click.prevent="removeSettingsMenu()">
                    <settingsIcon></settingsIcon>
                </div>
                <div id="settingsMenuInner">
                    <div class="settingsTitle"><b>Options</b>
                    </div>
                    <div class="settingsMenuItem" @click.prevent="toggleAppearanceMenu()">Appearance
                        <arrowRightIcon class="settingsMenuIcon"></arrowRightIcon>
                    </div>
                    <div class="settingsMenuItem" @click.prevent="showAlertMessage('Coming Soon...')">Search Settings
                        <arrowRightIcon class="settingsMenuIcon"></arrowRightIcon>
                    </div>
                    <div class="settingsMenuItem" @click.prevent="showAlertMessage('Coming Soon...')">About Octopus
                        <arrowRightIcon class="settingsMenuIcon"></arrowRightIcon>
                    </div>
                    <div class="settingsMenuItem" @click.prevent="showAlertMessage('Coming Soon...')">New Engine
                        <arrowRightIcon class="settingsMenuIcon"></arrowRightIcon>
                    </div>
                    <transition name="slideRight">
                        <appearanceMenu v-if="appearanceMenuActive" @toggleAppearanceMenu="toggleAppearanceMenu(appearanceMenuActive)">
                        </appearanceMenu>
                    </transition>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>

    import appearanceMenu from './appearance-menu/appearanceMenu.vue'

    export default {

        components: {
            appearanceMenu
           // 'appearanceMenu': () => import('../components/appearanceMenu')
        },
        name: "settingsMenu",
        data() {
            return {
                appearanceMenuActive: false,
            }
        }, 
        computed: {

            settingsMenuVisible() {
            return this.$store.state.menus.settingsMenu;
            },

        },   
        methods: {
            
            toggleAppearanceMenu: async function(appearanceMenuActive) {
                await this.timeout(5);
                this.appearanceMenuActive=!appearanceMenuActive;
            },

            removeSettingsMenu: async function() {
                await this.$store.commit('changeSettingsMenu', false);
                this.appearanceMenuActive = false
            },
            
            documentClick(e) {
                try {

                    let el12 = this.$refs.settingsMenu;
                    let target12 = e.target;
                    if (el12 == (target12)) { 
                    this.$store.commit('changeSettingsMenu', false)
                    this.appearanceMenuActive = false
                    }

                }
                catch (err) {
                    return
                }
            }, 
        },

        async created() {

            await document.addEventListener('click', this.documentClick);
            
        },

        destroyed() {

            document.removeEventListener('click', this.documentClick);

        },

    }

</script>

<style lang="scss" scoped>

.cellophane {
    background: rgba(0,0,0,0.25);
    position: fixed;
    width: 100vw;
    height: 100%;
    left: 0%;
    top: 0%;
    z-index: 7;
}
#settingsMenuWrapper {
    box-sizing: border-box;
    position: fixed;
    border-style: none none solid solid;
    border-width: 0.1rem;
    border-radius: calc(var(--baseBorderRadius)*1) 0 calc(var(--baseBorderRadius)*1) calc(var(--baseBorderRadius)*1);
    border-color: var(--darkBorderColourOnly);
    box-shadow: var(--boxShadowStandard);
    width: auto;
    height: auto;
    padding: 0 0 0.5rem 0;
    top: 0px;
    right: 0rem;
    margin: 0rem;
    background: var(--surface3);
    z-index: 8;
}
#closeButton {
    box-sizing: border-box;
    fill: var(--onSurfaceBold);
    margin: 0.6rem 0.8rem;
    border-radius: calc(var(--baseBorderRadius)*0.75);
    position: absolute;
    width: 1.8rem;
    height: 1.8rem;
}
#authoriseButton {
    background: var(--button2Background);
    color: var(--button2Content);
    position: absolute;
    border: var(--darkBorder);
    box-shadow: var(--button2BoxShadow);
    border-radius: calc(var(--baseBorderRadius)*1);
    padding: 0.6rem 0.8rem 0.6rem 0.8rem;
    margin: 1.3rem 0rem 2rem 6.6rem;
    font-size: calc(1.2rem * var(--largeText));
    letter-spacing: 0.05rem;
    cursor: pointer;
}
#settingsIconActive {
    fill: var(--onSurfaceBold);
    box-sizing: border-box;
    position: fixed;
    right: 1.3rem;
    top: 1.3rem;
    width: 2.4rem;
    height: 2.4rem;
    stroke: none;
    fill: var(--onSurfaceBold);
    cursor: pointer;
}
#settingsMenuInner {
    background: var(--surface3);
    position: relative;
    margin: 5.5rem 0.5rem 0rem 0.5rem;
    border-style: solid;
    border-width: 0.2rem;
    border-color: transparent;
    border-radius: calc(var(--baseBorderRadius)*1);
}
.settingsTitle {
    color: var(--onSurfaceBold);
    box-sizing: border-box;
    position: relative;
    font-size: calc(1.6rem * var(--largeText));
    padding: 0rem 4rem 0.6rem 0.5rem;
    margin: 1.5rem 1rem 0rem 0.5rem;
    text-align: left; 
}
.settingsMenuItem {
    color: var(--onSurface);
    box-sizing: border-box;
    position: relative;
    font-size: calc(1.6rem * var(--largeText));
    padding: 0rem 5rem 0rem 0.5rem;
    margin: 2.6rem 1rem 1.8rem 0.5rem;
    text-align: left; 
}
.settingsMenuIcon {
    fill: var(--onSurfaceBold);
    stroke: var(--onSurfaceBold);
    position: absolute;
    right: -0.2rem;
    top: -0.2rem;
    width: 1.8rem;
    height: 1.8rem;
}

</style>
