// import React from 'react';


// const Card = ({ title, content, buttons,}) => {
//   return (
//     <div className='border bg-gradient-to-t from-blue-700 to-blue-300 rounded-lg p-4 m-4 shadow-md w-64 flex flex-col items-center'>
//       <h2 className='text-xl font-semibold mb-2'>{title}</h2>
//       <h3 className='text-lg text-blue mb-4'>{content}</h3>
//       <div className='flex flex-col space-y-2'>
//         {
//           buttons.map((buttonText, index)=>
//             <button key = {index}
//           className ={`bg-blue-500 text-white py-2 px-4 transition ${
//             index=== buttons.lenght -1 ? 'rounded-full m-7 w-12 h-12' : 'rounded'  }`}>
//               {buttonText}
              


//             </button>
//         )
//         }
//       </div>
//     </div>
//   );
// };

// export default Card;


import React from 'react';

const Card = ({ title, content, buttons }) => {
  // Separar os botões, pegando todos menos o último e o último
  const allButLast = buttons.slice(0, -1);
  const lastButton = buttons[buttons.length - 1];

  return (
    <div className='border bg-gradient-to-t from-blue-700 to-blue-300 rounded-lg p-7 m-4 shadow-md w-80 flex flex-col items-center'>
      <h2 className='text-xl font-semibold mb-2'>{title}</h2>
      <h3 className='text-lg text-blue mb-4'>{content}</h3>

      <div className='flex flex-col space-y-2'>
        {allButLast.map((buttonText, index) => (
          <button
            key={index}
            className='bg-blue-500 text-white py-4 px-4 transition rounded'
          >
            {buttonText}
          </button>
        ))}

        {/* Renderiza o último botão com estilos diferentes */}
        {lastButton && (
          <button className='bg-blue-500 text-white transition rounded-full m-20 w-12 h-12'>
            {lastButton}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;

