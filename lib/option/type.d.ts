export interface IChinaProvinceCity {
    code: string;
    name: string;
    children?: IChinaProvinceCity[];
}
export interface IOrigin {
    province: IChinaProvinceCity;
    city: IChinaProvinceCity;
    county: IChinaProvinceCity;
}
