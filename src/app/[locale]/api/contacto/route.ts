import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      nombre,
      email,
      telefono,
      mensaje,
      asunto,
    } = body;

    if (!nombre || !email || !mensaje || !asunto) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    // =========================
    // 📩 EMAIL AL ADMIN
    // =========================
    await resend.emails.send({
      from: "impulsosoft<informacion@impulsosoft.com>",
      to: ["informacion@impulsosoft.com"],
      subject: `Nuevo contacto: ${asunto}`,
      html: `
      <div style="font-family: Arial, sans-serif; background:#0f1117; padding:30px; color:#fff;">
        <div style="max-width:600px; margin:auto; background:#1a1d25; border-radius:12px; overflow:hidden; border:1px solid #2a2f3a;">
          
          <div style="padding:20px 24px; border-bottom:1px solid #2a2f3a;">
            <h2 style="margin:0; color:#61afef;">Nuevo mensaje recibido</h2>
          </div>

          <div style="padding:24px;">
            
            <p style="margin:0 0 10px;"><strong>Nombre:</strong> ${nombre}</p>
            <p style="margin:0 0 10px;"><strong>Email:</strong> ${email}</p>
            <p style="margin:0 0 20px;"><strong>Teléfono:</strong> ${telefono || "No proporcionado"}</p>

            <div style="background:#0b0f14; padding:16px; border-radius:10px; margin-bottom:20px;">
              <p style="margin:0; color:#c678dd; font-weight:bold;">Asunto</p>
              <p style="margin:8px 0 0; font-size:16px;">${asunto}</p>
            </div>

            <div style="background:#0b0f14; padding:16px; border-radius:10px;">
              <p style="margin:0; color:#61afef; font-weight:bold;">Mensaje</p>
              <p style="margin:8px 0 0; line-height:1.6;">${mensaje}</p>
            </div>

          </div>
        </div>
      </div>
      `,
    });

    // =========================
    // 📩 EMAIL AL CLIENTE
    // =========================
    await resend.emails.send({
      from: "impulsosoft<informacion@impulsosoft.com>",
      to: [email],
      subject: "Hemos recibido tu mensaje",
      html: `
      <div style="font-family: Arial, sans-serif; background:#0f1117; padding:30px; color:#fff;">
        <div style="max-width:600px; margin:auto; background:#1a1d25; border-radius:12px; overflow:hidden; border:1px solid #2a2f3a;">
          
          <div style="padding:20px 24px; border-bottom:1px solid #2a2f3a;">
            <h2 style="margin:0; color:#61afef;">impulsoftware</h2>
          </div>

          <div style="padding:24px;">
            <h3 style="margin-top:0;">Hola ${nombre},</h3>

            <p style="color:#cbd5e1; line-height:1.6;">
              Gracias por contactarnos. Hemos recibido tu mensaje correctamente.
              Nuestro equipo revisará tu solicitud y te responderá lo antes posible.
            </p>

            <div style="background:#0b0f14; padding:16px; border-radius:10px; margin:20px 0;">
              <p style="margin:0; color:#c678dd; font-weight:bold;">Asunto</p>
              <p style="margin:8px 0 0;">${asunto}</p>
            </div>

            <div style="background:#0b0f14; padding:16px; border-radius:10px;">
              <p style="margin:0; color:#61afef; font-weight:bold;">Mensaje</p>
              <p style="margin:8px 0 0; line-height:1.6;">${mensaje}</p>
            </div>

            <p style="margin-top:24px; color:#9ca3af;">
              Si necesitas agregar algo más, puedes responder directamente a este correo.
            </p>

            <p style="margin-top:30px; font-size:14px; color:#6b7280;">
              — Equipo impulsoftware
            </p>
          </div>
        </div>
      </div>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error interno al enviar el mensaje" },
      { status: 500 }
    );
  }
}