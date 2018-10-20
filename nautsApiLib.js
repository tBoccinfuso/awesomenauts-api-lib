import axios from 'axios';

/**********************
*        NAUTS       *
**********************/

// Get all Nauts
export const AllNauts = async function AllNauts(){
  const response = await axios.get('https://awesomenauts-api.herokuapp.com/nauts',{
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      host: '104.236.174.88',
      port: 3128
    }
    });

  const json = await response.data

  return json
}

// Get a Naut object by key (found in AllNauts) 
export const NautByKey = async function NautByKey(key){
  const response = await axios.get(`https://awesomenauts-api.herokuapp.com/naut/${key}`,{
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      host: '104.236.174.88',
      port: 3128
    }
    });  

  const json = await response.data

  return json
}

export const NautRole = async function NautRole(key){
  const response = await axios.get(`https://awesomenauts-api.herokuapp.com/naut/${key}/role`,{
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      host: '104.236.174.88',
      port: 3128
    }
    });  

  const json = await response.data

  return json
}

export const NautDifficulty = async function NautDifficulty(key){
  const response = await axios.get(`https://awesomenauts-api.herokuapp.com/naut/${key}/difficulty`,{
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      host: '104.236.174.88',
      port: 3128
    }
    });  

  const json = await response.data

  return json
}

export const NautDescription = async function NautDescription(key){
  const response = await axios.get(`https://awesomenauts-api.herokuapp.com/naut/${key}/description`,{
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      host: '104.236.174.88',
      port: 3128
    }
    });  

  const json = await response.data

  return json
}

export const NautImage = async function NautImage(key){
  const response = await axios.get(`https://awesomenauts-api.herokuapp.com/naut/${key}/image`,{
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      host: '104.236.174.88',
      port: 3128
    }
    });  

  const json = await response.data

  return json
}

export const NautProperName = async function NautProperName(key){
  const response = await axios.get(`https://awesomenauts-api.herokuapp.com/naut/${key}/name`,{
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      host: '104.236.174.88',
      port: 3128
    }
    });  

  const json = await response.data

  return json
}

// Naut abilities
export const NautAbilities = async function NautAbilities(key){
  const response = await axios.get(`https://awesomenauts-api.herokuapp.com/naut/${key}/abilities`,{
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      host: '104.236.174.88',
      port: 3128
    }
    });  

  const json = await response.data

  return json
}

export const NautAbilitiesOne = async function NautAbilitiesOne(key){
  const response = await axios.get(`https://awesomenauts-api.herokuapp.com/naut/${key}/abilities/one`,{
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      host: '104.236.174.88',
      port: 3128
    }
    });  

  const json = await response.data

  return json
}

export const NautAbilitiesTwo = async function NautAbilitiesTwo(key){
  const response = await axios.get(`https://awesomenauts-api.herokuapp.com/naut/${key}/abilities/two`,{
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      host: '104.236.174.88',
      port: 3128
    }
    });  

  const json = await response.data

  return json
}

export const NautAbilitiesJump = async function NautAbilitiesJump(key){
  const response = await axios.get(`https://awesomenauts-api.herokuapp.com/naut/${key}/abilities/jump`,{
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      host: '104.236.174.88',
      port: 3128
    }
    });  

  const json = await response.data

  return json
}

export const NautAbilitiesAttack = async function NautAbilitiesAttack(key){
  const response = await axios.get(`https://awesomenauts-api.herokuapp.com/naut/${key}/abilities/attack`,{
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      host: '104.236.174.88',
      port: 3128
    }
    });  

  const json = await response.data

  return json
}

/*********************
*   BATTLEFIELDS     *
*********************/

export const AllMaps = async function AllMaps(){
  const response = await axios.get('https://awesomenauts-api.herokuapp.com/battlefields',{
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      host: '104.236.174.88',
      port: 3128
    }
    });

  const json = await response.data

  return json
}

export const MapByKey = async function MapByKey(key){
  const response = await axios.get(`https://awesomenauts-api.herokuapp.com/battlefield/${key}`,{
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      host: '104.236.174.88',
      port: 3128
    }
    });

  const json = await response.data

  return json
}

export const MapDescription = async function MapDescription(key){
  const response = await axios.get(`https://awesomenauts-api.herokuapp.com/battlefield/${key}/description`,{
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      host: '104.236.174.88',
      port: 3128
    }
    });

  const json = await response.data

  return json
}

export const MapProperName = async function MapProperName(key){
  const response = await axios.get(`https://awesomenauts-api.herokuapp.com/battlefield/${key}/name`,{
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      host: '104.236.174.88',
      port: 3128
    }
    });

  const json = await response.data

  return json
}

export const MapCreep = async function MapCreep(key){
  const response = await axios.get(`https://awesomenauts-api.herokuapp.com/battlefield/${key}/creep`,{
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      host: '104.236.174.88',
      port: 3128
    }
    });

  const json = await response.data

  return json
}

export const MapHazard = async function MapHazard(key){
  const response = await axios.get(`https://awesomenauts-api.herokuapp.com/battlefield/${key}/hazard`,{
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      host: '104.236.174.88',
      port: 3128
    }
    });

  const json = await response.data

  return json
}

export const MapHazardText = async function MapHazardText(key){
  const response = await axios.get(`https://awesomenauts-api.herokuapp.com/battlefield/${key}/hazard_text`,{
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      host: '104.236.174.88',
      port: 3128
    }
    });

  const json = await response.data

  return json
}

export const MapSplashArt = async function MapSplashArt(key){
  const response = await axios.get(`https://awesomenauts-api.herokuapp.com/battlefield/${key}/splash`,{
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      host: '104.236.174.88',
      port: 3128
    }
    });

  const json = await response.data

  return json
}

export const MapMini = async function MapMini(key){
  const response = await axios.get(`https://awesomenauts-api.herokuapp.com/battlefield/${key}/map`,{
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      host: '104.236.174.88',
      port: 3128
    }
    });

  const json = await response.data

  return json
}