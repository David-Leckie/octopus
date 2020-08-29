import l from '../../presets/lightness.js'
import b from '../../presets/banner.js'
import d from '../../presets/depth.js'
import bc1 from '../../presets/button1Colours.js'
import bc2 from '../../presets/button2Colours.js'

export default {

        presets: {

            lightness: l.light,         //options: light, dark

            banner: b.nobanner,         //options: fullbanner, halfbanner, nobanner

            depth: d.flat,              //options: flat, shallow, standard, deep

            button1Colour: bc1.primaryVariant,   //options: primary, primaryVariant, secondary, secondaryVariant, surface, onBackground

            button2Colour: bc2.primaryVariant,  //options: primary, primaryVariant, secondary, secondaryVariant, surface, onBackground
        
        },

        variables: {

            ///Palette

            background: 'rgb(255,255,255)',

            surfaceR: '255', surfaceG: '255', surfaceB: '255', // to be processed by dark preset

            primary: 'rgb(50,110,160)',
            primaryVariant: 'rgb(20,50,80)',
            secondary: 'rgb(23,73,91)',
            secondaryVariant: 'rgb(160,160,160)',
            input: 'rgb(255,255,255)',
            error: 'rgb(139,0,0)',

            filterA: 'rgba(0,0,0, 0.4)',

            onBackgroundBase: '20,50,80', // to be processed by dark preset

            onBackground: 'rgb(20,50,80)',
            onContrast: 'rgb(255,255,255)',

            ///Elements Colours

            bannerColour: 'var(--background)',

            topLogoColour: 'var(--background)',

            searchBoxUnderlineColour: 'transparent',

            sortMenuUnderlineColour: 'var(--primary)',

            sitesListBackground: 'var(--filterA)',
            sitesListBackgroundBeforeResults: 'transparent',

            siteTitleColour: 'var(--primary)',
            siteURLColour: 'var(--secondary)',

            messageLogoColour: 'var(--primary)',

            ///Other

            baseBorderRadius: '0.5rem',

            portraitBackgroundHeight: '124vh',
            landscapeBackgroundHeight: '130vh',


        },
        
        category: 

            `LightPhoto`,

        backgroundPicture: 
        
            true,

        safeLogo:

            false


}



