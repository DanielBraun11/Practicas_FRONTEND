import { useEffect, useState } from "react";
import type { CharacterT } from "../../types";
import { api } from "../../api/api";
import "./style.css";

export const Character = (params: { id?: number; character?: CharacterT }) => {
  const id = params.id;

  const [personajito, setPersonajito] = useState<CharacterT | null>(
    params.character ? params.character : null
  );

  useEffect(() => {
    if (!params.character && id) {
      // SWAPI usa /people/
      api.get(`/people/${id}`).then((e) => setPersonajito(e.data));
    }
  }, [id, params.character]);

  return (
    <>
      {personajito ? (
        <div className="mainContainer">
          <h2>{personajito.name}</h2>

          <table className="characterTable">
            <tbody>
              <tr>
                <td><strong>Height</strong></td>
                <td>{personajito.height}</td>
              </tr>
              <tr>
                <td><strong>Mass</strong></td>
                <td>{personajito.mass}</td>
              </tr>
              <tr>
                <td><strong>Hair color</strong></td>
                <td>{personajito.hair_color}</td>
              </tr>
              <tr>
                <td><strong>Skin color</strong></td>
                <td>{personajito.skin_color}</td>
              </tr>
              <tr>
                <td><strong>Eye color</strong></td>
                <td>{personajito.eye_color}</td>
              </tr>
              <tr>
                <td><strong>Birth year</strong></td>
                <td>{personajito.birth_year}</td>
              </tr>
              <tr>
                <td><strong>Gender</strong></td>
                <td>{personajito.gender}</td>
              </tr>
              <tr>
                <td><strong>Homeworld</strong></td>
                <td>{personajito.homeworld}</td>
              </tr>
              <tr>
                <td><strong>Films</strong></td>
                <td>{personajito.films?.length ?? 0}</td>
              </tr>
              <tr>
                <td><strong>Vehicles</strong></td>
                <td>{personajito.vehicles?.length ?? 0}</td>
              </tr>
              <tr>
                <td><strong>Starships</strong></td>
                <td>{personajito.starships?.length ?? 0}</td>
              </tr>
              <tr>
                <td><strong>Species</strong></td>
                <td>{personajito.species?.length ?? 0}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};
