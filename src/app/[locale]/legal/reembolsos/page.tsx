"use client";

import { useLocale } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { marked } from "marked"

export function markdownToHtml(markdown: string) {
    return marked.parse(markdown)
}

function LegalEs() {
    return (
        <div className="legal-container">
            <style dangerouslySetInnerHTML={{
                __html: `
        .legal-container {
          color: #white;
          background: #282b2f,
          line-height: 1.6;
          font-family: sans-serif;
        }
        .legal-container h1 { font-size: 2.5rem; font-weight: 800; margin-bottom: 2rem; border-bottom: 2px solid #eee; padding-bottom: 1rem; }
        .legal-container h2 { font-size: 1.5rem; font-weight: 700; margin-top: 2.5rem; margin-bottom: 1rem; color: #3048ab; }
        .legal-container h3 { font-size: 1.1rem; font-weight: 700; margin-top: 1.5rem; }
        .legal-container p { margin-bottom: 1.2rem; text-align: justify; }
        .legal-container ul { margin-bottom: 1.2rem; padding-left: 1.5rem; list-style-type: disc; }
        .legal-container li { margin-bottom: 0.5rem; }
        .legal-container section { margin-bottom: 3rem; }
      `}} />

            <section>
                <>
                    <h1>POLITICA DE DEVOLUCIÓN SOFTATRIX S.A. DE C.V.</h1>

                    <p>
                        En SOFTATRIX S.A. DE C.V. (impulsosoft.com) nuestra política de devolución
                        está diseñada para garantizar tu satisfacción y respaldar la calidad de
                        nuestros servicios.
                    </p>

                    <p>
                        Al contratar nuestros servicios, estás eligiendo una empresa comprometida
                        con tu éxito y dispuesta a ofrecerte soluciones efectivas en caso de que no
                        estés completamente satisfecho con los resultados obtenidos o la ejecución
                        de los mismos.
                    </p>

                    <p>
                        En SOFTATRIX S.A. DE C.V. nuestros servicios, van más allá de simples
                        estrategias; incluyen el desarrollo de aplicaciones móviles, diseño y
                        desarrollo de sitios web, mantenimiento y soporte de software, desarrollo
                        de interfaces de usuario (UI) y experiencia de usuario (UX), integración de
                        API y desarrollo de soluciones de software a la medida, y desarrollo de
                        sistemas de gestión empresarial (ERP).
                    </p>

                    <h2>Garantía de Satisfacción</h2>

                    <p>
                        En SOFTATRIX S.A. DE C.V. respaldamos la calidad de nuestros servicios con
                        una garantía de satisfacción. Si por alguna razón no estás completamente
                        satisfecho con los resultados obtenidos o la forma en que se ejecutó nuestro
                        servicio, nos comprometemos a trabajar contigo para encontrar una solución
                        que cumpla con tus expectativas y necesidades.
                    </p>

                    <h2>Proceso de Devolución</h2>

                    <p>
                        Para solicitar una devolución, te pedimos que te pongas en contacto con
                        nuestro equipo de atención al cliente vía correo electrónico o por teléfono
                        dentro de los 15 días hábiles siguientes a la entrega del servicio.
                    </p>

                    <p>
                        Es importante que nos proporciones detalles específicos sobre tu
                        insatisfacción y cualquier información relevante que respalde tu solicitud.
                    </p>

                    <p>
                        En SOFTATRIX S.A. DE C.V. nos tomamos en serio cada reclamo y nos
                        esforzamos por resolverlo de manera justa y oportuna.
                    </p>

                    <h2>Evaluación y Posibles Soluciones</h2>

                    <p>
                        Nuestro equipo revisará minuciosamente tu solicitud y evaluará la situación
                        de manera objetiva. Nos reservamos el derecho de solicitar más información o
                        pruebas que respalden tu reclamo para asegurarnos de ofrecerte la mejor
                        solución posible.
                    </p>

                    <p>Entre las posibles soluciones se encuentran:</p>

                    <ul>
                        <li>
                            <strong>Corrección del Servicio:</strong> Si el problema puede ser
                            corregido o mejorado, nos comprometemos a realizar los ajustes necesarios
                            sin costo adicional.
                        </li>

                        <li>
                            <strong>Devolución Parcial o Total:</strong> En casos donde la
                            insatisfacción persista y no se pueda resolver de manera satisfactoria,
                            ofrecemos la posibilidad de una devolución parcial o total del pago
                            realizado por el servicio, después de ser analizado por nuestro equipo,
                            ocasionado por algún error u omisión de nuestra parte.
                        </li>

                        <li>
                            <strong>Procedimiento de Devolución y Exclusiones:</strong> Si tu
                            solicitud de devolución es aprobada, nos comprometemos a realizarla dentro
                            de un plazo razonable y de acuerdo con las condiciones acordadas. En caso
                            de devolución parcial, se especificará claramente el monto a ser
                            reembolsado y los conceptos asociados.
                        </li>
                    </ul>

                    <p>
                        Es importante tener en cuenta que no se realizarán devoluciones por cambios
                        de opinión o decisiones comerciales internas de tu empresa, ni en casos de
                        uso indebido o abuso de nuestros servicios por parte del cliente.
                    </p>

                    <h2>Comunicación y Resolución de Disputas</h2>

                    <p>
                        En SOFTATRIX S.A. DE C.V. valoramos la comunicación abierta y transparente
                        con nuestros clientes. Estamos comprometidos en resolver cualquier disputa
                        de manera justa y amigable. Si no estás conforme con la resolución
                        propuesta, siempre puedes solicitar una revisión adicional para asegurarnos
                        de encontrar la mejor solución posible.
                    </p>

                    <h2>Actualizaciones de la Política</h2>

                    <p>
                        Nos reservamos el derecho de modificar esta política de devolución en
                        cualquier momento para adaptarla a las necesidades y requerimientos
                        actuales. Cualquier actualización será efectiva a partir de su publicación
                        en nuestro sitio web.
                    </p>

                    <p>
                        Al aceptar nuestros servicios, reconoces y aceptas los términos de esta
                        política de devolución. Estamos comprometidos en garantizar tu satisfacción.
                    </p>

                    <p>
                        El Usuario podrá devolver a SOFTATRIX S.A. DE C.V., sin coste alguno,
                        cualquier servicio que presente un defecto de fabricación. Para formalizar
                        la devolución, el Usuario deberá contactar con SOFTATRIX S.A. DE C.V. en la
                        dirección de correo electrónico de contacto indicando el servicio objeto de
                        devolución, y una relación detallada.
                    </p>

                    <h2>Desistimiento</h2>

                    <p>
                        En el caso de que el Usuario no estuviese conforme con los servicios
                        recibidos en su pedido, el Usuario, conforme a la Ley General para la
                        defensa de los Consumidores y Usuarios, dispondrá de un plazo de catorce
                        (14) días naturales para devolver la misma, sin penalización alguna y sin
                        necesidad de indicar los motivos, si bien deberá hacerse cargo del coste
                        directo de devolución del pedido a SOFTATRIX S.A. DE C.V.
                    </p>

                    <p>
                        Para formalizar la devolución, deberá contactar con SOFTATRIX S.A. DE C.V.
                        en la dirección de correo electrónico, indicando los motivos de
                        desistimiento.
                    </p>

                    <h2>Contacto</h2>

                    <p>
                        <strong>Correo electrónico:</strong>{" "}
                        <a href="mailto:informacion@impulsosoft.com">
                            informacion@impulsosoft.com
                        </a>
                    </p>

                    <p>
                        <strong>Domicilio:</strong> PARQUE DE GRANADA 71, INTERIOR 504 B, COLONIA
                        PARQUES DE LA HERRADURA, ALCALDÍA HUIXQUILUCAN, C.P. 52786, ESTADO DE
                        MÉXICO
                    </p>

                    <p>
                        <strong>Teléfono:</strong> +52 55 5206 3047
                    </p>

                    <p>
                        <strong>ÚLTIMA ACTUALIZACIÓN:</strong> MAYO 2026
                    </p>
                </>
            </section>
        </div>
    );
}

