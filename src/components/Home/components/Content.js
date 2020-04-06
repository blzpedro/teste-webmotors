import React from 'react';
import { Container } from '../styles'
import { stylesInput } from './styles'
import {ic_location_on} from 'react-icons-kit/md/ic_location_on'
import {ic_close} from 'react-icons-kit/md/ic_close'
import Icon from 'react-icons-kit';

export default function Content({clearInput, optionsMarcas, chooseMarca, optionsModelos, chooseModelo, optionsVersoes, chooseVersao, verOfertas, choosePreco}) {
    const classes = stylesInput();
    return (
        <Container>
            <div className={classes.boxContent}>                
                <div className={classes.inputCheckbox}>
                    <div>
                        <label>
                            <input type="checkbox" name="Novos"/><span>Novos</span>
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="checkbox" name="Usados"/><span>Usados</span>
                        </label>
                    </div>
                </div>
                <div className={classes.inputs}>
                    <div className={classes.inputCustom}>
                        <div className={classes.fullInput70}>
                            <Icon icon={ic_location_on} size={24} style={{color: 'red'}}/>
                            <label className={classes.label}>Onde:</label>
                            <input id="onde" className={classes.default}/>
                            <Icon icon={ic_close} size={20} onClick={() => clearInput('onde')} style={{color: 'white', backgroundColor: '#d4d4d4', borderRadius: 25, cursor: 'pointer'}}/>
                        </div>
                        <div className={classes.fullInput30}>
                            <label className={classes.label}>Raio:</label>
                            <select className={classes.default}>
                                <option>100km</option>
                                <option>200km</option>
                                <option>300km</option>
                            </select>
                        </div>
                    </div>
                    <div className={classes.input50}>
                        <div className={classes.fullInput50}>
                            <label className={classes.label}>Marca:</label>
                            <select className={classes.default} onChange={chooseMarca}>
                                {optionsMarcas}
                            </select>
                        </div>
                        <div className={classes.fullInput50}>
                            <label className={classes.label}>Modelo:</label>
                            <select className={classes.default} onChange={chooseModelo}>
                                {optionsModelos}
                            </select>
                        </div>
                    </div>
                </div>
                <div className={classes.inputs}>
                    <div className={classes.input50}>
                        <div className={classes.fullInput50}>
                            <label className={classes.label}>Ano:</label>
                            <select className={classes.default}>
                                <option selected disabled></option>
                                <option>2018</option>
                                <option>2019</option>
                                <option>2020</option>
                            </select>
                        </div>
                        <div className={classes.fullInput50}>
                            <label className={classes.label}>Preço:</label>
                            <select className={classes.default} onChange={choosePreco}>
                                <option selected disabled></option>
                                <option value="30000,00">R$ 20.000,00</option>
                                <option value="50000,00">R$ 30.000,00</option>
                                <option value="80000,00">R$ 40.000,00</option>
                            </select>
                        </div>
                    </div>
                    <div className={classes.input100}>
                        <div className={classes.fullInput100}>
                            <label className={classes.label}>Versão:</label>
                            <select className={classes.default} onChange={chooseVersao} style={{width: 'inherit'}}>
                                {optionsVersoes}
                            </select>
                        </div>
                    </div>
                </div>
                <div className={classes.footer}>
                    <div><p>> Busca avançada</p></div>
                    <div className={classes.buttonsFooter}>
                        <button>Limpar filtros</button>
                        <button onClick={verOfertas}>VER OFERTAS</button>
                    </div>
                </div>
            </div>
        </Container>
    );
}
