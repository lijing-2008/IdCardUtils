> 这是一个身份证解析小工具，封装为类，主要具备获取籍贯信息，生日信息，性别信息的功能。

## 一、安装

> ```bash
> npm install ddidcardutils
> ```

## 二、使用

```typescript
import { IdCardUtils } from 'ddidcardutils/lib'
const idCardUtils = new IdCardUtils()
```

![image-20211223160057096](https://tva1.sinaimg.cn/large/008i3skNgy1gxntr0yyedj313w0eo40z.jpg)

## 三、主要方法

#### 1. `isValidateCard`

校验身份证号合法性，合法返回`false`，不合法返回`true`

```
idCard.isValidateCard('530323199005250516') // false 合法
idCard.isValidateCard('53032319900525051') // true 不合法
```

#### 2. `getOriginObject`

获取籍贯省市县三级结构，其中code为标准的行政区域代码，省级2位，市级4位，县级6位

如`530323`

```
idCard.getOriginObject('530323199005250516')
```

```typescript
//返回值如下
{
  province: {
    code: '53',
    name: '云南省'
  },
  city: {
    code: '5303',
    name: '曲靖市'
  },
  county: {
    code: '530323',
    name: '师宗县'
  }
}
```

#### 3. `getOriginName`

获取籍贯汉语全称

```typescript
idCard.getOriginName('530323199005250516')
// 云南省曲靖市师宗县
```

#### 4. `getBirth`

获取生日，返回值是YYYYMMDD格式的字符串

```typescript
idCard.getBirth('530323199005250516')
//19900525
```

#### 5. `getBirthYear`

获取生日-年，`YYYY`

```typescript
idCard.getBirthYear('530323199005250516')
//1990
```

#### 6. `getBirthMonth`

获取生日-月，`MM(01-12)`

```typescript
idCard.getBirthMonth('530323199005250516')
//05
```

#### 7. `getBirthDate`

获取生日-日，`DD(01-31)`

```typescript
idCard.getBirthDate('530323199005250516')
//25
```

#### 8. `getAge`

获取年龄，生日当天算已经满周岁，

```typescript
idCard.getAge('530323199005250516')
//31
```

#### 9. `getSex`

获取性别

```typescript
idCard.getSex('530323199005250516')
// 男
idCard.getSex('530323199005250526')
// 女
```

