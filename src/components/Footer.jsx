export function Footer(){
    return <div className="footerContainer">
        <div className="footerContainer__brandFooter">Baboon Clothes</div>
        <div className="footerContainer__redesYContacto">
            <div className="footerContainer__redes">
                <i className="fa-brands fa-instagram footerContainer__redIcon"></i>
                <i className="fa-brands fa-facebook footerContainer__redIcon"></i>
            </div>
            <div className="footerContainer__separador"></div>
            <div className="footerContainer__contacto">
                <div className="footerContainer__whatsapp">
                    <i className="fa-brands fa-whatsapp"></i>
                    <h4 className="footerContainer__numero">3517786534</h4>
                </div>
                <div className="footerContainer__ubicacion">
                    <i class="fa-solid fa-map-location-dot"></i>
                    <h4 className="footerContainer__direccion" > Calle 1200</h4>
                </div>
            </div>
        </div>
        <div className="footerContainer__copyright">Todos los derechos reservados 2023 ©</div>
    </div>
}