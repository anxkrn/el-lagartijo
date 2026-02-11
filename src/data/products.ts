import img1 from '../assets/productos/1.png';
import img2 from '../assets/productos/2.png';
import img3 from '../assets/productos/3.png';
import img4 from '../assets/productos/4.png';
import img5 from '../assets/productos/5.png';
import img6 from '../assets/productos/6.png';
import img7 from '../assets/productos/7.png';
import img8 from '../assets/productos/8.png';
import img9 from '../assets/productos/9.png';
import img10 from '../assets/productos/10.png';
import img11 from '../assets/productos/11.png';
import img12 from '../assets/productos/12.png';
import img13 from '../assets/productos/13.png';
import img14 from '../assets/productos/14.png';
import img15 from '../assets/productos/15.png';
import img16 from '../assets/productos/16.png';
import img20 from '../assets/productos/20.png';
import img21 from '../assets/productos/21.png';
import img22 from '../assets/productos/22.png';
import img23 from '../assets/productos/23.png';
import img24 from '../assets/productos/24.png';

export type ProductCategory = 'cabezales' | 'riendas' | 'accesorios' | 'sogas' | 'correas' | 'otros';
export type CategoryFilter = ProductCategory | 'todos';

export interface Product {
  id: number;
  name: string;
  slug: string;
  category: ProductCategory;
  description: string;
  price?: string;
  images: string[];
  handmade: boolean;
  customizable: boolean;
}

export const CATEGORIES: { id: CategoryFilter; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'cabezales', label: 'Cabezales' },
  { id: 'riendas', label: 'Riendas' },
  { id: 'accesorios', label: 'Accesorios' },
  { id: 'sogas', label: 'Sogas' },
  { id: 'correas', label: 'Correas de perro' },
  { id: 'otros', label: 'Otros' },
];

export const products: Product[] = [
  {
    id: 1,
    name: 'Bozales',
    slug: 'bozales',
    category: 'cabezales',
    images: [img6, img13],
    description: 'Bozales artesanales de alta calidad, elaborados con materiales resistentes y duraderos. Diseño y ajuste pensados para el bienestar del caballo.',
    price: 'Cotizar',
    handmade: true,
    customizable: true,
  },
  {
    id: 2,
    name: 'Falsas Riendas',
    slug: 'falsas-riendas',
    category: 'riendas',
    images: [img10, img21, img22, img23],
    description: 'Falsas riendas personalizadas en diferentes colores y diseños. Cuerdas con mosquetones o trenzadas para control secundario.',
    price: 'Cotizar',
    handmade: true,
    customizable: true,
  },
  {
    id: 3,
    name: 'Gamarras',
    slug: 'gamarras',
    category: 'riendas',
    images: [img14, img15],
    description: 'Gamarras artesanales con acabados únicos y materiales de primera calidad. Estilo rústico y funcional.',
    price: 'Cotizar',
    handmade: true,
    customizable: true,
  },
  {
    id: 4,
    name: 'Riendas',
    slug: 'riendas',
    category: 'riendas',
    images: [img5, img20],
    description: 'Riendas hechas a mano con atención al detalle y resistencia garantizada. Personalizables en color y medida.',
    price: 'Cotizar',
    handmade: true,
    customizable: true,
  },
  {
    id: 5,
    name: 'Llaveros',
    slug: 'llaveros',
    category: 'accesorios',
    images: [img1, img2, img3, img4, img7, img8, img9],
    description: 'Llaveros personalizados con diseños únicos y materiales duraderos. Piezas pequeñas y ornamentales.',
    price: 'Cotizar',
    handmade: true,
    customizable: true,
  },
  {
    id: 6,
    name: 'Sogas de plástico',
    slug: 'sogas-plastico',
    category: 'sogas',
    images: [img16, img24],
    description: 'Sogas de plástico de alta resistencia, disponibles en diferentes colores. Cuerdas enrolladas de material sintético.',
    price: 'Cotizar',
    handmade: true,
    customizable: true,
  },
  {
    id: 8,
    name: 'Correas de perro',
    slug: 'correas-perro',
    category: 'correas',
    images: [img11, img12],
    description: 'Correas y collares para perro. Hechos a mano con materiales resistentes y diseños personalizados.',
    price: 'Cotizar',
    handmade: true,
    customizable: true,
  },
  {
    id: 7,
    name: 'Más accesorios',
    slug: 'mas-accesorios',
    category: 'otros',
    images: [],
    description: 'Creamos productos ecuestres personalizados según tus necesidades: cabestros, pretales, adornos y más.',
    price: 'Cotizar',
    handmade: true,
    customizable: true,
  },
];
