<template>          
    <div id="themesPreview" class="styleMenu">
        <div class="styleMenuTitle" @click.prevent="$emit('toggleStylesMenu')">
            Categories
        </div>
        <div class="styleMenuPanel">
            <div class="sunMoonIcon">
                <moonIcon class="sunMoonIconInner"></moonIcon>
            </div>
            <div class="sunMoonCard">
            </div>
            <div class="styleMenuCard" @click="toggleThemesPreview('DarkBasic', themesPreviewActive)">
                <div class="styleMenuThumbnailDark">
                    <paletteIcon class="themeCategoryIcon"></paletteIcon>
                </div>
                <div class="styleMenuItemTitle">Basic</div>
            </div>
            <div class="styleMenuCard" @click="toggleThemesPreview('DarkArt', themesPreviewActive)">
                <div class="styleMenuThumbnailDark">
                    <brushIcon class="themeCategoryIcon"></brushIcon>
                </div>
                <div class="styleMenuItemTitle">Art</div>
            </div>
            <div class="styleMenuCard" @click="toggleThemesPreview('DarkPhoto', themesPreviewActive)">
                <div class="styleMenuThumbnailDark">
                    <cameraIcon class="themeCategoryIcon"></cameraIcon>
                </div>
                <div class="styleMenuItemTitle">Photo</div>
            </div>
        </div>
        <div class="styleMenuPanel">
            <div class="sunMoonIcon">
                <sunIcon class="sunMoonIconInner"></sunIcon>
            </div>
            <div class="sunMoonCard">
            </div>
            <div class="styleMenuCard" @click="toggleThemesPreview('LightBasic', themesPreviewActive)">
                <div class="styleMenuThumbnailLight">
                    <paletteIcon class="themeCategoryIcon"></paletteIcon>
                </div>
                <div class="styleMenuItemTitle">Basic</div>
            </div>
            <div class="styleMenuCard" @click="toggleThemesPreview('LightArt', themesPreviewActive)">
                <div class="styleMenuThumbnailLight">
                    <brushIcon class="themeCategoryIcon"></brushIcon>
                </div>
                <div class="styleMenuItemTitle">Art</div>
            </div>
            <div class="styleMenuCard" @click="toggleThemesPreview('LightPhoto', themesPreviewActive)">
                <div class="styleMenuThumbnailLight">
                    <cameraIcon class="themeCategoryIcon"></cameraIcon>
                </div>
                <div class="styleMenuItemTitle">Photo</div>
            </div>
        </div>
        <div id="styleMenuBackButton" class="styleMenuButton" @click.prevent="$emit('toggleStylesMenu')">Back</div>
        <transition name="slideRight">
            <!--<component :is="chosenSelection" v-if="themesPreviewActive" @toggleThemesPreview="toggleThemesPreview('Wave', themesPreviewActive)"></component>-->
            <themesPreviewMenu v-if="themesPreviewActive" @toggleThemesPreview="toggleThemesPreview('Wave', themesPreviewActive)"></themesPreviewMenu>
        </transition>       
    </div>
</template>

<script>

import themesPreviewMenu from './themesPreviewMenu.vue'

export default {
    components: {
        themesPreviewMenu
    },
    name: "stylesMenu",
    data() {
        return { 
            themesPreviewActive: false
        }
    },
    methods: {
         toggleThemesPreview: async function(previewCategory, themesPreviewActive) {
             await this.$store.commit('changePreviewCategory', previewCategory);
             this.themesPreviewActive = !themesPreviewActive;
         }
    }
}
</script>

<style lang="scss">

.styleMenu {
    box-sizing: border-box;
    position: absolute;
    background: var(--surface4);
    margin: -0.5rem 0rem 0rem 0rem;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    top: 0rem;
    right: -1rem;
    width: auto;
    height: auto;
    border-style: solid;
    border-width: 0.1rem;
    border-color: rgba(255,255,255, 0.0) var(--darkBorderColourOnly) var(--darkBorderColourOnly) var(--darkBorderColourOnly);
    border-radius: calc(var(--baseBorderRadius)*1) 0 calc(var(--baseBorderRadius)*1) calc(var(--baseBorderRadius)*1);
    box-shadow: var(--boxShadowStandard);
}
.styleMenuTitle {
    color: var(--onSurfaceBold);
    box-sizing: border-box;
    position: relative;
    font-size: calc(1.4rem * var(--largeText));
    font-weight: bold;
    padding: 0rem 4rem 0.6rem 0.5rem;
    margin: 1.5rem 1rem 0rem 1rem; 
    text-align: left; 
}
.styleMenuPanel {
    color: var(--onSurface);
    box-sizing: border-box;
    position: relative;
    font-size: calc(1.6rem * var(--largeText));
    padding: 0rem 0.5rem 0rem 0.5rem;
    margin: 1rem 0.5rem 1rem 0.5rem;
    text-align: left; 
}
.styleMenuCard {
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    margin: 0.2rem 0rem 0 0rem;
    padding: 0.4rem 0rem;
    width: 7rem;
    height: auto;
    border-radius: calc(var(--baseBorderRadius)*1);
    text-align: center;
}
.sunMoonCard {
    @extend .styleMenuCard;
    top: -6rem;
    padding: 0.4rem 1rem;
    width: 6rem;
    height: 0rem;
}
.sunMoonIcon {
    position: absolute;
    box-sizing: border-box;
    top: 8%;
    left: 2.2rem;
    width: 2.95rem;
    height: 2.95rem;
    padding: 0.6rem;
    font-size: calc(0rem * var(--largeText));
    background: var(--primaryVariant);
    fill: var(--onContrast);
    border: none;
    border-radius: 1.7rem;
}
.sunMoonIconInner {
    position: absolute;
    width: 1.8rem;
    height: 1.8rem;
}
.styleMenuThumbnail {
    overflow: hidden;
    position: absolute;
    font-size: calc(1.2rem * var(--largeText));
    left: 50%;
    margin: 1.5rem 0rem 0rem -1.5rem;
    width: 3rem;
    height: 3rem;
    border: var(--darkBorder);
    box-shadow: var(--boxShadowThinBorder);
    border-radius: calc(var(--baseBorderRadius)*1);
}
.styleMenuThumbnailDark {
    @extend .styleMenuThumbnail;
    background: rgb(50,50,50);
    fill: rgb(255,255,255);
}
.styleMenuThumbnailLight {
    @extend .styleMenuThumbnail;   
    background: rgb(255,255,255);
    fill: rgb(50,50,50);
}
.themeCategoryIcon {
    position: absolute;
    margin: 0.5rem 0.5rem 0.5rem 0.5rem;
    width: 2rem;
    height: 2rem;
}
.styleMenuItemTitle {
    color: var(--onSurface);
    box-sizing: border-box;
    position: relative;
    margin: 5.8rem 1rem 0rem 1rem;
    font-size: calc(1.1rem * var(--largeText));
    font-weight: bold;
}
.styleMenuButton {
    background: var(--primaryVariant);
    color: var(--onContrast);
    position: relative;
    bottom: 1.2rem;
    border-radius: calc(var(--baseBorderRadius)*1);
    padding: 0.6rem 1.2rem 0.6rem 1.2rem;
    width: 5rem;
    margin: 1.8rem 0rem 0rem 0rem;
    font-size: calc(1.2rem * var(--largeText));
    letter-spacing: 0.05rem;
    text-align: center;
    cursor: pointer;
}
#styleMenuBackButton {
    float: right;
    right: 1.5rem;
    background: var(--surface1);
    color: var(--onSurface);
    box-shadow: var(--boxShadowThinBorder);
}


</style>
