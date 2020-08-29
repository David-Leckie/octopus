export default {
  
state: () => ({ 
    theme: '', 
    backgroundPicture: false,
    safeLogo: false,
    orientation: '',
    themeCategory: '',
    themeFolder: '',
    previewCategory: '', 
}),

  mutations: {
    changeTheme: (state, theme) => {
        state.theme = theme;
    },
    changeBackgroundPicture: (state, backgroundPicture) => {
        state.backgroundPicture = backgroundPicture;
    },
    changeSafeLogo: (state, safeLogo) => {
        state.safeLogo = safeLogo;
    },
    changeOrientation: (state, orientation) => {
        state.orientation = orientation;
    },
    changeThemeCategory: (state, themeCategory) => {
        state.themeCategory = themeCategory;
    },
    changeThemeFolder: (state, themeFolder) => {
        state.themeFolder = themeFolder;
    },
    changePreviewCategory: (state, previewCategory) => {
        state.previewCategory = previewCategory;
    },
  },

  //actions: { ... },

  //getters: { ... }
}