export default {
  
state: () => ({     
    sites: [], 
    searchText: '',
}),

  mutations: {
      changeSites: (state, sites) => {
        state.sites = sites;
      },
      changeSearchText: (state, searchText) => {
        state.searchText = searchText;
      },
  },

  //actions: { ... },

  //getters: { ... }
}