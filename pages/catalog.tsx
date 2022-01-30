import Link from "next/link";
import Image from "next/image";
import { GetStaticProps } from "next";

export default function Catalog({ heroes }) {
  return (
    <div className="ctlg-container">
      <div className="ctlg-header">
        <span className="ctlg-logo">
          <Image src="/marvel-logo.png" alt="Marvel" width={200} height={80} />
        </span>
        <h1>Marvel Comics Catalog</h1>
      </div>

      {heroes.map((item, key) => (
        <div key={key} className="ctlg-session">
        <h1 className="ctlg-session-title">{item.title}</h1>

        <div className="ctlg-carousel">

          {item.characters.map(character => (
            <div key={character.id} className="ctlg-carousel-item">
            <img
              src={character.thumbnail}
              alt={character.name}
            />
            <div className="ctlg-carousel-item-info">
              <h2>{character.name}</h2>
              <a href="https://www.marvel.com/">Saiba mais</a>
            </div>
          </div>
          ))}
          
        </div>
      </div>
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('http://localhost:4000/heroes');
  const data = await response.json();

  return {
    props: {
      heroes: data
    },
    revalidate: 20
  }
}