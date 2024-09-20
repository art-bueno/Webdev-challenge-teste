import Card from "../Card/card.jsx";

export default function LP(){
    const cardsData = [
        {
          title: 'Hoje | 19:00',
          content: 'Vencedor',
          buttons: ['Nick Cassidy - 1.85', 'Pascal Wehrlein - 3.40', 'Oliver Rowland - 5.30', '+'],
         
        },
        {
          title: 'Amanhã | 21:30',
          content: 'Top 3/Pódio',
          buttons: ['Nick Cassidy - 1.05', 'Jake Dennis - 5.60', 'Mitch Evans - 7.30', '+'],
         
        },
        {
          title: 'Quinta-feira | 16:30',
          content: 'Melhor volta',
          buttons: ['Nick Cassidy - 1.45', 'Jake Dennis - 9.80', 'Lucas Di Grassi - 15.30', '+'],
         
        },
      ];
    return(
        <>
        <div className="secao-2">
            <div className="container-2">
                <h1>Informações</h1>
                <p>Para melhorar a vizualização da corrida, temos à direita um mini simulador da corrida, onde podemos ver o número de voltas realizadas por cada corredor, a linha de chegada representada pelo retângulo na mesma linha do circulo (que representa a pista) e os quadradinhos coloridos que representam os carros.</p>
                <p>Para conhecer mais estatísticas e o funcionamento dos pontos dos competidor em cada corrida, clique no botão abaixo!</p>
                <button className="saiba-mais">Saiba mais</button>
            </div>
        </div>
        <div className="flex justify-around">
          {cardsData.map((card, index)=>
          <Card 
            key = {index}
            title={card.title}
            content={card.content}
            buttons={card.buttons}
            />
            
          
          
          
          
          )}
          
        </div>

        </>
        
    )
}