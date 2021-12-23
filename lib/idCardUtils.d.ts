import { IOrigin } from './option/type';
export declare class IdCardUtils {
    isValidateCard(code: string): boolean;
    getOriginObject(code: string): IOrigin;
    getOriginName(code: string): string;
    getBirth(code: string): string;
    getBirthYear(code: string): string;
    getBirthMonth(code: string): string;
    getBirthDate(code: string): string;
    getAge(code: string): number;
    getSex(code: string): string;
}
