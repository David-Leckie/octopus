export default {
  
state: () => ({     
    settingsMenu: false, 
}),

  mutations: {
    changeSettingsMenu: (state, settingsMenu) => {
        state.settingsMenu = settingsMenu;
      },
  },

  //actions: { ... },

  //getters: { ... }
}