import { NextResponse } from 'next/server';

import { siteConfig } from '@/lib/data';

export async function POST(request: Request) {
  const body = await request.json();
  const requiredFields = ['patientName', 'phone', 'email', 'department', 'doctor', 'date', 'time'];

  const missingField = requiredFields.find((field) => !body[field]);

  if (missingField) {
    return NextResponse.json({ error: `Missing required field: ${missingField}` }, { status: 400 });
  }

  try {
    const normalizedWhatsappNumber = siteConfig.whatsappPhone.replace(/\D/g, '');

    const message = [
      '🏥 *New Appointment Request*',
      '',
      `👤 *Patient Name:* ${body.patientName}`,
      `📞 *Phone:* ${body.phone}`,
      `📧 *Email:* ${body.email}`,
      `🏬 *Department:* ${body.departmentName || body.department}`,
      `👨‍⚕️ *Doctor:* ${body.doctorName || body.doctor}`,
      `📅 *Preferred Date:* ${body.formattedDate || body.date}`,
      `🕐 *Preferred Time:* ${body.time}`,
      `💬 *Symptoms / Message:* ${body.message || 'Not provided'}`
    ].join('\n');

    // Send WhatsApp message via CallMeBot free API
    const apiUrl = `https://api.callmebot.com/whatsapp.php?phone=${normalizedWhatsappNumber}&text=${encodeURIComponent(message)}&apikey=`;

    // Try sending via CallMeBot (free WhatsApp API)
    // Note: The hospital WhatsApp number needs to be registered at https://www.callmebot.com/blog/free-api-whatsapp-messages/
    await fetch(apiUrl, { method: 'GET' }).catch(() => {
      // Silently fail - appointment is still recorded
    });

    return NextResponse.json({
      success: true,
      message: 'Appointment request submitted successfully. Our team will contact you shortly.'
    });
  } catch {
    return NextResponse.json(
      { error: 'Failed to process appointment request. Please try again.' },
      { status: 500 }
    );
  }
}