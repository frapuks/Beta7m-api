//~ Import module
import { CoreRepository } from '../core/coreRepository.js';
import { PGMatchData } from './datamapper.js';

class MatchRepository extends CoreRepository {
    dataRepository = PGMatchData;
}

const MatchData = new MatchRepository();
export { MatchData };
