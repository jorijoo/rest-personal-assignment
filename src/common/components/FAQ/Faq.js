import React from 'react'
import "./Faq.css";
import Accordion from 'react-bootstrap/Accordion';
const Faq = () => {
  return (
    <div className="banner-container">
      <div className="container text-center">
        <h1 className="display-4 my-4 display-md-lg">
        <span className="slogun">Muita usein kysyttyjä kysymyksiä</span>
        </h1>
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Kuka käsittelee henkilötietoja?</Accordion.Header>
        <Accordion.Body>
        Kaikki henkilötietojen käsittely tapahtuu tietosuojaselosteen ja kulloinkin voimassa olevan
        tietosuojasääntelyn, sisältäen kansallisen tietosuojasääntelyn ja yleisen tietosuoja-asetuksen 
        (GDPR), mukaisesti. Jos sinulla on kysyttävää henkilötietojesi käsittelystä, voit ottaa yhteyttä
        asiakaspalveluumme sähköpostitse osoitteeseen asiakaspalvelu@daaviddiv.com

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Sivusto jumittaa, enkä saa tilausta vietyä loppuun asti. Mitä teen?</Accordion.Header>
        <Accordion.Body>
        Yleisin syy on, ettei verkkosivustomme tue käyttämääsi verkkoselainta. Suosittelemme tässä 
        tapauksessa kokeilemaan jotain toista verkkoselainta: Mozilla Firefox sekä Google Chrome 
        toimivat yleensä hyvin sivustollamme. Toinen vaihtoehto on poistaa selaimen evästeet ja hyväksyä
        ne uudestaan.Tarkistathan myös, että sinulla on päivitetty versio Java-ohjelmistosta. 
        Mikäli tilauksen teko takkuaa mobiililla tai tabletilla, testaathan tilaamista vielä tietokoneella.
        Myös turhan tiukka palomuuri tai suojausasetukset saattavat vaikeuttaa tilauksen tekoa.

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Miksi koko tilaustani ei toimitettu yhdellä kertaa ja yhdessä paketissa? Tilauksestani toimitettiin vain osa, onko loput tulossa?</Accordion.Header>
        <Accordion.Body>
        Tilaus saatetaan toimittaa useammasta varastosta ja sen johdosta tuotteet voivat saapua
        useammassa paketissa ja jaettuna lähetyksenä, jotta niiden toimitus on nopeampaa. Saat
        tiedon pakettisi toimitustavasta toimitusvahvistuksesta. Mikäli tilauksesi loppuosaa ei 
        kuulu muutaman päivän kuluessa ensimmäisen lähetyksen vastaanottamisesta, olethan yhteydessä
        asiakaspalveluumme: asiakaspalvelu@daaviddiv.com
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Kuinka pitkä toimitusaika teillä on?</Accordion.Header>
        <Accordion.Body>
        Toimitusaikamme on yleensä 2-4 arkipäivää koko maassa. Tämä sisältää tilauksen pakkauksen, 
        lähettämisen sekä toimituksen. Asennettavilla/esisäädettävillä ja kustomoiduilla tuotteilla
        (esim. pyörät, sukset, seurakauppa) on hieman normaalia pidempi toimitusaika. Lisäksi suuret
         mainoskampanjat saattavat hidastaa toimituksia.
         Huom!
        Suurissa tilauksissa varaamme oikeuden muutaman päivää normaalia pidemmälle toimitusajalle. 
        Varastohenkilökuntamme työskentelee aina parhaansa mukaan tilauksesi parissa, jotta se saataisiin
         matkaan mahdollisimman nopeasti. Lisäksi myös tilaustavaroilla on pidempi toimitusaika 
         (2-5 viikkoa). Toimitusaika riippuu täysin tavarantoimitajan varastotilanteesta. 
         Mikäli tuote on tilaustuote, on tämä mainittu erikseen tuotteen omalla sivulla.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Palautan tuotteita ja Klarnan laskuni on maksamatta. Kuinka toimin?</Accordion.Header>
        <Accordion.Body>
        Voit ilmoittaa palautuksesta kätevästi suoraan Klarnalle, jolloin laskusi laitetaan taukotilaan kunnes
        palautuksesi on kirjautunut. Klarna saa palautuksesta myöhemmin automaattisen tiedon, jonka jälkeen
        lasku päivittyy oikealle summalle.

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </div>  
    </div>        
  )
}

export default Faq