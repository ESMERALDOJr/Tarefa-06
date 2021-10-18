import React, { Component } from 'react';

class Cabecalho extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
            corFavorita: "vermelho"
        }
    }

    componentDidMount() {
        setInterval(
            () => this.configurarTempoLimite(),
            1000
         );
        
    };

    configurarTempoLimite() {
        this.setState({
          corFavorita: "amarelo"
        });
    }


    render() {
        const {corFavorita} = this.state ;

        return (
            <div>
                
                <h1>A minha cor favorita é {corFavorita}.</h1>
                
            </div>
        );
    }
}

export default Cabecalho;