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

            button1Colour: bc1.primaryVariant,   //options: primary, primaryVariant, secondary, secondaryVariant, surface, onBackground

            button2Colour: bc2.primary,  //options: primary, primaryVariant, secondary, secondaryVariant, surface, onBackground
        
        },

        variables: {

            ///Palette

            background: 'rgb(255,252,243)',

            surfaceR: '255', surfaceG: '255', surfaceB: '243', // to be processed by dark preset

            primary: 'rgb(50,65,105)',
            primaryVariant: 'rgb(31,45,80)',
            secondary: 'rgb(255,237,39)',
            secondaryVariant: 'rgb(145,127,0)',
            input: 'rgb(243,238,233)',
            error: 'rgb(150,30,0)',

            filterA: 'rgba(0,0,0, 0)',

            onBackgroundBase: '31,45,80', // to be processed by dark preset

            onBackground: 'rgb(31,45,80)',
            onContrast: 'rgb(255,255,255)',

            ///Element Colours

            bannerColour: 'var(--background)',

            topLogoColour: 'var(--primary)',

            searchBoxUnderlineColour: 'var(--primaryVariant)',

            sortMenuUnderlineColour: 'var(--primary)',

            sitesListBackground: 'var(--filterA)',
            sitesListBackgroundBeforeResults: 'transparent',

            siteTitleColour: 'var(--primary)',
            siteURLColour: 'var(--secondaryVariant)',

            messageLogoColour: 'var(--primary)',

            ///Other

            baseBorderRadius: '0.5rem',

            portraitBackgroundHeight: '118vh',
            landscapeBackgroundHeight: '134vh',

        },
        
        category: 

            `LightArt`,

        backgroundPicture: 
        
            true,

        safeLogo:
        
            false


}



