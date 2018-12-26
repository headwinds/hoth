/* eslint-disable */
import * as types from '../types/types';
import { mobileDetect } from '../../utils/MobileDetect';

const isMobile = mobileDetect();

class Colony {
  constructor(name, health, food, shelter, energy, production, offers, requires){
    this.name = name;
    this.health = health;
    this.food = food;
    this.shelter = shelter;
    this.energy = energy; 
    this.production = production;
    this.offers = offers;
    this.requires = requires;
  }
}

function gameReducer(
  state = {
    status: 'ok',
    isMobile,
    colonies: {
      toda: new Colony("TodaQ", 25, 20, 80, 75, 35, ["identiy","conversations"], ["cash"]),
      labatt: new Colony("Labatt", 75, 80, 80, 82, 95, ["beer","conversations"], ["stein"]),
      mitsubishi: new Colony("Mitsubishi", 85, 72, 82, 95, 92, ["beer","conversations"], ["exoskeleton"]),
      totaldrama: new Colony("Total Drama", 25, 20, 35, 15, 45, ["parka"], ["identity"]),
      bmw: new Colony("BMW", 95, 90, 92, 95, 97, ["engine"], ["beer"]),
      nintendo: new Colony("Nintendo", 99, 99, 99, 99, 99, ["fitness","conversations"], ["energy"]),
      kaggle: new Colony("Kaggle", 54, 20, 65, 95, 90, ["energy"], []),
      camh: new Colony("CAMH", 24, 40, 82, 88, 67, ["handgun","conversations"],[]),
      voices: new Colony("CAMH", 24, 40, 82, 88, 67, ["insights","conversations"], []),
      barcardi: new Colony("CAMH", 24, 40, 82, 88, 67, ["handgun","conversations"], []),
      microsoft: new Colony("CAMH", 24, 40, 82, 88, 67, ["bearspray","conversations"], []),
    },
    inventory: []
  },
  action
) {
  switch (action.type) {
    case types.APP_STATUS_CHANGE:
      return Object.assign({}, state, {
        status: 'ok'
      });
    default:
      return state;
  }
}

export { gameReducer };
