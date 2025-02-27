import type { MenuCategory } from "~/components/types/Types";

export const menu: MenuCategory[] = [
  {
    type: "อาหารจานเดียว",
    items: [
      {
        id: "ก๋วยเตี๋ยว",
        title: "ก๋วยเตี๋ยว",
        description: "ซุปหอม ๆ จากการเคี่ยวกระดูกหมูและสมุนไพร",
        src: "assets/img/noodle/noodle.png",
        price: 50,
        category: "อาหารจานเดียว",
        qty: 0,
      },
      {
        id: "ข้าวมันไก่",
        title: "ข้าวมันไก่",
        description: "ไก่นุ่ม ๆ ข้าวมันหอม ๆ",
        src: "assets/img/kawmungai/kawmungai.png",
        price: 45,
        category: "อาหารจานเดียว",
        qty: 0,
      },
      {
        id: "ข้าวไข่เจียว",
        title: "ข้าวไข่เจียว",
        description: "ไข่กรอบนุ่ม ไม่อมน้ำมัน",
        src: "assets/img/kaijeaw/kaijeaw.png",
        price: 35,
        category: "อาหารจานเดียว",
        qty: 0,
      },
      {
        id: "ไข่ตุ๋น",
        title: "ไข่ตุ๋น",
        description: "หน้าเนียน เนื้อนุ่ม น้ำซุปหอมเข้มข้น",
        src: "assets/img/kaithun/kaithun.png",
        price: 30,
        category: "อาหารจานเดียว",
        qty: 0,
      },
    ],
  },
  {
    type: "กับข้าว",
    items: [
      {
        id: "ผัดเผ็ด",
        title: "ผัดเผ็ด",
        description: "หน้าเนียน เนื้อนุ่ม น้ำซุปหอมเข้มข้น",
        src: "assets/img/kaithun/kaithun.png",
        price: 30,
        category: "กับข้าว",
        qty: 0,
      },
    ],
  },
  {
    type: "อาหารกินเล่น",
    items: [
      {
        id: "ไก่ทอดน้ำปลา",
        title: "ไก่ทอดน้ำปลา",
        description: "กรอบนอก นุ่มใน หอมน้ำปลา",
        src: "assets/img/friedchicken/friedchicken.png",
        price: 60,
        category: "อาหารกินเล่น",
        qty: 0,
      },
    ],
  },
  {
    type: "เครื่องดื่ม",
    items: [
      {
        id: "น้ำเปล่า",
        title: "น้ำเปล่า",
        description: "เพิ่มความสดชื่น",
        src: "assets/img/drink/water.png",
        price: 10,
        category: "เครื่องดื่ม",
        qty: 0,
      },
    ],
  },
];
