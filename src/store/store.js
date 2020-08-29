import Vue from 'vue'
import Vuex from 'vuex'

import messages from './messages.js'
import menus from './menus.js'
import searchterms from './searchterms.js'
import theme from './theme.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        messages: messages,
        menus: menus,
        searchterms: searchterms,
        theme: theme,
      }
})
