import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product';

@Entity()
export class ProductVariant {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product, (product) => product.variants)
  product: Product;

  @Column()
  title: string;

  @Column()
  price: string;

  @Column()
  sku: string;

  @Column()
  position: number;

  @Column()
  inventory_policy: string;

  @Column({ nullable: true, default: null })
  compare_at_price: string;

  @Column()
  fulfillment_service: string;

  @Column()
  inventory_management: string;

  @Column({ nullable: true, default: null })
  option1: string;

  @Column({ nullable: true, default: null })
  option2: string;

  @Column({ nullable: true, default: null })
  option3: string;

  @Column()
  taxable: boolean;

  @Column()
  barcode: string;

  @Column()
  grams: number;

  @Column()
  weight: number;

  @Column()
  requires_shipping: boolean;
}
