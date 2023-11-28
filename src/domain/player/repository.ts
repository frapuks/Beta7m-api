//~ Import module
import { CoreRepository } from '../core/coreRepository.js';
import { PGPlayerData } from './datamapper.js';

class PlayerRepository extends CoreRepository {
    dataRepository = PGPlayerData;
}

const PlayerData = new PlayerRepository();
export { PlayerData };
