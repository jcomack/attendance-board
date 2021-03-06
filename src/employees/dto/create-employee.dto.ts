import {Exclude, Expose} from 'class-transformer';
import {IsBoolean, IsString, MaxLength} from 'class-validator';

@Exclude()
export class CreateEmployeeDto {
    @Expose()
    @IsString()
    @MaxLength(60)
    readonly name: string;

    @Expose()
    @IsString()
    @MaxLength(60)
    readonly birthday: string;

    @Expose()
    @IsBoolean()
    readonly status: boolean;
}
