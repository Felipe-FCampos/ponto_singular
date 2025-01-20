import { email } from "../../assets/Icons";

export default function Contact() {
    return (
        <>
            <div className="contactSection">
                <h2 className="contactTitle">Contato</h2>
                <hr className="contactHorizontalLine" />
                <section className="contactInfo">
                    <div className="divContactInfo">
                        <div className="contactText">
                            <h3>Vamos Conversar!</h3>
                            <p>Entre em contato comigo enviando uma mensagem através do formulário ao lado!</p>
                        </div>
                        <div className="contactTextInfo">
                            <h4>Felipe Fernandes Campos</h4>
                            <p><img src={email} alt="email icon" />felipe.fcampos7@gmail.com</p>
                        </div>
                    </div>
                    <hr className="contactVerticalLine"/>
                    <div className="formsContact">
                        <form>
                            <input type="text" placeholder="nome"/>
                            <input type="text" placeholder="e-mail"/>
                            <input type="text" placeholder="telefone"/>
                            <input type="text" placeholder="digite sua mensagem aqui"/>
                            <button type="submit"><p>Enviar mensagem</p></button>
                        </form>
                    </div>
                </section>
            </div>
        </>
    )
}