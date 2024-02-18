<script setup lang="ts">
import SearchPokemon from '@/components/SaerchPokenmon.vue'
import LoadingComponent from '@/components/common/LoadingComponent.vue'
import GraphqlResultErrorComponent from '@/components/common/GraphqlResultErrorComponent.vue'
import PokemonList from '@/components/PokemonList.vue'

const pokemon = defineModel('pokemon')
</script>

<template>
  <div class="container">
    <SearchPokemon v-model:search="pokemon" />

    useQuery
    <ApolloQuery
      :query="gql => gql`
         query GetFuzzyPokemon($pokemon: String!){
            getFuzzyPokemon(pokemon: $pokemon){
              ...pokemonList
            }
         }
         ${PokemonList.fragment}
        `"
      :variables="{pokemon}"
      :skip="!pokemon"
    >
      <template v-slot="{result: {error, data}, isLoading}">
        <LoadingComponent :is-loading="isLoading" />
        <GraphqlResultErrorComponent :error="error" :data-errors="data?.errors" />
        <div v-if="data">
          <PokemonList :pokemon-list="data.getFuzzyPokemon" />
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
