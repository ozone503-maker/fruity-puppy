export default function NotFound() {
  return (
    <main className="innerPage" style={{ minHeight: "72vh", padding: "5rem 1.25rem 4rem" }}>
      <p className="tagline">Lost in the jungle</p>
      <h1>This path grew over.</h1>
      <p>That page isn&apos;t here. The cream still is.</p>
      <p style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
        <a className="button dark" href="/">
          Back home
        </a>
        <a className="button" href="https://shop.fruitypuppy.com">
          Shop
        </a>
      </p>
    </main>
  );
}
