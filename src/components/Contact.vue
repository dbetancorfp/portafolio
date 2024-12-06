<template>
    <div class="contact-form">
      <h2>Contacto</h2>
      <form @submit.prevent="submitForm">
        <div>
          <label for="name">{{ $t("contact1") }}:</label>
          <input
            type="text"
            id="name"
            v-model="formData.name"
            required
          />
        </div>
  
        <div>
          <label for="email">{{ $t("contact2") }}:</label>
          <input
            type="email"
            id="email"
            v-model="formData.email"
            required
          />
        </div>
  
        <div>
          <label for="message">{{ $t("contact3") }}:</label>
          <textarea
            id="message"
            v-model="formData.message"
            required
          ></textarea>
        </div>
  
        <button type="submit" :disabled="isLoading">
          {{ isLoading ? 'Enviando...' : 'Enviar' }}
        </button>
  
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        <p v-if="successMessage" class="success">{{ successMessage }}</p>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import { db, collection, addDoc } from "@/firebase";  
  export default {
    name: "ContactForm",
    setup() {
      const formData = ref({
        name: "",
        email: "",
        message: "",
      });
      const isLoading = ref(false);
      const successMessage = ref("");
      const errorMessage = ref("");
  
      const submitForm = async () => {
        isLoading.value = true;
        errorMessage.value = "";
        successMessage.value = "";
  
        try {
          // Guarda el mensaje en Firestore
          await addDoc(collection(db, "contactMessages"), {
            name: formData.value.name,
            email: formData.value.email,
            message: formData.value.message,
            createdAt: new Date(),
          });
  
          successMessage.value = "Mensaje enviado con éxito. ¡Gracias por contactarnos!";
          formData.value.name = "";
          formData.value.email = "";
          formData.value.message = "";
        } catch (error) {
          errorMessage.value = "Hubo un error al enviar el mensaje. Por favor, inténtalo nuevamente.";
        } finally {
          isLoading.value = false;
        }
      };
  
      return {
        formData,
        submitForm,
        isLoading,
        successMessage,
        errorMessage,
      };
    },
  };
  </script>
  
  <style scoped>
  .contact-form {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  
  .contact-form h2 {
    text-align: center;
  }
  
  .contact-form div {
    margin-bottom: 15px;
  }
  
  .contact-form label {
    display: block;
    font-weight: bold;
  }
  
  .contact-form input,
  .contact-form textarea {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .contact-form button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .contact-form button:disabled {
    background-color: #cccccc;
  }
  
  .contact-form .error {
    color: red;
  }
  
  .contact-form .success {
    color: green;
  }
  </style>
  