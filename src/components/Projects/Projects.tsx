import { useRef } from 'react';
import '../../App.css';
import { arrow, imobzi_project } from '../../assets/Icons';

export default function Projetos() {
    const projectListRef = useRef<HTMLDivElement>(null);

    const projetos = [
        {
            id: 1,
            title: "Gerenciador Geral",
            image: imobzi_project,
            description: "Domínio de HTML, CSS, JavaScript, e frameworks como Angular e React para criar interfaces de usuário funcionais, junta da experiência com Python, Node.js, e C# para desenvolver APIs eficientes."
        },
        {
            id: 2,
            title: "Gerenciador Geral",
            image: imobzi_project,
            description: "Domínio de HTML, CSS, JavaScript, e frameworks como Angular e React para criar interfaces de usuário funcionais, junta da experiência com Python, Node.js, e C# para desenvolver APIs eficientes."
        },
        {
            id: 3,
            title: "Gerenciador Geral",
            image: imobzi_project,
            description: "Domínio de HTML, CSS, JavaScript, e frameworks como Angular e React para criar interfaces de usuário funcionais, junta da experiência com Python, Node.js, e C# para desenvolver APIs eficientes."
        },
        {
            id: 4,
            title: "Gerenciador Geral",
            image: imobzi_project,
            description: "Domínio de HTML, CSS, JavaScript, e frameworks como Angular e React para criar interfaces de usuário funcionais, junta da experiência com Python, Node.js, e C# para desenvolver APIs eficientes."
        }
    ]

    const handleScroll = (direction: string) => {
        const scrollAmount = 300;
        if (projectListRef.current) {
            if (direction === 'left') {
                projectListRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" })
            } else {
                projectListRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
            }
        }

    }

    return (
        <>
            <div className='projectSection'>
                <h2 className='projectSectionTitle'>Projetos</h2>
                <div className="projectList" ref={projectListRef}>
                    {projetos.map((project) => (
                        <div key={project.id} className='projectDiv'>
                            <h3 className='projectTitle'>{project.title}</h3>
                            <div className='projectInfo'>
                                <img src={project.image} alt="imagem do projeto" className='projectImage' />
                                <p className='projectParagraph'>{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="projectsButtons">
                    <div className='btnHandleScroll'>
                        <button onClick={() => handleScroll("left")}>
                            <img src={arrow} alt="" style={{ transform: "rotate(180deg)" }} />
                        </button>
                        <button onClick={() => handleScroll("right")}>
                            <img src={arrow} alt="" />
                        </button>
                    </div>
                    <button className='additionalButton'><a href="https://www.github.com/felipe-fcampos">mais projetos<img src={arrow} alt="" /></a></button>
                </div>
            </div>
        </>
    )
}