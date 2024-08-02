// import React, { useState, useEffect } from 'react';

// interface Contenido {
//   titulo: string;
//   subtitulo: string;
//   cuerpo: { parrafo: string }[];
// }

// function Article() {
//   const [contenido, setContenido] = useState<Contenido | null>(null);

//   useEffect(() => {
//     // Cargar el archivo JSON
//     fetch('/Blog/article.json')
//       .then(response => response.json())
//       .then((data: Contenido) => setContenido(data))
//       .catch(error => console.error('Error al cargar el archivo JSON:', error));
//   }, []);

//   return (
//     <div className=" mb-20">
//   {contenido && (
//     <div>
//       {/* text-3xl font-bold mb-14 sm:w-5/12 mt-16 px-4 w-full animate-fade-in-right dark:text-slate-200    */}
//       <h1 className="text-3xl dark:text-slate-200 font-bold mb-4 ">{contenido.titulo}</h1>
//       <div className="bg-white dark:bg-slate-700 dark:bg-opacity-80 bg-opacity-80 p-6  rounded-lg">

//       <h2 className="text-lg dark:text-white font-semibold mb-2">{contenido.subtitulo}</h2>
//       <div className="space-y-4">
//         {contenido.cuerpo.map((parrafo, index) => (
//           <p key={index} className="text-base dark:text-white ">{parrafo.parrafo}</p>
//         ))}
//       </div>
//       </div>
//     </div>
//   )}
// </div>

//   );
// }

// export default Article;

import React, { useState, useEffect } from 'react';

interface ArticleInterface {
  titulo: string;
  subtitulo: string;
  cuerpo: { parrafo: string }[];
}

function Article() {
  const [articles, setArticles] = useState<ArticleInterface[]>([]);

  useEffect(() => {
    // Cargar el archivo JSON
    fetch('/Blog/article.json')
      .then(response => response.json())
      .then((data: { articles: ArticleInterface[] }) => setArticles(data.articles))
      .catch(error => console.error('Error al cargar el archivo JSON:', error));
  }, []);

  return (
    <div className="mb-20">
      {articles.map((article, index) => (
        <div key={index} className="mb-8">
          <h1 className="text-3xl dark:text-slate-200 font-bold mb-4  ml-4 hover:scale-105 transform transition-transform duration-300">{article.titulo}</h1>
          <div className="bg-white dark:bg-slate-700 dark:bg-opacity-80 bg-opacity-80 md:p-10 p-6  rounded-lg">

          <h2 className="text-lg dark:text-white font-semibold mb-2 hover:scale-105 transform transition-transform duration-300">{article.subtitulo}</h2>
          <div className="space-y-4">
            {article.cuerpo.map((parrafo, index) => (
              <p key={index} className="text-base dark:text-white hover:scale-105 transform transition-transform duration-300">{parrafo.parrafo}</p>
            ))}
          </div>
        </div>
        </div>

      ))}
    </div>
  );

}

export default Article;
