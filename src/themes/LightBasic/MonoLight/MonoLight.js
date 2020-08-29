import l from '../../presets/lightness.js'
import b from '../../presets/banner.js'
import d from '../../presets/depth.js'
import bc1 from '../../presets/button1Colours.js'
import bc2 from '../../presets/button2Colours.js'

export default {

        presets: {

            lightness: l.light,         //options: light, dark

            banner: b.halfbanner,         //options: fullbanner, halfbanner, nobanner

            depth: d.standard,              //options: flat, shallow, standard, deep

            button1Colour: bc1.surface,   //options: primary, primaryVariant, secondary, secondaryVariant, surface, onBackground

            button2Colour: bc2.surface,  //options: primary, primaryVariant, secondary, secondaryVariant, surface, onBackground
        
        },

        variables: {

            ///Palette

            background: 'rgb(255,255,255)',

            surfaceR: '255', surfaceG: '255', surfaceB: '255', // to be processed by dark preset

            primary: 'rgb(12,12,12)',
            primaryVariant: 'rgb(40,40,40)',
            secondary: 'rgb(140,140,140)',
            secondaryVariant: 'rgb(160,160,160)',
            input: 'rgb(248,248,248)',
            error: 'rgb(0,0,0)',

            filterA: 'rgba(0,0,0, 0)',

            onBackgroundBase: '0,0,0', // to be processed by dark preset

            onBackground: 'rgb(0,0,0)',
            onContrast: 'rgb(255,255,255)',
            
            ///Elements Colours

            bannerColour: 'var(--background)',

            topLogoColour: 'var(--primaryVariant)',

            searchBoxUnderlineColour: 'var(--onBackground)',

            sortMenuUnderlineColour: 'var(--secondary)',

            sitesListBackground: 'var(--filterA)',
            sitesListBackgroundBeforeResults: 'var(--filterA)',
            backgroundSolidL: 'var(--background)',
            backgroundSolidR: 'var(--background)',

            siteTitleColour: 'var(--primary)',
            siteURLColour: 'var(--secondary)',

            messageLogoColour: 'var(--primary)',

            ///Other

            baseBorderRadius: '0.5rem',

            portraitBackgroundHeight: '124vh',
            landscapeBackgroundHeight: '130vh',

        },
        
        category: 

            `LightBasic`,

        backgroundPicture: 
        
            false,

        safeLogo:

            true


}



