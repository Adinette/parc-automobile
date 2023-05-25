<template>
  <div>
    <h1 class="" style="text-align: center; padding: 2rem">
      Ajouter une voiture
    </h1>
    <div class="d-flex justify-content-center">
      <form class="col-md-8 my-form" @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="inputMarque" class="form-label">Marque</label>
          <select
            v-model="selectedMarque"
            class="form-select"
            id="inputMarque"
            required
          >
            <option value="" disabled selected>Choisissez une marque</option>
            <option v-for="marque in mark" :key="marque.id" :value="marque">
              {{ marque }}
            </option>
          </select>
        </div>
        <div class="mb-3">
          <label for="inputCategorie" class="form-label">Catégorie</label>
          <select v-model="categorie" class="form-select" id="inputCategorie">
            <option value="">Sélectionnez une catégorie</option>
            <option
              v-for="categorie in categories"
              :value="categorie.id"
              :key="categorie.id"
              required
            >
              {{ categorie.label }}
            </option>
          </select>
        </div>
        <div class="mb-3">
          <label for="inputModele" class="form-label">Modèle</label>
          <select v-model="modele" class="form-select" id="inputModele">
            <option value="">Sélectionnez un modèle</option>
            <option
              v-for="modele in modeles"
              :value="modele.id"
              :key="modele.id"
              required
            >
              {{ modele.label }}
            </option>
          </select>
        </div>
        <div class="mb-3">
          <label for="inputAnnee" class="form-label">Année</label>
          <input
            v-model="annee"
            type="date"
            class="form-control"
            id="inputAnnee"
           minlength="3"
           maxlength="4"
            required
          />
        </div>

        <button class="btn btn-primary" type="submit">Ajouter</button>
      </form>
    </div>

    <h1 style="text-align: center; color: white; padding: 2rem">
      Nos voitures
    </h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col" class="">Marque</th>
          <th scope="col" class="">Catégorie</th>
          <th scope="col" class="">Modèle</th>
          <th scope="col" class="">Année</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(car, index) in cars" :key="index" class="">
          <td class="">{{ car.marque }}</td>
          <td class="">{{ car.categorie }}</td>
          <td class="">{{ car.modele }}</td>
          <td class="">{{ car.annee }}</td>
          <td class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button class="btn btn-primary me-md-2" @click="editCar(index)">
              Modifier
            </button>
            <button class="btn btn-danger" @click="deleteCar(index)">
              Supprimer
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { addCars, updateCars, deleteCars } from "../services/cars.service";
import { getMarque } from "../services/mark.service";
import { getModel } from "../services/model.service";
import { getCategory } from "../services/category.service";

const marque = ref("");
const categorie = ref("");
const modele = ref("");
const annee = ref("");
const cars = ref([]);
const marques = ref([]);
const categories = ref([]);
const modeles = ref([]);
const selectedId = ref(null);
var id = 1;
const mark = ref(JSON.parse(sessionStorage.getItem("cars")));
const selectedMarque = ref("");

async function submitForm() {
  if (
    marque.value == "" ||
    modele.value == "" ||
    categorie.value == "" ||
    annee.value < 1000|| annee.value >= 3000
  ) {
    alert("Tous les champs sont obligatoires");
    return;
  }

  const car = {
    id: id++,
    marque: marque.value,
    modele: modele.value,
    categorie: categorie.value,
    annee: annee.value,
    cars: selectedMarque.value,
  };

  if (selectedId.value) {
    try {
      await updateCars(selectedId.value, car);
      const index = cars.value.findIndex((car) => car.id === selectedId.value);
      if (index !== -1) {
        cars.value[index].marque = car.marque;
        cars.value[index].modele = car.modele;
        cars.value[index].categorie = car.categorie;
        cars.value[index].annee = car.annee;
      }
      selectedId.value = null;
    } catch (error) {
      console.error(error);
    }
  } else {
    try {
      const addedCars = await addCars(car);
      cars.value.push(addedCars);
    } catch (error) {
      console.error(error);
    }
  }

  sessionStorage.setItem("cars", JSON.stringify(cars.value));
  console.log(car);

  marque.value = "";
  modele.value = "";
  categorie.value = "";
  annee.value = "";
  selectedId.value = null;
  selectedMarque.value = "";

  try {
    const marqueResponse = await getMarque();
    marques.value = marqueResponse.data;
  } catch (error) {
    console.error(error);
  }

  try {
    const modeleResponse = await getModel();
    modeles.value = modeleResponse.data;
  } catch (error) {
    console.error(error);
  }

  try {
    const categorieResponse = await getCategory();
    categories.value = categorieResponse.data;
  } catch (error) {
    console.error(error);
  }
}

async function editCar(index) {
  selectedId.value = cars.value[index].id;
  const car = cars.value[index];
  if (car) {
    marque.value = car.marque;
    modele.value = car.modele;
    categorie.value = car.categorie;
    annee.value = car.annee;
  }
}

async function deleteCar(index) {
  const car = cars.value[index];
  if (!car) return;
  try {
    await deleteCars(car.id);
    cars.value.splice(index, 1);
    selectedId.value = null;
  } catch (error) {
    console.error(error);
  }
}
</script>

<style>
.my-form {
  padding: 2rem;
}

.table {
  margin-top: 2rem;
}
</style>
