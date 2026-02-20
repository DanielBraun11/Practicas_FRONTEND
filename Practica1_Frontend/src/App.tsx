import { useEffect, useState } from "react";
import "./App.css";
import { Character } from "./components/Character";
import type { CharacterT } from "./types";
import { api } from "./api/api";

type SwapiPage<T> = {
  next: string | null;
  previous: string | null;
  results: T[];
};

const App = () => {
  const [characters, setCharacters] = useState<CharacterT[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [nextPageUrl, setNextPageUrl] = useState<string | null>(null);

  const fetchFirstPage = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await api.get<SwapiPage<CharacterT>>("/people/");
      setCharacters(res.data.results);
      setNextPageUrl(res.data.next);
    } catch (e) {
      setError(`Error al obtener los datos: ${String(e)}`);
      setCharacters([]);
      setNextPageUrl(null);
    } finally {
      setLoading(false);
    }
  };

  const fetchNextPage = async () => {
    if (!nextPageUrl) return;

    setLoading(true);
    setError(null);

    try {
      const res = await api.get<SwapiPage<CharacterT>>(nextPageUrl);

      // acumular (no reemplazar)
      setCharacters((prev) => [...prev, ...res.data.results]);
      setNextPageUrl(res.data.next);
    } catch (e) {
      setError(`Error al obtener la siguiente página: ${String(e)}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFirstPage();
  }, []);

  return (
    <>
      {loading && <h2 style={{ textAlign: "center", marginTop: 20 }}>Loading...</h2>}
      {error && <h3 style={{ textAlign: "center", marginTop: 20 }}>Error: {error}</h3>}

      <div className="gridContainer">
        {!error &&
          characters.map((c) => (
            <Character key={c.url ?? c.name} character={c} />
          ))}
      </div>

      <div className="paginationContainer">
        <button onClick={fetchNextPage} disabled={!nextPageUrl || loading}>
          {nextPageUrl ? "Siguiente página" : "No hay más personajes"}
        </button>
      </div>
    </>
  );
};

export default App;