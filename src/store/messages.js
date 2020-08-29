export default {
  
state: () => ({     
    alertMessageVisible: false, 
    alertMessage: '',
    searchStatusMessageVisible: false, 
    searchStatusMessage: '',
    networkMessagevisible: false, 
    networkMessage: '',
}),

  mutations: {
    changeAlertMessageVisible: (state, alertMessageVisible) => {
        state.alertMessageVisible = alertMessageVisible;
      },
    changeAlertMessage: (state, alertMessage) => {
        state.alertMessage = alertMessage;
    },
    changeSearchStatusMessageVisible: (state, searchStatusMessageVisible) => {
        state.searchStatusMessageVisible = searchStatusMessageVisible;
    },
    changeSearchStatusMessage: (state, searchStatusMessage) => {
        state.searchStatusMessage = searchStatusMessage;
    },
    changeNetworkMessageVisible: (state, networkMessageVisible) => {
        state.networkMessageVisible = networkMessageVisible;
      },
    changeNetworkMessage: (state, networkMessage) => {
        state.networkMessage = networkMessage;
    },
  },

  //actions: { ... },

  //getters: { ... }
}