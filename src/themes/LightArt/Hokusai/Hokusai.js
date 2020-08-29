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

            primary: 'rgb(45,104,146)',
            primaryVariant: 'rgb(29,58,90)',
            secondary: 'rgb(119,120,115)',
            secondaryVariant: 'rgb(160,160,160)',
            input: 'rgb(255,255,255)',
            error: 'rgb(130,0,0)',

            filterA: 'rgba(0,0,0, 0.6)',

            onBackgroundBase: '29,58,90', // to be processed by dark preset

            onBackground: 'rgb(29,58,90)',
            onContrast: 'rgb(255,255,255)',
            
            ///Elements Colours

            bannerColour: 'var(--background)',

            topLogoColour: 'var(--primaryVariant)',

            searchBoxUnderlineColour: 'transparent',

            sortMenuUnderlineColour: 'var(--primary)',

            sitesListBackground: 'var(--filterA)',
            sitesListBackgroundBeforeResults: 'transparent',

            siteTitleColour: 'var(--primary)',
            siteURLColour: 'var(--secondary)',

            messageLogoColour: 'var(--primaryVariant)',

            ///Other

            baseBorderRadius: '0.4rem',

            portraitBackgroundHeight: '118vh',
            landscapeBackgroundHeight: '114vh',

        },
        
        category: 

            `LightArt`,

        backgroundPicture: 
        
            true,

        safeLogo:
        
            false


}



