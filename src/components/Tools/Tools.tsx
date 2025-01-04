import { useState } from 'react';
import data from '../../assets/JSON/tools.json'
import '../../App.css'

type Tool = {
    id: number,
    name: string,
    image: string,
    description: string
}

const images = import.meta.glob("../../assets/icons/icons_tools/*.svg", { eager: true }) as Record<string, { default: string }>;

export default function Tools() {
    const [select, setSelect] = useState<number | null>(null)

    const tools: Tool[] = data.tools.tool;

    const rows = tools.reduce((acc, tool, index) => {
        const rowIndex = Math.floor(index / 4); // Calcula o índice da linha
        acc[rowIndex] = [...(acc[rowIndex] || []), tool]; // Adiciona a ferramenta à linha correspondente
        return acc;
    }, [] as Tool[][]);

    const handleChange = (id: number) => {
        setSelect(select === id ? null : id)
    }

    return (
        <>
            {rows.map((row, rowIndex) => {

                const isRowSelected = row.some((tool) => tool.id === select);

                return (
                    <>
                        <div key={rowIndex}
                            className={`toolRow {${isRowSelected ? "selected-row" : ""}`}
                        >

                            {row.map((tool) => {

                                const imagePath = images[`../../assets/icons/icons_tools/${tool.image}`]?.default;

                                return (
                                    <div key={tool.id} className='toolDiv'>
                                        {select !== tool.id ? (
                                            <div
                                                className={
                                                    isRowSelected
                                                        ? "toolHide same-row"
                                                        : "toolHide"
                                                }
                                            >
                                                <img src={imagePath} alt={tool.name} onClick={() => handleChange(tool.id)} className='toolImage' />
                                            </div>
                                        ) : (
                                            <div onClick={() => handleChange(tool.id)} className='toolShown'>
                                                <div className='toolName'>
                                                    <img src={imagePath} alt={tool.name} className='toolImageShown' />
                                                    <h2>{tool.name}</h2>
                                                </div>
                                                <div className='toolInfo'>
                                                    <p>{tool.description}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    </>
                )
            })}
        </>
    )
}