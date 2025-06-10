import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Sidebar from "../overview/components/Sidebar"

const API_URL = import.meta.env.VITE_API_URL;

const Material = () => {
    const { materialId } = useParams()
    const [materi, setMateri] = useState(null)

    useEffect(() => {
        const getMaterial = async () => {
            const response = await axios.get(`${API_URL}/api/materi/` + materialId, { withCredentials: true })
            
            setMateri(response.data.data.materi)
        }
        getMaterial()
    }, [materialId])

    return (
        <div className="page-layout">
            <aside class="sidebar">
                <Sidebar />
            </aside>

            <div className="App">
                <div class="header-container">
                    <h1 class="title">{materi?.content.en_name}</h1>
                    <h2 class="subtitle">{materi?.content.id_name}</h2>
                </div>

                <div class="content-container">
                    <h3 class="section-title">Pengertian</h3>
                    <p class="section-description">{materi?.content.description}</p>

                    {materi?.content.sections.map((section, index) => (
                        <div className="sub-section" key={index}>
                            <h4 className="sub-section-title">{section.title}</h4>
                            <div className={`sub-content ${index % 2 === 0 ? 'custom-bg-1' : 'custom-bg-2'}`}>
                                {section.description ? <p>{section.description}</p> : null}
                                {section.content ? <p>{section.content}</p> : null}
                            </div>
                        </div>
                    ))}

                    {/* <div class="navigation-buttons">
                        <button class="nav-button">
                            <span class="arrow">&lt;</span> Previous
                        </button>
                        <button class="nav-button">
                            {" "}
                            <a href="https://www.w3schools.com/" class="nav-link">
                                Kuis
                            </a>
                        </button>
                        <button class="nav-button">
                            Next <span class="arrow">&gt;</span>
                        </button>
                    </div> */}
                    <div className="navigation-buttons">
                        <Link to={'/x/quiz'} className="nav-link">
                        <button className="nav-button">
                            <svg width="24" height="24" viewBox="20 4 1 24" fill="none" className="arrow arrow-left">
                                <path
                                    d="M15 18L9 12L15 6"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    />
                            </svg>
                            Previous
                        </button>
                                    </Link>
                        <button className="nav-button">
                            {" "}
                            <a href="https://www.w3schools.com/" class="nav-link">
                                Quis
                            </a>
                        </button>
                        <Link to={'/x/quiz'} className="nav-link">
                        <button className="nav-button">
                            Next
                            <svg width="24" height="24" viewBox="20 4 1 24" fill="none" className="arrow arrow-right">
                                <path
                                    d="M9 18L15 12L9 6"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    />
                            </svg>
                        </button>
                                    </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Material