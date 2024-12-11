import facebookLogo from '../../../assets/facebook-logo.png'
import instagramLogo from '../../../assets/insta-logo.png'
import twitterLogo from '../../../assets/twitter-logo.png'
import linkedinLogo from '../../../assets/linkedin-logo.png'
import youtubeLogo from '../../../assets/youtube-logo.png'
import S from './footer.module.scss'


export default function footer(){
    return(
        <footer>
            <section className={S.boxSocial}>
                <h3>4002-8922</h3>
                <nav>
                    <a href=""> <img src={facebookLogo} alt="" /> </a>
                    <a href=""> <img src={twitterLogo} alt="" /> </a>
                    <a href=""> <img src={youtubeLogo} alt="" /> </a>
                    <a href=""> <img src={linkedinLogo} alt="" /> </a>
                    <a href=""> <img src={instagramLogo} alt="" /> </a>
                </nav>
            </section>
            <section className={S.boxEnd}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </p>
            </section>
        </footer>
    )
}