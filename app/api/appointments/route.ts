import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const requiredFields = ['patientName', 'phone', 'email', 'department', 'doctor', 'date', 'time'];

  const missingField = requiredFields.find((field) => !body[field]);

  if (missingField) {
    return NextResponse.json({ error: `Missing required field: ${missingField}` }, { status: 400 });
  }

  return NextResponse.json({
    success: true,
    message: 'Appointment request received successfully.'
  });
}