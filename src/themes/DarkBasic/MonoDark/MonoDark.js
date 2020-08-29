import l from '../../presets/lightness.js'
import b from '../../presets/banner.js'
import d from '../../presets/depth.js'
import bc1 from '../../presets/button1Colours.js'
import bc2 from '../../presets/button2Colours.js'

export default {

        presets: {

            lightness: l.dark,         //options: light, dark

            banner: b.halfbanner,         //options: fullbanner, halfbanner, nobanner

            depth: d.dark,              //options: dark, flat, shallow, standard, deep

            button1Colour: bc1.surface,   //options: primary, primaryVariant, secondary, secondaryVariant, surface, onBackground

            button2Colour: bc2.surface,  //options: primary, primaryVariant, secondary, secondaryVariant, surface, onBackground
        
        },

        variables: {

            ///Palette

            background: 'rgb(15,15,15)',

            surfaceR: '15', surfaceG: '15', surfaceB: '15', // to be processed by dark preset

            primary: 'rgb(222,222,222)',
            primaryVariant: 'rgb(177,177,177)',
            secondary: 'rgb(97,97,97)',
            secondaryVariant: 'rgb(160,160,160)',
            input: 'rgb(25,25,25)',
            error: 'rgb(110,110,110)',

            filterA: 'rgba(0,0,0, 0)',

            onBackgroundBase: '255,255,255', // to be processed by dark preset

            onBackground: 'rgb(255,255,255)',
            onContrast: 'rgb(0,0,0)',
            
            ///Elements Colours

            bannerColour: 'var(--background)',

            topLogoColour: 'var(--primary)',

            searchBoxUnderlineColour: 'var(--onSurface)',

            sortMenuUnderlineColour: 'var(--primary)',

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

            `DarkBasic`,

        backgroundPicture: 
        
            false,

        safeLogo:
    
            true


}



