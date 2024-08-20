import React, { useEffect, useState } from 'react';
import { Table, Container, Form } from 'react-bootstrap';
import axios from 'axios';

export const Cryptocurrency = () => {
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Obtener datos de criptomonedas desde la API de CoinGecko
    axios.get('https://api.coingecko.com/api/v3/coins/markets', {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 50, 
        page: 1,
        sparkline: false,
      },
    })
    .then(response => {
      setCryptos(response.data);
    })
    .catch(error => {
      console.error('Error al obtener datos de criptomonedas:', error);
    });
  }, []);

  // Filtrar criptomonedas campo de busqueda
  const filteredCryptos = cryptos.filter(crypto =>
    crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Limitar a 10 criptomonedas
  const limitedCryptos = filteredCryptos.slice(0, 10);

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 full-screen-background full-screen-background cryptocurrencies-background">
      <Container className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="mb-4 text-white">Cryptocurrencies</h1>
            
            {/* Barra de búsqueda */}
            <Form.Group controlId="search" className="mb-4">
              <Form.Control 
                type="text" 
                placeholder="Search" 
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                style={{ 
                  backgroundColor: 'white', 
                  color: 'black', 
                  borderColor: 'black' 
                }}
              />
            </Form.Group>

            {/* Tabla con criptomonedas */}
            <Table 
              striped 
              bordered 
              hover 
              variant="dark"
              style={{ 
                backgroundColor: 'rgba(0, 0, 0, 0.75)', 
                color: 'white', 
                backdropFilter: 'blur(5px)' 
              }}
            >
              <thead>
                <tr>
                  <th>Position</th>
                  <th>Logo</th>
                  <th>Name</th>
                  <th>Symbol</th>
                  <th>Price (USD)</th>
                  <th>Market Cap</th>
                </tr>
              </thead>
              <tbody>
                {limitedCryptos.map((crypto, index) => (
                  <tr key={crypto.id}>
                    <td>{index + 1}</td>
                    <td>
                      <img 
                        src={crypto.image} 
                        alt={`${crypto.name} logo`} 
                        style={{ width: '30px', height: '30px' }}
                      />
                    </td>
                    <td>{crypto.name}</td>
                    <td>{crypto.symbol.toUpperCase()}</td>
                    <td>${crypto.current_price.toFixed(2)}</td>
                    <td>${crypto.market_cap.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </Container>
    </div>
  );
};