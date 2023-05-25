<script setup></script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <span class="navbar-brand text-primary"> Parc Automobile</span>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/home" class="nav-link">Accueil</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/add" class="nav-link">Ajouter une voiture</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/brand" class="nav-link"
                >Ajouter une marque</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/model" class="nav-link"
                >Ajouter un modele</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/category" class="nav-link"
                >Ajouter une categorie</router-link
              >
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-lite" type="submit">
              <i class="fas fa-search"></i>
            </button>
          </form>
        </div>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>

<style>
.navbar {
  background-color: black;
}

.navbar .nav-link {
  color: white;
}
</style>
