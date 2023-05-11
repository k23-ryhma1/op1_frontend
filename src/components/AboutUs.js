

export default function AboutUs() {
    return(
        <div>
            <h1>Meistä</h1>
            <div className="center">
                <p className="loremipsum">Ompun ja Ranen Kauppa on koiranvaatteita ja leluja myyvä perheyritys, joka sijaitsee Aleksanterikadulla Helsingissä.
                Yrityksen perustivat veljekset Omppu ja Rane vuonna 2023 Helsingin ytimeen.
                </p>
            </div>
            <img className="pictures" src="about.jpg" alt="404" width="650" height="600"/>
            <h3>Yhteystiedot</h3>
            <p>Aleksanterikatu 11</p>
            <p>ojarkauppa@gmail.com</p>
            <p>044-23423442</p>
        </div>
    );
}