import { Factory } from "nestjs-seeder";
import { Category } from "src/category/entities/category.entity";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Factory(faker => faker?.word.noun())
    @Column()
    name: string;

    @Factory(faker => faker?.lorem.paragraph())
    @Column()
    description: string;
    
    @Factory(faker => faker?.commerce.price())
    @Column()
    price: number;

    @Factory(faker => faker?.random.numeric())
    @Column()
    stock: number;

    @Factory(faker => faker?.image.imageUrl())
    @Column()
    image: string;
    
    @Factory(1)
    @ManyToMany(() => Category)
    @JoinTable({name: "products_categories"})
    categories: Category[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
