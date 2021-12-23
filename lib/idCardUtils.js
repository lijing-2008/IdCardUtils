import ChinaProvinceCity from './option/ChinaProvinceCity';
export class IdCardUtils {
    //校验身份证号
    isValidateCard(code) {
        const reg = /^\d{6}((((((19|20)\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))(\d|X|x)$/;
        return !reg.test(code);
    }
    //获取省市县
    getOriginObject(code) {
        // 身份证前6位
        code = code.substring(0, 6);
        const province = {
            code: '',
            name: ''
        };
        const city = {
            code: '',
            name: ''
        };
        const county = {
            code: '',
            name: ''
        };
        // 获取省
        // @ts-ignore
        const PItem = ChinaProvinceCity.find((item) => item.code === code.substring(0, 2));
        if (PItem && PItem.children) {
            province.code = PItem.code;
            province.name = PItem.name;
            // 获取市
            const CItem = PItem.children.find((item) => item.code === code.substring(0, 4));
            if (CItem && CItem.children) {
                city.code = CItem.code;
                city.name = CItem.name;
                //获取县
                const AItem = CItem.children.find((item) => item.code === code);
                if (AItem) {
                    county.code = AItem.code;
                    county.name = AItem.name;
                }
            }
        }
        const origin = {
            province: province,
            city: city,
            county: county
        };
        return origin;
    }
    //获取籍贯的汉字名称，包括省市县
    getOriginName(code) {
        const origin = this.getOriginObject(code);
        return origin.province.name + origin.city.name + origin.county.name;
    }
    //获取生日
    getBirth(code) {
        // 身份证第7位至第10位
        return code.substring(6, 14);
    }
    //获取生日-年
    getBirthYear(code) {
        return code.substring(6, 10);
    }
    //获取生日-月
    getBirthMonth(code) {
        return code.substring(10, 12);
    }
    //获取生日-日
    getBirthDate(code) {
        return code.substring(12, 14);
    }
    //获取年龄
    getAge(code) {
        const now = new Date();
        const temY = now.getFullYear() - parseInt(this.getBirthYear(code));
        const temM = now.getMonth() + 1 - parseInt(this.getBirthMonth(code));
        const temD = now.getDate() - parseInt(this.getBirthDate(code));
        let addNum = 0;
        //如果月份不同，直接比较月份
        if (temM !== 0) {
            addNum = temM > 0 ? 0 : -1;
        }
        else {
            //如果月份相同，比较天，生日当天也算满一岁了
            addNum = temD >= 0 ? 0 : -1;
        }
        return temY + addNum;
    }
    //获取性别
    getSex(code) {
        console.log(1 % 2);
        return parseInt(code.charAt(16)) % 2 === 0 ? '女' : '男';
    }
}
