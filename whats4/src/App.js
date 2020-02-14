import React from 'react';
import styled from 'styled-components'
import WhatsArea from './Components/WhatsArea/WhatsArea';
import ListaDeMensagens from './Components/ListaDeMensagens/ListaDeMensagens';
import EnvioDeMensagens from './Components/EnvioDeMensagens/EnvioDeMensagens';


const MainContainer = styled.div`
margin: 0;
display: flex;
flex-direction: column;
`

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      listaDeMensagens: [],
    }
  }

  onCriaMensagem = (event) => {
    console.log(event)

    const maisUmaMensagem = {
      usuario: event.usuario,
      msgusuario: event.msgusuario
    }

    this.setState({
      listaDeMensagens: [...this.state.listaDeMensagens, maisUmaMensagem]
    })

  }

  render() {

    let listaCadaMensagem = this.state.listaDeMensagens.map((cadamensagem, index) => {
      return (
        <ListaDeMensagens
          key={index}
          usuario={cadamensagem.usuario}
          msgusuario={cadamensagem.msgusuario}
        />
      )
    })

    return (
      <MainContainer>
        <WhatsArea>
          {listaCadaMensagem}
          <EnvioDeMensagens onCriaMensagem={this.onCriaMensagem}></EnvioDeMensagens>
        </WhatsArea>
      </MainContainer>
    )

  }

}

export default App;
