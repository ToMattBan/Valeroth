/* eslint-disable */

// ERRORS
interface Error {
  error: string;
  message: string;
}

// LOGIN PAGE
interface F_Login {
  userName: string;
}

interface B_Login {
  haveChar: boolean;
}

// CHAR CREATION
interface F_Creation {
  name: string;
  background: string;
  image: string;
  extras: {
    [key: string]: string | number;
  }
}

interface B_Creation extends F_Creation {
  inventory: {
    name: string;
    quantity: number;
  }[]
  attributes: {
    strenght: number;
    agility: number;
    endurance: number;
    focus: number;
  }
}

// CHAR PAGE
interface B_Char extends B_Creation {};
interface B_UserCampaing {
  canEditChar: boolean
  canAccessMap: boolean
  map: string | null;
}

// CHAR EDITION - User
interface F_UserEdition extends F_Creation {};

// CHAR EDITION - Master
interface F_MasterEdition {
  inventory: {
    name: string;
    quantity: number;
  }[]
  attributes: {
    strenght: number;
    agility: number;
    endurance: number;
    focus: number;
  }
}

// MASTER PAGE
interface B_AllChars {
  chars: B_Char[]
}

interface F_AddEditMap {
  map: string;
}

interface B_Map {
  map: string;
}

interface B_Checkpoints {
  checkpoints: {
    description: string;
    isDone: boolean;
    position: number;
  }[]
}

interface F_AddCheckpoint {
  description: string;
}

interface F_RemoveCheckpoint {
  id: string
}

interface F_ToggleCompleteCheckpoint extends F_RemoveCheckpoint {};

interface F_EditCheckpoint extends F_RemoveCheckpoint {
  newDescription: string | null;
  newPosition: number | null;
}