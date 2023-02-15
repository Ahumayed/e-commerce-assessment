import { Factory } from "nestjs-seeder";
import { Category } from "src/category/entities/category.entity";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: "products"})
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;
    
    @Column()
    price: number;

    @Column()
    stock: number;

    @Column()
    image: string;
    
    @ManyToMany(() => Category)
    @JoinTable({name: "products_categories"})
    categories: Category[];

    @CreateDateColumn({name: "created_at"})
    createdAt: Date;

    @UpdateDateColumn({name: "updated_at"})
    updatedAt: Date;
}
