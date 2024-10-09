import { IsNotEmpty, IsDateString, IsInt } from 'class-validator';

export class AtualizarFilaAtendimentoDto {
    @IsNotEmpty()
    @IsInt()
    fila_atendimento_status: number;

    @IsNotEmpty()
    @IsDateString()
    fila_atendimento_data: string;
}
