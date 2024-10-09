import { IsNumber, IsNotEmpty, IsDateString, IsInt } from 'class-validator';

export class CriarFilaAtendimentoDto {
    @IsNotEmpty()
    @IsInt()
    fila_atendimento_id: number;

    @IsNotEmpty()
    @IsDateString()
    fila_atendimento_data: string;

    @IsNotEmpty()
    @IsInt()
    fila_atendimento_status: number;

    @IsNotEmpty()
    @IsInt()
    pacient_id: number;
}
