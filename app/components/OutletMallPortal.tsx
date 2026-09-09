const outletMall = "https://outlet-mall.vercel.app/";

export default function OutletMallPortal() {
  return (
    <section className="outletMallPortal" aria-label="Fruity Puppy Outlet Mall">
      <a
        href={outletMall}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit the Fruity Puppy Outlet Mall"
      >
        <img
          src="/images/outlet-mall-portal.png"
          alt="Visit the Fruity Puppy Outlet Mall"
          loading="lazy"
        />
      </a>
    </section>
  );
}
