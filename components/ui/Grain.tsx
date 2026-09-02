const NOISE =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'>
      <filter id='n'>
        <feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/>
        <feColorMatrix type='saturate' values='0'/>
      </filter>
      <rect width='100%' height='100%' filter='url(#n)' opacity='0.5'/>
    </svg>`,
  );

/** שכבת גרעין פילם על כל האתר. לא אינטראקטיבית. */
export default function Grain() {
  return (
    <div
      aria-hidden
      className="grain-layer"
      style={{ ["--grain-url" as string]: `url("${NOISE}")` }}
    />
  );
}
