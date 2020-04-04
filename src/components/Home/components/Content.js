import React from 'react';
import { Container } from '../styles'
import { stylesInput } from './styles'

export default function Content({selected}) {
    const classes = stylesInput();
    return (
        <Container>
            <div className={classes.boxContent}>                
                <div className={classes.inputCheckbox}>
                    <div>
                        <label>
                            <input type="checkbox" name="Novos" name="Novos"/><span>Novos</span>
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="checkbox" name="Usados" name="Usados"/><span>Usados</span>
                        </label>
                    </div>
                </div>
                <div className={classes.inputs}>
                    <div className={classes.inputCustom}>
                        <input placeholder='Onde'/>
                        <input placeholder='Raio'/>
                    </div>
                    <div className={classes.input50}>
                        <input placeholder='Marca'/>
                        <input placeholder='Modelo'/>
                    </div>
                </div>
                <div className={classes.inputs}>
                    <div className={classes.input50}>
                        <input placeholder='Ano desejado'/>
                        <input placeholder='Faixa de preço'/>
                    </div>
                    <div className={classes.input100}>
                        <input placeholder='Versão'/>
                    </div>
                </div>
                <div className={classes.footer}>
                    <div><p>> Busca avançada</p></div>
                    <div className={classes.buttonsFooter}>
                        <button>Limpar filtros</button>
                        <button>VER OFERTAS</button>
                    </div>
                </div>
            </div>
        </Container>
    );
}
