<template>
  <div class="about-container">
    <main class="bio">
      <div class="bio-image">
        <img src="../images/michi.jpg" alt="Foto personal" />
      </div>
      <div class="bio-text">
        <h2>{{ $t('greeting') }}</h2>
        <p>{{ $t('description1') }}</p>
        <p>{{ $t('description2') }}</p>
      </div>
    </main>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* Contenedor principal */
.about-container {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  background: #f8f9fa;
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

/* Biografía */
.bio {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
  width: 100%;
  max-width: 700px;
}

/* Imagen */
.bio-image img {
  border-radius: 50%;
  width: 250px;
  height: 250px;
  object-fit: cover;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  border: 4px solid #fff;
}

/* Texto */
.bio-text {
  max-width: 600px;
}

.bio-text h2 {
  font-size: 2.4em;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
  text-transform: capitalize;
}

.bio-text p {
  font-size: 1.1em;
  line-height: 1.8;
  color: #555;
  margin-bottom: 15px;
}

.bio-text p:last-child {
  margin-bottom: 0;
}

/* Responsividad */
@media (max-width: 768px) {
  .bio {
    padding: 20px;
  }

  .bio-image img {
    width: 200px;
    height: 200px;
  }

  .bio-text h2 {
    font-size: 2em;
  }

  .bio-text p {
    font-size: 1em;
  }
}
</style>
