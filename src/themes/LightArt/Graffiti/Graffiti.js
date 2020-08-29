import l from '../../presets/lightness.js'
import b from '../../presets/banner.js'
import d from '../../presets/depth.js'
import bc1 from '../../presets/button1Colours.js'
import bc2 from '../../presets/button2Colours.js'

export default {

        presets: {

            lightness: l.light,         //options: light, dark

            banner: b.fullbanner,         //options: fullbanner, halfbanner, nobanner

            depth: d.standard,              //options: flat, shallow, standard, deep

            button1Colour: bc1.primary,   //options: primary, primaryVariant, secondary, secondaryVariant, surface, onBackground

            button2Colour: bc2.primaryVariant,  //options: primary, primaryVariant, secondary, secondaryVariant, surface, onBackground
        
        },

        variables: {

            ///Palette

            background: 'rgb(255,255,255)',

            surfaceR: '255', surfaceG: '255', surfaceB: '255', // to be processed by dark preset

            primary: 'rgb(8,110,126)',
            primaryVariant: 'rgb(4,55,65)',
            secondary: 'rgb(2,113,107)',
            secondaryVariant: 'rgb(254,1,110)',
            input: 'rgb(245,248,248)',
            error: 'rgb(174,27,82)',

            filterA: 'rgba(0,0,0, 0.25)',

            onBackgroundBase: '4,55,65', // to be processed by dark preset

            onBackground: 'rgb(4,55,65)',
            onContrast: 'rgb(255,255,255)',
            
            ///Elements Colours

            bannerColour: 'var(--background)',

            topLogoColour: 'var(--primaryVariant)',

            searchBoxUnderlineColour: 'var(--primaryVariant)',

            sortMenuUnderlineColour: 'var(--primary)',

            sitesListBackground: 'var(--filterA)',
            sitesListBackgroundBeforeResults: 'transparent',

            siteTitleColour: 'var(--primary)',
            siteURLColour: 'var(--secondary)',

            messageLogoColour: 'var(--primaryVariant)',

            ///Other

            baseBorderRadius: '0rem',

            portraitBackgroundHeight: '126vh',
            landscapeBackgroundHeight: '134vh',

        },
        
        category: 

            `LightArt`,

        backgroundPicture: 
        
            true,

        safeLogo:
    
            false


}



