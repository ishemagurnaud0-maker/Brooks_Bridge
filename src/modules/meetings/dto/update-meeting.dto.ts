import { IsString,IsDateString,IsOptional } from 'class-validator'


export class CreateMeetingDto{
    @IsOptional()
    @IsString()
    title?:string;

    @IsOptional()
    @IsString()
    link?:string;

    @IsOptional()
    @IsDateString()
    scheduledDate?:string;

    @IsOptional()
    @IsString()
    departmentId?:string;


}