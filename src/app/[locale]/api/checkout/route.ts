import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const {
      customer,
      items,
      subtotal,
      iva,
      total,
      orderId,
    } = await req.json();

    if (!customer?.email || !items?.length) {
      return NextResponse.json(
        { error: "Datos incompletos" },
        { status: 400 }
      );
    }

    const formatPrice = (price: number) =>
      new Intl.NumberFormat("es-MX", {
        style: "currency",
        currency: "MXN",
      }).format(price);

    /* =========================
       🎫 EMAIL CLIENTE (TICKET)
    ========================== */
    const customerHTML = `
    <div style="background:#0b0f14;padding:40px;font-family:Arial;color:#e5e7eb">
      <div style="max-width:600px;margin:auto;background:#11151c;border-radius:16px;padding:30px;border:1px solid #1f2937">

        <h2 style="color:white;margin-bottom:10px">🧾 Confirmación de compra</h2>
        <p style="color:#9ca3af">Gracias por confiar en <strong style="color:#6366f1">impulsoftware</strong></p>

        <div style="margin:20px 0;padding:15px;background:#0b0f14;border-radius:12px">
          <p><strong>Orden:</strong> ${orderId}</p>
          <p><strong>Cliente:</strong> ${customer.nombre}</p>
          <p><strong>Email:</strong> ${customer.email}</p>
        </div>

        <h3 style="margin-top:20px;color:white">Detalles</h3>

        ${items
          .map(
            (item: any) => `
          <div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid #1f2937">
            <span>${item.plan.name} x${item.quantity}</span>
            <span>${formatPrice(item.plan.price * item.quantity)}</span>
          </div>
        `
          )
          .join("")}

        <div style="margin-top:20px">
          <div style="display:flex;justify-content:space-between;color:#9ca3af">
            <span>Subtotal</span>
            <span>${formatPrice(subtotal)}</span>
          </div>
          <div style="display:flex;justify-content:space-between;color:#9ca3af">
            <span>IVA</span>
            <span>${formatPrice(iva)}</span>
          </div>
          <div style="display:flex;justify-content:space-between;font-weight:bold;font-size:18px;margin-top:10px">
            <span>Total</span>
            <span style="color:#6366f1">${formatPrice(total)}</span>
          </div>
        </div>

        <p style="margin-top:30px;color:#9ca3af;font-size:12px">
          Este correo funciona como comprobante de tu compra.
        </p>
      </div>
    </div>
    `;

    /* =========================
       🧾 EMAIL NEGOCIO
    ========================== */
    const businessHTML = `
    <div style="background:#0b0f14;padding:40px;font-family:Arial;color:#e5e7eb">
      <div style="max-width:600px;margin:auto;background:#11151c;border-radius:16px;padding:30px;border:1px solid #1f2937">

        <h2 style="color:white;margin-bottom:10px">💰 Nueva venta recibida</h2>

        <div style="margin:20px 0;padding:15px;background:#0b0f14;border-radius:12px">
          <p><strong>Orden:</strong> ${orderId}</p>
          <p><strong>Cliente:</strong> ${customer.nombre}</p>
          <p><strong>Email:</strong> ${customer.email}</p>
          <p><strong>Teléfono:</strong> ${customer.telefono}</p>
        </div>

        <h3 style="color:white">Productos</h3>

        ${items
          .map(
            (item: any) => `
          <div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid #1f2937">
            <span>${item.plan.name} x${item.quantity}</span>
            <span>${formatPrice(item.plan.price * item.quantity)}</span>
          </div>
        `
          )
          .join("")}

        <div style="margin-top:20px">
          <div style="display:flex;justify-content:space-between;color:#9ca3af">
            <span>Subtotal</span>
            <span>${formatPrice(subtotal)}</span>
          </div>
          <div style="display:flex;justify-content:space-between;color:#9ca3af">
            <span>IVA</span>
            <span>${formatPrice(iva)}</span>
          </div>
          <div style="display:flex;justify-content:space-between;font-weight:bold;font-size:18px;margin-top:10px">
            <span>Total</span>
            <span style="color:#22c55e">${formatPrice(total)}</span>
          </div>
        </div>

      </div>
    </div>
    `;

    /* =========================
       📩 ENVÍO DE EMAILS
    ========================== */
    await Promise.all([
      resend.emails.send({
        from: "impulsoftwareware<contacto@impulsosoft.com>",
        to: customer.email,
        subject: `🧾 Confirmación de compra - ${orderId}`,
        html: customerHTML,
      }),

      resend.emails.send({
        from: "impulsoftwareware<contacto@impulsosoft.com>",
        to: process.env.ADMIN_EMAIL!,
        subject: `💰 Nueva venta - ${orderId}`,
        html: businessHTML,
      }),
    ]);

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("❌ Error checkout:", error);

    return NextResponse.json(
      { error: "Error al procesar el checkout" },
      { status: 500 }
    );
  }
}