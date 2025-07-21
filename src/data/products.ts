// Import product images
import kurti1 from '@/assets/kurti-1.jpg';
import kurti2 from '@/assets/kurti-2.jpg';
import suit1 from '@/assets/suit-1.jpg';
import suit2 from '@/assets/suit-2.jpg';
import dupatta1 from '@/assets/dupatta-1.jpg';
import dupatta2 from '@/assets/dupatta-2.jpg';
import pants1 from '@/assets/pants-1.jpg';
import pants2 from '@/assets/pants-2.jpg';
import client1 from '@/assets/client1.jpeg';
import client2 from '@/assets/client2.jpeg';
import client3 from '@/assets/client3.jpeg';
import client4 from '@/assets/client4.jpeg';
import client5 from '@/assets/client5.jpeg';
import client6 from '@/assets/client6.jpeg';
import client7 from '@/assets/client7.jpeg';

export interface Product {
  id: string;
  name: string;
  category: 'Kurtis' | 'Suits' | 'Dupatta' | 'Pants';
  price: number;
  originalPrice?: number;
  image: string[];
  description: string;
  features: string[];
  fabric: string;
  size: string[];
  color: string;
}

export const products: Product[] = [
  {
    id: 'kurti-001',
    name: 'Royal Purple Embroidered Kurti',
    category: 'Kurtis',
    price: 1299,
    originalPrice: 1599,
    image: [kurti1, client1],
    description: 'Elegant royal purple kurti with intricate gold embroidery. Perfect for festive occasions and special events.',
    features: ['Hand embroidered', 'Premium cotton', 'Regular fit', 'Festive wear'],
    fabric: 'Premium Cotton',
    size: ['S', 'M', 'L', 'XL'],
    color: 'Royal Purple'
  },
  {
    id: 'kurti-002',
    name: 'Cream Block Print Kurti',
    category: 'Kurtis',
    price: 899,
    originalPrice: 1199,
    image: [kurti2],
    description: 'Beautiful cream kurti with traditional gold block print design. Comfortable for daily wear and casual occasions.',
    features: ['Block printed', 'Breathable fabric', 'A-line cut', 'Casual wear'],
    fabric: 'Cotton',
    size: ['S', 'M', 'L', 'XL', 'XXL'],
    color: 'Cream'
  },
  {
    id: 'suit-001',
    name: 'Golden Elegance Suit Set',
    category: 'Suits',
    price: 2499,
    originalPrice: 2999,
    image: [suit1],
    description: 'Complete suit set in cream and gold with dupatta. Perfect for weddings and special occasions.',
    features: ['3-piece set', 'Embroidered kameez', 'Matching dupatta', 'Wedding wear'],
    fabric: 'Silk Blend',
    size: ['S', 'M', 'L', 'XL'],
    color: 'Cream & Gold'
  },
  {
    id: 'suit-002',
    name: 'Purple Royal Suit Set',
    category: 'Suits',
    price: 2199,
    originalPrice: 2699,
    image: [suit2],
    description: 'Stunning purple suit with golden embroidery and matching accessories. Ideal for festive celebrations.',
    features: ['Heavy embroidery', 'Premium quality', 'Complete set', 'Party wear'],
    fabric: 'Georgette',
    size: ['S', 'M', 'L', 'XL'],
    color: 'Purple & Gold'
  },
  {
    id: 'dupatta-001',
    name: 'Gold Silk Dupatta',
    category: 'Dupatta',
    price: 699,
    originalPrice: 899,
    image: [dupatta1],
    description: 'Luxurious gold silk dupatta with purple border. Adds elegance to any outfit.',
    features: ['Pure silk', 'Decorative border', 'Lightweight', 'Versatile'],
    fabric: 'Pure Silk',
    size: ['One Size'],
    color: 'Gold'
  },
  {
    id: 'dupatta-002',
    name: 'Floral Embroidered Dupatta',
    category: 'Dupatta',
    price: 599,
    originalPrice: 799,
    image: [dupatta2],
    description: 'Elegant cream dupatta with beautiful purple floral embroidery. Perfect complement to your outfit.',
    features: ['Floral embroidery', 'Soft fabric', 'Traditional design', 'Multi-use'],
    fabric: 'Chiffon',
    size: ['One Size'],
    color: 'Cream'
  },
  {
    id: 'pants-001',
    name: 'Royal Purple Palazzo Pants',
    category: 'Pants',
    price: 799,
    originalPrice: 999,
    image: [pants1],
    description: 'Comfortable and stylish palazzo pants in royal purple. Perfect for both casual and formal occasions.',
    features: ['Palazzo style', 'Comfortable fit', 'Elastic waist', 'All-day comfort'],
    fabric: 'Silk',
    size: ['S', 'M', 'L', 'XL'],
    color: 'Royal Purple'
  },
  {
    id: 'pants-002',
    name: 'Golden Straight Pants',
    category: 'Pants',
    price: 699,
    originalPrice: 899,
    image: [pants2],
    description: 'Elegant golden straight pants that pair beautifully with kurtas and tops.',
    features: ['Straight cut', 'Premium silk', 'Formal wear', 'Easy care'],
    fabric: 'Silk',
    size: ['S', 'M', 'L', 'XL'],
    color: 'Golden'
  },
  {
    id: 'client-001',
    name: 'Orange Kurti Set',
    category: 'Kurtis',
    price: 1199,
    originalPrice: 1499,
    image: [client1],
    description: 'Elegant golden straight pants that pair beautifully with kurtas and tops.',
    features: ['Straight cut', 'Premium silk', 'Formal wear', 'Easy care'],
    fabric: 'Silk',
    size: ['S', 'M', 'L', 'XL'],
    color: 'Orange'
  },
  {
    id: 'client-002',
    name: 'Green Anarkali Suit',
    category: 'Kurtis',
    price: 1999,
    originalPrice: 2899,
    image: [client2],
    description: 'Elegant golden straight pants that pair beautifully with kurtas and tops.',
    features: ['Straight cut', 'Premium silk', 'Formal wear', 'Easy care'],
    fabric: 'Silk',
    size: ['S', 'M', 'L', 'XL'],
    color: 'Green'
  },
  {
    id: 'client-003',
    name: 'Golden Straight Pants',
    category: 'Pants',
    price: 699,
    originalPrice: 899,
    image: [client3],
    description: 'Elegant golden straight pants that pair beautifully with kurtas and tops.',
    features: ['Straight cut', 'Premium silk', 'Formal wear', 'Easy care'],
    fabric: 'Silk',
    size: ['S', 'M', 'L', 'XL'],
    color: 'Golden'
  },
  {
    id: 'client-004',
    name: 'Golden Straight Pants',
    category: 'Pants',
    price: 699,
    originalPrice: 899,
    image: [client4],
    description: 'Elegant golden straight pants that pair beautifully with kurtas and tops.',
    features: ['Straight cut', 'Premium silk', 'Formal wear', 'Easy care'],
    fabric: 'Silk',
    size: ['S', 'M', 'L', 'XL'],
    color: 'Golden'
  },
  {
    id: 'client-005',
    name: 'Golden Straight Pants',
    category: 'Pants',
    price: 699,
    originalPrice: 899,
    image: [client5],
    description: 'Elegant golden straight pants that pair beautifully with kurtas and tops.',
    features: ['Straight cut', 'Premium silk', 'Formal wear', 'Easy care'],
    fabric: 'Silk',
    size: ['S', 'M', 'L', 'XL'],
    color: 'Golden'
  },
  {
    id: 'client-006',
    name: 'Golden Straight Pants',
    category: 'Pants',
    price: 699,
    originalPrice: 899,
    image: [client6],
    description: 'Elegant golden straight pants that pair beautifully with kurtas and tops.',
    features: ['Straight cut', 'Premium silk', 'Formal wear', 'Easy care'],
    fabric: 'Silk',
    size: ['S', 'M', 'L', 'XL'],
    color: 'Golden'
  },
  {
    id: 'client-007',
    name: 'Golden Straight Pants',
    category: 'Pants',
    price: 699,
    originalPrice: 899,
    image: [client7],
    description: 'Elegant golden straight pants that pair beautifully with kurtas and tops.',
    features: ['Straight cut', 'Premium silk', 'Formal wear', 'Easy care'],
    fabric: 'Silk',
    size: ['S', 'M', 'L', 'XL'],
    color: 'Golden'
  }
];

export const categories = ['All', 'Kurtis', 'Suits', 'Dupatta', 'Pants'] as const;