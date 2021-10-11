import {Container} from './styled'



export default function Pag1(){
    return(
        <Container>
            <div class="img1"></div>
            <div class="img2"></div>
            <div class="img3"></div>
            <Link to= '/pag2'><button> Clique Aqui</button></Link>
            <div class="qrCode1"></div>
            <div class="qrCode2"></div>
            <div class="qrCode3"></div>
        </Container>
    )
}