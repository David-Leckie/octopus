
export default {

    dark:

        `
        --surface1: rgb(calc(var(--surfaceR) + 0),calc(var(--surfaceG) + 0),calc(var(--surfaceB) + 0));
        --surface2: rgb(calc(var(--surfaceR) + 5),calc(var(--surfaceG) + 5),calc(var(--surfaceB) + 5));
        --surface3: rgb(calc(var(--surfaceR) + 10),calc(var(--surfaceG) + 10),calc(var(--surfaceB) + 10));
        --surface4: rgb(calc(var(--surfaceR) + 15),calc(var(--surfaceG) + 15),calc(var(--surfaceB) + 15));
        --surface5: rgb(calc(var(--surfaceR) + 20),calc(var(--surfaceG) + 20),calc(var(--surfaceB) + 20));
        --onSurfaceSolid: rgba(var(--onBackgroundBase),1); 
        --onSurfaceBold: rgba(var(--onBackgroundBase),0.87); 
        --onSurface: rgba(var(--onBackgroundBase),0.6); 
        --onSurfaceDisabled: rgba(var(--onBackgroundBase),0.38);
        --darkBorder: 0.1rem solid rgba(255,255,255,0.04);
        --darkBorderColourOnly: rgba(255,255,255,0.04);
        --bannerBorderWidth: 0.1rem;
        ` 
         , 
        
    light:

        `
        --surface1: rgb(calc(var(--surfaceR) + 0),calc(var(--surfaceG) + 0),calc(var(--surfaceB) + 0));
        --surface2: var(--surface1);
        --surface3: var(--surface1);
        --surface4: var(--surface1);
        --surface5: var(--surface1);
        --onSurfaceSolid: rgba(var(--onBackgroundBase),1); 
        --onSurfaceBold: rgba(var(--onBackgroundBase),1); 
        --onSurface: rgba(var(--onBackgroundBase),1); 
        --onSurfaceDisabled: rgba(var(--onBackgroundBase),1);
        --darkBorder: 0rem solid rgba(0,0,0,0);
        --darkBorderColourOnly: transparent;
        --bannerBorderWidth: 0rem;

        `  
    

}



