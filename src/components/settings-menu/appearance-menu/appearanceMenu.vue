<template>          
    <div id="appearanceMenu" class="appearanceMenu">
        <div class="appearanceMenuTitle" @click.prevent="$emit('toggleAppearanceMenu')">
            Appearance
        </div>
        <div class="appearanceMenuItem">Theme:</div>
        <div class="appearanceMenuItem">
            <div id="chosenThemeCard" @click="toggleStylesMenu()">
                <component :is="themeThumbnail" id="chosenThumbnail"></component>
                <div id="chosenThumbnailTitle">{{displayThemeName}}</div>
            </div>
        </div>
        <div id="appearanceMenuBrowseButton" class="appearanceMenuButton" @click="toggleStylesMenu()">Browse</div>        
        <div id="appearanceMenuBackButton" class="appearanceMenuButton" @click.prevent="$emit('toggleAppearanceMenu')">Back</div>
        <transition name="slideRight">
            <stylesMenu v-if="stylesMenuActive" @toggleStylesMenu="toggleStylesMenu(stylesMenuActive)" @themeChange="showThemeName()"></stylesMenu>
        </transition>       
    </div>
</template>

<script>

import stylesMenu from './stylesMenu.vue'

export default {
    components: {
        stylesMenu
    }, 
    name: "appearanceMenu",
    data() {
        return {
            stylesMenuActive: false, displayThemeName: ''
        }
    },
    computed: {
        theme() {
            return this.$store.state.theme.theme;
        },
        themeThumbnail() {
            let t = this.$store.state.theme.theme;
            let u = `${t}Thumbnail`;
            return u
        },
    }, 
    methods: {
         toggleStylesMenu: async function(stylesMenuActive) {
             this.stylesMenuActive = !stylesMenuActive;
         },
         showThemeName: async function() {
             let camelDTN = await this.theme;
             this.displayThemeName = camelDTN.split('-')
            .map((kebab) => kebab.charAt(0).toUpperCase() + kebab.slice(1))
            .join(' ')
         }
    },
    async created() {
        await this.showThemeName(this.theme);
    }
}
</script>

<style lang="scss">

.appearanceMenu {
    background: var(--surface3);
    box-sizing: border-box;
    position: absolute;
    top: 0rem;
    right: 0rem;
    width: 100%;
    height: 100%;
}
.appearanceMenuTitle {
    color: var(--onSurfaceBold);
    box-sizing: border-box;
    position: relative;
    font-size: calc(1.6rem * var(--largeText));
    font-weight: bold;
    padding: 0rem 4rem 0.6rem 0.5rem;
    margin: 1.5rem 1rem 0rem 0.5rem;
    text-align: left; 
}
.appearanceMenuItem {
    color: var(--onSurface);
    box-sizing: border-box;
    position: relative;
    font-size: calc(1.6rem * var(--largeText));
    padding: 0rem 5rem 0rem 0.5rem;
    margin: 2.6rem 1rem 1.8rem 0.5rem;
    text-align: left; 
}
#chosenThemeCard {
    box-sizing: border-box;
    position: absolute;
    margin: -0.4rem 0 0 0;
    padding: 0.4rem;
    width: auto;
    height: 5.6rem;
    border-radius: calc(var(--baseBorderRadius)*1);
}
#chosenThumbnail {
    overflow: hidden;
    position: absolute;
    width: 4.8rem;
    height: 4.8rem;
    border: var(--darkBorder);
    box-shadow: var(--boxShadowThinBorder);
    border-radius: calc(var(--baseBorderRadius)*1);
}
#chosenThumbnailTitle {
    color: var(--onSurface);
    box-sizing: border-box;
    position: relative;
    padding: 0rem 1rem 0rem 6.2rem;
    font-size: calc(1.2rem * var(--largeText));
    font-weight: bold;
    line-height: 4.8rem;
}
.appearanceMenuButton {
    box-sizing: border-box;
    background: var(--primaryVariant);
    color: var(--onContrast);
    position: absolute;
    bottom: 1rem;
    border-radius: calc(var(--baseBorderRadius)*1);
    padding: 0.6rem 1.2rem 0.6rem 1.2rem;
    font-size: calc(1.2rem * var(--largeText));
    letter-spacing: 0.05rem;
    cursor: pointer;
}
#appearanceMenuBrowseButton {
    left: 1rem;
}
#appearanceMenuBackButton {
    right: 1rem;
    background: var(--surface1);
    color: var(--onSurface);
    border: var(--darkBorder);
    box-shadow: var(--boxShadowThinBorder)
}

</style>
