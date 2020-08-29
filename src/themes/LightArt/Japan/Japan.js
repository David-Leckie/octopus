import l from '../../presets/lightness.js'
import b from '../../presets/banner.js'
import d from '../../presets/depth.js'
import bc1 from '../../presets/button1Colours.js'
import bc2 from '../../presets/button2Colours.js'

export default {

        presets: {

            lightness: l.light,         //options: light, dark

            banner: b.halfbanner,         //options: fullbanner, halfbanner, nobanner

            depth: d.shallow,              //options: flat, shallow, standard, deep

            button1Colour: bc1.primaryVariant,   //options: primary, primaryVariant, secondary, secondaryVariant, surface, onBackground

            button2Colour: bc2.primaryVariant,  //options: primary, primaryVariant, secondary, secondaryVariant, surface, onBackground
        
        },

        variables: {

            ///Palette

            background: 'rgb(255,255,255)',

            surfaceR: '250', surfaceG: '250', surfaceB: '250', // to be processed by dark preset

            primary: 'rgb(94,159,161)',
            primaryVariant: 'rgb(20,80,92)',
            secondary: 'rgb(25,100,112)',
            secondaryVariant: 'rgb(160,160,160)',
            input: 'rgb(248,248,248)',
            error: 'rgb(139,0,0)',

            filterA: 'rgba(255,255,255, 0.2)',

            onBackgroundBase: '20,80,92', // to be processed by dark preset

            onBackground: 'rgb(20,80,92)',
            onContrast: 'rgb(255,255,255)',
            
            ///Elements Colours

            bannerColour: 'var(--background)',

            topLogoColour: 'var(--primaryVariant)',

            searchBoxUnderlineColour: 'var(--primaryVariant)',

            sortMenuUnderlineColour: 'var(--primary)',

            sitesListBackground: 'var(--filterA)',
            sitesListBackgroundBeforeResults: 'transparent',

            siteTitleColour: 'var(--secondary)',
            siteURLColour: 'var(--primary)',

            messageLogoColour: 'var(--primaryVariant)',

            ///Other

            baseBorderRadius: '0.5rem',

            portraitBackgroundHeight: '124vh',
            landscapeBackgroundHeight: '134vh',

        },
        
        category: 

            `LightArt`,

        backgroundPicture: 
        
            true,

        safeLogo:
        
            false


}



