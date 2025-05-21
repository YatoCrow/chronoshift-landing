import "./Tracker.css";

export default function Tracker() {
  return (
    <div className="tracker-page">
      <h1 className="tracker-title">Chronoshift Tracker: Install Guide</h1>

      <p className="tracker-intro">
        Install the Chronoshift Tracker as a Progressive Web App (PWA) on your device for fast, offline-ready tracking during games.
      </p>

      <section className="tracker-section">
        <h2>📱 iOS (iPhone & iPad)</h2>
        <ol>
          <li>Open <strong>Safari</strong> and visit <code>https://chronoshift-tracker.yatocrowgames.com</code></li>
          <li>Tap the <strong>Share</strong> icon (the square with an upward arrow)</li>
          <li>Scroll down and tap <strong>“Add to Home Screen”</strong></li>
          <li>Tap <strong>Add</strong> to confirm</li>
        </ol>
      </section>

      <section className="tracker-section">
        <h2>🤖 Android (Phone & Tablet)</h2>
        <ol>
          <li>Open <strong>Chrome</strong> and go to <code>https://chronoshift-tracker.yatocrowgames.com</code></li>
          <li>Tap the <strong>Menu</strong> icon (three dots in the top-right)</li>
          <li>Tap <strong>“Install App”</strong> or <strong>“Add to Home screen”</strong></li>
          <li>Tap <strong>Install</strong> to confirm</li>
        </ol>
      </section>

      <section className="tracker-section">
        <h2>🔗 Quick Access</h2>
        <p>Scan the QR code below to open the Tracker directly on your mobile device:</p>
        <img
          src="/assets/qr-tracker.png"
          alt="Chronoshift Tracker QR Code"
          className="qr-code-image"
        />
      </section>
    </div>
  );
}
