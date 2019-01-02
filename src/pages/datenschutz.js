import React from 'react'
import { Link } from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Layout from '../components/layout'

const Datenschutz = () => (
  <Layout>
    <div className="slide start">
        <div className="inner">
            <h2>Datenschutzerklärung</h2>
        </div>
        <div>
            <AnchorLink href="#first" className="more">
                <span />
            </AnchorLink>
        </div>
    </div>
    <div className="slide" id="first">
      <div className="inner">
        <p>Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten (nachfolgend
            kurz „Daten“) innerhalb unseres Onlineangebotes und der mit ihm verbundenen Webseiten, Funktionen und Inhalte sowie externen
            Onlinepräsenzen, wie z.B. unser Social Media Profile auf. (nachfolgend gemeinsam bezeichnet als „Onlineangebot“). Im
            Hinblick auf die verwendeten Begrifflichkeiten, wie z.B. „personenbezogene Daten“ oder deren „Verarbeitung“ verweisen
            wir auf die Definitionen im Art. 4 der Datenschutzgrundverordnung (DSGVO).</p>

        <h3>Verantwortlicher</h3>
        <ul>
            <li>Timo Stollenwerk, kitconcept GmbH</li>
            <li>Vorgebirgsstraße 80</li>
            <li>53119 Bonn</li>
            <li>Handelsregister/Nr.: HRB 22064</li>
            <li>Geschäftsführer: Timo Stollenwerk</li>
            <li>Telefonnummer: 0228 / 286 288 380</li>
            <li>E-Mailadresse: stollenwerk@kitconcept.com</li>
        </ul>

        <h3>Arten der verarbeiteten Daten</h3>
        <ul>
            <li>Bestandsdaten (z.B., Namen, Adressen).</li>
            <li>Kontaktdaten (z.B., E-Mail, Telefonnummern).</li>
            <li>Inhaltsdaten (z.B., Texteingaben, Fotografien, Videos).</li>
            <li>Vertragsdaten (z.B., Vertragsgegenstand, Laufzeit, Kundenkategorie).</li>
            <li>Zahlungsdaten (z.B., Bankverbindung, Zahlungshistorie).</li>
            <li>Nutzungsdaten (z.B., besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten).</li>
            <li>Meta-/Kommunikationsdaten (z.B., Geräte-Informationen, IP-Adressen).</li>
        </ul>

        <h3>Verarbeitung besonderer Kategorien von Daten (Art. 9 Abs. 1 DSGVO)</h3>
        <ul>
            <li>Es werden keine besonderen Kategorien von Daten verarbeitet.</li>
            <li>Es werden grundsätzlich keine besonderen Kategorien von Daten verarbeitet, außer diese werden durch die Nutzer der Verarbeitung
                zugeführt, z.B. in Onlineformularen eingegeben.</li>
            <li>Es werden folgende besondere Kategorien von Daten verarbeitet: ...</li>
        </ul>

        <h3>Kategorien der von der Verarbeitung betroffenen Personen</h3>
        <ul>
            <li>Kunden / Interessenten / Lieferanten.</li>
            <li>Besucher und Nutzer des Onlineangebotes.</li>
        </ul>
        <p>Nachfolgend bezeichnen wir die betroffenen Personen zusammenfassend auch als „Nutzer“.</p>

        <h3>Zweck der Verarbeitung</h3>
        <ul>
            <li>Zurverfügungstellung des Onlineangebotes, seiner Inhalte und Funktionen.</li>
            <li>Erbringung vertraglicher Leistungen, Service und Kundenpflege.
            </li>
            <li>Beantwortung von Kontaktanfragen und Kommunikation mit Nutzern. ☐ Marketing, Werbung und Marktforschung.</li>
            <li>Sicherheitsmaßnahmen</li>
        </ul>
        <p>Stand: 15.05.2018</p>

        <ol>
            <li>
                <h4>Maßgebliche Rechtsgrundlagen</h4>
                <p>Nach Maßgabe des Art. 13 DSGVO teilen wir Ihnen die Rechtsgrundlagen unserer Datenverarbeitungen mit. Sofern die
                    Rechtsgrundlage in der Datenschutzerklärung nicht genannt wird, gilt Folgendes: Die Rechtsgrundlage für die Einholung
                    von Einwilligungen ist Art. 6 Abs. 1 lit. a und Art. 7 DSGVO, die Rechtsgrundlage für die Verarbeitung zur Erfüllung
                    unserer Leistungen und Durchführung vertraglicher Maßnahmen sowie Beantwortung von Anfragen ist Art. 6 Abs. 1
                    lit. b DSGVO, die Rechtsgrundlage für die Verarbeitung zur Erfüllung unserer rechtlichen Verpflichtungen ist
                    Art. 6 Abs. 1 lit. c DSGVO, und die Rechtsgrundlage für die Verarbeitung zur Wahrung unserer berechtigten Interessen
                    ist Art. 6 Abs. 1 lit. f DSGVO. Für den Fall, dass lebenswichtige Interessen der betroffenen Person oder einer
                    anderen natürlichen Person eine Verarbeitung personenbezogener Daten erforderlich machen, dient Art. 6 Abs. 1
                    lit. d DSGVO als Rechtsgrundlage.</p>
            </li>
            <li>
                <h4>Änderungen und Aktualisierungen der Datenschutzerklärung</h4>
                <p>1. Wir bitten Sie sich regelmäßig über den Inhalt unserer Datenschutzerklärung zu informieren. Wir passen die Datenschutzerklärung
                    an, sobald die Änderungen der von uns durchgeführten Datenverarbeitungen dies erforderlich machen. Wir informieren
                    Sie, sobald durch die Änderungen eine Mitwirkungshandlung Ihrerseits (z.B. Einwilligung) oder eine sonstige individuelle
                    Benachrichtigung erforderlich wird.</p>
            </li>
            <li>
                <h4>Sicherheitsmaßnahmen</h4>
                <ol>
                    <li>Wir treffen nach Maßgabe des Art. 32 DSGVO unter Berücksichtigung des Stands der Technik, der Implementierungskosten
                        und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeit
                        und Schwere des Risikos für die Rechte und Freiheiten natürlicher Personen, geeignete technische und organisatorische
                        Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten; Zu den Maßnahmen gehören insbesondere
                        die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch Kontrolle des physischen
                        Zugangs zu den Daten, als auch des sie betreffenden Zugriffs, der Eingabe, Weitergabe, der Sicherung der
                        Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die eine Wahrnehmung von
                        Betroffenenrechten, Löschung von Daten und Reaktion auf Gefährdung der Daten gewährleisen. Ferner berücksichtigen
                        wir den Schutz personenbezogener Daten bereits bei der Entwicklung, bzw. Auswahl von Hardware, Software sowie
                        Verfahren, entsprechend dem Prinzip des Datenschutzes durch Technikgestaltung und durch datenschutzfreundliche
                        Voreinstellungen berücksichtigt (Art. 25 DSGVO).</li>
                    <li>Zu den Sicherheitsmaßnahmen gehört insbesondere die verschlüsselte Übertragung von Daten zwischen Ihrem Browser
                        und unserem Server.
                    </li>
                </ol>
            </li>
            <li>
                <h4>Zusammenarbeit mit Auftragsverarbeitern und Dritten</h4>
                <ol>
                    <li>Sofern wir im Rahmen unserer Verarbeitung Daten gegenüber anderen Personen und Unternehmen (Auftragsverarbeitern
                        oder Dritten) offenbaren, sie an diese übermitteln oder ihnen sonst Zugriff auf die Daten gewähren, erfolgt
                        dies nur auf Grundlage einer gesetzlichen Erlaubnis (z.B. wenn eine Übermittlung der Daten an Dritte, wie
                        an Zahlungsdienstleister, gem. Art. 6 Abs. 1 lit. b DSGVO zur Vertragserfüllung erforderlich ist), Sie eingewilligt
                        haben, eine rechtliche Verpflichtung dies vorsieht oder auf Grundlage unserer berechtigten Interessen (z.B.
                        beim Einsatz von Beauftragten, Webhostern, etc.).</li>
                    <li>Sofern wir Dritte mit der Verarbeitung von Daten auf Grundlage eines sog. „Auftragsverarbeitungsvertrages“ beauftragen,
                        geschieht dies auf Grundlage des Art. 28 DSGVO.</li>
                </ol>
            </li>
            <li>
                <h4>Übermittlungen in Drittländer</h4>
                <p>1. Sofern wir Daten in einem Drittland (d.h. außerhalb der Europäischen Union (EU) oder des Europäischen Wirtschaftsraums
                    (EWR)) verarbeiten oder dies im Rahmen der Inanspruchnahme von Diensten Dritter oder Offenlegung, bzw. Übermittlung
                    von Daten an Dritte geschieht, erfolgt dies nur, wenn es zur Erfüllung unserer (vor)vertraglichen Pflichten,
                    auf Grundlage Ihrer Einwilligung, aufgrund einer rechtlichen Verpflichtung oder auf Grundlage unserer berechtigten
                    Interessen geschieht. Vorbehaltlich gesetzlicher oder vertraglicher Erlaubnisse, verarbeiten oder lassen wir
                    die Daten in einem Drittland nur beim Vorliegen der besonderen Voraussetzungen der Art. 44 ff. DSGVO verarbeiten.
                    D.h. die Verarbeitung erfolgt z.B. auf Grundlage besonderer Garantien, wie der offiziell anerkannten Feststellung
                    eines der EU entsprechenden Datenschutzniveaus (z.B. für die USA durch das „Privacy Shield“) oder Beachtung offiziell
                    anerkannter spezieller vertraglicher Verpflichtungen (so genannte „Standardvertragsklauseln“).</p>
            </li>
            <li>
                <h4>Rechte der betroffenen Personen</h4>
                <ol>
                    <li>
                        Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf Auskunft über
                        diese Daten sowie auf weitere Informationen und Kopie der Daten entsprechend Art. 15 DSGVO.</li>
                    <li>Sie haben entsprechend. Art. 16 DSGVO das Recht, die Vervollständigung der Sie betreffenden Daten oder die Berichtigung
                        der Sie betreffenden unrichtigen Daten zu verlangen.</li>
                    <li>Sie haben nach Maßgabe des Art. 17 DSGVO das Recht zu verlangen, dass betreffende Daten unverzüglich gelöscht
                        werden, bzw. alternativ nach Maßgabe des Art. 18 DSGVO eine Einschränkung der Verarbeitung der Daten zu verlangen.</li>
                    <li>Sie haben das Recht zu verlangen, dass die Sie betreffenden Daten, die Sie uns bereitgestellt haben nach Maßgabe
                        des Art. 20 DSGVO zu erhalten und deren Übermittlung an andere Verantwortliche zu fordern. 8.5. Sie haben
                        ferner gem. Art. 77 DSGVO das Recht, eine Beschwerde bei der zuständigen Aufsichtsbehörde einzureichen.</li>
                </ol>
            </li>
            <li>
                <h4>Widerrufsrecht</h4>
                <p>Sie haben das Recht, erteilte Einwilligungen gem. Art. 7 Abs. 3 DSGVO mit Wirkung für die Zukunft zu widerrufen.</p>
            </li>
            <li>
                <h4>Widerspruchsrecht</h4>
                <p>ie können der künftigen Verarbeitung der Sie betreffenden Daten nach Maßgabe des Art. 21 DSGVO jederzeit widersprechen.
                    Der Widerspruch kann insbesondere gegen die Verarbeitung für Zwecke der Direktwerbung erfolgen.</p>
            </li>
            <li>
                <h4>Cookies und Widerspruchsrecht bei Direktwerbung</h4>
                <p>Wir setzen temporäre und permanente Cookies, d.h. kleine Dateien, die auf den Geräten der Nutzer gespeichert werden
                    ein (Erklärung des Begriffs und der Funktion, siehe letzter Abschnitt dieser Datenschutzerklärung). Zum Teil
                    dienen die Cookies der Sicherheit oder sind zum Betrieb unseres Onlineangebotes erforderlich (z.B., für die Darstellung
                    der Website) oder um die Nutzerentscheidung bei der Bestätigung des Cookie-Banners zu speichern. Daneben setzen
                    wir oder unsere Technologiepartner Cookies zur Reichweitenmessung und Marketingzwecken ein, worüber die Nutzer
                    im Laufe der Datenschutzerklärung informiert werden.</p>
                <p>Ein genereller Widerspruch gegen den Einsatz der zu Zwecken des Onlinemarketing eingesetzten Cookies kann bei einer
                    Vielzahl der Dienste, vor allem im Fall des Trackings, über die US-amerikanische Seite
                    <a href="http://www.aboutads.info/choices/">http://www.aboutads.info/choices/</a>
                    oder die EU-Seite
                    <a href="http://www.youronlinechoices.com/">http://www.youronlinechoices.com/</a> erklärt werden. Des Weiteren kann die Speicherung von Cookies mittels deren
                    Abschaltung in den Einstellungen des Browsers erreicht werden. Bitte beachten Sie, dass dann gegebenenfalls nicht
                    alle Funktionen dieses Onlineangebotes genutzt werden können.</p>
            </li>
            <li>
                <h4>Löschung von Daten</h4>
                <ol>
                    <li>12.1. Die von uns verarbeiteten Daten werden nach Maßgabe der Art. 17 und 18 DSGVO gelöscht oder in ihrer Verarbeitung
                        eingeschränkt. Sofern nicht im Rahmen dieser Datenschutzerklärung ausdrücklich angegeben, werden die bei
                        uns gespeicherten Daten gelöscht, sobald sie für ihre Zweckbestimmung nicht mehr erforderlich sind und der
                        Löschung keine gesetzlichen Aufbewahrungspflichten entgegenstehen. Sofern die Daten nicht gelöscht werden,
                        weil sie für andere und gesetzlich zulässige Zwecke erforderlich sind, wird deren Verarbeitung eingeschränkt.
                        D.h. die Daten werden gesperrt und nicht für andere Zwecke verarbeitet. Das gilt z.B. für Daten, die aus
                        handels- oder steuerrechtlichen Gründen aufbewahrt werden müssen.</li>
                    <li>Nach gesetzlichen Vorgaben erfolgt die Aufbewahrung insbesondere für 6 Jahre gemäß § 257 Abs. 1 HGB (Handelsbücher,
                        Inventare, Eröffnungsbilanzen, Jahresabschlüsse, Handelsbriefe, Buchungsbelege, etc.) sowie für 10 Jahre
                        gemäß § 147 Abs. 1 AO (Bücher, Aufzeichnungen, Lageberichte, Buchungsbelege, Handels- und Geschäftsbriefe,
                        Für Besteuerung relevante Unterlagen, etc.).</li>
                </ol>
            </li>
            <li>
                <h4>Erbringung vertraglicher Leistungen</h4>
                <ol>
                    <li>Wir verarbeiten Bestandsdaten (z.B., Namen und Adressen sowie Kontaktdaten von Nutzern), Vertragsdaten (z.B.,
                        in Anspruch genommene Leistungen, Namen von Kontaktpersonen, Zahlungsinformationen) zwecks Erfüllung unserer
                        vertraglichen Verpflichtungen und Serviceleistungen gem. Art. 6 Abs. 1 lit b. DSGVO. Die in Onlineformularen
                        als verpflichtend gekennzeichneten Eingaben, sind für den Vertragsschluss erforderlich.</li>
                    <li>Nutzer können optional ein Nutzerkonto anlegen, indem sie insbesondere ihre Bestellungen einsehen können. Im
                        Rahmen der Registrierung, werden die erforderlichen Pflichtangaben den Nutzern mitgeteilt. Die Nutzerkonten
                        sind nicht öffentlich und können von Suchmaschinen nicht indexiert werden. Wenn Nutzer ihr Nutzerkonto gekündigt
                        haben, werden deren Daten im Hinblick auf das Nutzerkonto gelöscht, vorbehaltlich deren Aufbewahrung ist
                        aus handels- oder steuerrechtlichen Gründen entspr. Art. 6 Abs. 1 lit. c DSGVO notwendig. Es obliegt den
                        Nutzern, ihre Daten bei erfolgter Kündigung vor dem Vertragsende zu sichern. Wir sind berechtigt, sämtliche
                        während der Vertragsdauer gespeicherten Daten des Nutzers unwiederbringlich zu löschen.</li>
                    <li>Im Rahmen der Registrierung und erneuter Anmeldungen sowie Inanspruchnahme unserer Onlinedienste, speichern wird
                        die IP-Adresse und den Zeitpunkt der jeweiligen Nutzerhandlung. Die Speicherung erfolgt auf Grundlage unserer
                        berechtigten Interessen, als auch der Nutzer an Schutz vor Missbrauch und sonstiger unbefugter Nutzung. Eine
                        Weitergabe dieser Daten an Dritte erfolgt grundsätzlich nicht, außer sie ist zur Verfolgung unserer Ansprüche
                        erforderlich oder es besteht hierzu besteht eine gesetzliche Verpflichtung gem. Art. 6 Abs. 1 lit. c DSGVO.
                    </li>
                    <li>Wir verarbeiten Nutzungsdaten (z.B., die besuchten Webseiten unseres Onlineangebotes, Interesse an unseren Produkten)
                        und Inhaltsdaten (z.B., Eingaben im Kontaktformular oder Nutzerprofil) für Werbezwecke in einem Nutzerprofil,
                        um den Nutzer z.B. Produkthinweise ausgehend von ihren bisher in Anspruch genommenen Leistungen einzublenden.
                    </li>
                    <li>Die Löschung erfolgt nach Ablauf gesetzlicher Gewährleistungs- und vergleichbarer Pflichten, die Erforderlichkeit
                        der Aufbewahrung der Daten wird alle drei Jahre überprüft; im Fall der gesetzlichen Archivierungspflichten
                        erfolgt die Löschung nach deren Ablauf (Ende handelsrechtlicher (6 Jahre) und steuerrechtlicher (10 Jahre)
                        Aufbewahrungspflicht); Angaben im Kundenkonto verbleiben bis zu dessen Löschung.</li>
                </ol>
            </li>
            {/* <!-- Bonitätsauskunft 17 gelöscht --> */}
            <li>
                <h4>Kontaktaufnahme</h4>
                <ol>
                    <li>
                        Bei der Kontaktaufnahme mit uns (per Kontaktformular oder E-Mail) werden die Angaben des Nutzers zur Bearbeitung der Kontaktanfrage
                        und deren Abwicklung gem. Art. 6 Abs. 1 lit. b) DSGVO verarbeitet.
                    </li>
                    <li>Die Angaben der Nutzer können in unserem Customer-Relationship-Management System ("CRM System") oder vergleichbarer
                        Anfragenorganisation gespeichert werden.</li>
                    {/*<!--<li>Wir setzen das CRM-System „Helpdesk“, des Anbieters Help Scout Inc., 131 Tremont St, Boston, MA 02111-1338, USA)
                    auf Grundlage unserer berechtigten Interessen (effiziente und schnelle Bearbeitung der Nutzeranfragen) ein. Hierzu
                    haben wir mit Help Scout einen Vertrag mit sog. Standardvertragsklauseln abgeschlossen, in denen sich Help Scout
                    zur Verarbeitung der Nutzerdaten nur entsprechend unseren Weisungen und zur Einhaltung des EU-Datenschutzniveaus
                    verpflichtet. Help Scout ist ferner unter dem Privacy-Shield-Abkommen zertifiziert und bietet hierdurch eine
                    zusätzliche Garantie, das europäische Datenschutzrecht einzuhalten (https://www.privacyshield.gov/participant?id=a2zt0000000KzX1AAK&status=Active).
                    </li>-->*/}
                    <li>Wir löschen die Anfragen, sofern diese nicht mehr erforderlich sind. Wir überprüfen die Erforderlichkeit alle
                        zwei Jahre; Anfragen von Kunden, die über ein Kundenkonto verfügen, speichern wir dauerhaft und verweisen
                        zur Löschung auf die Angaben zum Kundenkonto. Im Fall der gesetzlichen Archivierungspflichten erfolgt die
                        Löschung nach deren Ablauf (Ende handelsrechtlicher (6 Jahre) und steuerrechtlicher (10 Jahre) Aufbewahrungspflicht).</li>
                </ol>
            </li>
            <li>
                <h4>Kommentare und Beiträge</h4>
                <ol>
                    <li>
                        20.1. Wenn Nutzer Kommentare oder sonstige Beiträge hinterlassen, werden ihre IP-Adressen auf Grundlage unserer berechtigten
                        Interessen im Sinne des Art. 6 Abs. 1 lit. f. DSGVO für 7 Tage gespeichert.
                    </li>
                    <li>
                        20.2. Das erfolgt zu unserer Sicherheit, falls jemand in Kommentaren und Beiträgen widerrechtliche Inhalte hinterlässt (Beleidigungen,
                        verbotene politische Propaganda, etc.). In diesem Fall können wir selbst für den Kommentar oder Beitrag belangt
                        werden und sind daher an der Identität des Verfassers interessiert.
                    </li>
                </ol>
            </li>
            {/*<!--
            <li>
                <h4>Abruf von Profilbildern bei Gravatar</h4>
                <p>Wir setzen innerhalb unseres Onlineangebotes und insbesondere im Blog den Dienst Gravatar, der Automattic, Inc. 132
                    Hawthorne Street San Francisco, CA 94107, USA, ein.</p>
                <p>Gravatar ist ein Dienst, bei dem sich Nutzer anmelden und Profilbilder und ihre E-Mailadressen hinterlegen können.
                    Wen Nutzer mit der jeweiligen E-Mailadresse auf anderen Onlinepräsenzen (vor allem in Blogs) Beiträge oder Kommentare
                    hinterlassen, können so deren Profilbilder neben den Beiträgen oder Kommentaren dargestellt werden. Hierzu wird
                    die von den Nutzern mitgeteilte E-Mailadresse an Gravatar zwecks Prüfung, ob zu ihr ein Profil gespeichert ist,
                    verschlüsselt übermittelt. Dies ist der einzige Zweck der Übermittlung der E-Mailadresse und sie wird nicht für
                    andere Zwecke verwendet, sondern danach gelöscht.</p>
                <p>Die Nutzung von Gravatar erfolgt auf Grundlage unserer berechtigten Interessen im Sinne des Art. 6 Abs. 1 lit. f)
                    DSGVO, da wir mit Hilfe von Gravatar den Beitrags- und Kommentarverfassern die Möglichkeit bieten ihre Beiträge
                    mit einem Profilbild zu personalisieren.</p>
                <p>Automattic ist unter dem Privacy-Shield-Abkommen zertifiziert und bietet hierdurch eine Garantie, das europäische
                    Datenschutzrecht einzuhalten (https://www.privacyshield.gov/participant?id=a2zt0000000CbqcAAC&status=Active).</p>
                <p>
                    Durch die Anzeige der Bilder bringt Gravatar die IP-Adresse der Nutzer in Erfahrung, da dies für eine Kommunikation zwischen
                    einem Browser und einem Onlineservice notwendig ist. Nähere Informationen zur Erhebung und Nutzung der Daten
                    durch Gravatar finden sich in den Datenschutzhinweisen von Automattic: https://automattic.com/privacy/.</p>
                <p>
                    Wenn Nutzer nicht möchten, dass ein mit Ihrer E-Mail-Adresse bei Gravatar verknüpftes Benutzerbild in den Kommentaren erscheint,
                    sollten Sie zum Kommentieren eine E-Mail-Adresse nutzen, welche nicht bei Gravatar hinterlegt ist. Wir weisen
                    ferner darauf hin, dass es auch möglich ist eine anonyme oder gar keine E-Mailadresse zu verwenden, falls die
                    Nutzer nicht wünschen, dass die eigene E-Mailadresse an Gravatar übersendet wird. Nutzer können die Übertragung
                    der Daten komplett verhindern, indem Sie unser Kommentarsystem nicht nutzen.
                </p>
            </li>
            -->*/}
            {/*<!-- Akismet gelöscht-->*/}
            <li>
                <h4>Erhebung von Zugriffsdaten und Logfiles</h4>
                <ol>
                    <li>23.1. Wir erheben auf Grundlage unserer berechtigten Interessen im Sinne des Art. 6 Abs. 1 lit. f. DSGVO Daten
                        über jeden Zugriff auf den Server, auf dem sich dieser Dienst befindet (sogenannte Serverlogfiles). Zu den
                        Zugriffsdaten gehören Name der abgerufenen Webseite, Datei, Datum und Uhrzeit des Abrufs, übertragene Datenmenge,
                        Meldung über erfolgreichen Abruf, Browsertyp nebst Version, das Betriebssystem des Nutzers, Referrer URL
                        (die zuvor besuchte Seite), IP-Adresse und der anfragende Provider.
                    </li>
                    <li>
                        23.2. Logfile-Informationen werden aus Sicherheitsgründen (z.B. zur Aufklärung von Missbrauchs- oder Betrugshandlungen) für
                        die Dauer von maximal sieben Tagen gespeichert und danach gelöscht. Daten, deren weitere Aufbewahrung zu
                        Beweiszwecken erforderlich ist, sind bis zur endgültigen Klärung des jeweiligen Vorfalls von der Löschung
                        ausgenommen.
                    </li>
                </ol>
            </li>
            <li>
                <h4>Onlinepräsenzen in sozialen Medien</h4>
                <ol>
                    <li>Wir unterhalten Onlinepräsenzen innerhalb sozialer Netzwerke und Plattformen, um mit den dort aktiven Kunden,
                        Interessenten und Nutzern kommunizieren und sie dort über unsere Leistungen informieren zu können. Beim Aufruf
                        der jeweiligen Netzwerke und Plattformen gelten die Geschäftsbedingungen und die Datenverarbeitungsrichtlinien
                        deren jeweiligen Betreiber.</li>
                    <li>24.2. Soweit nicht anders im Rahmen unserer Datenschutzerklärung angegeben, verarbeiten wird die Daten der Nutzer
                        sofern diese mit uns innerhalb der sozialen Netzwerke und Plattformen kommunizieren, z.B. Beiträge auf unseren
                        Onlinepräsenzen verfassen oder uns Nachrichten zusenden.</li>
                </ol>
            </li>
            <li>
                <h4>Cookies &amp; Reichweitenmessung</h4>
                <ol>
                    <li>Cookies sind Informationen, die von unserem Webserver oder Webservern Dritter an die Web-Browser der Nutzer übertragen
                        und dort für einen späteren Abruf gespeichert werden. Bei Cookies kann es sich um kleine Dateien oder sonstige
                        Arten der Informationsspeicherung handeln.</li>
                    <li>Wir verwenden „Session-Cookies“, die nur für die Zeitdauer des aktuellen Besuchs auf unserer Onlinepräsenz abgelegt
                        werden (z.B. um die Speicherung Ihres Login-Status oder die Warenkorbfunktion und somit die Nutzung unseres
                        Onlineangebotes überhaupt ermöglichen zu können). In einem Session-Cookie wird eine zufällig erzeugte eindeutige
                        Identifikationsnummer abgelegt, eine sogenannte Session-ID. Außerdem enthält ein Cookie die Angabe über seine
                        Herkunft und die Speicherfrist. Diese Cookies können keine anderen Daten speichern. Session-Cookies werden
                        gelöscht, wenn Sie die Nutzung unseres Onlineangebotes beendet haben und sich z.B. ausloggen oder den Browser
                        schließen.
                    </li>
                    <li>25.3. Über den Einsatz von Cookies im Rahmen pseudonymer Reichweitenmessung werden die Nutzer im Rahmen dieser
                        Datenschutzerklärung informiert.
                    </li>
                    <li>25.4. Falls die Nutzer nicht möchten, dass Cookies auf ihrem Rechner gespeichert werden, werden sie gebeten die
                        entsprechende Option in den Systemeinstellungen ihres Browsers zu deaktivieren. Gespeicherte Cookies können
                        in den Systemeinstellungen des Browsers gelöscht werden. Der Ausschluss von Cookies kann zu Funktionseinschränkungen
                        dieses Onlineangebotes führen.</li>
                    <li>25.5. Sie können dem Einsatz von Cookies, die der Reichweitenmessung und Werbezwecken dienen, über die Deaktivierungsseite
                        der Netzwerkwerbeinitiative (http://optout.networkadvertising.org/) und zusätzlich die US-amerikanische Webseite (http://www.aboutads.info/choices) oder
                        die europäische Webseite (http://www.youronlinechoices.com/uk/your-ad-choices/) widersprechen.</li>
                </ol>
            </li>
            <li>
                <h4>Google Analytics</h4>
                <ol>
                    <li>Wir setzen auf Grundlage unserer berechtigten Interessen (d.h. Interesse an der Analyse, Optimierung und wirtschaftlichem
                        Betrieb unseres Onlineangebotes im Sinne des Art. 6 Abs. 1 lit. f. DSGVO) Google Analytics, einen Webanalysedienst
                        der Google LLC („Google“) ein. Google verwendet Cookies. Die durch das Cookie erzeugten Informationen über
                        Benutzung des Onlineangebotes durch die Nutzer werden in der Regel an einen Server von Google in den USA
                        übertragen und dort gespeichert.</li>
                    <li>Google ist unter dem Privacy-Shield-Abkommen zertifiziert und bietet hierdurch eine Garantie, das europäische
                        Datenschutzrecht einzuhalten (https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active).
                    </li>
                    <li>Google wird diese Informationen in unserem Auftrag benutzen, um die Nutzung unseres Onlineangebotes durch die
                        Nutzer auszuwerten, um Reports über die Aktivitäten innerhalb dieses Onlineangebotes zusammenzustellen und
                        um weitere, mit der Nutzung dieses Onlineangebotes und der Internetnutzung verbundene Dienstleistungen, uns
                        gegenüber zu erbringen. Dabei können aus den verarbeiteten Daten pseudonyme Nutzungsprofile der Nutzer erstellt
                        werden. </li>
                    <li>Wir setzen Google Analytics ein, um die durch innerhalb von Werbediensten Googles und seiner Partner geschalteten
                        Anzeigen, nur solchen Nutzern anzuzeigen, die auch ein Interesse an unserem Onlineangebot gezeigt haben oder
                        die bestimmte Merkmale (z.B. Interessen an bestimmten Themen oder Produkten, die anhand der besuchten Webseiten
                        bestimmt werden) aufweisen, die wir an Google übermitteln (sog. „Remarketing-“, bzw. „Google-Analytics-Audiences“).
                        Mit Hilfe der Remarketing Audiences möchten wir auch sicherstellen, dass unsere Anzeigen dem potentiellen
                        Interesse der Nutzer entsprechen und nicht belästigend wirken. </li>
                    <li>Wir setzen Google Analytics nur mit aktivierter IP-Anonymisierung ein. Das bedeutet, die IP-Adresse der Nutzer
                        wird von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des
                        Abkommens über den Europäischen Wirtschaftsraum gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse
                        an einen Server von Google in den USA übertragen und dort gekürzt. </li>
                    <li>Die von dem Browser des Nutzers übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt.
                        Die Nutzer können die Speicherung der Cookies durch eine entsprechende Einstellung ihrer Browser-Software
                        verhindern; die Nutzer können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf ihre Nutzung
                        des Onlineangebotes bezogenen Daten an Google sowie die Verarbeitung dieser Daten durch Google verhindern,
                        indem sie das unter folgendem Link verfügbare Browser-Plugin herunterladen und installieren: https://tools.google.com/dlpage/gaoptout?hl=de.
                    </li>
                    <li>Weitere Informationen zur Datennutzung durch Google, Einstellungs- und Widerspruchsmöglichkeiten erfahren Sie
                        auf den Webseiten von Google: https://www.google.com/intl/de/policies/privacy/partners („Datennutzung durch
                        Google bei Ihrer Nutzung von Websites oder Apps unserer Partner“), https://policies.google.com/technologies/ads („Datennutzung
                        zu Werbezwecken“), https://adssettings.google.com/authenticated („Informationen verwalten, die Google verwendet,
                        um Ihnen Werbung einzublenden“).</li>
                </ol>
            </li>
            <li>
                <h4>Google-Re/Marketing-Services</h4>
                <ol>
                    <li>Wir nutzen auf Grundlage unserer berechtigten Interessen (d.h. Interesse an der Analyse, Optimierung und wirtschaftlichem
                        Betrieb unseres Onlineangebotes im Sinne des Art. 6 Abs. 1 lit. f. DSGVO) die Marketing- und Remarketing-Dienste
                        (kurz „Google-Marketing-Services”) der Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA,
                        („Google“).
                    </li>
                    <li>Google ist unter dem Privacy-Shield-Abkommen zertifiziert und bietet hierdurch eine Garantie, das europäische
                        Datenschutzrecht einzuhalten (https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active).</li>
                    <li>
                        Die Google-Marketing-Services erlauben uns Werbeanzeigen für und auf unserer Website gezielter anzuzeigen, um Nutzern nur
                        Anzeigen zu präsentieren, die potentiell deren Interessen entsprechen. Falls einem Nutzer z.B. Anzeigen für
                        Produkte angezeigt werden, für die er sich auf anderen Webseiten interessiert hat, spricht man hierbei vom
                        „Remarketing“. Zu diesen Zwecken wird bei Aufruf unserer und anderer Webseiten, auf denen Google-Marketing-Services
                        aktiv sind, unmittelbar durch Google ein Code von Google ausgeführt und es werden sog. (Re)marketing-Tags
                        (unsichtbare Grafiken oder Code, auch als "Web Beacons" bezeichnet) in die Webseite eingebunden. Mit deren
                        Hilfe wird auf dem Gerät der Nutzer ein individuelles Cookie, d.h. eine kleine Datei abgespeichert (statt
                        Cookies können auch vergleichbare Technologien verwendet werden). Die Cookies können von verschiedenen Domains
                        gesetzt werden, unter anderem von google.com, doubleclick.net, invitemedia.com, admeld.com, googlesyndication.com
                        oder googleadservices.com. In dieser Datei wird vermerkt, welche Webseiten der Nutzer aufgesucht, für welche
                        Inhalte er sich interessiert und welche Angebote er geklickt hat, ferner technische Informationen zum Browser
                        und Betriebssystem, verweisende Webseiten, Besuchszeit sowie weitere Angaben zur Nutzung des Onlineangebotes.
                        Es wird ebenfalls die IP-Adresse der Nutzer erfasst, wobei wir im Rahmen von Google-Analytics mitteilen,
                        dass die IP-Adresse innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten
                        des Abkommens über den Europäischen Wirtschaftsraum gekürzt und nur in Ausnahmefällen ganz an einen Server
                        von Google in den USA übertragen und dort gekürzt wird. Die IP-Adresse wird nicht mit Daten des Nutzers innerhalb
                        von anderen Angeboten von Google zusammengeführt. Die vorstehend genannten Informationen können seitens Google
                        auch mit solchen Informationen aus anderen Quellen verbunden werden. Wenn der Nutzer anschließend andere
                        Webseiten besucht, können ihm entsprechend seiner Interessen die auf ihn abgestimmten Anzeigen angezeigt
                        werden.
                    </li>
                    <li>Die Daten der Nutzer werden im Rahmen der Google-Marketing-Services pseudonym verarbeitet. D.h. Google speichert
                        und verarbeitet z.B. nicht den Namen oder E-Mailadresse der Nutzer, sondern verarbeitet die relevanten Daten
                        Cookie-bezogen innerhalb pseudonymer Nutzer-Profile. D.h. aus der Sicht von Google werden die Anzeigen nicht
                        für eine konkret identifizierte Person verwaltet und angezeigt, sondern für den Cookie-Inhaber, unabhängig
                        davon wer dieser Cookie-Inhaber ist. Dies gilt nicht, wenn ein Nutzer Google ausdrücklich erlaubt hat, die
                        Daten ohne diese Pseudonymisierung zu verarbeiten. Die von Google-Marketing-Services über die Nutzer gesammelten
                        Informationen werden an Google übermittelt und auf Googles Servern in den USA gespeichert. </li>
                    <li> Zu den von uns eingesetzten Google-Marketing-Services gehört u.a. das Online-Werbeprogramm „Google AdWords“.
                        Im Fall von Google AdWords, erhält jeder AdWords-Kunde ein anderes „Conversion-Cookie“. Cookies können somit
                        nicht über die Websites von AdWords-Kunden nachverfolgt werden. Die mit Hilfe des Cookies eingeholten Informationen
                        dienen dazu, Conversion-Statistiken für AdWords-Kunden zu erstellen, die sich für Conversion-Tracking entschieden
                        haben. Die AdWords-Kunden erfahren die Gesamtanzahl der Nutzer, die auf ihre Anzeige geklickt haben und zu
                        einer mit einem Conversion-Tracking-Tag versehenen Seite weitergeleitet wurden. Sie erhalten jedoch keine
                        Informationen, mit denen sich Nutzer persönlich identifizieren lassen.</li>
                    <li> Wir können auf Grundlage des Google-Marketing-Services "DoubleClick" Werbeanzeigen Dritter einbinden. DoubleClick
                        verwendet Cookies, mit denen Google und seinen Partner-Websites, die Schaltung von Anzeigen auf Basis der
                        Besuche von Nutzern auf dieser Website bzw. anderen Websites im Internet ermöglicht wird. </li>
                    <li> Wir können auf Grundlage des Google-Marketing-Services „AdSense“ Werbeanzeigen Dritter einbinden. AdSense verwendet
                        Cookies, mit denen Google und seinen Partner-Websites, die Schaltung von Anzeigen auf Basis der Besuche von
                        Nutzern auf dieser Website bzw. anderen Websites im Internet ermöglicht wird. </li>
                    <li> Ebenfalls können wir den Dienst „Google Optimizer“ einsetzen. Google Optimizer erlaubt uns im Rahmen so genannten
                        "A/B-Testings" nachzuvollziehen, wie sich verschiedene Änderungen einer Website auswirken (z.B. Veränderungen
                        der Eingabefelder, des Designs, etc.). Für diese Testzwecke werden Cookies auf den Geräten der Nutzer abgelegt.
                        Dabei werden nur pseudonyme Daten der Nutzer verarbeitet. </li>
                    <li> Ferner können wir den "Google Tag Manager" einsetzen, um die Google Analyse- und Marketing-Dienste in unsere
                        Website einzubinden und zu verwalten. </li>
                    <li> Weitere Informationen zur Datennutzung zu Marketingzwecken durch Google, erfahren Sie auf der Übersichtsseite: https://policies.google.com/technologies/ads,
                        die Datenschutzerklärung von Google ist unter https://policies.google.com/privacy abrufbar. </li>
                    <li> Wenn Sie der interessensbezogenen Werbung durch Google-Marketing-Services widersprechen möchten, können Sie die
                        von Google gestellten Einstellungs- und Opt-Out-Möglichkeiten nutzen: https://adssettings.google.com/authenticated.</li>
                </ol>
            </li>
            <li>
                <h4>Facebook-, Custom Audiences und Facebook-Marketing-Dienste</h4>
                <ol>
                    <li>30.1. Innerhalb unseres Onlineangebotes wird aufgrund unserer berechtigten Interessen an Analyse, Optimierung
                        und wirtschaftlichem Betrieb unseres Onlineangebotes und zu diesen Zwecken das sog. "Facebook-Pixel" des
                        sozialen Netzwerkes Facebook, welches von der Facebook Inc., 1 Hacker Way, Menlo Park, CA 94025, USA, bzw.
                        falls Sie in der EU ansässig sind, Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin
                        2, Irland betrieben wird ("Facebook"), eingesetzt.</li>
                    <li>Facebook ist unter dem Privacy-Shield-Abkommen zertifiziert und bietet hierdurch eine Garantie, das europäische
                        Datenschutzrecht einzuhalten (https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&status=Active).
                    </li>
                    <li>Mit Hilfe des Facebook-Pixels ist es Facebook zum einen möglich, die Besucher unseres Onlineangebotes als Zielgruppe
                        für die Darstellung von Anzeigen (sog. "Facebook-Ads") zu bestimmen. Dementsprechend setzen wir das Facebook-Pixel
                        ein, um die durch uns geschalteten Facebook-Ads nur solchen Facebook-Nutzern anzuzeigen, die auch ein Interesse
                        an unserem Onlineangebot gezeigt haben oder die bestimmte Merkmale (z.B. Interessen an bestimmten Themen
                        oder Produkten, die anhand der besuchten Webseiten bestimmt werden) aufweisen, die wir an Facebook übermitteln
                        (sog. „Custom Audiences“). Mit Hilfe des Facebook-Pixels möchten wir auch sicherstellen, dass unsere Facebook-Ads
                        dem potentiellen Interesse der Nutzer entsprechen und nicht belästigend wirken. Mit Hilfe des Facebook-Pixels
                        können wir ferner die Wirksamkeit der Facebook-Werbeanzeigen für statistische und Marktforschungszwecke nachvollziehen,
                        in dem wir sehen ob Nutzer nachdem Klick auf eine Facebook-Werbeanzeige auf unsere Website weitergeleitet
                        wurden (sog. „Conversion“).</li>
                    {/*<!-- Facebook-Pixel gelöscht 31-32 -->*/}
                    <li>Die Verarbeitung der Daten durch Facebook erfolgt im Rahmen von Facebooks Datenverwendungsrichtlinie. Dementsprechend
                        generelle Hinweise zur Darstellung von Facebook-Ads, in der Datenverwendungsrichtlinie von Facebook: https://www.facebook.com/policy.php.
                        Spezielle Informationen und Details zum Facebook-Pixel und seiner Funktionsweise erhalten Sie im Hilfebereich
                        von Facebook: https://www.facebook.com/business/help/651294705016616.</li>
                    <li>Sie können der Erfassung durch den Facebook-Pixel und Verwendung Ihrer Daten zur Darstellung von Facebook-Ads
                        widersprechen. Um einzustellen, welche Arten von Werbeanzeigen Ihnen innerhalb von Facebook angezeigt werden,
                        können Sie die von Facebook eingerichtete Seite aufrufen und dort die Hinweise zu den Einstellungen nutzungsbasierter
                        Werbung befolgen: https://www.facebook.com/settings?tab=ads. Die Einstellungen erfolgen plattformunabhängig,
                        d.h. sie werden für alle Geräte, wie Desktopcomputer oder mobile Geräte übernommen.</li>
                    {/*<!-- Facebook Opt-Out gelöscht 32.3 -->*/}
                    <li>32.4. Sie können dem Einsatz von Cookies, die der Reichweitenmessung und Werbezwecken dienen, ferner über die
                        Deaktivierungsseite der Netzwerkwerbeinitiative (http://optout.networkadvertising.org/) und zusätzlich die
                        US-amerikanische Webseite (http://www.aboutads.info/choices) oder die europäische Webseite (http://www.youronlinechoices.com/uk/your-ad-choices/)
                        widersprechen.
                    </li>
                </ol>
            </li>
            <li>
                <h4>Facebook Social Plugins</h4>
                <ol>
                    <li>Wir nutzen auf Grundlage unserer berechtigten Interessen (d.h. Interesse an der Analyse, Optimierung und wirtschaftlichem
                        Betrieb unseres Onlineangebotes im Sinne des Art. 6 Abs. 1 lit. f. DSGVO) Social Plugins ("Plugins") des
                        sozialen Netzwerkes facebook.com, welches von der Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal
                        Harbour, Dublin 2, Irland betrieben wird ("Facebook"). Die Plugins können Interaktionselemente oder Inhalte
                        (z.B. Videos, Grafiken oder Textbeiträge) darstellen und sind an einem der Facebook Logos erkennbar (weißes
                        „f“ auf blauer Kachel, den Begriffen "Like", "Gefällt mir" oder einem „Daumen hoch“-Zeichen) oder sind mit
                        dem Zusatz "Facebook Social Plugin" gekennzeichnet. Die Liste und das Aussehen der Facebook Social Plugins
                        kann hier eingesehen werden: https://developers.facebook.com/docs/plugins/.</li>
                    <li>Facebook ist unter dem Privacy-Shield-Abkommen zertifiziert und bietet hierdurch eine Garantie, das europäische
                        Datenschutzrecht einzuhalten (https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&status=Active).</li>
                    <li>Wenn ein Nutzer eine Funktion dieses Onlineangebotes aufruft, die ein solches Plugin enthält, baut sein Gerät
                        eine direkte Verbindung mit den Servern von Facebook auf. Der Inhalt des Plugins wird von Facebook direkt
                        an das Gerät des Nutzers übermittelt und von diesem in das Onlineangebot eingebunden. Dabei können aus den
                        verarbeiteten Daten Nutzungsprofile der Nutzer erstellt werden. Wir haben daher keinen Einfluss auf den Umfang
                        der Daten, die Facebook mit Hilfe dieses Plugins erhebt und informiert die Nutzer daher entsprechend unserem
                        Kenntnisstand.
                    </li>
                    <li>Durch die Einbindung der Plugins erhält Facebook die Information, dass ein Nutzer die entsprechende Seite des
                        Onlineangebotes aufgerufen hat. Ist der Nutzer bei Facebook eingeloggt, kann Facebook den Besuch seinem Facebook-Konto
                        zuordnen. Wenn Nutzer mit den Plugins interagieren, zum Beispiel den Like Button betätigen oder einen Kommentar
                        abgeben, wird die entsprechende Information von Ihrem Gerät direkt an Facebook übermittelt und dort gespeichert.
                        Falls ein Nutzer kein Mitglied von Facebook ist, besteht trotzdem die Möglichkeit, dass Facebook seine IP-Adresse
                        in Erfahrung bringt und speichert. Laut Facebook wird in Deutschland nur eine anonymisierte IP-Adresse gespeichert.</li>
                    <li>Zweck und Umfang der Datenerhebung und die weitere Verarbeitung und Nutzung der Daten durch Facebook sowie die
                        diesbezüglichen Rechte und Einstellungsmöglichkeiten zum Schutz der Privatsphäre der Nutzer, können diese
                        den Datenschutzhinweisen von Facebook entnehmen: https://www.facebook.com/about/privacy/.
                    </li>
                    <li>Wenn ein Nutzer Facebookmitglied ist und nicht möchte, dass Facebook über dieses Onlineangebot Daten über ihn
                        sammelt und mit seinen bei Facebook gespeicherten Mitgliedsdaten verknüpft, muss er sich vor der Nutzung
                        unseres Onlineangebotes bei Facebook ausloggen und seine Cookies löschen. Weitere Einstellungen und Widersprüche
                        zur Nutzung von Daten für Werbezwecke, sind innerhalb der Facebook-Profileinstellungen möglich: https://www.facebook.com/settings?tab=ads
                        oder über die US-amerikanische Seite http://www.aboutads.info/choices/  oder die EU-Seite http://www.youronlinechoices.com/.
                        Die Einstellungen erfolgen plattformunabhängig, d.h. sie werden für alle Geräte, wie Desktopcomputer oder
                        mobile Geräte übernommen.</li>
                </ol>
            </li>
            <li>
                <h4>Newsletter</h4>
                <ol>
                    <li>39.1. Mit den nachfolgenden Hinweisen informieren wir Sie über die Inhalte unseres Newsletters sowie das Anmelde-,
                        Versand- und das statistische Auswertungsverfahren sowie Ihre Widerspruchsrechte auf. Indem Sie unseren Newsletter
                        abonnieren, erklären Sie sich mit dem Empfang und den beschriebenen Verfahren einverstanden.</li>
                    <li>39.2. Inhalt des Newsletters: Wir versenden Newsletter, E-Mails und weitere elektronische Benachrichtigungen
                        mit werblichen Informationen (nachfolgend „Newsletter“) nur mit der Einwilligung der Empfänger oder einer
                        gesetzlichen Erlaubnis. Sofern im Rahmen einer Anmeldung zum Newsletter dessen Inhalte konkret umschrieben
                        werden, sind sie für die Einwilligung der Nutzer maßgeblich. Im Übrigen enthalten unsere Newsletter Informationen
                        zu unseren Produkten, Angeboten, Aktionen und unserem Unternehmen.</li>
                    <li>39.3. Double-Opt-In und Protokollierung: Die Anmeldung zu unserem Newsletter erfolgt in einem sog. Double-Opt-In-Verfahren.
                        D.h. Sie erhalten nach der Anmeldung eine E-Mail, in der Sie um die Bestätigung Ihrer Anmeldung gebeten werden.
                        Diese Bestätigung ist notwendig, damit sich niemand mit fremden E-Mailadressen anmelden kann. Die Anmeldungen
                        zum Newsletter werden protokolliert, um den Anmeldeprozess entsprechend den rechtlichen Anforderungen nachweisen
                        zu können. Hierzu gehört die Speicherung des Anmelde- und des Bestätigungszeitpunkts, als auch der IP-Adresse.
                        Ebenso werden die Änderungen Ihrer bei dem Versanddienstleister gespeicherten Daten protokolliert.</li>
                    <li>39.5. Versanddienstleister: Der Versand der Newsletter erfolgt mittels „MailChimp“, einer Newsletterversandplattform
                        des US-Anbieters Rocket Science Group, LLC, 675 Ponce De Leon Ave NE #5000, Atlanta, GA 30308, USA. Die Datenschutzbestimmungen
                        des Versanddienstleisters können Sie hier einsehen: https://mailchimp.com/legal/privacy/. The Rocket Science
                        Group LLC d/b/a MailChimp ist unter dem Privacy-Shield-Abkommen zertifiziert und bietet hierdurch eine Garantie,
                        das europäisches Datenschutzniveau einzuhalten (https://www.privacyshield.gov/participant?id=a2zt0000000TO6hAAG&status=Active).</li>
                    <li>39.6. Des Weiteren kann der Versanddienstleister nach eigenen Informationen diese Daten in pseudonymer Form,
                        d.h. ohne Zuordnung zu einem Nutzer, zur Optimierung oder Verbesserung der eigenen Services nutzen, z.B.
                        zur technischen Optimierung des Versandes und der Darstellung der Newsletter oder für statistische Zwecke,
                        um zu bestimmen aus welchen Ländern die Empfänger kommen, verwenden. Der Versanddienstleister nutzt die Daten
                        unserer Newsletterempfänger jedoch nicht, um diese selbst anzuschreiben oder an Dritte weiterzugeben.</li>
                    <li>39.7. Anmeldedaten: Um sich für den Newsletter anzumelden, reicht es aus, wenn Sie Ihre E-Mailadresse angeben.
                        Optional bitten wir Sie einen Namen, zwecks persönlicher Ansprache im Newsletters anzugeben.</li>
                    <li>39.8. Erfolgsmessung - Die Newsletter enthalten einen sog. „web-beacon“, d.h. eine pixelgroße Datei, die beim
                        Öffnen des Newsletters von dem Server des Versanddienstleisters abgerufen wird. Im Rahmen dieses Abrufs werden
                        zunächst technische Informationen, wie Informationen zum Browser und Ihrem System, als auch Ihre IP-Adresse
                        und Zeitpunkt des Abrufs erhoben. Diese Informationen werden zur technischen Verbesserung der Services anhand
                        der technischen Daten oder der Zielgruppen und ihres Leseverhaltens anhand derer Abruforte (die mit Hilfe
                        der IP-Adresse bestimmbar sind) oder der Zugriffszeiten genutzt. Zu den statistischen Erhebungen gehört ebenfalls
                        die Feststellung, ob die Newsletter geöffnet werden, wann sie geöffnet werden und welche Links geklickt werden.
                        Diese Informationen können aus technischen Gründen zwar den einzelnen Newsletterempfängern zugeordnet werden.
                        Es ist jedoch weder unser Bestreben, noch das des Versanddienstleisters, einzelne Nutzer zu beobachten. Die
                        Auswertungen dienen uns viel mehr dazu, die Lesegewohnheiten unserer Nutzer zu erkennen und unsere Inhalte
                        auf sie anzupassen oder unterschiedliche Inhalte entsprechend den Interessen unserer Nutzer zu versenden.</li>
                    <li>Der Versand des Newsletters und die Erfolgsmessung erfolgen auf Grundlage einer Einwilligung der Empfänger gem.
                        Art. 6 Abs. 1 lit. a, Art. 7 DSGVO i.V.m § 7 Abs. 2 Nr. 3 UWG bzw. auf Grundlage der gesetzlichen Erlaubnis
                        gem. § 7 Abs. 3 UWG.</li>
                    <li>39.11. Die Protokollierung des Anmeldeverfahrens erfolgt auf Grundlage unserer berechtigten Interessen gem. Art.
                        6 Abs. 1 lit. f DSGVO und dient dem Nachweis der Einwilligung in den Empfang des Newsletters.</li>
                    <li>39.12. Kündigung/Widerruf - Sie können den Empfang unseres Newsletters jederzeit kündigen, d.h. Ihre Einwilligungen
                        widerrufen. Einen Link zur Kündigung des Newsletters finden Sie am Ende eines jeden Newsletters. Wenn die
                        Nutzer sich nur zum Newsletter angemeldet und diese Anmeldung gekündigt haben, werden ihre personenbezogenen
                        Daten gelöscht.</li>
                </ol>
            </li>
            <li>
                <h4>Einbindung von Diensten und Inhalten Dritter</h4>
                <ol>
                    <li>Wir setzen innerhalb unseres Onlineangebotes auf Grundlage unserer berechtigten Interessen (d.h. Interesse an
                        der Analyse, Optimierung und wirtschaftlichem Betrieb unseres Onlineangebotes im Sinne des Art. 6 Abs. 1
                        lit. f. DSGVO) Inhalts- oder Serviceangebote von Drittanbietern ein, um deren Inhalte und Services, wie z.B.
                        Videos oder Schriftarten einzubinden (nachfolgend einheitlich bezeichnet als “Inhalte”). Dies setzt immer
                        voraus, dass die Drittanbieter dieser Inhalte, die IP-Adresse der Nutzer wahrnehmen, da sie ohne die IP-Adresse
                        die Inhalte nicht an deren Browser senden könnten. Die IP-Adresse ist damit für die Darstellung dieser Inhalte
                        erforderlich. Wir bemühen uns nur solche Inhalte zu verwenden, deren jeweilige Anbieter die IP-Adresse lediglich
                        zur Auslieferung der Inhalte verwenden. Drittanbieter können ferner so genannte Pixel-Tags (unsichtbare Grafiken,
                        auch als "Web Beacons" bezeichnet) für statistische oder Marketingzwecke verwenden. Durch die "Pixel-Tags"
                        können Informationen, wie der Besucherverkehr auf den Seiten dieser Website ausgewertet werden. Die pseudonymen
                        Informationen können ferner in Cookies auf dem Gerät der Nutzer gespeichert werden und unter anderem technische
                        Informationen zum Browser und Betriebssystem, verweisende Webseiten, Besuchszeit sowie weitere Angaben zur
                        Nutzung unseres Onlineangebotes enthalten, als auch mit solchen Informationen aus anderen Quellen verbunden
                        werden können.</li>
                    <li>Die nachfolgende Darstellung bietet eine Übersicht von Drittanbietern sowie ihrer Inhalte, nebst Links zu deren
                        Datenschutzerklärungen, welche weitere Hinweise zur Verarbeitung von Daten und, z.T. bereits hier genannt,
                        Widerspruchsmöglichkeiten (sog. Opt-Out) enthalten:
                        <ul>
                            <li>
                                Falls unsere Kunden die Zahlungsdienste Dritter (z.B. PayPal oder Sofortüberweisung) nutzen, gelten die Geschäftsbedingungen
                                und die Datenschutzhinweise der jeweiligen Drittanbieter, welche innerhalb der jeweiligen Webseiten,
                                bzw. Transaktionsapplikationen abrufbar sind.
                            </li>
                            <li>Externe Schriftarten von Google, LLC., https://www.google.com/fonts („Google Fonts“). Die Einbindung
                                der Google Fonts erfolgt durch einen Serveraufruf bei Google (in der Regel in den USA). Datenschutzerklärung:
                                https://policies.google.com/privacy, Opt-Out: https://adssettings.google.com/authenticated.</li>
                            <li>Landkarten des Dienstes „Google Maps“ des Drittanbieters Google LLC, 1600 Amphitheatre Parkway, Mountain
                                View, CA 94043, USA, gestellt. Datenschutzerklärung: https://www.google.com/policies/privacy/, Opt-Out:
                                https://www.google.com/settings/ads/.
                            </li>
                            <li>Videos der Plattform “YouTube” des Drittanbieters Google LLC, 1600 Amphitheatre Parkway, Mountain View,
                                CA 94043, USA. Datenschutzerklärung: https://policies.google.com/privacy, Opt-Out: https://adssettings.google.com/authenticated.</li>
                            <li>Innerhalb unseres Onlineangebotes sind Funktionen des Dienstes Google+ eingebunden. Diese Funktionen
                                werden angeboten durch den Drittanbieter Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA
                                94043, USA. Wenn Sie in Ihrem Google+ – Account eingeloggt sind können Sie durch Anklicken des Google+
                                – Buttons die Inhalte unserer Seiten mit Ihrem Google+ – Profil verlinken. Dadurch kann Google den
                                Besuch unserer Seiten Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als Anbieter
                                der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch Google+ erhalten.
                                Datenschutzerklärung: https://policies.google.com/privacy, Opt-Out: https://adssettings.google.com/authenticated.</li>
                            <li>Innerhalb unseres Onlineangebotes sind Funktionen des Dienstes Instagram eingebunden. Diese Funktionen
                                werden angeboten durch die Instagram Inc., 1601 Willow Road, Menlo Park, CA, 94025, USA integriert.
                                Wenn Sie in Ihrem Instagram – Account eingeloggt sind können Sie durch Anklicken des Instagram –
                                Buttons die Inhalte unserer Seiten mit Ihrem Instagram – Profil verlinken. Dadurch kann Instagram
                                den Besuch unserer Seiten Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als Anbieter
                                der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch Instagram
                                erhalten. Datenschutzerklärung: http://instagram.com/about/legal/privacy/.
                            </li>
                            <li>Innerhalb unseres Onlineangebotes nutzen wird die Marketing-Funktionen (sog. „LinkedIn Insight Tag“)
                                des Netzwerks LinkedIn. Anbieter ist die LinkedIn Corporation, 2029 Stierlin Court, Mountain View,
                                CA 94043, USA. Bei jedem Abruf einer unserer Seiten, die Funktionen von LinkedIn enthält, wird eine
                                Verbindung zu Servern von LinkedIn aufbaut. LinkedIn wird darüber informiert, dass Sie unsere Internetseiten
                                mit Ihrer IP-Adresse besucht haben. Mit Hilfe des LinkedIn Insight Tag können wir insbesondere dem
                                Erfolg unserer Kampagnen innerhalb von LinkedIn analysieren oder Zielgruppen für diese auf Grundlage
                                der Interaktion der Nutzer mit unserem Onlineangebot bestimmen. Wenn Sie bei LinkedIn registriert
                                sind, ist es LinkedIn möglich, Ihrer Interaktion mit unserem Onlineangebot Ihrem Benutzerkonto zuzuordnen.
                                Auch wenn Sie den “Recommend-Button” von LinkedIn anklicken und in Ihrem Account bei LinkedIn eingeloggt
                                sind, ist es LinkedIn möglich, Ihren Besuch auf unserer Internetseite Ihnen und Ihrem Benutzerkonto
                                zuzuordnen. LinkedIn ist unter dem Privacy-Shield-Abkommen zertifiziert und bietet hierdurch eine
                                Garantie, das europäische Datenschutzrecht einzuhalten (https://www.privacyshield.gov/participant?id=a2zt0000000L0UZAA0&status=Active).
                                Datenschutzerklärung: https://www.linkedin.com/legal/privacy-policy, Opt-Out: https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out.</li>
                            <li>Wir verwenden Social Plugins des sozialen Netzwerkes Pinterest, das von der Pinterest Inc., 635 High
                                Street, Palo Alto, CA, 94301, USA (“Pinterest”) betrieben wird. Wenn Sie eine Seite aufrufen die
                                ein solches Plugin enthält, stellt Ihr Browser eine direkte Verbindung zu den Servern von Pinterest
                                her. Das Plugin übermittelt dabei Protokolldaten an den Server von Pinterest in die USA. Diese Protokolldaten
                                enthalten möglicherweise Ihre IP-Adresse, die Adresse der besuchten Websites, die ebenfalls Pinterest-Funktionen
                                enthalten, Art und Einstellungen des Browsers, Datum und Zeitpunkt der Anfrage, Ihre Verwendungsweise
                                von Pinterest sowie Cookies. Datenschutzerklärung: https://about.pinterest.com/de/privacy-policy.</li>
                            <li>Innerhalb unseres Onlineangebotes können Funktionen des Dienstes, bzw. der Plattform Twitter eingebunden
                                (nachfolgend bezeichnet als „Twitter“). Twitter ist ein Angebot der Twitter Inc., 1355 Market Street,
                                Suite 900, San Francisco, CA 94103, USA. Die Funktionen beinhalten die Darstellung unserer Beiträge
                                innerhalb von Twitter innerhalb unseres Onlineangebotes, die Verknüpfung zu unserem Profil bei Twitter
                                sowie die Möglichkeit mit den Beiträgen und den Funktionen von Twitter zu interagieren, als auch
                                zu messen, ob Nutzer über die von uns bei Twitter geschalteten Werbeanzeigen auf unser Onlineangebot
                                gelangen (sog. Conversion-Messung). Twitter ist unter dem Privacy-Shield-Abkommen zertifiziert und
                                bietet hierdurch eine Garantie, das europäische Datenschutzrecht einzuhalten (https://www.privacyshield.gov/participant?id=a2zt0000000TORzAAO&status=Active).
                                Datenschutzerklärung: https://twitter.com/de/privacy, Opt-Out: https://twitter.com/personalization.</li>
                            <li>Wir verwenden Social Plugins des sozialen Netzwerkes Tumblr, das von der Tumblr, Inc. befindet sich 35
                                East 21st Street, 10E, New York, NY 10010, USA (“Tumblr ”) betrieben wird. Wenn Sie eine Seite aufrufen
                                die ein solches Plugin enthält, stellt Ihr Browser eine direkte Verbindung zu den Servern von Tumblr
                                her. Das Plugin übermittelt dabei Protokolldaten an den Server von Tumblr in die USA. Diese Protokolldaten
                                enthalten möglicherweise Ihre IP-Adresse, die Adresse der besuchten Websites, die ebenfalls Tumblr
                                -Funktionen enthalten, Art und Einstellungen des Browsers, Datum und Zeitpunkt der Anfrage, Ihre
                                Verwendungsweise von Tumblr sowie Cookies. Datenschutzerklärung: https://www.tumblr.com/policy/en/privacy.</li>
                            <li>Wir nutzen Funktionen des Netzwerks XING. Anbieter ist die XING AG, Dammtorstraße 29-32, 20354 Hamburg,
                                Deutschland. Bei jedem Abruf einer unserer Seiten, die Funktionen von Xing enthält, wird eine Verbindung
                                zu Servern von Xing hergestellt. Eine Speicherung von personenbezogenen Daten erfolgt dabei nach
                                unserer Kenntnis nicht. Insbesondere werden keine IP-Adressen gespeichert oder das Nutzungsverhalten
                                ausgewertet. Datenschutzerklärung: https://www.xing.com/app/share?op=data_protection.</li>
                        </ul>
                    </li>
                </ol>
            </li>
        </ol>
        <Link to="/">Go back to the homepage</Link>
      </div>
    </div>
  </Layout>
)

export default Datenschutz
