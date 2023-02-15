import { DataSource, Repository } from "typeorm";
import { Product } from "./entities/product.entity";

// TODO: This is a mock repository to be used for testing, should use the product factory to create mock data
// Unfortunately, I couldn't get the mock repo to work with the paginate function for now
export class MockRepository extends Repository<Product> {
    constructor(private dataSource: DataSource)
    {
        super(Product, dataSource.createEntityManager());
    }

    async find(): Promise<Product[]> {
        return [];
    }

    async count(): Promise<number> {
        return 0;
    }


}
