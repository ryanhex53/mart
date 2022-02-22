import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductImage } from './image';
import { ProductVariant } from './variant';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  body_html: string;

  @Column()
  vendor: string;

  @Column()
  product_type: string;

  @Column()
  handle: string;

  @Column()
  published_at: Date;

  @Column({ default: null })
  template_suffix: string;

  @Column()
  status: string;

  @Column()
  published_scope: string;

  @Column()
  tags: string;

  @OneToMany(() => ProductVariant, (variant) => variant.product)
  variants: ProductVariant[];

  @OneToMany(() => ProductImage, (img) => img.product)
  images: ProductImage[];

  @OneToOne(() => ProductImage)
  @JoinColumn()
  image: ProductImage;

  constructor(partial: Partial<Product>) {
    Object.assign(this, partial);
  }
}
