"use server";

import axios from "axios";

interface PaymentData {
  amount: number;
  cardData: {
    number: string;
    name: string;
    month: string;
    year: string;
    cvv: string;
  };
  customer: {
    nombre: string;
    email: string;
    telefono: string;
    direccion: string;
    cp: string;
  };
  orderId: string;
}

const OCTANO_BASE_URL = "https://pagos.octanopayments.com/api/v1";

export async function processOctanoPayment(payment: PaymentData) {
  try {
    const authResponse = await axios.post(
      `${OCTANO_BASE_URL}/signin`,
      {
        email: process.env.OCTANO_USER,
        password: process.env.OCTANO_PASSWORD,
      },
      {
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
      }
    );

    const authToken = authResponse.data?.authToken;

    if (!authToken) {
      throw new Error("No se pudo obtener el token de Octano");
    }

    const config = {
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    };

    const tokenResponse = await axios.post(
      `${OCTANO_BASE_URL}/card/tokenizer`,
      {
        cardData: {
          cardNumber: payment.cardData.number.replace(/\s/g, ""),
          cardholderName: payment.cardData.name,
          expirationYear: payment.cardData.year,
          expirationMonth: payment.cardData.month,
        },
      },
      config
    );

    const cardToken = tokenResponse.data?.cardNumberToken;

    if (!cardToken) {
      throw new Error("No se pudo tokenizar la tarjeta");
    }

    const [firstName, ...lastNameParts] = payment.customer.nombre.trim().split(/\s+/);
    const lastName = lastNameParts.join(" ") || "N/A";

    const saleResponse = await axios.post(
      `${OCTANO_BASE_URL}/sale`,
      {
        amount: payment.amount,
        currency: "484",
        reference: payment.orderId,
        customerInformation: {
          firstName: firstName || "N/A",
          lastName,
          email: payment.customer.email,
          phone1: payment.customer.telefono,
          city: "Ciudad de México",
          address1: payment.customer.direccion,
          postalCode: payment.customer.cp,
          state: "Ciudad de México",
          country: "MX",
          ip: "127.0.0.1",
        },
        cardData: {
          cardNumberToken: cardToken,
          cvv: payment.cardData.cvv,
        },
      },
      config
    );

    return saleResponse.data;
  } catch (error: any) {
    const errorDetail = error?.response?.data || error?.message;
    console.error("❌ Error en pasarela Octano:", errorDetail);

    throw new Error(
      error?.response?.data?.message ||
        "Hubo un problema al procesar la transacción con Octano."
    );
  }
}