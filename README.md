# awesomenauts-api-lib
A fast and lightweight library written with ES6 async / await for connecting with the [Community Awesomenauts API](https://github.com/tBoccinfuso/awesomenauts-api).

* [Installation](#installation)
* [Usage](#usage)
  * [Get All Nauts](#usage-get-all-nauts)
  * [Get All Maps](#usage-get-all-maps)
  * [Get Naut by Key](#usage-get-naut-by-key)
  * [Get Map by Key](#usage-get-map-by-key) 
  * [Get Naut Role](#usage-get-naut-role) 
  * [Get Naut Description](#usage-get-naut-description) 
  * [Get Naut Difficulty](#usage-get-naut-difficulty)
  * [Get Naut Image](#usage-get-naut-image) 
  * [Get Naut Proper Name](#usage-get-naut-proper-name)
  * [Get Naut Abilities](#usage-get-naut-abilities)
  * [Get Naut First Ability](#usage-get-naut-first-ability)
  * [Get Naut Second Ability](#usage-get-naut-second-ability)
  * [Get Naut Jump Ability](#usage-get-naut-jump-ability)
  * [Get Naut Attack](#usage-get-naut-attack)
  * [Get Map Splash Art](#usage-get-map-splash-art)
  * [Get Mini Map](#usage-get-mini-map)  
  * [Get Map Description](#usage-get-map-description)
  * [Get Map Creep](#usage-get-map-creep)
  * [Get Map Hazard](#usage-get-map-hazard)
  * [Get Map Hazard Text](#usage-get-map-hazard-text)
  
## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
$ npm install awesomenauts-api-lib
```

## Usage

```javascript
import * as NautsAPI from 'awesomenauts-api-lib';
```

### Usage Get All Nauts

```javascript
const nauts = await NautsAPI.AllNauts()
```

### Usage Get All Maps

```javascript
const nauts = await NautsAPI.AllMaps()
```

### Usage Get Naut by Key

```javascript
const FroggyG = await NautsAPI.NautByKey('froggyg')
```

### Usage Get Map by Key

```javascript
const RibbitIV = await NautsAPI.MapByKey('ribbit')
```

### Usage Get Naut Role

```javascript
const RocketsRole = await NautsAPI.NautRole('rocket')
```

### Usage Get Naut Description

```javascript
const LeonsDesc = await NautsAPI.NautDescription('leon')
```

### Usage Get Naut Difficulty

```javascript
const RocketDiff = await NautsAPI.NautDifficulty('rocket')
```

### Usage Get Naut Image

```javascript
const MaxImage = await NautsAPI.NautImage('max')
```

### Usage Get Naut Proper Name

```javascript
const LonestarName = await NautsAPI.NautProperName('lonestar')
```

### Usage Get Naut Abilities

```javascript
const DizzyAbilities = await NautsAPI.NautAbilities('dizzy')
```

### Usage Get Naut First Ability

```javascript
const NautAbility1 = await NautsAPI.NautAbilitiesOne('rocket')
```

### Usage Get Naut Second Ability

```javascript
const NautAbility2 = await NautsAPI.NautAbilitiesTwo('rocket')
```

### Usage Get Naut Jump Ability

```javascript
const NautJumpAbility = await NautsAPI.NautAbilitiesJump('rocket')
```

### Usage Get Naut Attack

```javascript
const NautAttack = await NautsAPI.NautAbilitiesAttack('rocket')
```

### Usage Get Map Splash Art

```javascript
const RibbitSplashArt = await NautsAPI.MapSplashArt('ribbit')
```

### Usage Get Mini Map

```javascript
const RibbitMiniMap = await NautsAPI.MapMini('ribbit')
```

### Usage Get Map Description

```javascript
const RibbitDesc = await NautsAPI.MapDescription('ribbit')
```

### Usage Get Map Creep

```javascript
const AI404Creep = await NautsAPI.MapCreep('ai_404')
```

### Usage Get Map Hazard

```javascript
const SoronaHazardImage = await NautsAPI.MapCreep('sorona')
```

### Usage Get Map Hazard Text

```javascript
const SoronaHazardText = await NautsAPI.MapCreep('sorona')
```
