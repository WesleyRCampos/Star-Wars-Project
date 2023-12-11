import Navbar from '../../components/Navbar'
import MiApi from '../../components/MiApi'
import '../../assets/characters.css'

export const Characters = () => {
    return (
        <>
            <Navbar />
            <div className="gallery">
                <div className="box">
                    <MiApi />
                </div>
            </div>
        </>

    )
}
