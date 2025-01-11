import { IsString, IsUrl } from 'class-validator';

export class paidOrderDto {
  @IsString()
  stripePaymentId: string;

  @IsString()
  orderId: string;

  @IsString()
  @IsUrl()
  receipUrl: string;
}
