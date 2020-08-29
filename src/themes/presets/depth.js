
export default {

    dark:

        `
        --boxShadowStandard: none;
        --boxShadowFlat: none;
        --boxShadowThinBorder: none;
        --boxShadowBanner: none;
        --messageShadow: none;
        --siteShadow: none;       
        ` 
    ,     

    flat:

        `
        --boxShadowStandard: -1px 1px 5px var(--onBackground);
        --boxShadowFlat: -1px 1px 3px var(--onBackground);
        --boxShadowThinBorder: 0px 0px 1px var(--onBackground);
        --boxShadowBanner: none;
        --messageShadow: var(--boxShadowThinBorder);
        --siteShadow: none;       
        ` 
    , 
        
    shallow:

        `
        --boxShadowStandard: -1px 1px 5px var(--onBackground);
        --boxShadowFlat: -1px 1px 2px var(--onBackground);
        --boxShadowThinBorder: 0px 0px 1px var(--onBackground);
        --boxShadowBanner: 0px 0px 4px var(--onBackground);
        --messageShadow: var(--boxShadowFlat);
        --siteShadow: var(--boxShadowFlat);        
        `  
    ,

    standard:

        `
        --boxShadowStandard: -1px 1px 5px var(--onBackground);
        --boxShadowFlat: -1px 1px 3px var(--onBackground);
        --boxShadowThinBorder: 0px 0px 1px var(--onBackground);
        --boxShadowBanner: 0px 0px 9px var(--onBackground);
        --messageShadow: var(--boxShadowFlat);  
        --siteShadow: var(--boxShadowFlat);              
        `  
    ,

    deep:

        `
        --boxShadowStandard: -1px 1px 6px var(--onBackground);
        --boxShadowFlat: -1px 1px 4px var(--onBackground);
        --boxShadowThinBorder: 0px 0px 1px var(--onBackground);
        --boxShadowBanner: 0px 0px 9px var(--onBackground);
        --messageShadow: var(--boxShadowFlat);  
        --siteShadow: var(--boxShadowFlat);              
        `  
    ,
}



