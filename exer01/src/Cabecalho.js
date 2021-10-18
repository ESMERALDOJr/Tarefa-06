import React from 'react';

class Cabecalho extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            corFavorita: "vermelho"
        }
    }
    render() {

        const {corFavorita} = this.state;

        return (

            <div>

                <h1>A minha cor favorita é {corFavorita}.</h1>
                
            </div>
        );
    }
}

export default Cabecalho;