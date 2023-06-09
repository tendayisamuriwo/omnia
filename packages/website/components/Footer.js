import Section from './Section';
import ButtonLink from './ButtonLink';

export default ({ about, contact }) => (
  <footer>
    <Section innerStyle={{padding: '2px 0 50px'}}>
      <h4>Interested in working with us?</h4>
      <h3>Drop us a line</h3>
      <a href={`mailto:${contact.mail}`}>{contact.mail}</a>
      <ButtonLink href={about.docLink.replace('%DOCNAME%', about.docName)}>
        <i className="icon icon-profile" />
        Download the Immunosense<sup>&reg;</sup> Technology Brief
      </ButtonLink>
    </Section>
    <style jsx>{`
      footer {
        background-color: #FAFAFA;
        color: #323C6B;
        width: 100%;
        border-bottom: 6px solid #323C6B;
      }

      a {
        color: #323C6B;
        font-size: 20px;
      }

      a:hover {
        color: #f96b6b;
      }

      .icon {
        font-size: 13px;
        margin-right: 3px;
      }

      h4 {
        margin: 0;
      }

      h3 {
        margin: 20px 0;
      }
    `}</style>
  </footer>
)
