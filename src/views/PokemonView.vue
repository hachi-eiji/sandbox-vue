<script setup lang="ts">
import SearchPokemon from '@/components/SaerchPokenmon.vue'
import LoadingComponent from '@/components/common/LoadingComponent.vue'

const pokemon = defineModel('pokemon')
</script>

<!--<script lang="ts">-->
<!--import gql from 'graphql-tag'-->

<!--export default {-->
<!--  fragments: {-->
<!--    pokemonList: gql`-->
<!--      fragment pokemonList on Pokemon {-->
<!--          sprite-->
<!--          num-->
<!--          species-->
<!--          color-->
<!--      }-->
<!--    `-->
<!--  }-->
<!--}-->
<!--</script>-->

<template>
  <div class="container">
    <SearchPokemon v-model:search="pokemon" />

    <ApolloQuery
      :query="gql => gql`
       query GetFuzzyPokemon($pokemon: String!){
          getFuzzyPokemon(pokemon: $pokemon){
            sprite
            num
            species
            color
          }
       }
    `"
      :variables="{pokemon}"
      :skip="!pokemon"
    >
      <template v-slot="{result: {error, data}, isLoading}">
        <LoadingComponent :is-loading="isLoading" />
        <div v-if="error">
          <div v-for="(e,index) in data.errors" :key="index">
            {{ e.message}}
          </div>
        </div>
        <div v-else-if="data">
          <div v-for="pokemon in data.getFuzzyPokemon" :key="pokemon.num">
            <div>
              Name: {{ pokemon.species }}
            </div>
            <div>
              <img :src="pokemon.sprite" v-if="pokemon?.sprite" />
            </div>
          </div>
        </div>

        <div v-else> No result</div>
      </template>
      <!--    <PokemonList v-slot="{result: {loading, error, data}}" />-->
    </ApolloQuery>
  </div>
</template>

<style scoped>
.container {
  margin: 10px;
}
</style>
