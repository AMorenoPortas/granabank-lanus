import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ usuarioId: string }> }
) {
  const { usuarioId: usuarioIdStr } = await params;
  const usuarioId = parseInt(usuarioIdStr);

  try {
    const movimientos = await prisma.movimiento.findMany({
      where: { usuarioId },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(movimientos);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error al traer movimientos' }, { status: 500 });
  }
}