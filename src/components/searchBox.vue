<template>
        <form>
          <button type="submit" style="visibility: hidden" @click.prevent="setSearchTerms(searchText)"></button>
          <input type="text" id="searchBox" v-model="searchText" placeholder="Search..." v-on:keyup.enter="$event.target.blur()" maxlength="50">
        </form>
</template>

<style lang="scss">

#searchBox {
  color: var(--onSurface);
  box-sizing: border-box; 
  position: absolute;
  left: 3.6rem;
  top: 0rem;
  width: 80%; 
  height: 4rem;
  padding: 1.2rem 0.5rem 1.2rem 0.5rem; 
  border-style: none;
  background: transparent;
  outline: none;
  font-size: calc(1.6rem * var(--largeText));
}
input::placeholder {
  color: var(--onSurface);
}

</style>

<script>


import fakenetwork from '../fake_interface.js';

export default {

    name: "searchBox",

    computed: {
        searchText: {
            get() {
                return this.$store.state.searchterms.searchText;
            },
            set(searchText) {
                this.$store.commit('changeSearchText', searchText)
            },
        },     
    },

    methods: {

    setSearchTerms: async function(text) {
      this.$router.push({ name: 'front-page',  params: {passedText: text}})
      await this.timeout(5);
      await this.handlePassedSearchTerms();
    },
    handlePassedSearchTerms: async function() {
      let passedText = await this.$route.params.passedText;
      try {
        if (passedText == null) {
            return
        }
        else {
            await this.primeSearchBox(passedText);
            await this.showSearchStatusMessage('Searching...');
            let vuexSites = await this.filterBySearchTerm(passedText);
            this.$store.commit('changeSites', vuexSites);
            await this.$emit('display-results')
        }
      }
      catch (err) {
        await this.showSearchStatusMessage('Search Error...');
        return
      }      
    },
    primeSearchBox: async function(passedText) {
        this.$store.commit('changeSearchText', passedText);
    },

    filterBySearchTerm: async function(xText) {

      window.scrollTo(0, 0);
      
        let uvsites = await fakenetwork.getItems();
        let ufsites = await uvsites.filter(uvsite => (uvsite.value.verified == "Yes"));
        var searchTextArray = xText.split(" ");
        let filteredSites1 = await ufsites.filter((ufsite) => {
          let position2 = ufsite.value.name.search(new RegExp("\\b"+searchTextArray[0]+"\\b", "i"));
          let position1 = ufsite.value.description.search(new RegExp("\\b"+searchTextArray[0]+"\\b", "i"));
          let position3 = ufsite.value.keywords.search(new RegExp("\\b"+searchTextArray[0]+"\\b", "i"));
          if ((position1 + position2 + position3) > -3) {
            return ufsite
          }
        });
        let filteredSites2 = await filteredSites1.filter((filSite1) => {
          let position2 = filSite1.value.name.search(new RegExp("\\b"+searchTextArray[1]+"\\b", "i"));
          let position1 = filSite1.value.description.search(new RegExp("\\b"+searchTextArray[1]+"\\b", "i"));
          let position3 = filSite1.value.keywords.search(new RegExp("\\b"+searchTextArray[1]+"\\b", "i"));
          if ((position1 + position2 + position3) > -3) {
            return filSite1
          }
        });
        let filteredSites3 = await filteredSites2.filter((filSite2) => {
          let position2 = filSite2.value.name.search(new RegExp("\\b"+searchTextArray[2]+"\\b", "i"));
          let position1 = filSite2.value.description.search(new RegExp("\\b"+searchTextArray[2]+"\\b", "i"));
          let position3 = filSite2.value.keywords.search(new RegExp("\\b"+searchTextArray[2]+"\\b", "i"));
          if ((position1 + position2 + position3) > -3) {
            return filSite2
          }
        });
        let filteredSites4 = await filteredSites3.filter((filSite3) => {
          let position2 = filSite3.value.name.search(new RegExp("\\b"+searchTextArray[3]+"\\b", "i"));
          let position1 = filSite3.value.description.search(new RegExp("\\b"+searchTextArray[3]+"\\b", "i"));
          let position3 = filSite3.value.keywords.search(new RegExp("\\b"+searchTextArray[3]+"\\b", "i"));
          if ((position1 + position2 + position3) > -3) {
            return filSite3
          }
        });
        let filteredSites5 = await filteredSites4.filter((filSite4) => {
          let position2 = filSite4.value.name.search(new RegExp("\\b"+searchTextArray[4]+"\\b", "i"));
          let position1 = filSite4.value.description.search(new RegExp("\\b"+searchTextArray[4]+"\\b", "i"));
          let position3 = filSite4.value.keywords.search(new RegExp("\\b"+searchTextArray[4]+"\\b", "i"));
          if ((position1 + position2 + position3) > -3) {
            return filSite4
          }
        });
        let filteredSites6 = await filteredSites5.filter((filSite5) => {
          let position2 = filSite5.value.name.search(new RegExp("\\b"+searchTextArray[5]+"\\b", "i"));
          let position1 = filSite5.value.description.search(new RegExp("\\b"+searchTextArray[5]+"\\b", "i"));
          let position3 = filSite5.value.keywords.search(new RegExp("\\b"+searchTextArray[5]+"\\b", "i"));
          if ((position1 + position2 + position3) > -3) {
            return filSite5
          }
        });
        let filteredSites7 = await filteredSites6.filter((filSite6) => {
          let position2 = filSite6.value.name.search(new RegExp("\\b"+searchTextArray[6]+"\\b", "i"));
          let position1 = filSite6.value.description.search(new RegExp("\\b"+searchTextArray[6]+"\\b", "i"));
          let position3 = filSite6.value.keywords.search(new RegExp("\\b"+searchTextArray[6]+"\\b", "i"));
          if ((position1 + position2 + position3) > -3) {
            return filSite6
          }
        });

        let searchWords = await searchTextArray.length;
        if (searchWords > 1) {
          window.filteredSites8 = await ufsites.filter((ufsite) => {
            let position2 = ufsite.value.name.search(new RegExp("\\b"+searchTextArray[1]+"\\b", "i"));
            let position1 = ufsite.value.description.search(new RegExp("\\b"+searchTextArray[1]+"\\b", "i"));
            let position3 = ufsite.value.keywords.search(new RegExp("\\b"+searchTextArray[1]+"\\b", "i"));
            if ((position1 + position2 + position3) > -3) {
              return ufsite
            }
        })}
        else {
          window.filteredSites8 = []
        };
        if (searchWords > 2) {
          window.filteredSites9 = await ufsites.filter((ufsite) => {
            let position2 = ufsite.value.name.search(new RegExp("\\b"+searchTextArray[2]+"\\b", "i"));
            let position1 = ufsite.value.description.search(new RegExp("\\b"+searchTextArray[2]+"\\b", "i"));
            let position3 = ufsite.value.keywords.search(new RegExp("\\b"+searchTextArray[2]+"\\b", "i"));
            if ((position1 + position2 + position3) > -3) {
              return ufsite
            }
        })}
        else {
            window.filteredSites9 = []
        };
        if (searchWords > 3) {
          window.filteredSites10 = await ufsites.filter((ufsite) => {
            let position2 = ufsite.value.name.search(new RegExp("\\b"+searchTextArray[3]+"\\b", "i"));
            let position1 = ufsite.value.description.search(new RegExp("\\b"+searchTextArray[3]+"\\b", "i"));
            let position3 = ufsite.value.keywords.search(new RegExp("\\b"+searchTextArray[3]+"\\b", "i"));
            if ((position1 + position2 + position3) > -3) {
              return ufsite
            }
        })}
        else {
            window.filteredSites10 = []
        };
        this.sites = await Array.from(new Set(filteredSites7.concat(filteredSites6, filteredSites5, filteredSites4, filteredSites3,
        filteredSites2, filteredSites1, window.filteredSites8, window.filteredSites9, window.filteredSites10)));
        
        return this.sites;
      
    },

    },

    async created() {

    //await safenetwork.authoriseAndConnect();
    //await safenetwork.linkToMutableData();
    await this.handlePassedSearchTerms();

  },
}

</script>