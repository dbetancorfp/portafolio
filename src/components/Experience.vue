<template>
    <div class="experiencia">
      <h2>Experiencia Laboral</h2>
      
      <div class="experiencia-item" v-for="(item, index) in experiencia" :key="index">
        <h3>{{ item.puesto }}</h3>
        <p class="empresa">{{ item.empresa }}</p>
        <p class="fecha">{{ item.fecha }}</p>
        <ul>
          <li v-for="(descripcion, i) in item.descripciones" :key="i">{{ descripcion }}</li>
        </ul>
      </div>
  
      <button @click="generarPDF" class="descargar-pdf">Descargar en PDF</button>
    </div>
  </template>
  
  <script>
  import { jsPDF } from "jspdf";
  
  export default {
    name: "Experiencia",
    data() {
      return {
        experiencia: [
          {
            puesto: "Desarrollador Web",
            empresa: "St Pauls Seconday School",
            fecha: "Marzo 2024 - Mayo 2024",
            descripciones: [
              "Desarrollo de aplicaciones web usando HTML y CSS.",
              "Implementación de soluciones de frontend escalables.",
            ]
          }
        ]
      };
    },
    methods: {
      generarPDF() {
        const doc = new jsPDF();
  
        doc.setFont("helvetica", "bold");
        doc.setFontSize(18);
        doc.text("Experiencia Laboral", 10, 10);
  
        doc.setFont("helvetica", "normal");
        let yPosition = 20;
  
        this.experiencia.forEach((item) => {
          doc.setFontSize(14);
          doc.text(`${item.puesto} - ${item.empresa}`, 10, yPosition);
          doc.setFontSize(12);
          doc.text(`${item.fecha}`, 10, yPosition + 6);
          
          yPosition += 12;
          item.descripciones.forEach((descripcion) => {
            doc.text(`- ${descripcion}`, 10, yPosition);
            yPosition += 6;
          });
          
          yPosition += 10; 
        });
  
        doc.setFontSize(10);
        doc.text("Correo de contacto: tuemail@dominio.com", 10, yPosition);
        
        doc.save("experiencia-laboral.pdf");
      }
    }
  };
  </script>
  
  <style scoped>
  .experiencia {
    margin: 20px;
  }
  
  .experiencia-item {
    margin-bottom: 20px;
  }
  
  h2 {
    font-size: 24px;
  }
  
  h3 {
    font-size: 20px;
  }
  
  .empresa {
    font-style: italic;
  }
  
  .fecha {
    color: gray;
  }
  
  .descargar-pdf {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 20px;
  }
  
  .descargar-pdf:hover {
    background-color: #45a049;
  }
  </style>
  