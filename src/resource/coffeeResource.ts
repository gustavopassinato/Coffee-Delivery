import { BRLCurrency } from '../util/BRLCurrency'

enum Tag {
  TRADICIONAL = 'TRADICIONAL',
  COM_LEITE = 'COM LEITE',
  ALCOOLICO = 'ALCOÓLICO',
  ESPECIAL = 'ESPECIAL',
  GELADO = 'GELADO',
}

interface CoffeeProps {
  id: number
  name: string
  description: string
  tags: Tag[]
  price: BRLCurrency
  imageLink: string
}

export const coffeeResource: CoffeeProps[] = [
  {
    id: 1,
    name: 'Expresso Americano',
    imageLink: 'https://i.imgur.com/cL6BtqV.png',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: new BRLCurrency(0, 0),
    tags: [Tag.TRADICIONAL],
  },
  {
    id: 2,
    name: 'Árabe',
    imageLink: 'https://i.imgur.com/41nSk3C.png',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: new BRLCurrency(0, 0),
    tags: [Tag.ESPECIAL],
  },
  {
    id: 3,
    name: 'Café com Leite',
    imageLink: 'https://i.imgur.com/D8rQ0a7.png',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: new BRLCurrency(9, 99),
    tags: [Tag.TRADICIONAL, Tag.COM_LEITE],
  },
  {
    id: 4,
    name: 'Latte',
    imageLink: 'https://i.imgur.com/D8rQ0a7.png',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: new BRLCurrency(9, 99),
    tags: [Tag.TRADICIONAL, Tag.COM_LEITE],
  },
  {
    id: 5,
    name: 'Expresso Tradicional',
    imageLink: 'https://i.imgur.com/LCysu6J.png',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: new BRLCurrency(9, 99),
    tags: [Tag.TRADICIONAL],
  },
  {
    id: 6,
    name: 'Mocaccino',
    imageLink: 'https://i.imgur.com/zkgArbs.png',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: new BRLCurrency(9, 99),
    tags: [Tag.TRADICIONAL, Tag.COM_LEITE],
  },
  {
    id: 7,
    name: 'Expresso Cremoso',
    imageLink: 'https://i.imgur.com/fINDuFN.png',
    description: 'Café expresso tradicional com espuma cremosa',
    price: new BRLCurrency(0, 0),
    tags: [Tag.TRADICIONAL],
  },
  {
    id: 8,
    name: 'Expresso Gelado',
    imageLink: 'https://i.imgur.com/QRXhZqo.png',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: new BRLCurrency(0, 0),
    tags: [Tag.TRADICIONAL, Tag.GELADO],
  },
  {
    id: 9,
    name: 'Capuccino',
    imageLink: 'https://i.imgur.com/lgE32Ae.png',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: new BRLCurrency(0, 0),
    tags: [Tag.TRADICIONAL, Tag.COM_LEITE],
  },
  {
    id: 10,
    name: 'Macchiato',
    imageLink: 'https://i.imgur.com/QX8as3F.png',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: new BRLCurrency(0, 0),
    tags: [Tag.TRADICIONAL, Tag.COM_LEITE],
  },
  {
    id: 11,
    name: 'Chocolate Quente',
    imageLink: 'https://i.imgur.com/L9iXzxz.png',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: new BRLCurrency(0, 0),
    tags: [Tag.ESPECIAL, Tag.COM_LEITE],
  },
  {
    id: 12,
    name: 'Cubano',
    imageLink: 'https://i.imgur.com/92jJynW.png',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: new BRLCurrency(0, 0),
    tags: [Tag.ESPECIAL, Tag.ALCOOLICO, Tag.GELADO],
  },
  {
    id: 13,
    name: 'Havaiano',
    imageLink: 'https://i.imgur.com/QPHrINI.png',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: new BRLCurrency(0, 0),
    tags: [],
  },
  {
    id: 14,
    name: 'Irlandês',
    imageLink: 'https://i.imgur.com/tahZzaw.png',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: new BRLCurrency(0, 0),
    tags: [Tag.ESPECIAL, Tag.ALCOOLICO],
  },
]
