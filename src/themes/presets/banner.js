
export default {

    fullbanner:

        `
        --banner: var(--background);
        --sortMenuWrapperBackground: var(--banner);
        --sortMenuBackground: var(--banner);
        --sortMenuBorderRadius: calc(var(--baseBorderRadius)*0.6) calc(var(--baseBorderRadius)*0.6) 0rem, 0rem;
        --sortMenuHeight: 3.4rem;
        --sortMenuBorderStyle: none none solid none;
        --bannerOffset: 0.6rem;
        --headerElementsHeight: 6.5rem;
        --searchElementsHeight: 6rem;
        --sortPanelHeight: 3.8rem;
        --topSplitBackgroundHeight: calc(var(--headerElementsHeight) + var(--searchElementsHeight) + var(--sortPanelHeight) + calc(var(--bannerOffset) * -1));
        --topSplitBackgroundHeightBeforeResults: calc(var(--headerElementsHeight) + var(--searchElementsHeight));

        --searchElementsBorderPre: var(--darkBorderColourOnly);
        --searchElementsBoxShadowPre: var(--boxShadowBanner);
        
        `  
        ,

    halfbanner:

        `
        --banner: var(--background);
        --sortMenuWrapperBackground: var(--banner);
        --sortMenuBackground: var(--banner);
        --sortMenuBorderRadius: calc(var(--baseBorderRadius)*0.6) calc(var(--baseBorderRadius)*0.6) 0rem, 0rem;
        --sortMenuHeight: 3.4rem;
        --sortMenuBorderStyle: none none solid none;
        --bannerOffset: 0.6rem;
        --headerElementsHeight: 6.5rem;
        --searchElementsHeight: 6rem;
        --sortPanelHeight: 3.8rem;
        --topSplitBackgroundHeight: calc(var(--headerElementsHeight) + var(--searchElementsHeight) + var(--sortPanelHeight) + calc(var(--bannerOffset) * -1));
        --topSplitBackgroundHeightBeforeResults: calc(var(--headerElementsHeight) + var(--searchElementsHeight));

        --searchElementsBorderPre: transparent;
        --searchElementsBoxShadowPre: none;

        `
        ,

    nobanner:

        `
        --banner: none;
        --sortMenuWrapperBackground: var(--sitesListBackground);
        --sortMenuBackground: var(--surface3);
        --sortMenuBorderRadius: calc(var(--baseBorderRadius)*0.6);
        --sortMenuHeight: 3rem;
        --sortMenuBorderStyle: solid;
        --bannerOffset: 0rem;
        --headerElementsHeight: 6.5rem;
        --searchElementsHeight: 6rem;
        --sortPanelHeight: 3.8rem;
        --topSplitBackgroundHeight: calc(var(--headerElementsHeight) + var(--searchElementsHeight) + var(--sortPanelHeight) + calc(var(--bannerOffset) * -1));
        --topSplitBackgroundHeightBeforeResults: calc(var(--headerElementsHeight) + var(--searchElementsHeight));

        --searchElementsBorderPre: transparent;
        --searchElementsBoxShadowPre: none;
        
        `           

}



