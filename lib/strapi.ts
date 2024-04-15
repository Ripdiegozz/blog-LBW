import { slide } from "astro/virtual-modules/transitions.js";

interface Props {
  endpoint: string;
  query?: Record<string, string>;
  wrappedByKey?: string;
  wrappedByList?: boolean;
}

/**
 * Obtiene datos de la API de Strapi.
 * @param endpoint - El endpoint para realizar la consulta
 * @param query - Los parámetros de consulta para agregar a la URL
 * @param wrappedByKey - La clave para desempaquetar la respuesta
 * @param wrappedByList - Si la respuesta es una lista, desempaquétala.
 * @returns
 */
export default async function fetchApi<T>({
  endpoint,
  wrappedByKey,
  wrappedByList,
}: Props): Promise<T> {
  if (endpoint.startsWith("/")) {
    endpoint = endpoint.slice(1);
  }

  let url: URL;

  // Check if the url has params in order to add the populate=* query
  if (!endpoint.includes("?")) {
    url = new URL(`${import.meta.env.STRAPI_URL}/api/${endpoint}?populate=*`);
  } else {
    url = new URL(`${import.meta.env.STRAPI_URL}/api/${endpoint}&populate=*`);
  }

  const res = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${import.meta.env.STRAPI_JWT}`,
    },
  });
  let data = await res.json();

  if (wrappedByKey) {
    data = data[wrappedByKey];
  }

  if (wrappedByList) {
    data = data[0];
  }

  return data as T;
}
