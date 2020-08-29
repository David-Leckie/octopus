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

            button2Colour: bc2.primary,  //options: primary, primaryVariant, secondary, secondaryVariant, surface, onBackground
        
        },

        variables: {

            ///Palette

            background: 'rgb(254,253,242)',

            surfaceR: '250', surfaceG: '255', surfaceB: '255', // to be processed by dark preset

            primary: 'rgb(110,130,175)',
            primaryVariant: 'rgb(40,50,120)',
            secondary: 'rgb(89,95,78)',
            secondaryVariant: 'rgb(254,1,110)',
            input: 'rgb(250,255,255)',
            error: 'rgb(94,40,10)',

            filterA: 'rgba(0,0,0, 0)',

            onBackgroundBase: '40,50,120', // to be processed by dark preset

            onBackground: 'rgb(40,50,120)',
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

            messageLogoColour: 'var(--primary)',

            ///Other

            baseBorderRadius: '0.7rem',

            portraitBackgroundHeight: '122vh',
            landscapeBackgroundHeight: '134vh',

        },
        
        category: 

            `LightArt`,

        backgroundPicture: 
        
            true,

        safeLogo:
        
            false


}



