import react, {Component} from 'react'

export default class LembreteEntrada extends Component {

    state = {
        lembrete: ''
    }

    onTermoAlterado = event => {
        console.log(event.target.value)
        this.setState({lembrete: event.target.value})
    }

    onFormSubmit = event => {
        event.preventDefault()
        if(this.state.lembrete !== '') {
            this.props.adicionarLembrete(this.state.lembrete)
            this.setState({lembrete: ''})
        }
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className='mb-4'>
                <div className='input-group shadow-sm'>
                    <input type='text' className='form-control form-control-lg'
                    placeholder='Digite um lembrete...' value={this.state.lembrete}
                    onChange={this.onTermoAlterado} />
                    <button className='btn btn-primary btn-lg' type='submit'>
                        Adicionar
                    </button>
                </div>
            </form>
        )
    }
}