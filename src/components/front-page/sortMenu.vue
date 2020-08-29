<template>
      <div id="sortMenuWrapper">
        <div id="sortMenu">
          <div id="allResultsButton" class="sortMenuButton" :class="{underlineSortMenuButton:rankSortActive}" @click.prevent="selectRankSort()">
            RANK
          </div>
          <div id="imagesResultsButton" class="sortMenuButton" :class="{underlineSortMenuButton:alphabetSortActive}" @click.prevent="selectAlphabetSort()">
            ALPHABET
          </div>
          <div id="videoResultsButton" class="sortMenuButton" :class="{underlineSortMenuButton:dateSortActive}" @click.prevent="selectDateSort()">
            DATE
          </div>
        </div>
      </div>
</template>

<style lang="scss">

#sortMenuWrapper {
    background: var(--sortMenuWrapperBackground);
    border-style: var(--sortMenuBorderStyle);
    border-width: var(--bannerBorderWidth);
    border-color: var(--darkBorderColourOnly);
    box-sizing: border-box;
    position: absolute;
    width: 98%;
    max-width: 62rem;
    height: var(--sortPanelHeight);
    margin: 0rem 0rem 0rem 1%;
    border-radius: calc(var(--baseBorderRadius)*1) calc(var(--baseBorderRadius)*1) 0rem 0rem;
    z-index: 3;
}
#sortMenu {
    background: var(--sortMenuBackground);
    height: var(--sortMenuHeight);
    line-height: var(--sortMenuHeight);
    border-radius: var(--sortMenuBorderRadius);
    border-style: var(--sortMenuBorderStyle);
    border-width: var(--bannerBorderWidth);
    border-color: var(--darkBorderColourOnly);
    box-sizing: border-box;
    position: absolute;
    width: 92%;
    max-width: 55rem;
    margin: 0.4rem 0rem 0rem 4%; 
    text-align: center;
    font-weight: bold;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
}
.sortMenuButton {
    height: var(--sortMenuHeight);
    line-height: var(--sortMenuHeight); 
    color: var(--onSurface);
    border-color: transparent;
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    width: auto;
    padding: 0rem 3% 0% 3%;
    margin: 0rem 4% 0% 4%;
    border-style: none none solid none;
    border-width: 0.3rem;
    text-align: center;
    font-size: calc(1.2rem * var(--largeText));
    cursor: pointer;
}
.underlineSortMenuButton {
    border-color: var(--sortMenuUnderlineColour);
}

</style>

<script>

export default {

    name: "sortMenu",

    data() {
        return {

            rankSortActive: true, alphabetSortActive: false, dateSortActive: false,

        }
    },

    computed: {
        sites() {
            return this.$store.state.searchterms.sites;
        },      
    },

    methods: {

        clearSortPanel: async function() {
            this.rankSortActive = false;
            this.alphabetSortActive = false;
            this.dateSortActive = false;
        },
        selectRankSort: async function() {
            await this.clearSortPanel();
            await this.showAlertMessage('Coming Soon...');
            this.rankSortActive = true;
        },
        selectAlphabetSort: async function() {
            await this.clearSortPanel();
            this.sites.sort((a, b) => a.value.name.localeCompare(b.value.name))
            this.alphabetSortActive = true;
        },
        selectDateSort: async function() {
            await this.clearSortPanel();
            //await this.sites.sort((a, b) => a.value.dateAdded.localeCompare(b.value.dateAdded)),
            //await this.sites.reverse()
            await this.showAlertMessage('Coming Soon...');
            this.dateSortActive = true;
        },
    }
}

</script>