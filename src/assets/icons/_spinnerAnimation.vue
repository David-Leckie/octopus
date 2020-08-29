<template>
    <div>
        <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45"/>
        </svg>
    </div>
</template>

<script>
    export default {
        name: "spinnerAnimation",
    }
</script>

<style lang="scss" scoped>
// SVG styles.
svg {
  animation: 1.4s linear infinite svg-animation;
  max-width: 100px;
}

// SVG animation.
@keyframes svg-animation {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg)
  }
}

// Circle styles.
circle {
  animation: 1.4s ease-in-out infinite both circle-animation;
  display: block;
  fill: transparent;
  //stroke: grey;
  stroke-linecap: round;
  stroke-dasharray: 283;
  stroke-dashoffset: 280;
  stroke-width: 10px;
  transform-origin: 50% 50%;
}

// Circle animation.
@keyframes circle-animation {
  0%,
  25% {
    stroke-dashoffset: 280;
    transform: rotate(0);
  }
  
  50%,
  75% {
    stroke-dashoffset: 75;
    transform: rotate(45deg);
  }
  
  100% {
    stroke-dashoffset: 280;
    transform: rotate(360deg);
  }
}
</style>
