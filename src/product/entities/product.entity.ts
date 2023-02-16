import { Category } from "src/category/entities/category.entity";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: "products"})
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string = '';
    
    @Column()
    price: number;

    @Column()
    stock: number = 0;

    @Column()
    image: string = '';
    
    @ManyToMany(() => Category)
    @JoinTable({name: "products_categories", joinColumn: {name: "product_id"}, inverseJoinColumn: {name: "category_id"}})
    categories: Category[];

    @CreateDateColumn({name: "created_at"})
    createdAt: Date;

    @UpdateDateColumn({name: "updated_at"})
    updatedAt: Date;
}
