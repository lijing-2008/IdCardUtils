export interface IChinaProvinceCity {
  code: string
  name: string
  children?: IChinaProvinceCity[]
}

// 籍贯
export interface IOrigin {
  province: IChinaProvinceCity
  city: IChinaProvinceCity
  county: IChinaProvinceCity
}
