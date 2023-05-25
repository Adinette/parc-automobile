<template>
  <div>
    <h1 class="" style="text-align: center; padding: 2rem">
      Ajouter un modele
    </h1>
    <div class="d-flex justify-content-center">
      <form class="col-md-8 my-form" @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="inputCode" class="form-label">Code</label>
          <input
            v-model="code"
            type="number"
            class="form-control"
            id="inputCode"
            required
          />
        </div>
        <div class="mb-3">
          <label for="inputMarque" class="form-label">Modele</label>
          <input
            v-model="model"
            type="text"
            class="form-control"
            id="inputModel"
            required
          />
        </div>
        <button class="btn btn-primary" type="submit">Ajouter</button>
      </form>
    </div>
    <h1 style="text-align: center; color: black; padding: 1rem">Nos modeles</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col" class="">Code</th>
          <th scope="col" class="">Modele</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(car, index) in cars" :key="index" class="">
          <td class="">{{ car.code }}</td>
          <td class="">{{ car.model }}</td>
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
import { addModel, updateModel, deleteModel } from "../services/model.service";
const code = ref("");
const model = ref("");
const cars = ref([]);
const selectedId = ref(null);
var id = 1;
async function submitForm() {
  if (code.value === "" || model.value === "") {
    alert("Tous les champs sont obligatoires");
    return;
  }

  const car = {
    id: id++,
    code: code.value,
    marque: marque.value,
  };

  if (selectedId.value) {
    try {
      await updateModel(selectedId.value, car);
      const index = cars.value.findIndex((car) => car.id === selectedId.value);
      if (index !== -1) {
        cars.value[index].code = car.code;
        cars.value[index].model = car.model;
      }
      selectedId.value = null;
    } catch (error) {
      console.error(error);
    }
  } else {
    try {
      const addedModel = await addModel(car);
      cars.value.push(addedModel);
    } catch (error) {
      console.error(error);
    }
  }

  sessionStorage.setItem("cars", JSON.stringify(cars.value));
  console.log(car);

  code.value = "";
  model.value = "";
}

async function editCar(index) {
  selectedId.value = cars.value[index].id;
  const car = cars.value[index];
  if (car) {
    code.value = car.code;
    model.value = car.model;
  }
}

async function deleteCar(index) {
  const car = cars.value[index];
  if (!car) return;
  try {
    await deleteModel(car.id);
    cars.value.splice(index, 1);
    selectedId.value = null;
  } catch (error) {
    console.error(error);
  }
}
</script>

<style></style>
