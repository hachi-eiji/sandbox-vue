<script setup lang="ts">

type FuzzyPokemon = {
  sprite: string;
  num: number;
  species: string;
  color: string;
};

const props = defineProps<{ pokemonList: FuzzyPokemon[] }>()
</script>

<script lang="ts">
import gql from 'graphql-tag'

export default {
  fragment: gql`
      fragment pokemonList on Pokemon {
        sprite
        num
        species
        color
      }
  `
}
</script>

<template>
  <div v-for="pokemon in props.pokemonList" :key="pokemon.num">
    <div>
      Name: {{ pokemon.species }}
    </div>
    <div>
      <img :src="pokemon.sprite" v-if="pokemon?.sprite" />
    </div>
  </div>
</template>

<style scoped>

</style>
