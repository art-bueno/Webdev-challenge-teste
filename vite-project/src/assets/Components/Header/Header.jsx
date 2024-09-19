import '../Header/header.css'

export default function Header(){
    return(
        <>
        <div className="header">
        <nav className='navegacao'>
            <a href="#">
                <img className='logo' src="../../../../public/Imagens/Logo_Sprint1_sem_fundo.png" alt="logo" />
            </a>
            <a href="#">Ao vivo</a>  
            <a href="#">Apostas</a>
            <a href="#">Impactos</a>
            <a href="#">Formula-E</a>
            <button className='btnUser' id='BtnUser'>
                <img className='UserIMG' src="../../../../public/Imagens/UserIMG2.png" alt="login img"/>
            </button>
        </nav>
        </div>
        </>
    )
}