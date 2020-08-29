<template>          
    <div class="themesPreviewMenu">
        <div class="themesPreviewTitle" @click.prevent="$emit('toggleStylesMenu')">
            Themes
        </div>
        <div class="themesPreviewPanel">
            <div class="themesPreviewMenuCard" @click="changeTheme(previews.a.n)">
                <div class="themesPreviewThumbnail">
                    <component :is="`${previews.a.n}Thumbnail`"></component>
                </div>
                <div class="themesPreviewItemTitle">{{previews.a.nt}}</div>
            </div>
            <div class="themesPreviewMenuCard" @click="changeTheme(previews.b.n)">
                <div class="themesPreviewThumbnail">
                    <component :is="`${previews.b.n}Thumbnail`"></component>
                </div>
                <div class="themesPreviewItemTitle">{{previews.b.nt}}</div>
            </div>
            <div class="themesPreviewMenuCard" @click="changeTheme(previews.c.n)">
                <div class="themesPreviewThumbnail">
                    <component :is="`${previews.c.n}Thumbnail`"></component>
                </div>
                <div class="themesPreviewItemTitle">{{previews.c.nt}}</div>
            </div>
        </div>
        <div class="themesPreviewPanel">
            <div class="themesPreviewMenuCard" @click="changeTheme(previews.d.n)">
                <div class="themesPreviewThumbnail">
                    <component :is="`${previews.d.n}Thumbnail`"></component>
                </div>
                <div class="themesPreviewItemTitle">{{previews.d.nt}}</div>
            </div>
            <div class="themesPreviewMenuCard" @click="changeTheme(previews.e.n)">
                <div class="themesPreviewThumbnail">
                    <component :is="`${previews.e.n}Thumbnail`"></component>
                </div>
                <div class="themesPreviewItemTitle">{{previews.e.nt}}</div>
            </div>
            <div class="themesPreviewMenuCard" @click="changeTheme(previews.f.n)">
                <div class="themesPreviewThumbnail">
                    <component :is="`${previews.f.n}Thumbnail`"></component>
                </div>
                <div class="themesPreviewItemTitle">{{previews.f.nt}}</div>
            </div>
        </div>
        <div id="themesPreviewBackButton" class="themesPreviewButton" @click.prevent="$emit('toggleThemesPreview')">Back</div>       
    </div>
</template>

<style lang="scss">

.themesPreviewMenu {
    box-sizing: border-box;
    position: absolute;
    background: var(--surface4);
    margin: 0rem 0rem 0rem 0rem;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    top: 0rem;
    right: 0rem;
    width: auto;
    height: auto;
    border-style: solid;
    border-width: 0.1rem;
    border-color: rgba(255,255,255, 0.0) var(--darkBorderColourOnly) var(--darkBorderColourOnly) var(--darkBorderColourOnly);
    border-radius: calc(var(--baseBorderRadius)*1) 0 calc(var(--baseBorderRadius)*1) calc(var(--baseBorderRadius)*1);
    box-shadow: var(--boxShadowStandard);
}
.themesPreviewTitle {
    color: var(--onSurfaceBold);
    box-sizing: border-box;
    position: relative;
    font-size: calc(1.4rem * var(--largeText));
    font-weight: bold;
    padding: 0rem 4rem 0.6rem 0.5rem;
    margin: 1.5rem 1rem 0rem 1rem; 
    text-align: left; 
}
.themesPreviewPanel {
    color: var(--onSurface);
    box-sizing: border-box;
    position: relative;
    font-size: calc(1.6rem * var(--largeText));
    padding: 0rem 0.5rem 0rem 0.5rem;
    margin: 1rem 0.5rem 1rem 0.5rem;
    text-align: left; 
}
.themesPreviewThumbnail {
    overflow: hidden;
    position: absolute;
    font-size: calc(1.2rem * var(--largeText));
    left: 50%;
    margin-left: -2.4rem;
    width: 4.8rem;
    height: 4.8rem;
    border: var(--darkBorder);
    box-shadow: var(--boxShadowThinBorder);
    border-radius: calc(var(--baseBorderRadius)*1);
}
.themesPreviewMenuCard {
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    margin: 0.2rem 0rem 0 0rem;
    padding: 0.4rem 0rem;
    width: 9rem;
    height: auto;
    border-radius: calc(var(--baseBorderRadius)*1);
    text-align: center;
}
.themesPreviewItemTitle {
    color: var(--onSurface);
    box-sizing: border-box;
    position: relative;
    margin: 5.8rem 1rem 0rem 1rem;
    font-size: calc(1.1rem * var(--largeText));
    font-weight: bold;
}
.themesPreviewButton {
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
#themesPreviewBackButton {
    float: right;
    right: 1.5rem;
    background: var(--surface1);
    color: var(--onSurface);
    box-shadow: var(--boxShadowThinBorder);
}
#themesPreviewMoreButton {
    left: 1.5rem;
}

