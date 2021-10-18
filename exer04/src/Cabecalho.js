import React from 'react';

class Cabecalho extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            corFavorita: "vermelho"
        }
    }

    componentDidMount() {
        console.warn("componentDidMount")
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

    componentDidUpdate(prevProps) {
        console.warn("componentDidUpdate");
        console.log(this.state.corFavorita);
        console.log(prevProps);
        if (prevProps.corFavorita !== this.props.corFavorita) {
            console.log();
            this.edit();
        }
    }

    edit(meuDiv){
        console.log(this.id[meuDiv]);
        this.id[meuDiv].innerHTML="";
    }
    render() {
        const {corFavorita} = this.state;

        return (
            <div id="meuDiv">
                <h1>A minha cor favorita é {corFavorita}.</h1> 
            </div>
            
        );
    }
}

export default Cabecalho;