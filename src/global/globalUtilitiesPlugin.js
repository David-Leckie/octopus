import store from '../store/store.js'

export default {

    install(Vue) {

        Vue.mixin ({

            methods: {

                hideCover: async function() {
                    window.onload = () => {
                      loadingCover.className = "hide";
                    } 
                },

                timeout: function(ms) {
                    return new Promise(resolve => setTimeout(resolve, ms))
                },    
        
                showAlertMessage: async function(passedMessage) {
                    await this.timeout(5)
                    store.commit('changeAlertMessage', passedMessage)
                    store.commit('changeAlertMessageVisible', true)
                },
                showSearchStatusMessage: async function(passedMessage) {
                    await this.timeout(5);
                    store.commit('changeSearchStatusMessage', passedMessage)
                    store.commit('changeSearchStatusMessageVisible', true)
                },
        
        
                toggleSettingsMenu: async function(settingsMenuVisible) {
                    await this.timeout(5)
                    store.commit('changeSettingsMenu', !settingsMenuVisible)
                }
            },

            async created() {

                //await themeHandler.setTheme()
                await this.hideCover()
            
              },
            
        })
    }
}