// src/pages/TermsOfUse.jsx
import "./Legal.css";

export default function TermsOfUse() {
  return (
    <div className="legal-page-wrapper">
      <div className="legal-page">
        <h1>Terms of Use</h1>
        <p>Last updated: May 2025</p>

        <p>
          These Terms of Use ("Terms") govern your access to and use of the Chronoshift website,
          digital content, game mechanics, artwork, and all associated services owned and operated by
          YatoCrow Games ("we," "us," or "our"). By accessing or using this website, you acknowledge
          that you have read, understood, and agreed to be bound by these Terms.
        </p>

        <h2>Intellectual Property</h2>
        <p>
          All content available on this site is the exclusive intellectual property of YatoCrow Games.
          This includes, but is not limited to, game mechanics, the Time Phase system, card names,
          visual assets, artwork, lore, faction identities, resource systems, emblems, and the Chronoshift Tracker.
        </p>
        <p>
          The titles <strong>Chronoshift™</strong>, <strong>Eclipse Dawn™</strong>, and all related names and factions
          such as <strong>House Noctvaris™</strong>, <strong>The Moondrath™</strong>, <strong>Solari Ascendants™</strong>,
          <strong>Scorchborne™</strong>, <strong>Umbra’kin™</strong>, and <strong>Noctara Sanctum™</strong> are trademarks
          of YatoCrow Games and are protected under international copyright and trademark law.
        </p>
        <p>
          You may not copy, modify, distribute, display, mirror, or create derivative works based on any part of this
          game or its assets without express written permission from YatoCrow Games.
        </p>

        <h2>Usage Restrictions</h2>
        <p>
          You agree not to use this website or its content in any way that violates applicable laws or infringes
          upon intellectual property rights. This includes, but is not limited to, reverse engineering, unauthorized
          reproduction, commercial redistribution, or tampering with the site's code, design, or gameplay systems.
        </p>

        <h2>Third-Party Links</h2>
        <p>
          This website may include links to external services or platforms (such as GitHub, The Game Crafter, or social media).
          We are not responsible for the content, security, or privacy practices of any third-party website. Use of such links
          is at your own discretion.
        </p>

        <h2>Disclaimer and Limitation of Liability</h2>
        <p>
          The website and its content are provided on an "as is" basis. YatoCrow Games makes no warranties, express or implied,
          regarding the accuracy, reliability, or availability of the content. We shall not be liable for any damages resulting
          from your access to or use of the site, including but not limited to technical issues, data loss, or third-party actions.
        </p>

        <h2>Changes to These Terms</h2>
        <p>
          We reserve the right to modify or update these Terms at any time without prior notice. Your continued use of the site
          following any changes will indicate your acceptance of the updated Terms. We recommend reviewing this page periodically
          for the latest version.
        </p>

        <p className="footer-note">
          If you have questions regarding these Terms, please contact us at{" "}
          <a href="mailto:contact@yatocrowgames.com">contact@yatocrowgames.com</a>.
        </p>
      </div>
    </div>
  );
}
