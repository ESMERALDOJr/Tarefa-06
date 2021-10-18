import React from 'react';
import Garrafa from './Garrafa';

class Recipiente extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mostrar: true
        }
    }
    
    removerCabecalho(){
        this.setState({mostar: false});
    }

    render() {

        const {mostrar} = this.state;

        if(mostrar === true) {
            var meuCabecalho = <Garrafa />;
        }

        return (
            <div>
                {meuCabecalho}
                <button onClick={this.removerCabecalho}>Remover Cabecalho</button>
            </div>
        );
    }
}

export default Recipiente;