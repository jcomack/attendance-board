import {Exclude, Expose} from 'class-transformer';
import {IsBoolean, IsOptional, IsString, MaxLength} from 'class-validator';

@Exclude()
export class UpdateEmployeeDto {
    @Expose()
    @IsString()
    @MaxLength(60)
    @IsOptional()
    readonly name: string;

    @Expose()
    @IsString()
    @MaxLength(60)
    @IsOptional()
    readonly birthday: string;

    @Expose()
    @IsBoolean()
    @IsOptional()
    readonly status: boolean;
}
