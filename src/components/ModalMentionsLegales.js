import React from 'react';
import Modal from 'react-bootstrap/Modal';

class ModalMentionsLegales extends React.Component {
  render() {
    let modalMentionsLegales = null;
    if (this.props.showModalMentionsLegales) {
      modalMentionsLegales =
        <Modal className={'modal-mentions-legales'} show={this.props.showModalMentionsLegales} onHide={this.props.closeModalMentionsLegales}>
          <Modal.Header className={'title'} closeButton>
            <Modal.Title>Legal Notices</Modal.Title>
          </Modal.Header>

          <div className={'mentions-legales-content'}>
            <h2>Definitions</h2>
            <p><b>Client:</b> any professional or capable individual as per articles 1123 and following of the Civil Code, or legal entity, who visits the Site subject to these general conditions.<br/>
              <b>Services and Services:</b> <a href="https://pol-thomas.com/">https://pol-thomas.com/</a> makes available to Clients: </p>

            <p><b>Content:</b> All the elements constituting the information present on the Site, notably texts – images – videos.</p>

            <p><b>Client information:</b> Hereinafter referred to as "Information(s)" which corresponds to all the personal data that can be held by <a href="https://pol-thomas.com/">https://pol-thomas.com/</a> for the management of your account, client relationship management and for analysis and statistics purposes.</p>

            <p><b>User:</b> Internet user connecting, using the aforementioned site.</p>
            <p><b>Personal information:</b> "The information that allows, in any form whatsoever, directly or not, the identification of the natural persons to whom it applies" (Article 4 of Law No. 78-17 of January 6, 1978).</p>
            <p>The terms "personal data", "data subject", "processor", and "sensitive data" have the meanings defined by the General Data Protection Regulation (GDPR: No. 2016-679)</p>

            <h2>1. Presentation of the website.</h2>
            <p>Under Article 6 of Law No. 2004-575 of June 21, 2004 on confidence in the digital economy, it is specified to the users of the website <a href="https://pol-thomas.com/">https://pol-thomas.com/</a> the identity of the various stakeholders in the context of its implementation and monitoring:
            </p><p><strong>Owner</strong>: Pol Thomas – 44 rue de Strasbourg 44000 Nantes<br/>

            <strong>Publication manager</strong>: pol.thomas56@gmail.com – pol.thomas56@gmail.com<br/>
            The publication manager is a natural or a legal person.<br/>
            <strong>Webmaster</strong>: Pol Thomas – contact@pol-thomas.com<br/>
            <strong>Host</strong>: 1and1 – 7 Place de la Gare 57200 Sarreguemines 0970 808 911<br/>
            <strong>Data Protection Officer</strong>: Pol Thomas – pol.thomas56@gmail.com<br/>
          </p>

            <div ng-bind-html="linkHTML"><p>This legal notice template is offered by the <a href="https://fr.orson.io/1371/generateur-mentions-legales" title="GDPR legal notice generator">GDPR legal notice generator of Orson.io</a></p></div>

            <h2>2. General conditions of use of the site and the services offered.</h2>

            <p>The Site constitutes a work of the intellect protected by the provisions of the Intellectual Property Code and applicable International Regulations.
              The Client may in no way reuse, transfer, or exploit for their own account all or part of the elements or works of the Site.</p>

            <p>The use of the site <a href="https://pol-thomas.com/">https://pol-thomas.com/</a> implies full and complete acceptance of the general conditions of use described below. These conditions of use may be modified or supplemented at any time, users of the site <a href="https://pol-thomas.com/">https://pol-thomas.com/</a> are therefore invited to consult them regularly.</p>

            <p>This website is normally accessible to users at any time. An interruption for technical maintenance can however be decided by <a href="https://pol-thomas.com/">https://pol-thomas.com/</a>, who will then endeavor to communicate to users the dates and times of the intervention.
              The website <a href="https://pol-thomas.com/">https://pol-thomas.com/</a> is updated regularly by <a href="https://pol-thomas.com/">https://pol-thomas.com/</a> responsible. Similarly, the legal notices may be modified at any time: they nevertheless impose themselves on the user who is invited to refer to them as often as possible in order to be aware of them.</p>

            <h2>3. Description of the services provided.</h2>

            <p>The website <a href="https://pol-thomas.com/">https://pol-thomas.com/</a> aims to provide information concerning all the company's activities.
              <a href="https://pol-thomas.com/">https://pol-thomas.com/</a> strives to provide on the website <a href="https://pol-thomas.com/">https://pol-thomas.com/</a> accurate information as possible. However, it cannot be held responsible for omissions, inaccuracies, and deficiencies in the update, whether by its fault or the fault of third-party partners that provide this information.</p>

            <p>All the information indicated on the website <a href="https://pol-thomas.com/">https://pol-thomas.com/</a> is given for information only, and are subject to change. Moreover, the information on the website <a href="https://pol-thomas.com/">https://pol-thomas.com/</a> is not exhaustive. They are given subject to modifications having been made since they were put online.</p>

            <h2>4. Contractual limitations on technical data.</h2>

            <p>The site uses JavaScript technology.

              The website cannot be held responsible for material damage related to the use of the site. Moreover, the user of the site agrees to access the site using recent equipment, not containing viruses and with an up-to-date latest generation browser
              The website <a href="https://pol-thomas.com/">https://pol-thomas.com/</a> is hosted by a service provider in the territory of the European Union in accordance with the provisions of the General Data Protection Regulation (GDPR: No. 2016-679)</p>

            <p>The aim is to provide a service that ensures the best rate of accessibility. The host ensures the continuity of its service 24 Hours on 24, every day of the year. It reserves however the right to interrupt the hosting service for the shortest durations possible in particular for maintenance, improvement of its infrastructures, failure of its infrastructures or if the Services and Services generate a traffic deemed abnormal.</p>

            <p><a href="https://pol-thomas.com/">https://pol-thomas.com/</a> and the host cannot be held responsible in case of malfunctioning of the Internet network, telephone lines or computer and telephony equipment related notably to the congestion of the network preventing access to the server.</p>

            <h2>5. Intellectual property and counterfeits.</h2>

            <p><a href="https://pol-thomas.com/">https://pol-thomas.com/</a> owns the intellectual property rights and holds the rights to use all the elements accessible on the website, in particular the texts, images, graphics, logos, videos, icons, and sounds.
              Any reproduction, representation, modification, publication, adaptation of all or part of the elements of the site, whatever the means or process used, is prohibited, without prior written permission from: <a href="https://pol-thomas.com/">https://pol-thomas.com/</a>.</p>

            <p>Any unauthorized use of the site or any of its elements will be considered as constituting an infringement and prosecuted in accordance with the provisions of Articles L.335-2 and following of the Intellectual Property Code.</p>

            <h2>6. Limitations of liability.</h2>

            <p><a href="https://pol-thomas.com/">https://pol-thomas.com/</a> acts as the publisher of the site. <a href="https://pol-thomas.com/">https://pol-thomas.com/</a> is responsible for the quality and truthfulness of the Content it publishes. </p>

            <p><a href="https://pol-thomas.com/">https://pol-thomas.com/</a> cannot be held responsible for direct and indirect damage caused to the user's equipment, when accessing the website <a href="https://pol-thomas.com/">https://pol-thomas.com/</a>, and resulting either from the use of equipment that does not meet the specifications stated in point 4, or the appearance of a bug or incompatibility.</p>

            <p><a href="https://pol-thomas.com/">https://pol-thomas.com/</a> cannot also be held responsible for indirect damage (such as for example a market loss or loss of a chance) resulting from the use of the site <a href="https://pol-thomas.com/">https://pol-thomas.com/</a>.
              Interactive spaces (possibility to ask questions in the contact space) are available to users. <a href="https://pol-thomas.com/">https://pol-thomas.com/</a> reserves the right to delete, without prior notice, any content deposited in this space that contravenes the legislation applicable in France, in particular the provisions relating to data protection. Where appropriate, <a href="https://pol-thomas.com/">https://pol-thomas.com/</a> also reserves the right to challenge the user's civil and/or criminal liability, especially in the case of a message of a racist, abusive, defamatory, or pornographic nature, whatever the medium used (text, photograph…).</p>

            <h2>7. Management of personal data.</h2>

            <p>The Client is informed of the regulations concerning marketing communication, the law of June 21, 2014 for confidence in the Digital Economy, the Computer and Freedom law of August 06, 2004 as well as the General Regulation on Data Protection (GDPR: No. 2016-679). </p>

            <h3>7.1 Responsible for the collection of personal data</h3>

            <p>For Personal Data collected in the context of the creation of the personal account of the User and his navigation on the Site, the person responsible for processing Personal Data is: Pol Thomas. <a href="https://pol-thomas.com/">https://pol-thomas.com/</a>is represented by Pol Thomas, its legal representative</p>

            <p>As responsible for the data it collects, <a href="https://pol-thomas.com/">https://pol-thomas.com/</a> commits to comply with the framework of the legal provisions in force. It is their responsibility in particular to establish the purposes of its data processing, to provide its prospects and clients, from the collection of their consents, complete information on the processing of their personal data and to maintain a processing register compliant to reality.
              Whenever <a href="https://pol-thomas.com/">https://pol-thomas.com/</a> processes Personal Data, <a href="https://pol-thomas.com/">https://pol-thomas.com/</a> takes all reasonable measures to ensure the accuracy and relevance of the Personal Data with respect to the purposes for which <a href="https://pol-thomas.com/">https://pol-thomas.com/</a> processes them.</p>
            &nbsp;
            <h3>7.2 Purpose of the data collected</h3>
            &nbsp;
            <p><a href="https://pol-thomas.com/">https://pol-thomas.com/</a> is likely to process all or part of the data: </p>

            <ul>

              <li>to enable navigation on the Site and the management and traceability of services and services ordered by the user: connection and usage data of the Site, billing, order history, etc. </li>
              &nbsp;
              <li>to prevent and fight against computer fraud (spamming, hacking…): computer equipment used for browsing, IP address, password (hashed) </li>
              &nbsp;
              <li>to improve navigation on the Site: connection and usage data </li>
              &nbsp;
              <li>to conduct optional satisfaction surveys on <a href="https://pol-thomas.com/">https://pol-thomas.com/</a>: email address </li>
              <li>to conduct communication campaigns (sms, email): phone number, email address</li>


            </ul>

            <p><a href="https://pol-thomas.com/">https://pol-thomas.com/</a> does not market your personal data which are therefore only used by necessity or for statistical and analysis purposes.</p>
            &nbsp;
            <h3>7.3 Right of access, rectification, and opposition</h3>
            &nbsp;
            <p>
              In accordance with European regulations in force, Users of <a href="https://pol-thomas.com/">https://pol-thomas.com/</a> have the following rights: </p>
            &nbsp;<ul>

            <li>right of access (Article 15 GDPR) and rectification (Article 16 GDPR), update, completeness of Users' data right to lock or erase personal Users' data (Article 17 of the GDPR), when they are inaccurate, incomplete, equivocal, outdated, or whose collection, use, communication or storage is prohibited </li>
            &nbsp;
            <li>right to withdraw consent at any time (Article 13-2c GDPR) </li>
            &nbsp;
            <li>right to limit the processing of Users' data (Article 18 GDPR) </li>
            &nbsp;
            <li>right to oppose the processing of Users' data (Article 21 GDPR) </li>
            &nbsp;
            <li>right to the portability of the data that the Users will have provided, when these data are subject to automated processing based on their consent or on a contract (Article 20 GDPR) </li>
            &nbsp;
            <li>right to define the fate of Users' data after their death and to choose to whom <a href="https://pol-thomas.com/">https://pol-thomas.com/</a> should communicate (or not) his data to a third party they have previously designated</li>
            &nbsp;</ul>

            <p>As soon as <a href="https://pol-thomas.com/">https://pol-thomas.com/</a> is aware of the death of a User and in the absence of instructions from him, <a href="https://pol-thomas.com/">https://pol-thomas.com/</a> commits to destroying his data, unless their retention proves necessary for probative purposes or to meet a legal obligation.</p>
            &nbsp;
            <p>If the User wishes to know how <a href="https://pol-thomas.com/">https://pol-thomas.com/</a> uses his Personal Data, ask to rectify them or opposes their processing, the User can contact <a href="https://pol-thomas.com/">https://pol-thomas.com/</a> in writing at the following address: </p>
            &nbsp;
            Pol Thomas – DPO, Pol Thomas <br/>
            44 rue de Strasbourg 44000 Nantes.
            &nbsp;
            <p>In this case, the User must indicate the Personal Data that he would like <a href="https://pol-thomas.com/">https://pol-thomas.com/</a> to correct, update, or delete, by identifying himself precisely with a copy of an identity document (identity card or passport). </p>

            <p>
              Requests for deletion of Personal Data will be subject to the obligations that are imposed on <a href="https://pol-thomas.com/">https://pol-thomas.com/</a> by law, particularly in terms of document retention or archiving. Finally, Users of <a href="https://pol-thomas.com/">https://pol-thomas.com/</a> can file a complaint with the control authorities, and particularly the CNIL (https://www.cnil.fr/en/plaintes).</p>
            &nbsp;
            <h3>7.4 Non-communication of personal data</h3>

            <p>
              <a href="https://pol-thomas.com/">https://pol-thomas.com/</a> is prohibited from processing, hosting, or transferring the Information collected on its Clients to a country located outside the European Union or recognized as "inadequate" by the European Commission without informing the client beforehand. However, <a href="https://pol-thomas.com/">https://pol-thomas.com/</a> remains free to choose its technical and commercial subcontractors on the condition that they present the sufficient guarantees with respect to the requirements of the General Data Protection Regulation (GDPR: No. 2016-679).</p>

            <p>
              <a href="https://pol-thomas.com/">https://pol-thomas.com/</a> commits to taking all necessary precautions to preserve the security of the Information and in particular that they are not communicated to unauthorized persons. However, if an incident impacting the integrity or confidentiality of the Client's Information is brought to the attention of <a href="https://pol-thomas.com/">https://pol-thomas.com/</a>, it must inform the Client as soon as possible and communicate the corrective measures taken. Moreover, <a href="https://pol-thomas.com/">https://pol-thomas.com/</a> does not collect any "sensitive data".</p>

            <p>
              The User's Personal Data may be processed by subsidiaries of <a href="https://pol-thomas.com/">https://pol-thomas.com/</a> and subcontractors (service providers), exclusively in order to achieve the purposes of this policy.</p>
            <p>
              Within the limits of their respective responsibilities and for the purposes mentioned above, the main people likely to have access to the data of Users of <a href="https://pol-thomas.com/">https://pol-thomas.com/</a> are mainly the agents of our customer service.</p>

            <div ng-bind-html="rgpdHTML"></div>


            <h2>8. Incident notification</h2>
            <p>
              No matter how hard they try, no method of transmission over the Internet, or method of electronic storage, is completely secure. We cannot, therefore, guarantee absolute security.
              If we were aware of a breach of security, we would notify affected users so that they can take appropriate measures. Our incident notification procedures take into account our legal obligations, whether at the national or European level. We are committed to fully informing our customers of all matters related to the security of their account and to providing them with all the information necessary to help them meet their own regulatory reporting requirements.</p>
            <p>
              No personal information of the user of the site <a href="https://pol-thomas.com/">https://pol-thomas.com/</a> is published without the user's knowledge, exchanged, transferred, assigned, or sold on any support to others. Only the hypothesis of the buyout of <a href="https://pol-thomas.com/">https://pol-thomas.com/</a> and its rights would allow the transmission of said information to the eventual acquirer who would in turn be given the same obligation to store and modify data with respect to the user of the site <a href="https://pol-thomas.com/">https://pol-thomas.com/</a>.</p>

            <h3>Security</h3>

            <p>
              To ensure the security and confidentiality of Personal Data and Personal Health Data, <a href="https://pol-thomas.com/">https://pol-thomas.com/</a> uses networks protected by standard devices such as by firewalls, pseudonymization, encryption, and password. </p>
            &nbsp;
            <p>
              When processing Personal Data, <a href="https://pol-thomas.com/">https://pol-thomas.com/</a>takes all reasonable measures to protect them against loss, misuse, unauthorized access, disclosure, alteration, or destruction.</p>
            &nbsp;
            <h2>9. Hyperlinks "cookies" and internet tags</h2>
            <p>
              The site <a href="https://pol-thomas.com/">https://pol-thomas.com/</a> contains a number of hyperlinks to other sites, set up with the authorization of <a href="https://pol-thomas.com/">https://pol-thomas.com/</a>. However, <a href="https://pol-thomas.com/">https://pol-thomas.com/</a> does not have the possibility to check the content of the sites thus visited, and will therefore not assume any responsibility for this fact.</p>
            Unless you decide to disable cookies, you agree that the site can use them. You can at any time disable these cookies and this free of charge from the deactivation options offered to you and recalled below, knowing that this can reduce or prevent accessibility to all or part of the Services offered by the site.
            <p></p>

            <h3>9.1. « COOKIES »</h3>
            &nbsp;<p>
            A "cookie" is a small information file sent to the User's browser and saved within the User's terminal (e.g., computer, smartphone), (hereinafter "Cookies"). This file includes information such as the User's domain name, the User's Internet service provider, the User's operating system, as well as the date and time of access. Cookies in no way risk damaging the User's terminal.</p>
            &nbsp;<p>
            <a href="https://pol-thomas.com/">https://pol-thomas.com/</a> is likely to process the User's information concerning his visit to the Site, such as the pages viewed, the searches carried out. This information allows <a href="https://pol-thomas.com/">https://pol-thomas.com/</a> to improve the content of the Site, the User's navigation.</p>
            &nbsp;<p>
            Cookies facilitating the navigation and/or the provision of the services offered by the Site, the User can configure his browser to allow him to decide whether he wishes to accept them so that Cookies are stored in the terminal or, on the contrary, they are rejected, either systematically or according to their issuer. The User can also configure his navigation software so that the acceptance or rejection of Cookies is proposed to him punctually, before a Cookie is likely to be registered in his terminal. <a href="https://pol-thomas.com/">https://pol-thomas.com/</a> informs the User that, in this case, it may be that not all functionalities of his navigation software are available.</p>
            &nbsp;<p>
            If the User refuses the recording of Cookies in his terminal or his browser, or if the User deletes those recorded there, the User is informed that his navigation and his experience on the Site may be limited. This could also be the case when <a href="https://pol-thomas.com/">https://pol-thomas.com/</a> or one of its service providers cannot recognize, for technical compatibility purposes, the type of browser used by the terminal, language and display settings or the country from which the terminal appears to be connected to the Internet.</p>
            &nbsp;<p>
            In such a case, <a href="https://pol-thomas.com/">https://pol-thomas.com/</a> declines all responsibility for the degraded functioning of the Site and possible services offered by <a href="https://pol-thomas.com/">https://pol-thomas.com/</a>, resulting (i) from the refusal of Cookies by the User (ii) the impossibility for <a href="https://pol-thomas.com/">https://pol-thomas.com/</a> to record or consult the Cookies necessary for their functioning due to the choice of the User. For the management of Cookies and User choices, the configuration of each browser is different. It is described in the help menu of the browser, which will allow to know how the User can change his wishes in terms of Cookies.</p>
            &nbsp;<p>
            At any time, the User can make the choice to express and change his wishes in terms of Cookies. <a href="https://pol-thomas.com/">https://pol-thomas.com/</a> may also call upon external service providers to help collect and process the information described in this section.</p>
            &nbsp;<p>
            Finally, by clicking on the icons dedicated to Twitter, Facebook, Linkedin, and Google Plus social networks appearing on the Site of <a href="https://pol-thomas.com/">https://pol-thomas.com/</a> or in its mobile application and if the User has accepted the deposit of cookies by continuing his navigation on the Website or the mobile application of <a href="https://pol-thomas.com/">https://pol-thomas.com/</a>, Twitter, Facebook, Linkedin, and Google Plus can also deposit cookies on your devices (computer, tablet, mobile phone).</p>
            &nbsp;<p>
            These types of cookies are deposited on your terminals only if you consent to it, by continuing your navigation on the Website or the mobile application of <a href="https://pol-thomas.com/">https://pol-thomas.com/</a>. At any time, the User may nevertheless reconsider his consent to <a href="https://pol-thomas.com/">https://pol-thomas.com/</a> depositing this type of cookies.</p>
            &nbsp;
            <h3>Article 9.2. INTERNET TAGS</h3>
            &nbsp;

            <p>

              <a href="https://pol-thomas.com/">https://pol-thomas.com/</a> may occasionally use Internet tags (also known as "tags", or action tags, GIFs of one pixel, transparent GIFs, invisible GIFs, and one-to-one GIFs) and deploy them through a web analytics partner that may be located (and therefore store the corresponding information, including the User's IP address) in a foreign country.</p>
            &nbsp;
            <p>
              These tags are placed both in online advertisements allowing users to access the Site, and on the various pages of it.
              &nbsp;</p>
            <p>
              This technology allows <a href="https://pol-thomas.com/">https://pol-thomas.com/</a> to evaluate the visitors' responses to the Site and the effectiveness of its actions (for example, the number of times a page is opened and the information consulted), as well as the use of this Site by the User. </p>
            &nbsp;<p>
            The external service provider may possibly collect information about visitors to the Site and other Internet sites thanks to these tags, compile reports on Site activity for <a href="https://pol-thomas.com/">https://pol-thomas.com/</a>, and provide other services relating to the use of it and the Internet.</p>
            &nbsp;<p>
          </p><h2>10. Applicable law and jurisdiction.</h2>
            <p>
              Any dispute in connection with the use of the site <a href="https://pol-thomas.com/">https://pol-thomas.com/</a> is subject to French law.
              Except in cases where the law does not permit it, exclusive jurisdiction is attributed to the competent courts of Nantes</p>
          </div>
        </Modal>
    }
    return(
      <div>
        {modalMentionsLegales}
      </div>
    )
  }
}

export default ModalMentionsLegales;
