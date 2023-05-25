<template>
  <div class="">
    <div
      id="carouselExampleControlsNoTouching"
      class="carousel"
      data-bs-touch="false"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="image-overlay">
            <img src="/assets/images/21.jpg" class="d-block w-100" alt="..." />
            <div class="text-overlay">
              <div class="d-grid gap-2 col-6 mx-auto">
                <button type="button" class="btn btn-primary">Nissan</button>
              </div>
              <p class="text-white">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolores eius ut, error a sit quaerat itaque voluptate, ipsam
                neque modi similique voluptatibus ipsa sint dolorum. Architecto
                deserunt aliquam exercitationem repudiandae?
              </p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="image-overlay">
            <img src="/assets/images/22.jpg" class="d-block w-100" alt="..." />
            <div class="text-overlay">
              <div class="d-grid gap-2 col-6 mx-auto">
                <button type="button" class="btn btn-primary">Fiat</button>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolores eius ut, error a sit quaerat itaque voluptate, ipsam
                neque modi similique voluptatibus ipsa sint dolorum. Architecto
                deserunt aliquam exercitationem repudiandae?
              </p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="image-overlay">
            <img src="/assets/images/23.jpg" class="d-block w-100" alt="..." />
            <div class="text-overlay">
              <div class="d-grid gap-2 col-6 mx-auto">
                <button type="button" class="btn btn-primary">Toyota</button>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolores eius ut, error a sit quaerat itaque voluptate, ipsam
                neque modi similique voluptatibus ipsa sint dolorum. Architecto
                deserunt aliquam exercitationem repudiandae?
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControlsNoTouching"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControlsNoTouching"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <h1 class="" style="text-align: center; padding: 2rem">Participants</h1>

    <div class="container">
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <div class="card h-100">
            <img src="/assets/images/17.jpg" class="img-fluid" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Fiat</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <button type="button" class="btn btn-primary">Consulter</button>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card h-100">
            <img src="/assets/images/11.png" class="img-fluid" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Alvis</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <button type="button" class="btn btn-primary">Consulter</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src="/assets/images/10.png" class="img-fluid" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Alpine</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <button type="button" class="btn btn-primary">Consulter</button>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card h-100">
            <img src="/assets/images/13.png" class="img-fluid" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Bently</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <button type="button" class="btn btn-primary">Consulter</button>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card h-100">
            <img src="/assets/images/14.png" class="img-fluid" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Citroen</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <button type="button" class="btn btn-primary">Consulter</button>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card h-100">
            <img src="/assets/images/15.png" class="img-fluid" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Cadillac</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <button type="button" class="btn btn-primary">Consulter</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="d-grid gap-2 col-6 mx-auto">
      <button type="button" class="btn btn-primary">Voir plus</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const cars = ref(null);
const car = ref({
  image: null,
  marque: "",
  numero: "",
});
</script>

<style>
.container {
  padding: 1.5rem;
  background-color: #fff;
}

.card {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 2rem;
  max-width: 36rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 0.5rem;
  text-align: center;
}

.block {
  font-weight: bold;
}

.carousel-inner {
  position: relative;
}

.image-overlay {
  position: relative;
}

.text-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
}

.text-overlay h1 {
  font-size: 32px;
  font-weight: bold;
}

.text-overlay p {
  font-size: 16px;
}
</style>
