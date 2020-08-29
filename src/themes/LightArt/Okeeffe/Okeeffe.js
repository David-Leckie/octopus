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

            background: 'rgb(255,247,225)',

            surfaceR: '255', surfaceG: '255', surfaceB: '248', // to be processed by dark preset

            primary: 'rgb(165,33,9)',
            primaryVariant: 'rgb(90,40,0)',
            secondary: 'rgb(60,15,0)',
            secondaryVariant: 'rgb(160,160,160)',
            input: 'rgb(255,255,248)',
            error: 'rgb(130,0,0)',

            filterA: 'rgba(40,20,0, 0.6)',

            onBackgroundBase: '90,40,0', // to be processed by dark preset

            onBackground: 'rgb(90,40,0)',
            onContrast: 'rgb(255,255,250)',
            
            ///Element Colours

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

            portraitBackgroundHeight: '118vh',
            landscapeBackgroundHeight: '130vh',

        },
        
        category: 

            `LightArt`,

        backgroundPicture: 
        
            true,

        safeLogo:
        
            false


}



