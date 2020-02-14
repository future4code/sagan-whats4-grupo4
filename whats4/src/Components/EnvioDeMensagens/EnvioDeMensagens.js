import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const EnvioDeMensagensContainer = styled.div`
    display: flex;
`

const StyledInput = styled.input`
    width: ${ props => props.comprimento};
`

class EnvioDeMensagens extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            usuario: "",
            msgusuario: ""
        }
    }

    onChangeUsuario = (event) => {
        this.setState({
            usuario: event.target.value
        })
    }

    onChangeMSGUsuario = (event) => {
        this.setState({
            msgusuario: event.target.value
        })
    }

    criarMsg = (event) => {
        this.props.onCriaMensagem({
            usuario: this.state.usuario + ":",
            msgusuario: this.state.msgusuario
        })
    }

    render() {
        return (
            <EnvioDeMensagensContainer>
                <StyledInput comprimento="7vw" type="text" placeholder="Usuario" value={this.props.usuario} onChange={this.onChangeUsuario}></StyledInput>
                <StyledInput comprimento="48vw" type="text" placeholder="Mensagem" value={this.props.msgusuario} onChange={this.onChangeMSGUsuario}></StyledInput>
                <button onClick={this.criarMsg}>Enviar</button>
            </EnvioDeMensagensContainer>
        )
    }

}

EnvioDeMensagens.propTypes = {
    usuario: PropTypes.string.isRequired,
    msgusuario: PropTypes.string.isRequired
}

export default EnvioDeMensagens