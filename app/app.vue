<template>
  <NuxtAnnouncer />
  <NuxtRouteAnnouncer />
  <NuxtPage />
</template>

<style lang="scss">
// Imports
@import '@/assets/fonts/fonts.css';

// Sass variables
$text-color: #fff;
$border-radius: 5px;

// Sass Mixins/Functions
@mixin headers {
  text-transform: uppercase;
  font-weight: 400;
}

@mixin form-components {
  border-radius: $border-radius;
  border: solid 1px $text-color;
  padding: 12px;
  font-family: 'Lora', serif;
  outline: none;
}

// Resests and defaults
html,
body {
  margin: 0;
  padding: 0;
  font-family: 'Lora', serif;
  color: $text-color;
  font-size: 14px;
}

h1 {
  @include headers;
  font-size: 40px;
}

h2 {
  @include headers;
  font-size: 20px;
}

form {
  input[type="text"] {
    @include form-components;
    width: 100%;
    color: $text-color;
    box-sizing: border-box;
    background-color: transparent;
  }

  button[type="submit"] {
    @include form-components;
    width: 100%;
    background-color: $text-color;
    text-transform: uppercase;
    font-weight: 700;
  }
}

// Custom classes
.gutter {
  padding: 64px 48px;
}
</style>
