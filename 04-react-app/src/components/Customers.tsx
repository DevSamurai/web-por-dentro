import { useEffect, useState } from "react"

type Customer = {
  id: number;
  nome: string;
}

export default function Customers() {
  const [data, setData] = useState<Customer[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/customers`
        );

        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }

        const data = await response.json();
        setData(data?.customers);
      } catch (err) {
        setError(true);
        setData(undefined);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading && <p>Carregando...</p>}
      {error && <p>Erro ao carregar os dados</p>}
      {data && (
        <ul>
          {data.map((customer: Customer) => (
            <li key={customer.id}>{customer.nome}</li>
          ))}
        </ul>
      )}
    </>
  )
}