function LegalEn() {
    return (
        <div className="legal-container">
            <style dangerouslySetInnerHTML={{
                __html: `
        .legal-container {
          color: #white;
          background: #282b2f,
          line-height: 1.6;
          font-family: sans-serif;
        }
        .legal-container h1 { font-size: 2.5rem; font-weight: 800; margin-bottom: 2rem; border-bottom: 2px solid #eee; padding-bottom: 1rem; }
        .legal-container h2 { font-size: 1.5rem; font-weight: 700; margin-top: 2.5rem; margin-bottom: 1rem; color: #3048ab; }
        .legal-container h3 { font-size: 1.1rem; font-weight: 700; margin-top: 1.5rem; }
        .legal-container p { margin-bottom: 1.2rem; text-align: justify; }
        .legal-container ul { margin-bottom: 1.2rem; padding-left: 1.5rem; list-style-type: disc; }
        .legal-container li { margin-bottom: 0.5rem; }
      `}} />

            <section>
                <>
                    <h1>SOFTATRIX S.A. DE C.V. REFUND POLICY</h1>

                    <p>
                        At SOFTATRIX S.A. DE C.V. (impulsosoft.com), our refund policy is designed
                        to ensure your satisfaction and support the quality of our services.
                    </p>

                    <p>
                        By hiring our services, you are choosing a company committed to your
                        success and willing to provide effective solutions in case you are not
                        completely satisfied with the results obtained or the execution of the
                        services provided.
                    </p>

                    <p>
                        At SOFTATRIX S.A. DE C.V., our services go beyond simple strategies; they
                        include mobile application development, website design and development,
                        software maintenance and support, user interface (UI) and user experience
                        (UX) development, API integration and custom software solutions
                        development, as well as enterprise resource planning (ERP) systems
                        development.
                    </p>

                    <h2>Satisfaction Guarantee</h2>

                    <p>
                        At SOFTATRIX S.A. DE C.V., we stand behind the quality of our services with
                        a satisfaction guarantee. If for any reason you are not completely
                        satisfied with the results obtained or the way our service was executed, we
                        are committed to working with you to find a solution that meets your
                        expectations and needs.
                    </p>

                    <h2>Refund Process</h2>

                    <p>
                        To request a refund, we ask that you contact our customer service team via
                        email or telephone within 15 business days following the delivery of the
                        service.
                    </p>

                    <p>
                        It is important that you provide specific details regarding your
                        dissatisfaction and any relevant information supporting your request.
                    </p>

                    <p>
                        At SOFTATRIX S.A. DE C.V., we take every claim seriously and strive to
                        resolve it fairly and promptly.
                    </p>

                    <h2>Evaluation and Possible Solutions</h2>

                    <p>
                        Our team will carefully review your request and objectively evaluate the
                        situation. We reserve the right to request additional information or
                        evidence supporting your claim in order to provide the best possible
                        solution.
                    </p>

                    <p>Possible solutions include:</p>

                    <ul>
                        <li>
                            <strong>Service Correction:</strong> If the issue can be corrected or
                            improved, we commit to making the necessary adjustments at no additional
                            cost.
                        </li>

                        <li>
                            <strong>Partial or Full Refund:</strong> In cases where dissatisfaction
                            persists and cannot be resolved satisfactorily, we offer the possibility
                            of a partial or full refund for the service payment after review by our
                            team, when caused by an error or omission on our part.
                        </li>

                        <li>
                            <strong>Refund Procedure and Exclusions:</strong> If your refund request
                            is approved, we commit to processing it within a reasonable period and in
                            accordance with the agreed conditions. In the case of a partial refund,
                            the amount to be reimbursed and the related concepts will be clearly
                            specified.
                        </li>
                    </ul>

                    <p>
                        It is important to note that refunds will not be issued for changes of
                        opinion or internal business decisions within your company, nor in cases of
                        misuse or abuse of our services by the client.
                    </p>

                    <h2>Communication and Dispute Resolution</h2>

                    <p>
                        At SOFTATRIX S.A. DE C.V., we value open and transparent communication with
                        our clients. We are committed to resolving any dispute fairly and amicably.
                        If you are not satisfied with the proposed resolution, you may always
                        request an additional review to ensure the best possible solution is found.
                    </p>

                    <h2>Policy Updates</h2>

                    <p>
                        We reserve the right to modify this refund policy at any time in order to
                        adapt it to current needs and requirements. Any update will become
                        effective upon publication on our website.
                    </p>

                    <p>
                        By accepting our services, you acknowledge and accept the terms of this
                        refund policy. We are committed to ensuring your satisfaction.
                    </p>

                    <p>
                        The User may return to SOFTATRIX S.A. DE C.V., free of charge, any service
                        presenting a manufacturing defect. To formalize the return, the User must
                        contact SOFTATRIX S.A. DE C.V. through the contact email address,
                        specifying the service subject to return and providing a detailed
                        description.
                    </p>

                    <h2>Withdrawal</h2>

                    <p>
                        In the event that the User is not satisfied with the services received in
                        their order, the User, in accordance with the General Law for the Defense
                        of Consumers and Users, shall have a period of fourteen (14) calendar days
                        to return the service without any penalty and without the need to indicate
                        reasons, although the User must bear the direct cost of returning the order
                        to SOFTATRIX S.A. DE C.V.
                    </p>

                    <p>
                        To formalize the return, the User must contact SOFTATRIX S.A. DE C.V.
                        through the email address provided, indicating the reasons for withdrawal.
                    </p>

                    <h2>Contact</h2>

                    <p>
                        <strong>Email:</strong>{" "}
                        <a href="mailto:informacion@impulsosoft.com">
                            informacion@impulsosoft.com
                        </a>
                    </p>

                    <p>
                        <strong>Address:</strong> PARQUE DE GRANADA 71, INTERIOR 504 B, COLONIA
                        PARQUES DE LA HERRADURA, ALCALDÍA HUIXQUILUCAN, ZIP CODE 52786, ESTADO DE
                        MÉXICO
                    </p>

                    <p>
                        <strong>Phone:</strong> +52 55 5206 3047
                    </p>

                    <p>
                        <strong>LAST UPDATED:</strong> MAY 2026
                    </p>
                </>
            </section>
        </div>
    );
}

export default function LegalPage() {
    const locale = useLocale();

    return (
        <div className="min-h-screen flex flex-col bg-[#282b2f] text-white">
            <Header />
            <main className="flex-grow container mx-auto px-6 py-20 max-w-4xl">
                {locale === "es" ? <LegalEs /> : <LegalEn />}
            </main>
            <Footer />
        </div>
    );
}