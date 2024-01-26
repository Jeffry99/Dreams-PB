import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Faq extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <section className="faq-page-area pd-top-100 pd-bottom-100">
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-lg-12">
			        <div className="faq-accordion accordion" id="accordionExample">
			          <div className="card">
			            <div className="card-header">
			              <h2>
			                <button className="btn" type="button" data-toggle="collapse" data-target="#collapseOne">
							¿Cuánto tiempo antes se presentaría el personal al evento para realizar la instalación? 
			                  <span className="collapse-icon" />
			                </button>
			              </h2>
			            </div>
			            <div id="collapseOne" className="collapse show" data-parent="#accordionExample">
			              <div className="card-body">
						  	Nos presentamos entre 1 o 2 horas antes de la hora de inicio programada.
			              </div>
			            </div>
			          </div>                      
			          <div className="card">
			            <div className="card-header">
			              <h2>
			                <button className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo">
							¿Cuánto espacio necesitas para tu stand?
			                  <span className="collapse-icon" />
			                </button>
			              </h2>
			            </div>
			            <div id="collapseTwo" className="collapse" data-parent="#accordionExample">
			              <div className="card-body">
						  	Nuestros equipos requieren un espacio de 3m × 3m. Si su lugar es más pequeño, haremos lo posible para compactar nuestros equipos.
			              </div>
			            </div>
			          </div>
			          <div className="card">
			            <div className="card-header">
			              <h2>
			                <button className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapseThree">
							¿Se puede colocar el equipo en el exterior? 
			                  <span className="collapse-icon" />
			                </button>
			              </h2>
			            </div>
			            <div id="collapseThree" className="collapse" data-parent="#accordionExample">
			              <div className="card-body">
						  Sugerimos que el stand se instale en el interior, aunque entendemos que a veces no es el caso. Por eso, tenemos algunos requisitos mínimos:
						  <ul>
							<li>Contar con conexión a energía eléctrica accesible.</li>
							<li>Tener un plan B en caso de cambio climático (no se puede exponer al agua o al sol en exceso).</li>
							<li>El terreno no puede tener pendiente.</li>
						  </ul>
			              </div>
			            </div>
			          </div>
			          <div className="card">
			            <div className="card-header">
			              <h2>
			                <button className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapseFour">
							No me gustan las plantillas de tu galería, puedo crear una nueva?
			                  <span className="collapse-icon" />
			                </button>
			              </h2>
			            </div>
			            <div id="collapseFour" className="collapse" data-parent="#accordionExample">
			              <div className="card-body">
						  ¡Por supuesto! Se pueden crear plantillas nuevas sin costo alguno. Podríamos crearlas desde cero, combinar alguna existente o seguir una invitación específica.
			              </div>
						</div>
			          </div>
			          <div className="card">
			            <div className="card-header">
			              <h2>
			                <button className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapseFive">
								¿Son impresiones ilimitadas?
			                  <span className="collapse-icon" />
			                </button>
			              </h2>
			            </div>
			            <div id="collapseFive" className="collapse" data-parent="#accordionExample">
			              <div className="card-body">
						  ¡Sí! Si nos reservas por 2, 3, 4 o más horas, tus invitados obtendrán tantas fotografías como deseen. Por supuesto, si las filas son largas, pediremos cortésmente a tus invitados que vuelvan a hacer la fila para que todos los demás puedan tener su turno.
			              </div>
			            </div>
			          </div>
			          <div className="card">
			            <div className="card-header">
			              <h2>
			                <button className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapseSix">
							¿Cuántos accesorios traen normalmente y qué tipo de accesorios?
			                  <span className="collapse-icon" />
			                </button>
			              </h2>
			            </div>
			            <div id="collapseSix" className="collapse" data-parent="#accordionExample">
			              <div className="card-body">
			              Traemos entre 20 y 25 accesorios que incluyen pelucas, gafas, colgantes, rótulos, entre otros. Además, ofrecemos accesorios temáticos dependiendo del evento. Pregunta sobre estas opciones para más información.
						  </div>
			            </div>
			          </div>
			          <div className="card">
			            <div className="card-header">
			              <h2>
			                <button className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapseSeven">
							¿Puedo llevar mi propio álbum de recortes a tu mesa?
			                  <span className="collapse-icon" />
			                </button>
			              </h2>
			            </div>
			            <div id="collapseSeven" className="collapse" data-parent="#accordionExample">
			              <div className="card-body">
						  Sí, puedes traer tu propio álbum de recortes; sin embargo, nuestro personal no se hará cargo del mismo. También contamos con este servicio. En caso de adquirirlo, nuestros colaboradores lo gestionarán de manera profesional.
			              </div>
			            </div>
			          </div>
			          <div className="card">
			            <div className="card-header">
			              <h2>
			                <button className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapseEight">
							¿Requiere un depósito previo?
			                  <span className="collapse-icon" />
			                </button>
			              </h2>
			            </div>
			            <div id="collapseEight" className="collapse" data-parent="#accordionExample">
			              <div className="card-body">
						  Sí, requerimos un depósito de $60. Este depósito se aplicará a su saldo total. 
			              </div>
			            </div>
			          </div>
					  <div className="card">
			            <div className="card-header">
			              <h2>
			                <button className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapseEight">
							¿Cuándo vence mi saldo?
			                  <span className="collapse-icon" />
			                </button>
			              </h2>
			            </div>
			            <div id="collapseEight" className="collapse" data-parent="#accordionExample">
			              <div className="card-body">
						  El saldo restante se deberá cancelar el día del evento.
			              </div>
			            </div>
			          </div>
					  <div className="card">
			            <div className="card-header">
			              <h2>
			                <button className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapseEight">
							¿Se cobra un adicional fuera del GAM?
			                  <span className="collapse-icon" />
			                </button>
			              </h2>
			            </div>
			            <div id="collapseEight" className="collapse" data-parent="#accordionExample">
			              <div className="card-body">
						  Sí, se cobra un adicional dependiendo de la distancia en kilómetros, esto para cubrir tiempo del personal, tiempo de manejo, gasolina y desgaste del vehículo.
			              </div>
			            </div>
			          </div>
					  <div className="card">
			            <div className="card-header">
			              <h2>
			                <button className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapseEight">
							¿Cuánto dura cada sesión?
			                  <span className="collapse-icon" />
			                </button>
			              </h2>
			            </div>
			            <div id="collapseEight" className="collapse" data-parent="#accordionExample">
			              <div className="card-body">
						  Cada sesión de fotos dura aproximadamente entre 1 y 2 minutos, dependiendo de la cantidad de personas.
			              </div>
			            </div>
			          </div>
					  <div className="card">
			            <div className="card-header">
			              <h2>
			                <button className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapseEight">
							¿Qué formas de pago se aceptan? 
			                  <span className="collapse-icon" />
			                </button>
			              </h2>
			            </div>
			            <div id="collapseEight" className="collapse" data-parent="#accordionExample">
			              <div className="card-body">
						  Aceptamos SINPE, transferencias o efectivo. Solo se aceptan cheques para eventos corporativos o escolares.
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>  
			    </div>
			  </div>    
			</section>
        }
}

export default Faq