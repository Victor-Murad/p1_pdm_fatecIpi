import React, {Component} from 'react'
import LembreteEntrada from './LembreteEntrada'
import 'bootstrap/dist/css/bootstrap.min.css'
import LembreteLista from './LembreteLista'

export default class App extends Component {
  state = {
    listaLembretes: []
  }

  adicionarLembrete = lembrete => {
    const listaLembretesAtualizada = [...this.state.listaLembretes]
    listaLembretesAtualizada.push(lembrete)
    this.setState({listaLembretes: listaLembretesAtualizada})
  }

  render() {
    return (
      <div className='container p-5'>
        <div className='row justify-content-center'>
          <div className='col-sm-12 col-md-8 col-lg-6'>
            <h1 className='text-center mb-4'>Lista de Lembretes</h1>
            <LembreteEntrada adicionarLembrete={this.adicionarLembrete} />
            <LembreteLista lista={this.state.listaLembretes} />
          </div>
        </div>
      </div>
    )
  }

}