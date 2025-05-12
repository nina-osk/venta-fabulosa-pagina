
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const LegalPolicies = () => {
  useEffect(() => {
    // Scroll to hash fragment if present
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container max-w-4xl">
          <h1 className="text-3xl font-bold mb-8 text-gradient">Políticas Legales</h1>
          
          {/* Política de cookies */}
          <section className="mb-12" id="cookies">
            <h2 className="text-2xl font-bold mb-4">Política de cookies</h2>
            <div className="prose prose-gray max-w-none">
              <p>La LSSI-CE, obliga a todos los que tenemos un blog o una web a advertir al usuario de la existencia de cookies, informar sobre ellas y requerirle permiso para descargarlas.</p>
              
              <p>Artículo 22.2 de la Ley 34/2002. "Los prestadores de servicios podrán utilizar dispositivos de almacenamiento y recuperación de datos en equipos terminales de los destinatarios, a condición de que los mismos hayan dado su consentimiento después de que se les haya facilitado información clara y completa sobre su utilización, en particular, sobre los fines del tratamiento de los datos, con arreglo a lo dispuesto en la Ley Orgánica 15/1999, de 13 de diciembre, de Protección de Datos de Carácter Personal".</p>
              
              <p>Como responsable de esta web, me he esmerado en cumplir con el máximo rigor el artículo 22.2 el de la Ley 34/2002 de Servicios de la Sociedad de la Información y Comercio Electrónico referente a las cookies, no obstante, teniendo en cuenta la forma en la que funciona Internet y los sitios web, no siempre es posible contar con información actualizada de las cookies que terceras partes puedan utilizar a través de este sitio web.</p>
              
              <p>Esto se aplica especialmente a casos en los que esta página web contiene elementos integrados: es decir, textos, documentos, imágenes o breves películas que se almacenan en otra parte, pero se muestran en nuestro sitio web.</p>
              
              <p>Por consiguiente, en caso de que te encuentres con este tipo de cookies en este sitio web y no estén enumeradas en la lista siguiente, te ruego que me lo comuniques. También puedes ponerte en contacto directamente con el tercero para pedirle información sobre las cookies que coloca, la finalidad y la duración de la cookie, y cómo ha garantizado su privacidad.</p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">¿Qué son las Cookies?</h3>
              <p>Las cookies constituyen una herramienta empleada por los servidores Web para almacenar y recuperar información acerca de sus visitantes. No es más que un fichero de texto que algunos servidores piden a nuestro navegador que escriba en nuestro disco duro, con información acerca de lo que hemos estado haciendo por sus páginas. Poseen una fecha de caducidad, que puede oscilar desde el tiempo que dure la sesión hasta una fecha futura especificada, a partir de la cual dejan de ser operativa.</p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">1. Las cookies que utiliza esta web</h3>
              <p>En esta web se utilizan cookies propias y de terceros para conseguir que tengas una mejor experiencia de navegación, puedas compartir contenido en redes sociales, para mostrarte anuncios en función a tus intereses y para obtener estadísticas de usuarios.</p>
              <p>Las cookies empleadas en robotsConsultant.net se asocian únicamente con un Usuario anónimo y su ordenador, no proporcionan referencias que permitan deducir el nombre y apellidos del Usuario y no pueden leer datos de su disco duro ni incluir virus en sus textos. Asimismo, robotsConsultant.net no puede leer las cookies implantadas en el disco duro del Usuario desde otros servidores.</p>
              
              <p>El usuario puede libremente decidir acerca de la implantación o no en su disco duro de las cookies empleadas en robotsConsultant.net. En este sentido, el usuario puede configurar su navegador para aceptar o rechazar por defecto todas las cookies o para recibir un aviso en pantalla de la recepción de cada cookie y decidir en ese momento su implantación o no en su disco duro. Para ello le sugerimos consultar la sección de ayuda de su navegador para saber cómo cambiar la configuración que actualmente emplea. Aun cuando el Usuario configurase su navegador para rechazar todas las cookies o rechazase expresamente las cookies de robotsConsultant.net podrá navegar por el Portal con el único inconveniente de no poder disfrutar de las funcionalidades del Portal que requieran la instalación de alguna de ellas. En cualquier caso, el Usuario podrá eliminar las cookies implantadas en su disco duro en cualquier momento, siguiendo el procedimiento establecido en la sección de ayuda de su navegador y que posteriormente detallaremos.</p>
              
              <p>Como usuario, puedes rechazar el tratamiento de los datos o la información bloqueando estas cookies mediante la configuración apropiada de tu navegador. Sin embargo, debes saber que, si lo haces, puede que este sitio no funcione adecuadamente.</p>
              
              <p>Según los términos incluidos en el artículo 22.2 de la Ley 34/2002 de Servicios de la Sociedad de la Información y Comercio Electrónico, si continúas navegando, estarás prestando tu consentimiento para el empleo de las cookies que detallo a continuación.</p>
              
              <p>Las cookies de esta web ayudan a:</p>
              <ul className="list-disc pl-8 my-3">
                <li>Hacer que esta web funcione correctamente</li>
                <li>Ahorrarle el tener que iniciar sesión cada vez que visitas este sitio</li>
                <li>Recordarte tus ajustes durante y entre las visitas</li>
                <li>Permitirte visualizar videos</li>
                <li>Mejorar la velocidad / seguridad del sitio</li>
                <li>Que pueda compartir páginas con redes sociales</li>
                <li>Mejorar continuamente este sitio web</li>
                <li>Mostrarte anuncios en función de tus hábitos de navegación</li>
              </ul>
              
              <p>No utilizaré jamás cookies para:</p>
              <ul className="list-disc pl-8 my-3">
                <li>Recoger información de identificación personal (sin tu permiso expreso)</li>
                <li>Recoger información sensible (sin tu permiso expreso)</li>
                <li>Compartir datos de identificación personal a terceros</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">2. Cookies de terceros que utilizamos en esta web y que debes conocer</h3>
              <p>Esta web, como la mayoría de sitios web, incluye funcionalidades proporcionadas por terceros.</p>
              <p>También se ponen a prueba regularmente nuevos diseños o servicios de terceros para recomendaciones e informes.</p>
              
              <p>Esto puede modificar ocasionalmente la configuración de cookies y que aparezcan cookies no detalladas en la presente política. Es importante que sepas que son cookies provisionales que no siempre es posible informar y que solo tienen finalidades de estudio y valoración. En ningún caso se van a utilizar cookies que comprometan tu privacidad.</p>
              
              <p>Entre las cookies de terceros más estables están:</p>
              
              <p>Las generadas por servicios de análisis y publicidad, concretamente, Google Analytics y Google Adwords para ayudar al website a analizar el uso que hacen los Usuarios del sitio web y mejorar la usabilidad del mismo, en ningún casos estos datos se asocian a información que pudieran llegar a identificar al usuario directamente.</p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">3. ¿Cómo puedes gestionar y desactivar estas cookies?</h3>
              <p>En el caso de no desear que el sitio web no instale ninguna cookie en tu equipo, cabe la posibilidad de adaptar tu navegador de modo que se te notifique antes de que se descargue ninguna cookie.</p>
              <p>Así las cosas, se puede igualmente modificar la configuración del navegador de forma que rechace todas las cookies o únicamente las cookies de terceros. También puedes eliminar cualquiera de las cookies que ya se encuentren en tu equipo. Ten en cuenta que tendrás que adaptar por separado la configuración de cada navegador y equipo que utilices.</p>
              
              <p>robotsConsultant.net pone a disposición de los usuarios que quieran impedir la instalación de las mencionadas cookies, enlaces facilitados al efecto por navegadores cuyo uso se considera más extendido:</p>
              
              <p>Google Chrome – Internet Explorer – Mozilla Firefox – Apple Safari</p>
              
              <p>Política de Cookies a 21 de mayo del 2024.</p>
            </div>
          </section>
          
          {/* Aviso Legal */}
          <section className="mb-12" id="aviso-legal">
            <h2 className="text-2xl font-bold mb-4">Aviso legal</h2>
            <div className="prose prose-gray max-w-none">
              <p>El presente AVISO LEGAL regula los derechos y obligaciones de robotsConsultant.net y de los usuarios en relación el acceso, navegación y utilización de la presente web sin perjuicio de que robotsConsultant se reserve el derecho a modificar, sin previo aviso, su contenido, siendo vigentes las que se encuentren publicadas en el momento de navegación.</p>
              
              <p>Mediante la navegación, visualización y uso de esta web adquieres la condición de usuario, y, por tanto, implica por tu parte la aceptación expresa de todas las cláusulas que indicamos en el presente Aviso Legal, así como el resto de advertencias o cláusulas específicas que se establezcan en las diferentes secciones para la contratación, uso de servicios, productos, inscripciones, o secciones de la Página.</p>
              
              <p>Por lo que en caso de no aceptar las cláusulas establecidas en el presente Aviso Legal, deberás abstenerte de acceder y/o utilizar los servicios y/o contenidos puestos a tu disposición en la Página, procediendo a abandonar la misma.</p>
              
              <p>robotsConsultant podrá dar por terminado, suspender o interrumpir, en cualquier momento sin necesidad de previo aviso, el acceso a los contenidos de la página, sin posibilidad por parte del Usuario de exigir indemnización alguna. La información siguiente es responsable Oscarina Hernández García, con nombre comercial robotsConsultant, NIF 9835024P, correo electrónico info@robotsConsultant.net.</p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">ACCESO AL SITIO WEB</h3>
              <p>Como usuario de nuestra web te obligas a no utilizar la página para la realización de actividades contrarias a las leyes, a la moral, al orden público y, en general, a hacer un uso conforme a las condiciones establecidas en el presente Aviso Legal. Asimismo, te obliga a no realizar actividades publicitarias o de explotación comercial remitiendo mensajes que utilicen una identidad falsa.</p>
              
              <p>robotsConsultant.net actúa exclusivamente como responsable de la Página en su condición de prestador de un servicio de información y contenidos, bien sobre sus propios servicios, o bien sobre servicios de terceros con los que ha suscrito acuerdos, no haciéndose responsable de los contenidos que, en contra de las presentes condiciones, los usuarios pudieran enviar o publicar, siendo el usuario el único responsable de la veracidad y licitud de los mismos.</p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">PROPIEDAD INTELECTUAL E INDUSTRIAL</h3>
              <p>robotsConsultant no garantiza que los contenidos sean precisos o libres de error o que el libre uso de los mismos por el usuario no infrinja los derechos de terceras partes. El buen o mal uso de esta página y de sus contenidos está bajo la responsabilidad del usuario.</p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">ENLACES O LINKS</h3>
              <p>Al igual que indicábamos anteriormente nuestra página, además de los enlaces sobre productos, puede incluir enlaces o links a sitios de terceros. Reiteramos que las páginas pertenecientes a estos terceros no han sido revisadas ni son objeto de controles por parte de robotsConsultant.net por lo que robotsConsultant.net no podrá ser considerada responsable de los contenidos de estos sitios web, ni de las medidas que se adopten relativas a su privacidad o al tratamiento de sus datos de carácter personal u otros que pudieran derivarse.</p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">LIMITACIÓN DE RESPONSABILIDAD</h3>
              <p>RobotsConsultant no será responsable directa ni subsidiariamente de:</p>
              <ul className="list-disc pl-8 my-3">
                <li>La calidad del servicio, la velocidad de acceso, el correcto funcionamiento ni la disponibilidad ni continuidad de funcionamiento de la Página.</li>
                <li>Los daños que puedan causarse en los equipos del usuario por la utilización de la Página.</li>
                <li>Los casos en que un tercero, quebrantando las medidas de seguridad establecidas, acceda a los mensajes o los utilice para la remisión de virus informáticos.</li>
                <li>Los vicios y defectos de toda clase de los contenidos transmitidos, difundidos, almacenados o puestos a disposición.</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">POLÍTICA DE PRIVACIDAD Y PROTECCIÓN DE DATOS</h3>
              <p>De conformidad con lo dispuesto por la Ley Orgánica 15/1999, de 13 de diciembre, de Protección de Datos de Carácter Personal, todos los datos de carácter personal facilitados durante la utilización de nuestra página serán tratados de conformidad con los dispuesto en la Política de Privacidad que todo usuario debe aceptar expresamente antes de facilitar datos personales a través de los diferentes formularios puestos a disposición en las secciones de nuestra página.</p>
              
              <p>RobotsConsultant adopta las medidas de índole técnica y organizativa necesarias para garantizar la seguridad de los datos de carácter personal contenidos para evitar su alteración, pérdida, tratamiento o acceso no autorizado, habida cuenta del estado de la tecnología, la naturaleza de los datos y los riesgos a los que están expuestos y administra su entorno de servidores de forma adecuada, teniendo una infraestructura firewall de estricto cumplimiento.</p>
              
              <p>Podrás ejercitar los derechos de acceso, rectificación, oposición y cancelación remitiendo un correo electrónico a: info@RobotsConsultant.net, indicando en el encabezado: PROTECCIÓN DE DATOS.</p>
              
              <p>El usuario será el único responsable de la veracidad de los datos facilitados a RobotsConsultant.</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LegalPolicies;
