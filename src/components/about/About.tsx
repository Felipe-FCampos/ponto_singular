import '../../App.css';

export default function About() {
    const skills = [
        {
            id: 1,
            skill: "Full stack",
            area: "Development",
            description: "Domínio de HTML, CSS, JavaScript, e frameworks como Angular e React para criar interfaces de usuário funcionais, junta da experiência com Python, Node.js, e C# para desenvolver APIs eficientes."
        },
        {
            id: 2,
            skill: "Ágil",
            area: "Metodologia",
            description: "Familiaridade com Scrum para desenvolvimento de software, garantindo entregas satisfatórias e alinhadas com as expectativas do mercado."
        },
        {
            id: 3,
            skill: "APIs",
            area: "Integrações",
            description: "Experiência em integrar serviços de terceiros e APIs RESTful para adicionar funcionalidades avançadas aos sites e sistemas."
        }
    ]

    return (
        <>
            <div className='skillSection'>
                <h2 className='titleSkill'>Minhas habilidades e conhecimentos técnicos</h2>
                <div className='skillDiv'>
                    {skills.map((skill) => (
                        <div key={skill.id} className='skillInfo'>
                            <div className='skillMainInfo'>
                                <h2>{skill.id}</h2>
                                <div className='skillNameInfo'>
                                    <h3 className='skill'>{skill.skill}</h3>
                                    <h3 className='area'>{skill.area}</h3>
                                </div>
                            </div>
                            <p>{skill.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}