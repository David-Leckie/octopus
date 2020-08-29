import store from '../store/store.js'
import themeSelector from './themeSelector.js'

export default {

    setTheme: async function(theme) {

        //default theme

        if (store.state.theme.theme == '') {
        await store.commit('changeTheme', 'wave');
        var t = await themeSelector.selectTheme();
        await store.commit('changeThemeCategory', t.category);
        await store.commit('changeThemeFolder', 'Wave');
        await store.commit('changeBackgroundPicture', t.backgroundPicture);
        } 

        //use newly selected theme

        else {
        await store.commit('changeBackgroundPicture', false);
        await store.commit('changeTheme', theme);
        var t = await themeSelector.selectTheme();
        await store.commit('changeThemeCategory', t.category);
        await store.commit('changeThemeFolder', 
        theme.split('-').map((kebab) => kebab.charAt(0).toUpperCase() + kebab.slice(1)).join(''));
        await store.commit('changeBackgroundPicture', t.backgroundPicture);
        await store.commit('changeSafeLogo', t.safeLogo);
        }
        
        await this.applyTheme();
        await store.commit('changeSettingsMenu', false)
        
    },

    applyTheme: async function() {  

        let t = await themeSelector.selectTheme();
        let v = await t.variables;
        let p = await t.presets;

        document.getElementById("superRoot").style = `
        
        --background:${v.background};
        --surfaceR:${v.surfaceR}; --surfaceG:${v.surfaceR}; --surfaceB:${v.surfaceR};
        --primary:${v.primary};
        --primaryVariant:${v.primaryVariant};
        --secondary:${v.secondary};
        --secondaryVariant:${v.secondaryVariant};
        --input:${v.input};
        --error:${v.error};
        --filterA:${v.filterA};
        --onBackgroundBase:${v.onBackgroundBase};
        --onBackground:${v.onBackground};
        --onContrast:${v.onContrast};

        --baseBorderRadius:${v.baseBorderRadius};

        --portraitBackgroundHeight:${v.portraitBackgroundHeight};
        --landscapeBackgroundHeight:${v.landscapeBackgroundHeight};

        --bannerColour:${v.bannerColour};
        --topLogoColour:${v.topLogoColour};

        --searchBoxUnderlineColour:${v.searchBoxUnderlineColour};
        --sortMenuUnderlineColour:${v.sortMenuUnderlineColour};

        --sitesListBackground:${v.sitesListBackground};
        --sitesListBackgroundBeforeResults:${v.sitesListBackgroundBeforeResults};
        --backgroundSolidL:${v.backgroundSolidL};
        --backgroundSolidR:${v.backgroundSolidR};
        
        --siteTitleColour:${v.siteTitleColour};
        --siteURLColour:${v.siteURLColour};

        --messageLogoColour:${v.messageLogoColour};
        
        ${p.depth}
        ${p.button1Colour}
        ${p.button2Colour}       
        
        ${p.lightness}
        ${p.banner}


        `;
    },
}