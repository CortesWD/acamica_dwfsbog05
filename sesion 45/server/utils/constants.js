const URLS = {
  API_BASE: '/api',
  AUTHORS: '/autores',
  BOOKS: '/libros'
};

const autores = [
  {
    id: 1,
    nombre: "Victor",
    apellido: "Frankl",
    fechaNacimiento: " 26/03/1905",
    libros: [
      {
        id: 1,
        titulo: "Un hombre en busca del sentido",
        descripcion: "vida en el holocaustro",
        anioPublicacion: 1946

      },
      {
        id: 2,
        titulo: "Fundamentos y aplicaciones de la logoterapia",
        descripcion: "logoterapi y vida personal",
        anioPublicacion: 1969
      },
      {
        id: 3,
        titulo: "a pesar de todo, decir si a la vida",
        descripcion: "superacion emocional",
        anioPublicacion: 1946
      },

    ]
  }
];

module.exports = {
  URLS,
  autores
}