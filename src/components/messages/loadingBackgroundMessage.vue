<template>

    <div id="loadingBackground">
      <div id="loadingInner">
        <div id="loadingLogo"> 
          <spinnerAnimation></spinnerAnimation> 
        </div>  
      <p>Loading</p>
      <p>Theme...</p>
      </div>
    </div>

</template>

<style lang="scss">

#loadingBackground {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: var(--surface1);
  z-index: -1;
}
#loadingInner {
  background: transparent;
  color: var(--onSurface);
  position: fixed;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
  top: 19rem;
  padding: 5.2rem 1.5rem 1rem 1.5rem;
  border-radius: calc(var(--baseBorderRadius)*1);
  font-size: calc(1.4rem * var(--largeText));
  line-height: 1.8;
  text-align: center;
  z-index: 2;
  white-space: nowrap;
}
#loadingLogo {
  stroke: var(--onSurface);
  position: absolute;
  width: 2.4rem;
  height: 2.4rem;
  left: 50%;
  margin-left: -1.2rem;
  top: 1.4rem;
}

</style>

<script>
export default {
    name: "loadingBackground",
}
</script>