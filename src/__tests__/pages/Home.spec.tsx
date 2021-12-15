/**
 * React: se formos renderizar um componente devemos sempre
 * importar o React.
 * Render: para simular a renderizacao do componente devemos
 * importar o { render } da lib RTL RN
 * Componente: sempre devemos iportar o componente que queremos
 * renderizar neste caso "Home"
 */
import React from "react";
import { render } from '@testing-library/react-native'

import Home from "../../pages/Home";

describe('Testes na Home', () => {
  it('verifica se tem um input de text', () => {
    const {getAllByTestId} = render(<Home />)
    const inputSkill = getAllByTestId('input-skill');
    expect(inputSkill).toBeTruthy();
  })
})
