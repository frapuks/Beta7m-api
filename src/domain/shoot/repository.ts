//~ Import module
import { CoreRepository } from '../core/coreRepository.js';
import { PGShootData } from './datamapper.js';

class ShootRepository extends CoreRepository {
    dataRepository = PGShootData;
}

const ShootData = new ShootRepository();
export { ShootData };