</style>

<script>

import themeHandler from '../../../themes/themeHandler.js'

export default {
    name: "themesPreviewMenu",
    data() {
        return {
            previews: {}
        }
    },
    computed: {
        previewCategory() {
            return this.$store.state.theme.previewCategory;
        },
    },
    methods: {
        applyCategory: async function(previewCategory) {
            if (previewCategory == 'DarkBasic') {
                this.previews = {
                    a:{n:'mono-dark',nt:'Mono'},
                    b:{n:'blank',nt:'?'},
                    c:{n:'blank',nt:'?'},
                    d:{n:'blank',nt:'?'},
                    e:{n:'blank',nt:'?'},
                    f:{n:'blank',nt:'?'},
                    }
            }
            if (previewCategory == 'DarkArt') {
                this.previews = {
                    a:{n:'blank',nt:'?'},
                    b:{n:'blank',nt:'?'},
                    c:{n:'blank',nt:'?'},
                    d:{n:'blank',nt:'?'},
                    e:{n:'blank',nt:'?'},
                    f:{n:'blank',nt:'?'},
                    }
            }
            if (previewCategory == 'DarkPhoto') {
                this.previews = {
                    a:{n:'blank',nt:'?'},
                    b:{n:'blank',nt:'?'},
                    c:{n:'blank',nt:'?'},
                    d:{n:'blank',nt:'?'},
                    e:{n:'blank',nt:'?'},
                    f:{n:'blank',nt:'?'},
                    }
            }    
            if (previewCategory == 'LightBasic') {
                this.previews = {
                    a:{n:'mono-light',nt:'Mono'},
                    b:{n:'blank',nt:'?'},
                    c:{n:'blank',nt:'?'},
                    d:{n:'blank',nt:'?'},
                    e:{n:'blank',nt:'?'},
                    f:{n:'blank',nt:'?'},
                    }
            }
            if (previewCategory == 'LightArt') {
                this.previews = {
                    a:{n:'hokusai',nt:'Hoku'},
                    b:{n:'graffiti',nt:'Grafiti'},
                    c:{n:'monet',nt:'Monet'},
                    d:{n:'japan',nt:'Japan'},
                    e:{n:'okeeffe',nt:'Okefe'},
                    f:{n:'pop',nt:'Pop'},
                    }
            }        
            if (previewCategory == 'LightPhoto') {
                this.previews = {
                    a:{n:'wave',nt:'Wave'},
                    b:{n:'blank',nt:'?'},
                    c:{n:'blank',nt:'?'},
                    d:{n:'blank',nt:'?'},
                    e:{n:'blank',nt:'?'},
                    f:{n:'blank',nt:'?'},
                    }
            }
        },
        changeTheme: async function(newTheme) {
            if (newTheme == 'blank') {

                await this.showAlertMessage('Coming Soon')
                
            }

            else {

                await themeHandler.setTheme(newTheme);

                let vm = this.$parent
                while(vm) {
                vm.$forceUpdate();
                vm = vm.$parent
                }

            }
        }    
    },
    async created() {
        await this.applyCategory(this.previewCategory); 
    },
}
</script>
