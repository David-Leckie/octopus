
import store from '../store/store.js'

import MonoLight from './LightBasic/MonoLight/MonoLight.js'

import MonoDark from './DarkBasic/MonoDark/MonoDark.js'

import Wave from './LightPhoto/Wave/Wave.js'

import Hokusai from './LightArt/Hokusai/Hokusai.js'
import Graffiti from './LightArt/Graffiti/Graffiti.js'
import Monet from './LightArt/Monet/Monet.js'
import Japan from './LightArt/Japan/Japan.js'
import Okeeffe from './LightArt/Okeeffe/Okeeffe.js'
import Pop from './LightArt/Pop/Pop.js'

export default {

    selectTheme: async function() {

        let s = await store.state.theme.theme
            
        if(s=='wave') {
            var t = await Wave; 
        }
        else if(s=='mono-dark') {
            var t = await MonoDark
        }
        else if(s=='mono-light') {
            var t = await MonoLight
        }
        else if(s=='hokusai') {
            var t = await Hokusai
        } 
        else if(s=='graffiti') {
            var t = await Graffiti
        }               
        else if(s=='monet') {
            var t = await Monet
        } 
        else if(s=='japan') {
            var t = await Japan
        } 
        else if(s=='okeeffe') {
            var t = await Okeeffe
        } 
        else if(s=='pop') {
            var t = await Pop
        }

        return t
            
    },
}
